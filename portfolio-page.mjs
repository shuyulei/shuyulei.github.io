import {portfolioView} from './portfolio-view.mjs?v=20260921-bridge-funding';
import {projects} from './content.mjs?v=20260921-bridge-funding';
import {initLanguage,localProject} from './i18n.mjs?v=20260921-bridge-funding';
import {initAccessibility} from './reading.mjs?v=20260921-bridge-funding';

import {initProjectGallery} from './project-gallery.mjs?v=20260921-bridge-funding';

document.addEventListener('languagechange',e=>{
 const id=document.body.dataset.project||'';
 document.querySelector('#main').innerHTML=portfolioView(id,e.detail,p=>localProject(p,projects.findIndex(x=>x.id===p.id)));
 document.title=`${document.querySelector('h1').textContent} | Shuyu Lei`;
 initProjectGallery();window.lucide?.createIcons();
});
initAccessibility();initLanguage();initProjectGallery();
