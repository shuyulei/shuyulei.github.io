import {t,storage} from './i18n.mjs?v=20260921-szu-rating';
import {icon} from './content.mjs?v=20260921-szu-rating';

export function initAccessibility(){
 const header=document.querySelector('.site-header');
 if(header)new ResizeObserver(()=>document.documentElement.style.setProperty('--header-height',`${header.getBoundingClientRect().height}px`)).observe(header);
 const root=document.documentElement,panel=document.querySelector('#accessibility-dialog'),trigger=document.querySelector('#accessibility-toggle');
 const size=document.querySelector('#text-size'),contrast=document.querySelector('#high-contrast'),motion=document.querySelector('#reduce-motion');
 const output=document.querySelector('#text-size-value'),section=document.querySelector('#reading-section');
 const play=document.querySelector('#read-play'),pause=document.querySelector('#read-pause'),stop=document.querySelector('#read-stop'),status=document.querySelector('#reading-status');
 const synth=window.speechSynthesis;
 const nightButton=document.querySelector('#night-toggle');let night=false;
 function updateNightButton(){
  const lang=root.lang.split('-')[0],labels=({en:['Lights off','Lights on'],zh:['关灯','开灯'],es:['Apagar luz','Encender luz']})[lang]||['Lights off','Lights on'];
  const label=labels[night?1:0];nightButton.innerHTML=icon(night?'sun':'moon')+'<span data-mobile-label="'+({en:'Theme',es:'Tema',zh:label}[lang]||'Theme')+'">'+label+'</span>';nightButton.setAttribute('aria-label',label);nightButton.title=label;window.lucide?.createIcons();
 }
 let current=null,run=0,state='idle',segments=[],segmentIndex=0,opener=trigger;
 function defaults(){return {size:100,night:false,contrast:false,motion:matchMedia('(prefers-reduced-motion:reduce)').matches};}
 function applyPreferences(value){
  const percent=Number(value.size);size.value=Number.isFinite(percent)?Math.min(150,Math.max(100,percent)):100;
  night=value.night===true;root.toggleAttribute('data-night',night);contrast.checked=value.contrast===true;motion.checked=value.motion===true;
  root.style.setProperty('--reader-scale',Number(size.value)/100);output.value=`${size.value}%`;
  root.toggleAttribute('data-large-text',Number(size.value)>=130);root.toggleAttribute('data-contrast',contrast.checked);root.toggleAttribute('data-reduced-motion',motion.checked);
  updateNightButton();
  storage.set('shuyu-reading',JSON.stringify({size:Number(size.value),night:night,contrast:contrast.checked,motion:motion.checked}));
 }
 let saved;try{saved=JSON.parse(storage.get('shuyu-reading'));}catch{}applyPreferences(saved||defaults());
 for(const control of [size,contrast,motion])control.addEventListener('input',()=>applyPreferences({size:size.value,night:night,contrast:contrast.checked,motion:motion.checked}));
 nightButton.addEventListener('click',()=>applyPreferences({size:size.value,night:!night,contrast:contrast.checked,motion:motion.checked}));
 document.addEventListener('languagechange',updateNightButton);
 function languageForSection(){return section.value==='publications'?'en':root.lang;}
 function voiceFor(lang){const voices=synth?.getVoices()||[];return voices.find(v=>v.lang.toLowerCase()===lang.toLowerCase())||voices.find(v=>v.lang.toLowerCase().split('-')[0]===lang.toLowerCase().split('-')[0]);}
 function setStatus(key){status.textContent=t(key);}
 function updateControls(){
  const available=!!synth&&typeof SpeechSynthesisUtterance!=='undefined'&&!!voiceFor(languageForSection());
  play.disabled=!available;pause.disabled=state==='idle';stop.disabled=state==='idle';
  pause.innerHTML=icon(state==='paused'?'play':'pause');pause.setAttribute('aria-label',t(state==='paused'?'resume':'pause'));pause.title=pause.getAttribute('aria-label');
  if(state==='idle')setStatus(available?'ready':'unavailable');window.lucide?.createIcons();
 }
 function stopReading(){run++;synth?.cancel();current=null;segments=[];state='idle';updateControls();}
 function textSegments(){
  const source=document.getElementById(section.value),result=[];
  for(const node of source.querySelectorAll('h1,h2,h3,h4,p,dt,dd')){
   if(node.closest('[hidden]')||node.getAttribute('aria-hidden')==='true')continue;
   const text=node.innerText.trim();if(!text)continue;
   const lang=node.closest('[lang]')?.lang||root.lang;
   // Short utterances avoid browsers truncating long sections mid-sentence.
   for(const sentence of text.match(/[^.!?。！？]+[.!?。！？]*/gu)||[text]){
    let rest=sentence.trim();while(rest.length>200){let end=rest.lastIndexOf(' ',200);if(end<80)end=200;result.push({text:rest.slice(0,end),lang});rest=rest.slice(end).trim();}if(rest)result.push({text:rest,lang});
   }
  }
  return result;
 }
 function speakNext(token){
  if(token!==run)return;
  if(segmentIndex>=segments.length){state='idle';current=null;updateControls();setStatus('finished');return;}
  const item=segments[segmentIndex++],utterance=new SpeechSynthesisUtterance(item.text);current=utterance;
  utterance.lang=item.lang;utterance.voice=voiceFor(item.lang)||null;utterance.rate=1;
  utterance.onend=()=>{if(token===run)speakNext(token);};
  utterance.onerror=e=>{if(token!==run||e.error==='canceled'||e.error==='interrupted')return;stopReading();setStatus('failed');};
  synth.speak(utterance);
 }
 play.addEventListener('click',()=>{
  stopReading();segments=textSegments();segmentIndex=0;if(!segments.length)return;
  state='reading';updateControls();setStatus('reading');speakNext(run);
 });
 pause.addEventListener('click',()=>{if(state==='reading'){synth.pause();state='paused';}else if(state==='paused'){synth.resume();state='reading';}updateControls();setStatus(state==='paused'?'paused':'reading');});
 stop.addEventListener('click',stopReading);section.addEventListener('change',stopReading);
 document.querySelector('#reset-preferences').addEventListener('click',()=>{stopReading();applyPreferences({...defaults(),night});});
 function openPanel(mode){
  opener=document.activeElement;
  panel.dataset.mode=mode;document.querySelector('#accessibility-heading').textContent=t(mode==='reading'?'readAloud':'accessibility');
  document.dispatchEvent(new Event('accessibilityopen'));
  const active=document.querySelector('#navigation a[aria-current]');if(state==='idle'&&active)section.value=active.hash.slice(1);
  updateControls();panel.showModal();
 }
 trigger.addEventListener('click',()=>openPanel('display'));
 document.querySelector('#read-aloud-toggle')?.addEventListener('click',()=>openPanel('reading'));
 function closePanel(){stopReading();panel.close();opener.focus();}
 document.querySelector('#accessibility-close').addEventListener('click',closePanel);
 panel.addEventListener('cancel',e=>{e.preventDefault();closePanel();});
 panel.addEventListener('click',e=>{if(e.target===panel){const r=panel.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePanel();}});
 document.addEventListener('languagechange',stopReading);window.addEventListener('pagehide',stopReading);
 synth?.addEventListener('voiceschanged',updateControls);updateControls();
}
