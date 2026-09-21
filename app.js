import {projects,researchIds,designIds,escapeHtml,icon,projectCard} from './content.mjs?v=20260921-quiet-credits';
import {t,localProject,initLanguage} from './i18n.mjs?v=20260921-quiet-credits';
import {initAccessibility} from './reading.mjs?v=20260921-quiet-credits';
import {initEducation} from './education.mjs?v=20260921-quiet-credits';

import {galleryMarkup,initGallery} from './gallery.mjs?v=20260921-quiet-credits';
import {initTalks} from './talks.mjs?v=20260921-quiet-credits';
import {initReports} from './reports.mjs?v=20260921-quiet-credits';
import {initEditorial} from './editorial.mjs?v=20260921-quiet-credits';
import {authorsMarkup} from './research-authors.mjs?v=20260921-quiet-credits';
const dialog=document.querySelector('#project-dialog');
let lastFocus=null,pushedProject=false;
function openProject(id,push=false){
 const index=projects.findIndex(p=>p.id===id);if(index<0)return;
 const p=localProject(projects[index],index);
 dialog.dataset.hkContext=id;
 if(!dialog.open)lastFocus=document.activeElement;
 const url=p.doi?`https://doi.org/${p.doi}`:p.url;
 document.querySelector('#project-detail').innerHTML=`<header class="detail-header"><span class="section-number">${escapeHtml(p.topic)} / ${escapeHtml(p.year)}</span>${p.roleLabel?`<p class="authorship authorship-${p.authorship}">${escapeHtml(p.roleLabel)}</p>`:''}<h2 id="project-title">${escapeHtml(p.title)}</h2><p class="detail-deck">${escapeHtml(p.deck)}</p></header>${galleryMarkup(p)}<div class="detail-body"><div><h3>${p.detailHeading?escapeHtml(p.detailHeading):t('researchDetail')}</h3><p>${escapeHtml(p.body)}</p>${(p.detailSections||[]).map(([heading,text])=>`<h3>${escapeHtml(heading)}</h3><p>${escapeHtml(text)}</p>`).join('')}${p.finding?`<h3>${p.id==='city-connect'?({en:'Team recognition',zh:'团队获奖',es:'Reconocimiento del equipo'}[document.documentElement.lang.slice(0,2)]):t('findings')}</h3><p>${escapeHtml(p.finding)}</p>`:''}</div><aside class="detail-meta"><strong>${t('approach')}</strong><p>${escapeHtml(p.methods)}</p>${authorsMarkup(p)}${p.venue?`<strong>${t('venue')}</strong><p lang="en">${escapeHtml(p.venue)}</p>`:''}${url?`<a class="text-link" href="${url}" target="_blank" rel="noopener">${t(p.doi?'paper':p.linkKey||'portfolio')} ${icon('arrow-up-right')}</a>`:''}${(p.links||[]).map(link=>`<a class="text-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${t(link.key)} ${icon('arrow-up-right')}</a>`).join('')}</aside></div>`;
 window.lucide?.createIcons();if(!dialog.open)dialog.showModal();initGallery(dialog);dialog.scrollTop=0;document.body.classList.add('dialog-open');
 if(push){const next=new URL(location);next.searchParams.set('project',id);history.pushState({project:id},'',next);pushedProject=true;}
}
function hideProject(){dialog.close();document.body.classList.remove('dialog-open');lastFocus?.focus();}
function closeProject(){if(pushedProject){history.back();pushedProject=false;}else{const next=new URL(location);next.searchParams.delete('project');history.replaceState(null,'',next);hideProject();}}
document.addEventListener('click',e=>{const a=e.target.closest('a[data-project]');if(a&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey&&e.button===0){e.preventDefault();openProject(a.dataset.project,true);}});
document.querySelector('.dialog-close').addEventListener('click',closeProject);
dialog.addEventListener('cancel',e=>{e.preventDefault();closeProject();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProject();}});
window.addEventListener('popstate',()=>{const id=new URL(location).searchParams.get('project');if(id)openProject(id);else hideProject();});

