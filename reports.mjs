export function initReports(lang='en'){
 const grid=document.querySelector('.report-grid');if(!grid)return;
 if(!grid.classList.contains('reports-explorer')){
  grid.classList.add('reports-explorer');
  const items=[...grid.querySelectorAll('.report-item')];
  const tabs=document.createElement('div');tabs.className='report-tabs';tabs.setAttribute('role','tablist');tabs.setAttribute('aria-orientation','vertical');
  const panels=document.createElement('div');panels.className='report-panels';grid.append(tabs,panels);
  const select=index=>items.forEach((item,i)=>{item.hidden=i!==index;tabs.children[i].setAttribute('aria-selected',String(i===index));tabs.children[i].tabIndex=i===index?0:-1;});
  items.forEach((item,index)=>{
   const button=document.createElement('button');button.type='button';button.id='report-tab-'+index;button.setAttribute('role','tab');button.setAttribute('aria-controls','report-panel-'+index);
   item.id='report-panel-'+index;item.setAttribute('role','tabpanel');item.setAttribute('aria-labelledby',button.id);item.tabIndex=0;tabs.append(button);panels.append(item);
   button.addEventListener('click',()=>select(index));
   button.addEventListener('keydown',event=>{let n;if(event.key==='ArrowDown')n=(index+1)%items.length;if(event.key==='ArrowUp')n=(index+items.length-1)%items.length;if(event.key==='Home')n=0;if(event.key==='End')n=items.length-1;if(n!==undefined){event.preventDefault();select(n);tabs.children[n].focus();}});
  });select(0);
 }
 const items=[...grid.querySelectorAll('.report-item')];
 grid.querySelector('.report-tabs').setAttribute('aria-label',({en:'Reports and practice guides',zh:'报告与实践成果',es:'Informes y guías'})[lang]);
 grid.querySelectorAll('[role="tab"]').forEach((button,index)=>{button.replaceChildren();const year=document.createElement('span');year.textContent=items[index].querySelector('.report-meta').textContent.split('/')[0].trim();const title=document.createElement('strong');title.textContent=items[index].querySelector('h3').textContent;button.append(year,title);});
}
