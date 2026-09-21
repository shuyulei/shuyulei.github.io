const words={
 en:{all:'All',journal:'Journal',conference:'Conference',year:'Year',years:'All years',copy:'Copy citation',copied:'Citation copied.',failed:'Could not copy. Select the citation text in the entry.',none:'No publications match these filters.'},
 zh:{all:'全部',journal:'期刊',conference:'会议',year:'年份',years:'全部年份',copy:'复制引用',copied:'引用已复制。',failed:'复制未成功，请在条目中选取引用文字。',none:'没有符合筛选条件的论文。'},
 es:{all:'Todas',journal:'Revistas',conference:'Congresos',year:'Año',years:'Todos los años',copy:'Copiar cita',copied:'Cita copiada.',failed:'No se pudo copiar. Selecciona el texto de la cita.',none:'No hay publicaciones con estos filtros.'}
};
const methods={walking:['Travel surveys','GIS'],transit:['Smart-card data','Travel time'],heat:['Subway ridership','Extreme heat'],thermal:['Street imagery','Spatial analysis'],poverty:['Household surveys','Network analysis'],'city-connect':['Web GIS','Accessibility']};
const tagsZh={"Travel surveys":"出行调查","GIS":"地理信息系统","Smart-card data":"智能卡数据","Travel time":"出行时间","Web GIS":"网页 GIS","Accessibility":"可达性","Subway ridership":"地铁客流","Extreme heat":"极端高温","Street imagery":"街景图像","Spatial analysis":"空间分析","Household surveys":"家庭调查","Network analysis":"网络分析"};
const tagsEs={"Travel surveys":"Encuestas de movilidad","GIS":"SIG","Smart-card data":"Tarjetas de transporte","Travel time":"Tiempo de viaje","Web GIS":"SIG web","Accessibility":"Accesibilidad","Subway ridership":"Uso del metro","Extreme heat":"Calor extremo","Street imagery":"Imágenes de calles","Spatial analysis":"Análisis espacial","Household surveys":"Encuestas de hogares","Network analysis":"Análisis de redes"};
let currentLang='en';
export function initEditorial(lang='en'){
 currentLang=lang;const w=words[lang];
 document.querySelectorAll('.section-number').forEach(el=>{const text=el.textContent;const match=text.match(/^(\d{2})\s*\/\s*(.*)$/);if(!match)return;el.replaceChildren();const n=document.createElement('span');n.className='section-numeral';n.textContent=match[1];n.setAttribute('aria-hidden','true');const label=document.createElement('span');label.textContent=match[2];el.append(n,label);});
 document.querySelectorAll('#research-grid .project-card').forEach(card=>{const tags=methods[card.dataset.project];if(!tags)return;const list=document.createElement('div');list.className='project-tags';list.lang=lang==='zh'?'zh-CN':lang;tags.forEach(tag=>{const span=document.createElement('span');span.textContent=({zh:tagsZh,es:tagsEs}[lang]?.[tag])||tag;list.append(span);});card.append(list);});
 const host=document.querySelector('#publication-list');if(!host)return;
 const entries=[...host.querySelectorAll('.publication')];
 if(!document.querySelector('.publication-filters')){
  const controls=document.createElement('div');controls.className='publication-filters';
  const label=document.createElement('label');label.htmlFor='publication-year';const name=document.createElement('span');name.className='year-label';const year=document.createElement('select');year.id='publication-year';const all=document.createElement('option');all.value='all';year.append(all);
  [...new Set(entries.map(e=>e.querySelector('.pub-year').textContent.trim()))].sort().reverse().forEach(value=>{const option=document.createElement('option');option.value=value;option.textContent=value;year.append(option);});year.addEventListener('change',filter);label.append(name,year);controls.append(label);host.before(controls);
  const status=document.createElement('p');status.className='publication-status';status.setAttribute('role','status');host.after(status);
  entries.forEach(entry=>{
   entry.dataset.kind=entry.querySelector('.pub-journal').textContent.includes('Smart City Symposium')?'conference':'journal';
   const link=entry.querySelector('.pub-open'),actions=document.createElement('div');actions.className='publication-actions';link.before(actions);actions.append(link);
   const cite=document.createElement('button');cite.type='button';cite.className='icon-button cite-button';cite.innerHTML='<i data-lucide="quote" aria-hidden="true"></i>';actions.append(cite);
   cite.addEventListener('click',async()=>{const text=entry.querySelector('.pub-authors').textContent+' ('+entry.querySelector('.pub-year').textContent+'). '+entry.querySelector('.pub-title').textContent+'. '+entry.querySelector('.pub-journal').textContent+'. '+link.href;try{await navigator.clipboard.writeText(text);status.textContent=words[currentLang].copied;}catch{status.textContent=words[currentLang].failed;}});
  });
 }
 function filter(){const year=document.querySelector('#publication-year').value;let count=0;entries.forEach(e=>{e.hidden=!(year==='all'||e.querySelector('.pub-year').textContent.trim()===year);if(!e.hidden)count++;});document.querySelector('.publication-status').textContent=count?'':words[currentLang].none;}
 document.querySelector('.year-label').textContent=w.year;document.querySelector('#publication-year option').textContent=w.years;
 document.querySelectorAll('.cite-button').forEach(b=>{b.title=w.copy;b.setAttribute('aria-label',w.copy);});
 filter();
}
