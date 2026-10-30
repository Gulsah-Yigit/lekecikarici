const $=s=>document.querySelector(s);
const guides=[['Yağ','Kıyafetten yağ lekesi','İlk adımı kumaşın bakım etiketi belirler.'],['Çay','Halıdan çay lekesi','Halı türü ve önceki işlemler neden önemli?'],['Kahve','Koltuktan kahve lekesi','Döşeme etiketini okuyarak başla.'],['Mürekkep','Gömlekten mürekkep lekesi','Kumaş ve mürekkep türünü birlikte düşün.'],['Kurumuş','Beklemiş, kurumuş lekeler','Önceki uygulamaları gözden geçir.'],['Beyaz','Beyazlarda sararma','Renk değişimi ile lekeyi ayırt et.']];
const dialog=$('#reading');
function openReading(title,copy){dialog.classList.remove("rich-guide");$('#readtitle').textContent=title;$('#readbody').replaceChildren();for(const text of copy){let p=document.createElement('p');p.textContent=text;$('#readbody').append(p)}dialog.showModal()}
function render(q=''){let normalized=q.toLocaleLowerCase('tr-TR').trim();let found=guides.filter(g=>g.join(' ').toLocaleLowerCase('tr-TR').includes(normalized)||(normalized==='çay' && g[0]==='Kahve'));$('#guidegrid').replaceChildren();for(const g of found){let b=document.createElement('button');b.className='guide';let sm=document.createElement('small');sm.textContent='LEKE ÇIKARMA / '+g[0].toLocaleUpperCase('tr-TR');let h=document.createElement('h3');h.textContent=g[1]+' nasıl çıkar?';let sp=document.createElement('span');sp.textContent='Başlangıç notlarını oku ↗';const icon=document.createElement('i');icon.className='stain-guide-icon';icon.setAttribute('aria-hidden','true');const symbols={'Yağ':'shirt','Çay':'coffee','Kahve':'sofa','Mürekkep':'pen','Kurumuş':'rug','Beyaz':'sun'};const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');const use=document.createElementNS('http://www.w3.org/2000/svg','use');use.setAttribute('href','#'+symbols[g[0]]);svg.append(use);icon.append(svg);b.append(icon,sm,h,sp);b.onclick=()=>openStainCardGuide(g[0],g[1]);$('#guidegrid').append(b)}$('#noresults').hidden=found.length>0}
render();
$('#allguides').onclick=()=>{render();if($('#search input')) $('#search input').value=''};
document.querySelectorAll('[data-fabric]').forEach(b=>b.onclick=()=>openReading(b.dataset.fabric+' için başlangıç',['Aynı lif türündeki kumaşlar bile farklı boya, kaplama ve karışımlara sahip olabilir. Bu nedenle yalnızca kumaş adına bakarak yöntem seçme.','Üreticinin bakım etiketini kontrol et. Bu alandaki dokular, arayüz için hazırlanmış temsili örneklerdir; ayrıntılı kumaş rehberleri içerik aşamasında eklenecek.']));
function search(q){render(q);$('#rehberler').scrollIntoView({behavior:'smooth'})}
if($('#search')) $('#search').onsubmit=e=>{e.preventDefault();search($('#search input').value)};document.querySelectorAll('[data-query]').forEach(b=>b.onclick=()=>{if($('#search input')) $('#search input').value=b.dataset.query;search(b.dataset.query)});
document.querySelectorAll('[data-surface]').forEach(b=>b.onclick=()=>openSurfaceGuide(b.dataset.surface));
$('#finder').onsubmit=e=>{e.preventDefault();renderFinderRecommendation($('#surface').value,$('#stain').value,$('#age').value);};
document.querySelectorAll('[data-product]').forEach(b=>b.onclick=()=>openReading(b.querySelector('h3').textContent,['Bu ürün türünü seçerken yüzey uyumunu, uygulama biçimini ve üreticinin kullanım talimatını birlikte değerlendir.','Ürün bazında karşılaştırmalar ve deneyim notları içerik aşamasında eklenecek. Bu tasarımda ürünlere puan veya doğrulanmamış performans iddiası verilmiyor.']));
document.querySelectorAll('.close,.closebottom').forEach(b=>b.onclick=()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});

document.querySelectorAll('[data-need]').forEach(b=>b.onclick=()=>openReading(b.dataset.need+' için seçim koşulları',[b.querySelector('p').textContent,'Bakım etiketi ve ürünün kullanım talimatı birlikte değerlendirilir. Yüzey için izin verilmeyen bir yöntem uygulanmaz.','Bu kategoriye özel ayrıntılı rehber, içerik aşamasında kaynaklarıyla hazırlanacak.']));
const trustCopy={
'Editoryal yöntem':['Öneriler leke, yüzey, bakım talimatı ve önceki işlemler bağlamında yazılır. Her içerikte kapsam ve sınırlamalar açıklanır.'],
'Yazar ve kontrol':['Bu tasarım sürümünde yazar veya uzman onayı iddiası bulunmuyor. İçerikler yayına alınırken gerçek yazarın adı, ilgili deneyimi, kontrol eden kişi ve güncelleme tarihi görünür olacak.'],
'Kaynaklar':['Üretici bakım ve kullanım talimatları ilgili rehberlerde doğrudan kaynaklandırılacak. Ürün beyanı, yayıncının deneyimi ve bağımsız kaynak bilgisi birbirinden ayrılacak. Bu tasarım örneğindeki notlar tamamlanmış uygulama rehberleri değildir.'],
'Ticari ilişkiler':['Site sahibinin temizlik firmasıyla ilişkisi, hizmet bağlantıları eklenmeden önce açıkça belirtilecek. Sponsorluk ve satış ortaklığı bağlantıları varsa ilgili içerikte açıklanacak. Henüz bu tasarımda bu tür yönlendirmeler yer almıyor.']};
document.querySelectorAll('[data-trust]').forEach(b=>b.onclick=()=>openReading(b.dataset.trust,trustCopy[b.dataset.trust]));

// Surface-card shortcuts open the relevant sourced guide directly.
document.querySelectorAll(".surface-card [data-query]").forEach(b=>b.onclick=()=>openSurfaceGuide(b.closest(".surface-card").querySelector("[data-surface]").dataset.surface,b.dataset.query));

// Native touch scrolling and optional buttons share the same mobile card position.
(() => {
  const track = $('#surface-carousel');
  const cards = [...track.querySelectorAll('.surface-card')];
  const prev = $('.surface-prev'), next = $('.surface-next'), counter = $('.surface-position');
  const mobile = matchMedia('(max-width: 760px)');
  let active = 0, frame = 0;
  function sync() {
    frame = 0;
    const center = track.scrollLeft + track.clientWidth / 2;
    active = cards.reduce((best,card,i) => Math.abs(card.offsetLeft + card.offsetWidth / 2 - center) < Math.abs(cards[best].offsetLeft + cards[best].offsetWidth / 2 - center) ? i : best, 0);
    counter.textContent = `${active + 1} / ${cards.length}`;
    prev.disabled = active === 0; next.disabled = active === cards.length - 1;
  }
  function go(index) {
    if (!mobile.matches) return;
    const card = cards[Math.max(0, Math.min(cards.length - 1, index))];
    track.scrollTo({left: card.offsetLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  function layout() {
    track.setAttribute('role', 'region');
    if (mobile.matches) {
      track.tabIndex = 0; track.setAttribute('aria-roledescription', 'carousel');
    } else {
      track.removeAttribute('tabindex'); track.removeAttribute('aria-roledescription'); track.scrollLeft = 0;
    }
    sync();
  }
  prev.onclick = () => go(active - 1); next.onclick = () => go(active + 1);
  track.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(sync); }, {passive: true});
  track.addEventListener('keydown', e => {
    if (e.target !== track || !mobile.matches) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); go(active + (e.key === 'ArrowRight' ? 1 : -1)); }
  });
  mobile.addEventListener('change', layout);
  new ResizeObserver(sync).observe(track);
  layout();
})();
