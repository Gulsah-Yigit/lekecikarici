// Source-backed household starting steps, paraphrased and checked on 2026-10-27.
const careSources = {
  aci: ['American Cleaning Institute · Giysi lekeleri', 'https://www.cleaninginstitute.org/cleaning-tips/clothes/stain-removal-guide'],
  pizza: ['American Cleaning Institute · Yemek ve yağ lekeleri', 'https://www.cleaninginstitute.org/cleaning-tips/clean-home/ask-aci/ask-aci-pizza-stains'],
  shaw: ['Shaw Floors · Halıda deterjanla müdahale', 'https://shawfloors.com/en-us/care-and-warranties/carpet/detergent'],
  oil: ['Shaw Industries · Yağ ve yapışkan lekeler', 'https://pdmsview.shawinc.com/Shaw-Residential/Shaw-Installation-Product-Care/Carpet/Spot-Cleaning-Solutions-Checklist'],
  cri: ['Carpet and Rug Institute · Kahve lekesi', 'https://carpet-rug.org/spot-solver/coffee-with-cream-sugar/'],
  sofa: ['La-Z-Boy · Döşeme bakım kodları', 'https://www.la-z-boy.com/content/CustomerCare/fabric-and-leather-care/'],
  ikea: ['IKEA · Döşeme temizliği', 'https://www.ikea.com/ch/en/product-guides/cleaning-upholstery-pub5ec022a0/']
};
const surfaceRecipes = {
  Kıyafet: {
    intro: 'Bu adımlar yalnızca evde yıkanabilen ve seçilen ürüne uygun giysiler içindir. Kuru temizleme isteyen giysi, yün ve ipekte ürünün kendi bakım talimatını esas alın.',
    options: ['Yağ', 'Çay / kahve', 'Kan'],
    recipes: {
      'Yağ': { title: 'Yemek yağı: ön işlem, sonra yıkama', steps: ['Fazla yağı temiz bir bez veya kâğıt havluyla nazikçe alın.', 'Hafif lekede sıvı çamaşır deterjanı ya da ön yıkama leke çıkarıcıyla, ürünün talimatına göre ön işlem uygulayın.', 'Bakım etiketinin izin verdiği sıcaklıkta yıkayın.'], product: 'Sıvı çamaşır deterjanı / kumaşa uygun ön işlem ürünü.', note: 'Bulaşık sıvısı bazı yemek yağı lekelerinde az miktarda kullanılabilir; bulaşık deterjanını çamaşır makinesine eklemeyin. Ön işlem ürününü durulayın. Leke duruyorsa giysiyi kurutma makinesine koymayın.', sources: ['aci', 'pizza'] },
      'Çay / kahve': { title: 'Çay ve kahve: serin suyla ön uygulama', steps: ['Leke bölgesini serin suyla durulayın veya serin suda bekletin.', 'Sıvı çamaşır deterjanı ya da kumaşa uygun ön yıkama ürünüyle ön işlem uygulayın.', 'Bakım etiketine göre yıkayın; leke kalırsa kurutma makinesini kullanmadan önce işlemi yeniden değerlendirin.'], product: 'Kumaşa uygun ön yıkama ürünü veya sıvı çamaşır deterjanı.', note: 'Süt veya krema eklenmiş içecekler birden fazla bileşen içerir. Sprey/toz biçimi tek başına ürünün uygunluğunu göstermez.', sources: ['aci'] },
      Kan: { title: 'Taze kan: soğuk suyla başlangıç', steps: ['Evde yıkanabilen giyside taze kan lekesini soğuk suda bekletin.', 'Bakım talimatına göre yıkayın.', 'Kurumuş kan için kumaşa uygun enzimli ön işlem ürününün etiketindeki uygulamayı izleyin.'], product: 'Kumaşa uygun enzimli ön işlem ürünü; hassas liflerde etiket kontrolü gerekir.', note: 'Sıcak su taze kan lekesini sabitleyebilir. Leke çıkmadan kurutma makinesini kullanmayın.', sources: ['aci'] }
    }
  },
  Halı: {
    intro: 'Önce halı üreticisinin bakım talimatını kontrol edin. İpek, viskon, jüt, el dokuması veya bakım bilgisi bilinmeyen halıda bu karışımı varsayılan yöntem olarak kullanmayın.',
    options: ['Yağ', 'Çay / kahve', 'Sulu dökülme'],
    recipes: {
      Yağ: { title: 'Yağ lekesi: fazla yağın alınması ve ürün seçimi', steps: ['Yağın fazlasını beyaz, emici bir bezle tamponlayarak alın; ovalamaktan kaçının.', 'Üreticinin onayladığı ve yağ lekesi için etiketlenmiş halı leke çıkarıcıyı görünmeyen küçük bir alanda deneyin.', 'Etiketin doz, uygulama ve kalıntı giderme adımlarını izleyin; halı tabanını ıslatacak miktarda sıvı kullanmayın.'], product: 'Yağ lekesine ve bu halıya uygun noktasal temizleyici.', note: 'Yağlı kalıntı özel çözücü gerektirebilir. Evde rastgele solvent, aseton veya tiner denemek yerine uzman desteği alın. Bulaşık sıvısı her yağ lekesinin tek çözümü değildir.', sources: ['oil'] },
      'Çay / kahve': { title: 'İçecek lekesi: tamponlama ve uygun seyreltilmiş çözelti', steps: ['Sıvıyı kuru beyaz bezle, dış kenardan içeri doğru tamponlayarak alın.', 'Suyla temizliğe izin varsa ve gizli alan testi uygunsa, 240 ml ılık suya yaklaşık 1/4 ölçü çay kaşığı (1,25 ml) berrak elde bulaşık yıkama sıvısı ekleyin. Bu orandan daha yoğun bir çözelti hazırlamayın.', 'Çözeltiyi az miktarda beyaz bir beze alın ve halıya doğrudan dökmeden tamponlayarak uygulayın.', 'Temiz, hafif nemli bezle deterjan kalıntısını alın; kuru, emici bir bezle fazla nemi aldıktan sonra kurumaya bırakın.'], product: 'Uygun seyreltilmiş elde bulaşık yıkama sıvısı veya halı için etiketlenmiş leke ürünü.', note: 'Çamaşır deterjanı ve bulaşık makinesi deterjanı bu tarifin yerine geçmez. Ağartıcı veya optik parlatıcı içeren sıvı kullanmayın. Kalıntı tekrar kirlenmeye yol açabilir.', sources: ['cri', 'shaw'] },
      'Sulu dökülme': { title: 'Sulu dökülme: sıvının emdirilmesi', steps: ['Temiz beyaz bezle sıvıyı emdirin; lekeyi yayacak şekilde ovalamayın.', 'Üreticinin suyla temizliğe izin verdiği yüzeyde, temiz suyla hafifçe nemlendirilmiş bezle kalıntıyı alın.', 'İz sürüyorsa halıya uygun, leke türü etiketinde belirtilen ürünü talimatına göre kullanın.'], product: 'Gerekirse halıya özel noktasal leke çıkarıcı.', note: '“Yağsız” olması her sprey veya toz ürünü uygun kılmaz. Çamaşır için üretilen toz leke çıkarıcıyı halıya doğrudan dökmeyin.', sources: ['shaw', 'oil'] }
    }
  },
  Koltuk: {
    intro: 'Önce koltuğun kendi bakım etiketini esas alın. Aşağıdaki kodlar yaygın bakım kodlarıdır; çıkarılabilir kılıfın ayrıca yıkama izni olmalıdır.',
    options: ['Çay / kahve', 'Yağ'],
    recipes: {
      'Çay / kahve': { title: 'İçecek lekesi: kod izin veriyorsa az nemle müdahale', steps: ['Döküleni hemen temiz beyaz bezle emdirin.', 'W kodunda su bazlı döşeme şampuanı/köpüğü; W-S kodunda üreticinin izin verdiği su bazlı ürünü seçin. Önce görünmeyen küçük bir alanda deneyin.', 'Az miktardaki ürünü beze alarak dış kenardan merkeze doğru tamponlayın. Kumaşı ve dolguyu aşırı ıslatmayın; kalıntı giderme ve kurutma için ürün talimatını izleyin.'], product: 'Bakım koduyla uyumlu döşeme temizleyicisi.', note: 'Halı için verilen deterjan karışımını koltuğa doğrudan uyarlamayın. Kullanılan nem miktarını sınırlı tutun.', sources: ['sofa', 'ikea'] },
      Yağ: { title: 'Yağ lekesi: temizleyiciyi bakım kodu belirler', steps: ['Fazla yağı emici, beyaz bir bezle alın.', 'W kodunda yalnızca uygun su bazlı döşeme temizleyicisi kullanın. W-S kodunda yağ lekesi için etiketlenmiş ve döşemeye uygun ürünü değerlendirin.', 'Gizli alan testi sonrası etiketteki miktarı aşmadan uygulayın; yayılma veya renk değişimi olursa işlemi durdurun.'], product: 'Yağ lekesi için etiketlenmiş, döşeme koduyla uyumlu ürün.', note: 'Yalnızca yağ çözme özelliğine bakarak bulaşık sıvısı veya solvent seçmeyin. W kodunda solvent kullanmayın; ağır yağlı lekede uzman desteği alın.', sources: ['sofa'] }
    }
  }
};
function guideElement(tag, text, className) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (className) el.className = className;
  return el;
}
function openSurfaceGuide(surface, initialStain = '') {
  const data = surfaceRecipes[surface];
  if (!data) return;
  $('#surface').value = surface;
  openReading(surface + ' için uygulama rehberi', []);
  dialog.classList.add('rich-guide');
  const body = $('#readbody');
  body.append(guideElement('p', data.intro, 'guide-scope'));
  const controls = guideElement('div', '', 'guide-controls');
  const label = guideElement('label', 'Hangi leke?');
  const select = document.createElement('select');
  data.options.forEach(value => { const o = guideElement('option', value); o.value = value; select.append(o); });
  const initial = /Çay|Kahve/.test(initialStain) ? 'Çay / kahve' : initialStain;
  if (data.options.includes(initial)) select.value = initial;
  else if (initial) {
    const unsupported = guideElement('option', initial + ' · Henüz yöntem eklenmedi');
    unsupported.value = 'unsupported'; unsupported.disabled = true; select.prepend(unsupported); select.value = 'unsupported';
  }
  label.append(select); controls.append(label);
  let care;
  if (surface !== 'Kıyafet') {
    const careLabel = guideElement('label', surface === 'Koltuk' ? 'Döşeme bakım kodu' : 'Halı bakım talimatı');
    care = document.createElement('select');
    const options = surface === 'Koltuk' ? [['unknown','Bilmiyorum'],['W','W · Su bazlı temizleyici'],['WS','W-S · Su / uygun solvent'],['S','S · Susuz temizleme'],['X','X · Yalnızca süpürme']] : [['unknown','Henüz kontrol etmedim'],['wet','Suyla temizliğe izin veriliyor'],['dry','Sulu temizlik yasak / özel bakım']];
    options.forEach(([value,text]) => { const o = guideElement('option', text); o.value=value; care.append(o); });
    careLabel.append(care); controls.append(careLabel);
  }
  const panel = guideElement('div', '', 'recipe-panel');
  panel.setAttribute('aria-live','polite');
  body.append(controls, panel);
  function renderRecipe() {
    const r = data.recipes[select.value]; panel.replaceChildren();
    if (!r) { panel.append(guideElement('p','Bu leke için henüz kaynak kontrolü tamamlanmış bir yöntem eklemedik. Farklı bir lekeye ait yöntemi uygulamak yerine yukarıdan uygun bir leke seçebilir veya üreticiye danışabilirsiniz.','recipe-condition')); return; }
    panel.append(guideElement('h3', r.title));
    const blocked = care && !['wet','W','WS'].includes(care.value);
    if (blocked) {
      const message = surface === 'Halı' ? 'Sulu müdahale adımlarını uygulamadan önce üreticinin bakım talimatındaki izni doğrulayın. Şimdilik sıvıyı kuru, beyaz bir bezle emdirin; temizleyici eklemeyin. Özel lif veya belirsiz bakım bilgisinde uzman desteği alın.' : care.value === 'S' ? 'S kodunda su kullanmayın. Etiketin istediği susuz temizleme ürünü için üreticiye veya uzmana danışın; aşağıdaki ıslak müdahale uygulanmaz.' : care.value === 'X' ? 'X kodunda sıvı temizleyici uygulamayın. Bakım talimatındaki kuru süpürme/fırçalama sınırları içinde kalın; leke için uzman görüşü alın.' : 'Bakım kodu bilinmeden su veya deterjan önermiyoruz. Sıvıyı kuru, beyaz bir bezle emdirin ve üreticiden bakım talimatını öğrenin.';
      panel.append(guideElement('p',message,'recipe-condition'));
      if (surface === 'Halı') panel.append(guideElement('p','İçecek lekesinde, uygun yüzey için seyreltilmiş elde bulaşık sıvısı seçeneği vardır. Yağ lekesinde ise yağ kalıntısına uygun özel ürün gerekebilir. Bakım talimatına uygun seçeneği belirlediğinizde ilgili adımları inceleyebilirsiniz.'));
    } else {
      panel.append(guideElement('p','Önce görünmeyen küçük bir alanda deneyin; renk veya doku değişimi gözlerseniz uygulamayı durdurun. Ürünün ve eşyanın bakım talimatı önceliklidir.','recipe-condition'));
      const ol=document.createElement('ol');r.steps.forEach(step=>ol.append(guideElement('li',step)));panel.append(ol);
      panel.append(guideElement('h4','Hangi ürün?'),guideElement('p',r.product),guideElement('h4','Uygulama sırasında dikkat edilecekler'),guideElement('p',r.note));
    }
    const refs=guideElement('div','','recipe-sources');refs.append(guideElement('h4','Kaynaklar · Kontrol: 27 Ekim 2026'));
    const ids=surface==='Koltuk'&&blocked?['sofa']:r.sources;
    ids.forEach(id=>{const [text,url]=careSources[id];const a=guideElement('a',text+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';refs.append(a);});panel.append(refs);
    panel.append(guideElement('p','Sonuç garanti değildir. Leke kalıyorsa dozu artırmayın veya farklı kimyasalları karıştırmayın; yüzeye uygun uzman desteğini değerlendirin.','recipe-footnote'));
  }
  select.onchange=renderRecipe;if(care)care.onchange=renderRecipe;renderRecipe();
  const button=guideElement('button','Bu yüzey için çözüm bulun →','pillbutton');button.type='button';button.onclick=()=>{dialog.close();$('#bulucu').scrollIntoView({behavior:'smooth'});};body.append(button);
}

function renderFinderRecommendation(surface, stain, age) {
 const root=$('#result');root.replaceChildren();root.hidden=false;
 const data=surfaceRecipes[surface], key=/Çay|Kahve/.test(stain)?'Çay / kahve':stain, recipe=data.recipes[key];
 root.append(guideElement('strong',stain+' · '+surface+' · '+age),guideElement('p',data.intro));
 if(age==='Daha önce işlem gördü')root.append(guideElement('p','Yeni bir ürün uygulamadan önce kullanılan ürünleri ve önceki işlemleri belirleyin. Temizleyicileri karıştırmayın. Önceki işlem bilinmiyorsa üreticiye veya uzmana danışın.','recipe-condition'));
 if(age==='Kurudu / bekledi')root.append(guideElement('p','Kurumuş lekeyi sertçe ovalamayın veya kazımayın. Ön işlem süresini ürün etiketine göre belirleyin; dozu artırmayın.','recipe-condition'));
 if(!recipe){root.append(guideElement('p','Bu leke ve yüzey eşleşmesi için henüz kaynak kontrolü tamamlanmış bir yöntem bulunmuyor. Başka bir lekeye ait tarifi uygulamak yerine, bu lekeye ve yüzeye uygunluğu belirtilmiş ürünün talimatını esas alın. Bakım bilgisi belirsizse uzman görüşü alın.'));return;}
 let care;
 if(surface!=='Kıyafet'){
  const label=guideElement('label',surface==='Koltuk'?'Döşemenin bakım kodunu seçin':'Halının bakım talimatını seçin');care=document.createElement('select');
  const options=surface==='Koltuk'?[['unknown','Bilmiyorum'],['W','W · Su bazlı temizleyici'],['WS','W-S · Su / uygun solvent'],['S','S · Susuz temizleme'],['X','X · Yalnızca süpürme']]:[['unknown','Henüz kontrol etmedim'],['wet','Suyla temizliğe izin veriliyor'],['dry','Sulu temizlik yasak / özel bakım']];
  options.forEach(([value,text])=>{const o=guideElement('option',text);o.value=value;care.append(o);});label.append(care);root.append(label);
 }
 const panel=guideElement('div','','finder-recipe');root.append(panel);
 function update(){
  panel.replaceChildren();panel.append(guideElement('h4',recipe.title));
  const allowed=!care||['wet','W','WS'].includes(care.value);
  if(allowed){
   panel.append(guideElement('p','Ürünün yüzeye uygunluğunu doğrulayın ve görünmeyen küçük bir alanda deneyin. Renk veya doku değişirse işlemi durdurun.'));
   const list=guideElement('ol');recipe.steps.forEach(step=>list.append(guideElement('li',step)));panel.append(list,guideElement('h4','Uygun ürün seçimi'),guideElement('p',recipe.product),guideElement('p',recipe.note,'recipe-condition'));
  }else{
   const message=surface==='Halı'?'Bakım iznini doğrulayana kadar temizleyici eklemeyin. Taze dökülmede fazlalığı beyaz, emici bir bezle dıştan içe tamponlayarak alın. Sulu temizlik yasaksa veya lif yapısı belirsizse uzman desteği alın.':care.value==='S'?'S kodunda su kullanmayın. Uygun susuz temizleme yöntemi için üreticiye veya uzmana danışın.':care.value==='X'?'X kodunda su veya sıvı temizleyici uygulamayın. Bakım talimatının izin verdiği kuru süpürme yöntemini kullanın; leke için uzman görüşü alın.':'Bakım kodu bilinmeden su veya deterjan uygulamayın. Taze dökülmenin fazlasını kuru, beyaz bir bezle nazikçe emdirin ve üreticiden bakım kodunu öğrenin.';
   panel.append(guideElement('p',message,'recipe-condition'));
  }
  const refs=guideElement('div','','recipe-sources');refs.append(guideElement('h4','Kaynaklar'));
  recipe.sources.forEach(id=>{const [title,url]=careSources[id];const a=guideElement('a',title+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';refs.append(a);});panel.append(refs);
 }
 if(care)care.onchange=update;update();
}
