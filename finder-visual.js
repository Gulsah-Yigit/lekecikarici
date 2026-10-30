// One source selection, one surface selection, and an inline recommendation.
(() => {
 const stain=document.querySelector('#stain'),surface=document.querySelector('#surface'),result=document.querySelector('#result');
 const tiles=Array.from(document.querySelectorAll('[data-stain]'));
 const more=document.querySelector('#more-stains'),filter=document.querySelector('#stain-filter');let expanded=false;
 function filterTiles(){
  const q=filter.value.toLocaleLowerCase('tr').trim();let count=0;
  tiles.forEach(b=>{b.hidden=q?!b.dataset.stain.toLocaleLowerCase('tr').includes(q):(!expanded&&Number(b.dataset.index)>=12);if(!b.hidden)count++;});
  document.querySelector('#stain-empty').hidden=count>0;
  more.hidden=!!q;more.setAttribute('aria-expanded',String(expanded));more.textContent=expanded?'Daha az göster −':'Diğer lekeler +';
 }
 function update(){
  const selected=tiles.find(b=>b.dataset.stain===stain.value);if(!selected)return;
  const art=document.querySelector('#selected-source-art');art.style.setProperty('--sx',(Number(selected.dataset.index)%4)*100/3+'%');art.style.setProperty('--sy',Math.floor(Number(selected.dataset.index)/4)*100/3+'%');
  document.querySelector('#selected-source-name').textContent=stain.value;
  tiles.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.stain===stain.value)));
  document.querySelectorAll('[data-finder-surface]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.finderSurface===surface.value)));
  result.hidden=true;result.replaceChildren();
 }
 tiles.forEach(b=>b.addEventListener('click',()=>{stain.value=b.dataset.stain;update();}));
 document.querySelectorAll('[data-finder-surface]').forEach(b=>b.addEventListener('click',()=>{surface.value=b.dataset.finderSurface;update();}));
 surface.addEventListener('change',update);stain.addEventListener('change',update);
 document.querySelector('#age').addEventListener('change',()=>{result.hidden=true;result.replaceChildren();});
 filter.addEventListener('input',filterTiles);more.addEventListener('click',()=>{expanded=!expanded;filterTiles();});
 update();filterTiles();
})();
