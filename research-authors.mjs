// Author order and correspondence checked against the source papers; profiles
// are identity-verified, not name-search URLs. Unknown profiles remain plain text.
const profiles={
 'Shuyu Lei':'https://scholar.google.com/citations?user=E73-je4AAAAJ&hl=en',
 'Mushu Zhao':'https://www.researchgate.net/profile/Mushu-Zhao',
 'Songyang Li':'https://scholar.google.com/citations?user=C8W-uZsAAAAJ&hl=en',
 'Weifeng Li':'https://www.researchgate.net/profile/Weifeng-Li-4',
 'James Gachanja':'https://www.researchgate.net/profile/James-Njiraini-Gachanja',
 'Nashon Adero':'https://www.researchgate.net/profile/Nashon-Adero',
 'Weipeng Deng':'https://www.researchgate.net/profile/Weipeng-Deng-2',
 'Mingzhi Zhou':'https://www.researchgate.net/profile/Mingzhi-Zhou-2'
};
export const authorCredits={
 heat:[['Mushu Zhao','first'],['Shuyu Lei','second'],['Songyang Li','coauthor'],['Weifeng Li','corresponding']],
 thermal:[['Mushu Zhao','first'],['Shuyu Lei','second'],['Weifeng Li','corresponding']],
 poverty:[['James Gachanja','first','corresponding'],['Shuyu Lei','second'],['Nashon Adero','coauthor']],
 'city-connect':[['Chi Chiu Cheng','team'],['Jin Zhang','team'],['Shuyu Lei','team'],['Weipeng Deng','team']],
 walking:[['Shuyu Lei','first'],['Mushu Zhao','coauthor'],['Jiangping Zhou','coauthor'],['Xiaochun Yang','coauthor']],
 transit:[['Shuyu Lei','first'],['Mingzhi Zhou','coauthor'],['Weipeng Deng','coauthor'],['Yihong Tang','coauthor'],['Jiangping Zhou','coauthor']]
};
export const creditWords={
 en:{first:'First author',second:'Second author',corresponding:'Corresponding author',coauthor:'Co-author',team:'Team member',authors:'Authors & roles',teamHeading:'Project team',details:'View project details & roles',journal:'Journal',award:'Recognition'},
 zh:{first:'第一作者',second:'第二作者',corresponding:'通讯作者',coauthor:'共同作者',team:'团队成员',authors:'作者与分工',teamHeading:'项目团队',details:'查看项目详情与分工',journal:'发表期刊',award:'项目获奖'},
 es:{first:'Primera autoría',second:'Segunda autoría',corresponding:'Autoría de correspondencia',coauthor:'Coautoría',team:'Integrante del equipo',authors:'Autoría y funciones',teamHeading:'Equipo del proyecto',details:'Ver proyecto y funciones',journal:'Revista',award:'Reconocimiento'}
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function authorsMarkup(p,{compact=false}={}){
 const people=authorCredits[p.id];if(!people)return '';
 const w=creditWords[p.uiLang]||creditWords.en;
 const linkProfiles=['heat','thermal','poverty'].includes(p.id);
 const rows=people.map(([name,...roles])=>`<li><span class="author-name" lang="en">${linkProfiles&&profiles[name]?`<a href="${esc(profiles[name])}" target="_blank" rel="noopener" title="${esc(name)} · ${profiles[name].includes('researchgate')?'ResearchGate':'Google Scholar'}">${esc(name)}<i data-lucide="arrow-up-right" aria-hidden="true"></i></a>`:esc(name)}</span><span class="author-role">${roles.map(role=>w[role]).join(' · ')}</span></li>`).join('');
 return `<div class="research-authors${compact?' research-authors-compact':''}"><strong class="credit-heading">${p.id==='city-connect'?w.teamHeading:w.authors}</strong><ul>${rows}</ul></div>`;
}
