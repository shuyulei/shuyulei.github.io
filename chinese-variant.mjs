const attributes=['alt','title','aria-label','placeholder','data-mobile-label'];
const textHistory=new WeakMap(),attributeHistory=new WeakMap();
const han=/[\u3400-\u9fff]/;
let active=false,convert,loading,observer;
function excluded(el){return !el||el.closest('script,style,svg,code,pre,textarea,[data-no-hk],#language-select,.pub-title,.pub-authors,.pub-journal');}
function contextFor(el){
 const project=el.closest('[data-project],[data-hk-context]');
 return project?.dataset.hkContext||project?.dataset.project||'';
}
function update(value,record,context){
 // Keep the original Simplified copy; reverse conversion would lose editorial wording.
 const source=record&&value===record.output?record.source:value;
 return {source,output:active&&han.test(source)?convert(source,context):source};
}
function renderVariant(roots=[document.documentElement]){
 if(active&&!convert)return;
 observer?.disconnect();
 for(const root of roots){
 if(!root.isConnected||excluded(root))continue;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const node=walker.currentNode;if(excluded(node.parentElement))continue;
  const previous=textHistory.get(node);
  if(!previous&&!han.test(node.data))continue;
  const record=update(node.data,previous,contextFor(node.parentElement));
  if(record.output!==node.data)node.data=record.output;
  textHistory.set(node,record);
 }
 for(const el of [root,...root.querySelectorAll('[alt],[title],[aria-label],[placeholder],[data-mobile-label]')]){
  if(excluded(el))continue;
  const records=attributeHistory.get(el)||{};
  for(const name of attributes){
   if(!el.hasAttribute(name))continue;
   const value=el.getAttribute(name);
   if(!records[name]&&!han.test(value))continue;
   const record=update(value,records[name],contextFor(el));
   if(record.output!==value)el.setAttribute(name,record.output);
   records[name]=record;
  }
  attributeHistory.set(el,records);
 }
 }
 if(active)observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes});
}
function updateChangedContent(changes){
 // Scroll counters and gallery controls should not trigger a full-page conversion.
 const roots=[...new Set(changes.map(change=>change.target.nodeType===Node.TEXT_NODE?change.target.parentElement:change.target))];
 renderVariant(roots.filter(root=>root&&!roots.some(other=>other!==root&&other?.contains(root))));
}
export function restoreChineseVariant(){active=false;renderVariant();}
export async function applyChineseVariant(enabled){
 active=enabled;
 const group=document.querySelector('.script-switch');
 if(enabled&&!convert){
  group?.setAttribute('aria-busy','true');
  try{
   loading??=import('./hk-copy.mjs?v=20260921-szu-rating');
   convert=(await loading).hongKongText;
  }catch{
   loading=null;active=false;
   document.querySelector('#script-status').textContent='繁體版本未能載入，請再試一次。';
  }finally{group?.removeAttribute('aria-busy');}
 }
 observer??=new MutationObserver(updateChangedContent);
 if(document.documentElement.lang.startsWith('zh'))document.documentElement.lang=active?'zh-HK':'zh-CN';
 renderVariant();
}
