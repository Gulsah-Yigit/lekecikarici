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
  $('#surface').dispatchEvent(new Event('change'));
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
 const data=surfaceRecipes[surface], key=/Çay|Kahve/.test(stain)?'Çay / kahve':stain, recipe=data.recipes[key] || {title:stain+' lekesi'};
 root.append(guideElement('strong',stain+' · '+surface+' · '+age));
 if(age==='Daha önce işlem gördü')root.append(guideElement('p','Önceki ürünü belirleyin; temizleyicileri karıştırmayın. İşlem bilinmiyorsa uzmana danışın.','recipe-condition'));
 if(age==='Kurudu / bekledi')root.append(guideElement('p','Kurumuş lekeyi ovalamayın; ön işlem süresini etikete göre belirleyin, dozu artırmayın.','recipe-condition'));
 if(!recipe){root.append(guideElement('p','Bu eşleşme için doğrulanmış bir yöntem henüz eklenmedi. Yüzeye ve lekeye uygun ürünün talimatını izleyin; bakım bilgisi belirsizse uzmana danışın.'));return;}
 let care;
 if(surface!=='Kıyafet'){
  const label=guideElement('label',surface==='Koltuk'?'Döşemenin bakım kodunu seçin':'Halının bakım talimatını seçin');care=document.createElement('select');
  const options=surface==='Koltuk'?[['unknown','Bilmiyorum'],['W','W · Su bazlı temizleyici'],['WS','W-S · Su / uygun solvent'],['S','S · Susuz temizleme'],['X','X · Yalnızca süpürme']]:[['unknown','Henüz kontrol etmedim'],['wet','Suyla temizliğe izin veriliyor'],['dry','Sulu temizlik yasak / özel bakım']];
  options.forEach(([value,text])=>{const o=guideElement('option',text);o.value=value;care.append(o);});label.append(care);root.append(label);
 }
 const panel=guideElement('div','','finder-recipe');root.append(panel);
 function update(){
  panel.replaceChildren();
  const allowed=!care||['wet','W','WS'].includes(care.value);
  if(allowed){
   const clothing={
    'Kahve':['Serin suyla durulayın veya kısa süre serin suda bekletin.','Kumaşa uygun sıvı deterjan veya ön işlem ürünü uygulayın.','Bakım etiketine göre yıkayın; leke çıkmadan ısıyla kurutmayın.'],
    'Çay':['Serin suyla durulayın.','Kumaşa uygun ön yıkama ürünüyle işlem uygulayın.','Etikete göre yıkayın; leke kalırsa makinede kurutmayın.'],
    'Yağ':['Fazla yağı bezle alın.','Kumaşa uygun sıvı çamaşır deterjanı veya ön işlem ürünü uygulayın.','Bakım etiketine göre yıkayın; leke çıkmadan makinede kurutmayın.'],
    'Kan':['Taze lekeyi soğuk suyla durulayın; sıcak su kullanmayın.','Kurumuş lekede kumaşa uygun enzimli ön işlem ürününün talimatını izleyin.','Bakım etiketine göre yıkayın; leke çıkmadan kurutmayın.'],
    'Çamur':['Çamurun kurumasını bekleyin, gevşek kalıntıyı nazikçe fırçalayın.','Kumaşa uygun sıvı deterjanla ön işlem uygulayın.','Bakım etiketine göre yıkayın.'],
    'Mürekkep':['Lekenin altına beyaz kâğıt havlu yerleştirin.','Mürekkebe ve kumaşa uygun ürünü küçük alanda deneyip etikete göre tamponlayın; havluyu değiştirin.','Talimatına göre durulayıp yıkayın; rastgele aseton veya kolonya kullanmayın.'],
    'Çikolata':['Fazla çikolatayı kumaşa yaymadan nazikçe alın.','Kumaşa uygun enzimli ön işlem ürünüyle etiketine göre işlem uygulayın.','Bakım etiketine göre yıkayın; lekeyi kontrol edin.'],
    'Domates sosu':['Fazla sosu alın, lekenin arkasından serin suyla durulayın.','Kumaşa uygun ön yıkama leke çıkarıcı uygulayın.','Bakım etiketine göre yıkayın; leke kalırsa kurutmayın.'],
    'Meyve suyu':['Fazla sıvıyı emdirin.','Kumaşa uygun enzimli ön işlem ürününün bekletme talimatını izleyin.','Bakım etiketine göre yıkayıp lekeyi kontrol edin.'],
    'Çimen':['Kumaşa uygun enzimli ön işlem ürünü seçin.','Ürünün etiketindeki süre ve miktarla ön işlem uygulayın.','Bakım etiketine göre yıkayın; leke kalırsa kurutmadan değerlendirin.'],
    'Ruj':['Fazla ruju yaymadan nazikçe alın.','Kumaşa uygun ön yıkama ürünü veya sıvı deterjanla ön işlem uygulayın.','Etikete göre yıkayın; hassas kumaşta uzman görüşü alın.'],
    'Fondöten':['Fazla ürünü kumaşa yedirmeden alın.','Kumaşa uygun ön yıkama ürünü veya sıvı deterjan uygulayın.','Bakım etiketine göre yıkayıp izi kontrol edin.'],
    'Ter':['Kumaşa uygun ön yıkama ürünüyle işlem uygulayın.','Kalıntı sürerse yalnızca etiket izin veriyorsa enzimli ürün veya oksijen bazlı ağartıcı değerlendirin.','Bakım etiketine göre yıkayıp iyice durulayın.'],
    'Deodorant':['Hafif kalıntıda kumaşa uygun sıvı deterjanla ön işlem uygulayın.','Yoğun kalıntıda ön yıkama ürününün etiketindeki bekleme süresini izleyin.','Bakım etiketine göre yıkayın; ağartıcıyı yalnızca etiket izin veriyorsa değerlendirin.'],
    'Sakız':['Buzu kapalı bir poşet içinde uygulayarak sakızı sertleştirin.','Sertleşen fazlalığı kumaşı zedelemeden küt bir kenarla kaldırın.','Kalan izde kumaşa uygun ön işlem ürünü kullanıp etiketine göre yıkayın.'],
    'Mum':['Mumun sertleşmesini bekleyin.','Fazlalığı kumaşı zedelemeden küt bir kenarla kaldırın.','Kalan yağlı veya renkli iz için kumaşa uygun ön işlem ürünü kullanın; rastgele ütü veya solvent uygulamayın.']
   };
   const first=stain==='Çamur'?'Çamurun kurumasını bekleyip gevşek kalıntıyı bakım talimatına göre alın.':['Sakız','Mum'].includes(stain)?'Sertleşmiş fazlalığı lifleri çekmeden nazikçe kaldırın; zorlanıyorsa durdurun.':'Fazlalığı beyaz bezle tamponlayın; lekeyi ovalamayın.';
   const steps=surface==='Kıyafet'?clothing[stain]:[first, surface==='Halı'?'Bu halıya ve leke türüne uygun noktasal temizleyiciyi etiketine göre kullanın.':'W kodunda su bazlı; W-S kodunda üreticinin izin verdiği ve lekeye uygun döşeme ürünü seçin.', 'Görünmeyen alanda deneyin; kalıntı giderme talimatını izleyin ve yüzeyi aşırı ıslatmayın.'];
   const list=guideElement('ol');steps.forEach(step=>list.append(guideElement('li',step)));panel.append(list);
   panel.append(guideElement('p',surface==='Kıyafet'?'Bakım ve ürün etiketini esas alın; yün, ipek ve kuru temizleme isteyen giysiler için özel bakım gerekir.':'Önce görünmeyen alanda deneyin. Renk veya doku değişirse durdurun; hassas liflerde üretici talimatını esas alın.','recipe-condition'));
  }else{
   const message=surface==='Halı'?'Bakım iznini doğrulayana kadar temizleyici eklemeyin. Taze dökülmede fazlalığı beyaz, emici bir bezle dıştan içe tamponlayarak alın. Sulu temizlik yasaksa veya lif yapısı belirsizse uzman desteği alın.':care.value==='S'?'S kodunda su kullanmayın. Uygun susuz temizleme yöntemi için üreticiye veya uzmana danışın.':care.value==='X'?'X kodunda su veya sıvı temizleyici uygulamayın. Bakım talimatının izin verdiği kuru süpürme yöntemini kullanın; leke için uzman görüşü alın.':'Bakım kodu bilinmeden su veya deterjan uygulamayın. Taze dökülmenin fazlasını kuru, beyaz bir bezle nazikçe emdirin ve üreticiden bakım kodunu öğrenin.';
   panel.append(guideElement('p',message,'recipe-condition'));
  }

 }
 if(care)care.onchange=update;update();
}

