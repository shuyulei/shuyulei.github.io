const words={en:['Conference photographs','Previous photograph','Next photograph'],zh:['会议现场','上一张照片','下一张照片'],es:['Fotografías del evento','Foto anterior','Foto siguiente']};
let selected='iacp-talk';
export function initTalks(lang='en'){
 const host=document.querySelector('.engagement-grid>div:first-child');if(!host)return;
 const labels=words[lang]||words.en;
 if(!host.classList.contains('talks-explorer')){
  host.classList.add('talks-explorer');
  const activities=[...host.querySelectorAll(':scope > .activity')];
  const list=document.createElement('div');list.className='talk-tabs';list.setAttribute('role','tablist');list.setAttribute('aria-orientation','vertical');
  const panels=document.createElement('div');panels.className='talk-panels';
  host.append(list,panels);
  activities.forEach((panel,index)=>{
   panels.append(panel);panel.setAttribute('role','tabpanel');panel.tabIndex=0;
   const tab=document.createElement('button');tab.type='button';tab.id=`tab-${panel.id}`;tab.dataset.panel=panel.id;tab.setAttribute('role','tab');tab.setAttribute('aria-controls',panel.id);panel.setAttribute('aria-labelledby',tab.id);list.append(tab);
   tab.addEventListener('click',()=>select(panel.id));
   tab.addEventListener('keydown',event=>{let n;if(event.key==='ArrowDown')n=(index+1)%activities.length;if(event.key==='ArrowUp')n=(index+activities.length-1)%activities.length;if(event.key==='Home')n=0;if(event.key==='End')n=activities.length-1;if(n!==undefined){event.preventDefault();list.children[n].focus();select(activities[n].id);}});
   if(panel.id==='iacp-talk'){const link=document.createElement('a');link.className='conference-photo';link.href='assets/conferences/iacp-2024-room.jpg';link.target='_blank';link.rel='noopener';const img=document.createElement('img');img.src=link.href;img.alt='Shuyu Lei presenting to the audience at IACP 2024';img.loading='lazy';link.append(img);panel.append(link);}
   if(panel.id==='pecha-talk'){
    for(const [file,alt] of [['pecha-title.jpg','PechaKucha presentation: Mind the Gap'],['pecha-presentation.jpg','Shuyu Lei discussing cognition and age-friendly design at PechaKucha']]){
     const link=document.createElement('a');link.className='conference-photo';link.href=`assets/conferences/${file}`;link.target='_blank';link.rel='noopener';const img=document.createElement('img');img.src=link.href;img.alt=alt;img.loading='lazy';link.append(img);panel.append(link);
    }
   }
   if(panel.id==='trb-talk'){const link=document.createElement('a');link.className='conference-photo';link.href='assets/conferences/trb-2024-slide.jpg';link.target='_blank';link.rel='noopener';const img=document.createElement('img');img.src=link.href;img.alt='Shuyu Lei presenting travel-time findings at TRB 2024';img.loading='lazy';link.append(img);panel.append(link);}
   const photos=[...panel.querySelectorAll('.conference-photo')];
   if(panel.id==='iacp-talk')photos.reverse();
   if(photos.length){
    const gallery=document.createElement('figure');gallery.className='talk-gallery';const disclosure=document.createElement('details');disclosure.className='talk-photos-disclosure';const summary=document.createElement('summary');summary.className='photos-summary';disclosure.append(summary,gallery);panel.append(disclosure);photos.forEach(photo=>gallery.append(photo));
    const controls=document.createElement('figcaption');controls.className='talk-photo-controls';gallery.append(controls);let photoIndex=0;
    const caption=document.createElement('span');caption.className='talk-photo-label';controls.append(caption);
    if(photos.length>1){
     const counter=document.createElement('span');counter.className='photo-counter';counter.setAttribute('aria-live','polite');controls.append(counter);
     for(const [step,icon] of [[-1,'chevron-left'],[1,'chevron-right']]){const button=document.createElement('button');button.type='button';button.className='icon-button';button.dataset.photoStep=step;button.innerHTML=`<i data-lucide="${icon}" aria-hidden="true"></i>`;controls.append(button);button.addEventListener('click',()=>{photoIndex=(photoIndex+step+photos.length)%photos.length;showPhoto();});}
     function showPhoto(){photos.forEach((photo,n)=>photo.hidden=n!==photoIndex);counter.textContent=`${photoIndex+1} / ${photos.length}`;}showPhoto();
    }
   }
  });
 }
 const tabs=[...host.querySelectorAll('[role="tab"]')];
 function select(id){selected=id;tabs.forEach(tab=>{const active=tab.dataset.panel===id;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;document.getElementById(tab.dataset.panel).hidden=!active;});}
 tabs.forEach(tab=>{const panel=document.getElementById(tab.dataset.panel);tab.replaceChildren();const date=document.createElement('span');date.className='talk-tab-date';date.textContent=panel.querySelector('.activity-date').textContent;const title=document.createElement('span');title.className='talk-tab-title';title.textContent=panel.querySelector('h4').textContent;tab.append(date,title);});
 host.querySelectorAll('.photos-summary').forEach(el=>el.textContent=({en:'Photos',zh:'照片',es:'Fotos'})[lang]);
 host.querySelectorAll('.talk-photo-label').forEach(el=>el.textContent=labels[0]);
 host.querySelectorAll('[data-photo-step]').forEach(el=>{el.title=labels[el.dataset.photoStep==='-1'?1:2];el.setAttribute('aria-label',el.title);});
 host.querySelector('[role="tablist"]').setAttribute('aria-label',host.querySelector('h3').textContent);
 select(selected);
}
