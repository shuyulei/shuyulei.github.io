import {portfolioView} from './portfolio-view.mjs?v=20260921-research-credits';
import {projects} from './content.mjs?v=20260921-research-credits';
import {initLanguage,localProject} from './i18n.mjs?v=20260921-research-credits';
import {initAccessibility} from './reading.mjs?v=20260921-research-credits';

import {initProjectGallery} from './project-gallery.mjs?v=20260921-research-credits';

document.addEventListener('languagechange',e=>{
 const id=document.body.dataset.project||'';
 document.querySelector('#main').innerHTML=portfolioView(id,e.detail,p=>localProject(p,projects.findIndex(x=>x.id===p.id)));
 document.title=`${document.querySelector('h1').textContent} | Shuyu Lei`;
 initProjectGallery();window.lucide?.createIcons();
});
initAccessibility();initLanguage();initProjectGallery();