const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation'),backdrop=document.querySelector('.nav-backdrop'),main=document.querySelector('#main');
function setMenu(open,restoreFocus=false){
 menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',t(open?'closeMenu':'openMenu'));menu.title=menu.getAttribute('aria-label');
 nav.classList.toggle('open',open);backdrop.hidden=!open;main.inert=open;document.body.classList.toggle('navigation-open',open);
 menu.innerHTML=icon(open?'x':'menu')+'<span class="menu-label" data-ui="menuLabel" data-mobile-label="'+t('menuLabel')+'">'+t('menuLabel')+'</span>';window.lucide?.createIcons();
 if(open)nav.querySelector('a').focus();else if(restoreFocus)menu.focus();
}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
backdrop.addEventListener('click',()=>setMenu(false,true));
nav.addEventListener('click',e=>{
 const a=e.target.closest('a');if(!a)return;
 setMenu(false);
 if(a.hash&&a.origin===location.origin){const section=document.querySelector(a.hash);if(section){section.tabIndex=-1;section.focus({preventScroll:true});}}
});
document.addEventListener('keydown',e=>{
 if(!nav.classList.contains('open'))return;
 if(e.key==='Escape'){e.preventDefault();setMenu(false,true);}
 if(e.key==='Tab'){const items=[menu,...nav.querySelectorAll('a')];const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
});
const smallScreen=matchMedia('(max-width:1000px)');smallScreen.addEventListener('change',()=>setMenu(false));
document.addEventListener('accessibilityopen',()=>setMenu(false));

const sectionSelect=document.querySelector('#mobile-section-select');
sectionSelect?.addEventListener('change',()=>{
 setMenu(false);
 const target=document.getElementById(sectionSelect.value);
 if(target){location.hash=target.id;target.tabIndex=-1;target.focus({preventScroll:true});}
});
function updateMobileLabels(){
 if(!sectionSelect)return;
 const lang=document.documentElement.lang.slice(0,2);
 const labels={en:['Quick section navigation','Jump to section','Back to top','Personal website'],zh:['栏目快速导航','跳转到栏目','回到顶部','个人网站'],es:['Navegación por secciones','Ir a la sección','Volver arriba','Sitio personal']}[lang]||['Quick section navigation','Jump to section','Back to top','Personal website'];
 document.querySelector('.mobile-section-bar').setAttribute('aria-label',labels[0]);
 sectionSelect.setAttribute('aria-label',labels[1]);
 const up=document.querySelector('.mobile-section-bar a');up.setAttribute('aria-label',labels[2]);up.title=labels[2];
 document.querySelector('.identity-caption').textContent=labels[3];
 document.querySelector('label[for="mobile-section-select"]').textContent=labels[1];
 document.querySelector('.identity').setAttribute('aria-label',lang==='zh'?'雷舒宇，返回首页':lang==='es'?'Shuyu Lei, inicio':'Shuyu Lei, home');
 [...sectionSelect.options].forEach((option,i)=>{const label=document.querySelector('#navigation a[href="#'+option.value+'"] [data-ui]');option.textContent=String(i+1).padStart(2,'0')+' · '+label.textContent;});
}
let scrollPending=false;
function updateActive(){
 const sections=[...document.querySelectorAll('main section[id],footer[id]')];
 let current=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=160)current=section;}
 if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)current=sections.at(-1);
 document.querySelectorAll('#navigation a[href^="#"],.top-navigation a[href^="#"]').forEach(a=>{if(a.hash===`#${current.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
 if(sectionSelect){sectionSelect.value=current.id;document.querySelector('.mobile-section-count').textContent=(sectionSelect.selectedIndex+1)+' / '+sectionSelect.options.length;}
 const progress=document.querySelector('.scroll-progress');if(progress)progress.style.transform=`scaleX(${scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)})`;
 scrollPending=false;
}
window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateActive);}},{passive:true});
window.addEventListener('resize',updateActive);
document.addEventListener('languagechange',e=>{
 initEducation(e.detail);
 initTalks(e.detail);
 initReports(e.detail);
 const translated=projects.map(localProject);
 document.querySelector('#research-grid').innerHTML=researchIds.map(id=>translated.find(p=>p.id===id)).map(projectCard).join('');
 document.querySelector('#design-grid').innerHTML=designIds.map(id=>translated.find(p=>p.id===id)).map(projectCard).join('');
 initEditorial(e.detail);
 updateMobileLabels();
 const id=new URL(location).searchParams.get('project');if(dialog.open&&id)openProject(id);
 window.lucide?.createIcons();requestAnimationFrame(updateActive);if(reveal)observeReveals();
});
let reveal;
initAccessibility();initLanguage();
const initial=new URL(location).searchParams.get('project');if(initial)openProject(initial);
window.lucide?.createIcons();updateActive();
reveal=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('is-revealed');reveal.unobserve(entry.target);}},{threshold:.08,rootMargin:'0px 0px -65px 0px'});
function observeReveals(){
 document.querySelectorAll('.section-heading,.project-card,.report-item,.about-grid,.publication,.activity,.contact-layout').forEach((el,i)=>{
  if(el.classList.contains('reveal-item'))return;
  el.classList.add('reveal-item');el.style.setProperty('--reveal-delay',`${i%3*100}ms`);reveal.observe(el);
 });
}
observeReveals();
