// Selection changes update both the photograph and the recommendation state.
(() => {
 const names=Array.from(document.querySelectorAll('[data-stain]')).map(b=>b.dataset.stain);
 const sheets={'Kıyafet':'clothes','Koltuk':'sofa','Halı':'carpet'};
 const stain=document.querySelector('#stain'),surface=document.querySelector('#surface');
 const photo=document.querySelector('#finder-photo'),result=document.querySelector('#result');
 function update(){
  const index=names.indexOf(stain.value),x=(index%4)*100/3+'%',y=Math.floor(index/4)*100/3+'%';
  photo.style.setProperty('--sheet',`url(assets/finder-${sheets[surface.value]}.png)`);
  photo.style.setProperty('--sx',x);photo.style.setProperty('--sy',y);
  photo.setAttribute('aria-label',`${surface.value} üzerinde ${stain.value.toLocaleLowerCase('tr')} lekesi, temsili görsel`);
  document.querySelector('#finder-photo-label').textContent=stain.value+' lekesi';
  document.querySelectorAll('[data-stain]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.stain===stain.value));
  document.querySelectorAll('[data-finder-surface]').forEach(b=>{
   b.setAttribute('aria-pressed',b.dataset.finderSurface===surface.value);
   const mini=b.querySelector('.surface-mini');mini.style.setProperty('--sx',x);mini.style.setProperty('--sy',y);
  });
  result.hidden=true;result.replaceChildren();
 }
 document.querySelectorAll('[data-stain]').forEach(b=>b.addEventListener('click',()=>{stain.value=b.dataset.stain;update();}));
 document.querySelectorAll('[data-finder-surface]').forEach(b=>b.addEventListener('click',()=>{surface.value=b.dataset.finderSurface;update();}));
 surface.addEventListener('change',update);stain.addEventListener('change',update);
 document.querySelector('#age').addEventListener('change',()=>{result.hidden=true;result.replaceChildren();});
 document.querySelector('#stain-filter').addEventListener('input',e=>{
  const q=e.target.value.toLocaleLowerCase('tr').trim();let count=0;
  document.querySelectorAll('[data-stain]').forEach(b=>{b.hidden=!b.dataset.stain.toLocaleLowerCase('tr').includes(q);if(!b.hidden)count++;});
  document.querySelector('#stain-empty').hidden=count>0;
 });
 update();
})();
