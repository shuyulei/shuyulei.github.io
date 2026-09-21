import {projects,designIds,projectCard,escapeHtml as e,icon} from './content.mjs?v=20260921-honours-funding';
import {portfolioDownload} from './portfolio-data.mjs?v=20260921-honours-funding';

import {projectStories} from './project-stories.mjs?v=20260921-honours-funding';

const labels={
 en:{back:'Back to portfolio',home:'Back to home',title:'Design portfolio',intro:'Urban design, landscape, architecture and personal artwork.',download:'Download full portfolio (PDF)',size:'Complete portfolio · 32 pages · 77 MB',role:'My contribution',team:'Project team',boards:'Project drawings',page:'Portfolio page',all:'All projects',report:'Download studio report (PDF)',gallery:'HKU studio gallery',next:'Next project',art:'Painting and sketching are also part of how I observe places.'},
 zh:{back:'返回作品集',home:'返回首页',title:'设计作品集',intro:'城市设计、景观、建筑与个人绘画。',download:'下载完整作品集（PDF）',size:'原始作品集 · 32 页 · 77 MB',role:'我的贡献',team:'项目团队',boards:'项目图纸',page:'作品集页码',all:'全部项目',report:'下载工作室报告（PDF）',gallery:'香港大学工作坊官网',next:'下一个项目',art:'绘画和速写也是我观察地方的一种方式。'},
 es:{back:'Volver al portafolio',home:'Volver al inicio',title:'Portafolio de diseño',intro:'Diseño urbano, paisaje, arquitectura y obra personal.',download:'Descargar portafolio completo (PDF)',size:'Portafolio original · 32 páginas · 77 MB',role:'Mi contribución',team:'Equipo del proyecto',boards:'Láminas del proyecto',page:'Página del portafolio',all:'Todos los proyectos',report:'Descargar informe del taller (PDF)',gallery:'Galería de HKU',next:'Proyecto siguiente',art:'La pintura y el dibujo también forman parte de mi manera de observar los lugares.'}
};
export function portfolioView(id='',lang='en',localize=x=>x){
 const l=labels[lang]||labels.en;
 const download=(url=portfolioDownload,label=l.download)=>`<div class="download-actions"><a class="download-link" href="${e(url)}" target="_blank" rel="noopener">${icon('download')}${e(label)}</a>${url===portfolioDownload?`<span>${e(l.size)}</span>`:''}</div>`;
 if(!id)return `<section id="portfolio-content" class="portfolio-content"><header class="portfolio-heading"><a class="text-link" href="index.html#design">${icon('arrow-left')}${e(l.home)}</a><h1>${e(l.title)}</h1><p>${e(l.intro)}</p>${download()}</header><div class="design-grid">${designIds.map(id=>localize(projects.find(p=>p.id===id))).map(projectCard).join('')}</div></section>`;
 const original=projects.find(p=>p.id===id);if(!original)throw Error(`Unknown portfolio project: ${id}`);
 const p=localize(original),kowloon=id==='kowloon';
 const story=projectStories[id]?.[({en:0,zh:1,es:2})[lang]??0];
 const award=p.awardTitle?`<section class="project-award"><h2>${icon('award')}${e(p.awardTitle)}</h2><p class="award-competition">${e(p.awardCompetition)}</p><p>${e(p.awardDescription)}</p><a class="text-link" href="${e(p.awardSource)}" target="_blank" rel="noopener">${e(p.awardLinkLabel)}${icon('arrow-up-right')}</a></section>`:'';
 const context=story?`<section class="project-story"><h2>${e(story[0])}</h2><p>${e(story[1])}</p></section>`:'';
 const langNo=({en:0,zh:1,es:2})[lang]??0;
 const firstCaption=lang==='en'?p.caption:(kowloon?['九龙城适老社区规划总图 · 研究团队最终报告，图 5.3.3，第 55 页','Plan comunitario para las personas mayores de Kowloon City · Informe del equipo, figura 5.3.3, p. 55'][langNo-1]:p.title+' · '+['雷舒宇学生设计作品','Proyecto académico de Shuyu Lei'][langNo-1]);
 const slides=[{src:p.image,alt:lang==='en'?p.alt:p.title,caption:firstCaption}];
 if(kowloon){
  for(const [name,...captions] of [
   ['engagement','Street-level community engagement · Figure 4.2.1','街头社区调研 · 图 4.2.1','Participación en la calle · Figura 4.2.1'],
   ['poster','Workshop promotional poster · Figure 4.3.1','工作坊宣传海报 · 图 4.3.1','Cartel del taller · Figura 4.3.1'],
   ['workshop','Community planning workshop · Figure 4.3.2','社区规划工作坊 · 图 4.3.2','Taller comunitario · Figura 4.3.2']
  ])slides.push({src:'portfolio/kowloon-'+name+'.webp',alt:captions[langNo],caption:captions[langNo]+' · '+['Source: study team, final report','来源：研究团队，最终报告','Fuente: equipo, informe final'][langNo]});
 }else for(const n of p.pages)slides.push({src:'portfolio/page-'+String(n).padStart(2,'0')+'.webp',alt:p.title+' · '+l.page+' '+n,caption:l.page+' '+n});
 const gallery=`<section class="project-gallery" aria-label="${e(l.boards)}"><div class="project-gallery-track" tabindex="0" aria-label="${e(l.boards)}">${slides.map((s,n)=>`<figure class="project-slide"><a href="assets/${e(s.src)}" target="_blank" rel="noopener"><img src="assets/${e(s.src)}" alt="${e(s.alt)}" ${n===0?'fetchpriority="high"':'loading="lazy"'}></a><figcaption>${e(s.caption)}</figcaption></figure>`).join('')}</div><div class="project-gallery-controls"><span class="project-gallery-count" aria-live="polite">1 / ${slides.length}</span><button type="button" class="icon-button" data-gallery-step="-1" aria-label="${['Previous image','上一张','Imagen anterior'][langNo]}" title="${['Previous image','上一张','Imagen anterior'][langNo]}">${icon('chevron-left')}</button><button type="button" class="icon-button" data-gallery-step="1" aria-label="${['Next image','下一张','Imagen siguiente'][langNo]}" title="${['Next image','下一张','Imagen siguiente'][langNo]}">${icon('chevron-right')}</button></div></section>`;

 return `<article id="portfolio-content" class="portfolio-content"><header class="portfolio-heading"><a class="text-link" href="portfolio.html">${icon('arrow-left')}${e(l.back)}</a><p class="project-kicker">${e(p.year)} · ${e(p.topic)} · ${e(p.place)}</p><h1>${e(p.title)}</h1><p class="portfolio-deck">${e(p.deck)}</p>${download(kowloon?p.url:portfolioDownload,kowloon?l.report:l.download)}</header>${award}${p.presentationCredit?`<p class="presentation-credit">${e(p.presentationCredit)}</p>`:''}${gallery}${context}<div class="portfolio-context"><div><h2>${e(l.role)}</h2><p>${e(p.role||p.finding)}</p></div><div><h2>${e(l.team)}</h2><p>${e(p.authors||'Shuyu Lei')}</p>${kowloon?`<a class="text-link" href="${e(p.links[0].url)}" target="_blank" rel="noopener">${e(l.gallery)}${icon('arrow-up-right')}</a>`:''}</div></div><div class="portfolio-end">${download(kowloon?p.url:portfolioDownload,kowloon?l.report:l.download)}<a class="text-link" href="${projects.find(p=>p.id===designIds[(designIds.indexOf(id)+1)%designIds.length]).page}">${e(l.next)} ${icon('arrow-right')}</a></div></article>`;
}
