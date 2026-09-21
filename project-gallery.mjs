export function initProjectGallery(){
 const gallery=document.querySelector('.project-gallery');if(!gallery)return;
 const track=gallery.querySelector('.project-gallery-track');
 const slides=[...track.querySelectorAll('.project-slide')];
 const buttons=[...gallery.querySelectorAll('[data-gallery-step]')];
 let index=0,frame;
 const update=()=>{index=slides.reduce((best,slide,n)=>Math.abs(slide.offsetLeft-track.scrollLeft)<Math.abs(slides[best].offsetLeft-track.scrollLeft)?n:best,0);gallery.querySelector('.project-gallery-count').textContent=(index+1)+' / '+slides.length;buttons[0].disabled=index===0;buttons[1].disabled=index===slides.length-1;};
 const go=next=>{const n=Math.max(0,Math.min(slides.length-1,next));const reduced=document.documentElement.hasAttribute('data-reduced-motion')||matchMedia('(prefers-reduced-motion: reduce)').matches;track.scrollTo({left:slides[n].offsetLeft,behavior:reduced?'instant':'smooth'});};
 buttons.forEach(button=>button.addEventListener('click',()=>go(index+Number(button.dataset.galleryStep))));
 track.addEventListener('scroll',()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(update);},{passive:true});
 track.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(index+(event.key==='ArrowRight'?1:-1));}else if(event.key==='Home'||event.key==='End'){event.preventDefault();go(event.key==='Home'?0:slides.length-1);}});
 update();
}