// Concise card guides. Editorial references: ACI stain removal/Class of Clean,
// La-Z-Boy upholstery care, Shaw carpet care, Smithsonian MCI stain removal.
const stainCardGuides = {
 'Yağ': {
  intro: 'Evde yıkanabilen giysilerde yemek yağı lekesi için ön işlemle başlayın.',
  steps: ['Fazla yağı bez veya kâğıt havluyla nazikçe alın; ovalayarak yaymayın.', 'Kumaşa uygun sıvı çamaşır deterjanı veya ön yıkama leke çıkarıcıyı ürünün talimatına göre uygulayın.', 'Bakım etiketinin izin verdiği sıcaklıkta yıkayın. Leke kaldıysa kurutmadan önce ön işlemi yeniden değerlendirin.'],
  product: 'Kumaş ve renge uygun sıvı deterjan veya ön yıkama leke çıkarıcı.',
  note: 'Leke çıkmadan kurutma makinesini kullanmayın. Yün, ipek ve kuru temizleme isteyen giysilerde özel bakım talimatını izleyin.'
 },
 'Çay': {
  intro: 'Halıdaki çay lekesinde önce fazla sıvıyı alın. Temizleyici kullanmadan önce halının bakım talimatını kontrol edin.',
  steps: ['Temiz, beyaz bir bezle dış kenardan içeri doğru tamponlayın; ovalamayın.', 'Suyla temizliğe izin veriliyorsa bu halının lifine ve çay lekesine uygun noktasal temizleyiciyi görünmeyen alanda deneyin, ardından etiketine göre uygulayın.', 'Ürünün kalıntı giderme talimatını izleyin. Suyla durulama gerekiyorsa hafif nemli bez kullanın; fazla nemi kuru bezle alın.'],
  product: 'Halıya ve leke türüne uygunluğu belirtilmiş noktasal leke çıkarıcı.',
  note: 'Tabanı aşırı ıslatmayın. İpek, viskon, jüt, el dokuması veya bakım bilgisi belirsiz halılarda ev tipi sulu uygulama yerine uzman görüşü alın.'
 },
 'Kahve': {
  intro: 'Koltuktaki kahve lekesinde kullanılacak ürünü döşemenin bakım kodu belirler.',
  steps: ['Fazla kahveyi temiz, beyaz bir bezle emdirin; lekeyi ovalamayın.', 'W kodunda su bazlı döşeme şampuanı/köpüğü; W-S kodunda üreticinin izin verdiği, lekeye uygun ürünü seçin. Görünmeyen bir alanda deneyin.', 'Etikete göre az miktarda uygulayıp dıştan içe tamponlayın. Kalıntı giderme ve kurutma talimatını izleyin; dolguyu ıslatmayın.'],
  product: 'Döşeme koduyla ve kahve lekesiyle uyumlu döşeme temizleyicisi.',
  note: 'S kodunda su, X kodunda sıvı veya köpük temizleyici kullanmayın. Kod bilinmiyorsa fazla sıvıyı almakla yetinin ve üreticiden bilgi alın.'
 },
 'Mürekkep': {
  intro: 'Mürekkebin türü ve gömleğin kumaşı sonucu etkiler; her kalem izi aynı yöntemle çıkmaz.',
  steps: ['Yıkanabilirlik ve kumaş bilgisini kontrol edin. Lekenin altına temiz, beyaz kâğıt havlu yerleştirin.', 'Mürekkep için uygunluğu belirtilmiş ön işlem ürününü görünmeyen alanda deneyin. Etiket izin veriyorsa kumaşın arkasından tamponlayarak uygulayın; mürekkep aktıkça alttaki havluyu değiştirin.', 'Ürün talimatına göre durulayıp bakım etiketine uygun yıkayın. Leke duruyorsa ısıyla kurutmayın.'],
  product: 'Mürekkep lekesine, kumaşa ve renge uygun ön işlem ürünü.',
  note: 'Kolonya, aseton veya farklı çözücüleri rastgele uygulamayın. Bazı mürekkepler kalıcı olabilir; hassas veya kuru temizleme isteyen gömleklerde uzman desteği alın.'
 },
 'Kurumuş': {
  intro: 'Kurumuş leke tek bir leke türü değildir. Önce lekenin kaynağını, yüzeyi ve önceki işlemleri belirleyin.',
  steps: ['Lekenin yağ, içecek, mürekkep gibi kaynağını ve daha önce kullanılan ürünleri belirleyin; yüzeyin bakım etiketini inceleyin.', 'Yıkanabilir giyside lekeye ve kumaşa uygun ön işlem ürünü kullanın. Yalnızca etiket izin veriyorsa önerilen süre boyunca bekletin.', 'Giysiyi bakım etiketine göre yıkayıp lekeyi kontrol edin. Halı ve koltukta bekletme yerine yüzeyin izin verdiği noktasal temizlik yöntemini kullanın.'],
  product: 'Lekenin kaynağına ve yüzeye göre seçilmiş ön işlem veya noktasal temizlik ürünü.',
  note: 'Dozu artırmayın, sertçe kazımayın ve ürünleri karıştırmayın. Isı görmüş veya önceki işlemi bilinmeyen lekelerde uzman değerlendirmesi gerekebilir.'
 },
 'Beyaz': {
  intro: 'Sararma ter, deodorant kalıntısı veya farklı bir renk değişiminden kaynaklanabilir. Beyaz olması, kumaşın her ağartıcıya uygun olduğu anlamına gelmez.',
  steps: ['Bakım etiketini ve sararmanın bulunduğu alanı inceleyin. Ter/deodorant kalıntısında kumaşa uygun sıvı deterjan veya ön işlem ürünüyle başlayın.', 'Kalıntı sürüyorsa yalnızca bakım ve ürün etiketi izin verdiğinde enzimli ürün veya oksijen bazlı ağartıcı seçeneğini değerlendirin; süre ve dozu etiketten izleyin.', 'Etikete uygun yıkayıp iyice durulayın. Kurutmadan önce sararmanın azalıp azalmadığını kontrol edin.'],
  product: 'Kumaşa uygun ön işlem ürünü; izin varsa enzimli ürün veya oksijen bazlı ağartıcı.',
  note: 'Klorlu ağartıcıyı varsayılan çözüm olarak kullanmayın. Pas şüphesinde klorlu ağartıcı uygulamayın; temizlik ürünlerini karıştırmayın.'
 }
};
function openStainCardGuide(key, title) {
 const data=stainCardGuides[key]; if(!data)return;
 openReading(title+' nasıl çıkar?',[]);dialog.classList.add('rich-guide');
 const body=$('#readbody');body.append(guideElement('p',data.intro,'guide-scope'));
 const list=guideElement('ol');data.steps.forEach(step=>list.append(guideElement('li',step)));
 const panel=guideElement('div','','recipe-panel');panel.append(list,guideElement('h4','Uygun ürün seçimi'),guideElement('p',data.product),guideElement('h4','Bakım notu'),guideElement('p',data.note,'recipe-condition'));body.append(panel);
}
