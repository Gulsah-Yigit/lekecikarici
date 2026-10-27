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
    intro: 'Bu adımlar yalnızca evde yıkanabilen ve seçilen ürüne uygun giysiler içindir. Kuru temizleme isteyen giysi, yün ve ipekte kendi bakım talimatını esas al.',
    options: ['Yağ', 'Çay / kahve', 'Kan'],
    recipes: {
      'Yağ': { title: 'Yemek yağı: ön işlem, sonra yıkama', steps: ['Fazla yağı temiz bez veya kâğıt havluyla al.', 'Hafif lekede sıvı çamaşır deterjanı ya da ön yıkama leke çıkarıcıyla, ürünün talimatına göre ön işlem yap.', 'Bakım etiketinin izin verdiği sıcaklıkta yıka.'], product: 'Sıvı çamaşır deterjanı / kumaşa uygun ön işlem ürünü.', note: 'Bulaşık sıvısı bazı yemek yağı lekelerinde az miktarda kullanılabilir; makineye bulaşık deterjanı ekleme. Ön işlemi durula. Leke duruyorsa kurutma makinesine koyma.', sources: ['aci', 'pizza'] },
      'Çay / kahve': { title: 'Çay ve kahve: serin suyla başla', steps: ['Leke bölgesini serin suyla durula veya serin suda beklet.', 'Sıvı çamaşır deterjanı ya da kumaşa uygun ön yıkama ürünüyle ön işlem yap.', 'Bakım etiketine göre yıka; leke kalırsa kurutma makinesinden önce işlemi değerlendir.'], product: 'Kumaşa uygun ön yıkama ürünü veya sıvı çamaşır deterjanı.', note: 'Süt veya krema eklenmiş içecekler birden fazla bileşen içerir. Sprey/toz biçimi tek başına ürünün uygunluğunu göstermez.', sources: ['aci'] },
      Kan: { title: 'Taze kan: sıcak su kullanma', steps: ['Evde yıkanabilen giyside taze kan lekesini soğuk suda beklet.', 'Bakım talimatına göre yıka.', 'Kurumuş kan için kumaşa uygun enzimli ön işlem ürününün etiketini izle.'], product: 'Kumaşa uygun enzimli ön işlem ürünü; hassas liflerde etiket kontrolü gerekir.', note: 'Sıcak su taze kan lekesini sabitleyebilir. Leke çıkmadan makinede kurutma.', sources: ['aci'] }
    }
  },
  Halı: {
    intro: 'Önce halı üreticisinin bakım talimatını doğrula. İpek, viskon, jüt, el dokuması veya bakım bilgisi bilinmeyen halıda bu karışımı varsayılan yöntem olarak kullanma.',
    options: ['Yağ', 'Çay / kahve', 'Sulu dökülme'],
    recipes: {
      Yağ: { title: 'Yağ lekesi: önce fazlayı al, ürünü buna göre seç', steps: ['Yağın fazlasını beyaz, emici bezle tamponla; ovalama.', 'Üreticinin onayladığı ve yağ lekesi için etiketlenmiş halı leke çıkarıcıyı görünmeyen yerde dene.', 'Etiketin doz, uygulama ve kalıntı giderme adımlarını izle; tabanı ıslatacak miktarda sıvı dökme.'], product: 'Yağ lekesine ve bu halıya uygun noktasal temizleyici.', note: 'Yağlı kalıntı özel çözücü gerektirebilir. Evde rastgele solvent, aseton veya tiner denemek yerine uzman desteği al. Bulaşık sıvısı her yağ lekesinin tek çözümü değildir.', sources: ['oil'] },
      'Çay / kahve': { title: 'İçecek lekesi: tamponla, gerekiyorsa seyreltilmiş çözelti kullan', steps: ['Sıvıyı kuru beyaz bezle, dış kenardan içeri doğru tamponlayarak al.', 'Suyla temizliğe izin varsa ve gizli alan testi uygunsa, 240 ml ılık suya yaklaşık 1/4 ölçü çay kaşığı (1,25 ml) berrak elde bulaşık yıkama sıvısı ekle. Daha yoğun hazırlama.', 'Çözeltiyi az miktarda beyaz beze al; halıya boca etmeden tamponla.', 'Temiz, hafif nemli bezle deterjan kalıntısını al; kuru emici bezle nemi çekip kurumaya bırak.'], product: 'Uygun seyreltilmiş elde bulaşık yıkama sıvısı veya halı için etiketlenmiş leke ürünü.', note: 'Çamaşır deterjanı ve bulaşık makinesi deterjanı bu tarifin yerine geçmez. Ağartıcı veya optik parlatıcı içeren sıvı kullanma. Kalıntı tekrar kirlenmeye yol açabilir.', sources: ['cri', 'shaw'] },
      'Sulu dökülme': { title: 'Sulu dökülme: önce emdir', steps: ['Temiz beyaz bezle sıvıyı emdir; yayarak ovalama.', 'Üreticinin suyla temizliğe izin verdiği yüzeyde, temiz suyla hafifçe nemlendirilmiş bezle kalıntıyı al.', 'İz sürüyorsa halıya uygun, leke türü etiketinde belirtilen ürünü talimatına göre kullan.'], product: 'Gerekirse halıya özel noktasal leke çıkarıcı.', note: '“Yağsız” olması her sprey veya toz ürünü uygun kılmaz. Çamaşır için üretilen toz leke çıkarıcıyı halıya doğrudan dökme.', sources: ['shaw', 'oil'] }
    }
  },
  Koltuk: {
    intro: 'Önce koltuğun kendi etiketini esas al. Aşağıdaki kodlar yaygın bakım kodlarıdır; çıkarılabilir kılıfın ayrıca yıkama izni olmalıdır.',
    options: ['Çay / kahve', 'Yağ'],
    recipes: {
      'Çay / kahve': { title: 'İçecek lekesi: kod izin veriyorsa az nemle müdahale', steps: ['Döküleni hemen temiz beyaz bezle emdir.', 'W kodunda su bazlı döşeme şampuanı/köpüğü; W-S kodunda üreticinin izin verdiği su bazlı ürünü seç. Önce gizli alanda dene.', 'Az ürünü beze alıp kenardan merkeze tamponla. Kumaşı ve dolguyu doyurma; kalıntı giderme ve kurutma için etiketi izle.'], product: 'Bakım koduyla uyumlu döşeme temizleyicisi.', note: 'Halı tarifindeki deterjan karışımını otomatik olarak koltuğa uygulama. Nem miktarını sınırlı tut.', sources: ['sofa', 'ikea'] },
      Yağ: { title: 'Yağ lekesi: temizleyiciyi bakım kodu belirler', steps: ['Fazla yağı emici beyaz bezle al.', 'W kodunda yalnızca uygun su bazlı döşeme temizleyici kullan. W-S kodunda yağ lekesi için etiketlenmiş ve döşemeye uygun ürünü değerlendir.', 'Gizli alan testi sonrası etiketteki miktarı aşmadan uygula; yayılma veya renk değişimi olursa dur.'], product: 'Yağ lekesi için etiketlenmiş, döşeme koduyla uyumlu ürün.', note: 'Sırf yağ çözüyor diye bulaşık sıvısı veya solvent seçme. W kodunda solvent kullanma; ağır yağlı lekede uzman desteği al.', sources: ['sofa'] }
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
    if (!r) { panel.append(guideElement('p','Bu leke için henüz kaynak kontrolü tamamlanmış bir yöntem eklemedik. Farklı bir lekenin tarifini uygulama; yukarıdan desteklenen bir leke seçebilir veya üreticiye danışabilirsin.','recipe-condition')); return; }
    panel.append(guideElement('h3', r.title));
    const blocked = care && !['wet','W','WS'].includes(care.value);
    if (blocked) {
      const message = surface === 'Halı' ? 'Sulu müdahale adımlarını uygulamadan önce üreticinin iznini doğrula. Şimdilik sıvıyı kuru beyaz bezle emdir; temizleyici ekleme. Özel lif veya belirsiz bakım bilgisinde uzman desteği al.' : care.value === 'S' ? 'S kodunda su kullanma. Etiketin istediği susuz temizleme ürünü için üreticiye veya uzmana danış; aşağıdaki ıslak müdahale uygulanmaz.' : care.value === 'X' ? 'X kodunda sıvı temizleyici uygulama. Bakım talimatındaki kuru süpürme/fırçalama sınırında kal; leke için uzman görüşü al.' : 'Bakım kodu bilinmeden su veya deterjan önermiyoruz. Sıvıyı kuru beyaz bezle emdir ve üreticiden bakım talimatını öğren.';
      panel.append(guideElement('p',message,'recipe-condition'));
      if (surface === 'Halı') panel.append(guideElement('p','İçecek lekesinde, uygun yüzey için seyreltilmiş elde bulaşık sıvısı seçeneği vardır. Yağ lekesinde ise yağ kalıntısına uygun özel ürün gerekebilir. Bakım iznini seçtiğinde ilgili adımları görebilirsin.'));
    } else {
      panel.append(guideElement('p','Önce görünmeyen alanda dene; renk veya doku değişirse uygulamayı bırak. Ürünün ve eşyanın bakım talimatı önceliklidir.','recipe-condition'));
      const ol=document.createElement('ol');r.steps.forEach(step=>ol.append(guideElement('li',step)));panel.append(ol);
      panel.append(guideElement('h4','Hangi ürün?'),guideElement('p',r.product),guideElement('h4','Neye dikkat etmeli?'),guideElement('p',r.note));
    }
    const refs=guideElement('div','','recipe-sources');refs.append(guideElement('h4','Kaynaklar · Kontrol: 27 Ekim 2026'));
    const ids=surface==='Koltuk'&&blocked?['sofa']:r.sources;
    ids.forEach(id=>{const [text,url]=careSources[id];const a=guideElement('a',text+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';refs.append(a);});panel.append(refs);
    panel.append(guideElement('p','Sonuç garanti değildir. Leke kalıyorsa dozu artırma veya farklı kimyasalları karıştırma; yüzeye uygun uzman desteğini değerlendir.','recipe-footnote'));
  }
  select.onchange=renderRecipe;if(care)care.onchange=renderRecipe;renderRecipe();
  const button=guideElement('button','Bu yüzeyle çözüm bulucuya geç →','pillbutton');button.type='button';button.onclick=()=>{dialog.close();$('#bulucu').scrollIntoView({behavior:'smooth'});};body.append(button);
}
