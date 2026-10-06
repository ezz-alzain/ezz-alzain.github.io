/* EN / عربي switcher — shared by index.html, index2.html and portfolio.html */
(function(){
var S2=!!document.querySelector('.hero-t');            // site 2
var PDF=!!document.querySelector('.cover');            // portfolio pdf

/* ---------- exact text -> Arabic ---------- */
var TXT={
 /* nav & common */
 'AI Video':'فيديو الذكاء الاصطناعي','Work':'الأعمال','Career':'المسيرة','Skills':'المهارات',"Let's talk":'تواصل معي','Contact':'تواصل',
 'Story':'الحكاية','Journey':'الرحلة','MENU':'القائمة','Scroll':'مرّر',
 'Filmmaker · Content Creator · AI Video Creator':'صانع أفلام · صانع محتوى · مبدع فيديو بالذكاء الاصطناعي',
 'Years':'سنة','Countries':'دول','Projects':'مشروع',
 /* marquee */
 'Filmmaker':'صانع أفلام','Cinematography':'التصوير السينمائي','Live Concerts':'حفلات مباشرة','Content Creator':'صانع محتوى','Aerial':'تصوير جوي','Colour Grading':'تصحيح الألوان','Documentary':'الأفلام الوثائقية',
 /* AI */
 'Latest focus':'أحدث تركيز','Concept & Script':'فكرة وسيناريو','Cinematic Direction':'إخراج سينمائي','AI Generation':'توليد بالذكاء الاصطناعي','Edit & Colour Grade':'مونتاج وتدرّج لوني','Sound & Music':'صوت وموسيقى',
 'Creating since June 2026':'أُبدع فيه منذ يونيو 2026','AI VIDEO':'فيديو AI','SOUND OFF':'الصوت: متوقف',
 'AI Trailer Film':'فيلم تريلر بالذكاء الاصطناعي','AI-generated · 35 seconds':'مُولَّد بالذكاء الاصطناعي · 35 ثانية',
 /* work */
 'Selected work':'أعمال مختارة','Videos':'فيديوهات','Photos':'صور','Video':'فيديو','Photo':'صورة',
 'Aerial Cinematography':'تصوير جوي سينمائي','Watch Event Film':'فيلم فعالية الساعات','Desert Riding Training':'تدريب القيادة في الصحراء','Motocross Training':'تدريب الموتوكروس',
 'Architecture Film':'فيلم العمارة','Health Documentary':'وثائقي صحي','Heritage Celebration':'احتفال تراثي','Short Film':'فيلم قصير',
 'U Events · Hisham Mahrous Live':'يو إيفنتس · هشام محروس مباشر','Crocus · Role Model 1963':'كروكوس · Role Model 1963','Layan Al Kahraman Launch':'تدشين ليوان الكهرمان','Crocus Fragrances':'عطور كروكوس','Crocus Eyewear':'نظارات كروكوس','Equestrian Style':'أناقة الفروسية','Qatar Equestrian Tour':'جولة قطر للفروسية','The Jump':'القفزة','Focus':'التركيز','Rider in Blue':'فارس بالأزرق','Over the Bar':'فوق العارضة','Ceremony':'حفل',
 /* career */
 'AI, Content & Live Events':'الذكاء الاصطناعي والمحتوى والفعاليات','2026 — Present':'2026 — الآن',
 'Jun 2026 — Present':'يونيو 2026 — الآن','AI Video Creation':'إبداع فيديو الذكاء الاصطناعي','Independent':'عمل حر',
 'Creating cinematic videos with AI tools — my newest and fastest-growing focus.':'أصنع فيديوهات سينمائية بأدوات الذكاء الاصطناعي — أحدث مجالاتي وأسرعها نمواً.',
 'Present':'الآن','Jul 2026':'يوليو 2026','Concert Filming':'تصوير الحفلات','Egypt':'مصر','Filmed Gulf singing concerts in Egypt.':'صوّرتُ حفلات غنائية خليجية في مصر.',
 'Digital & Creative':'الرقمي والإبداعي','Oct 2024 — Dec 2025':'أكتوبر 2024 — ديسمبر 2025','Freelance':'فريلانس','Photographer & Videographer · Doha':'مصوّر فوتوغرافي وفيديو · الدوحة',
 'Al Shaqab Longines Championships, Sabra, Cityscape Qatar 2024, Burgundy Branding.':'بطولات الشقب لونجين، وصبرة، وسيتي سكيب قطر 2024، وبورغندي للهوية البصرية.',
 'Dec 2024 — Oct 2025':'ديسمبر 2024 — أكتوبر 2025','Digital Marketing Strategist · Doha':'استراتيجي تسويق رقمي · الدوحة',
 'Digital strategy, ad campaigns and SEO/SEM; directed and filmed live singing concerts staged in theatres.':'استراتيجية رقمية وحملات إعلانية وSEO/SEM؛ وإخراج وتصوير حفلات غنائية حيّة على خشبة المسرح.',
 'Apr — Sep 2024':'أبريل — سبتمبر 2024','Social Fund for Development':'الصندوق الاجتماعي للتنمية',"Communication Officer · Sana'a":'مسؤول اتصال · صنعاء',
 'Jan 2022 — Apr 2024':'يناير 2022 — أبريل 2024','Self-employed':'نشاط مستقل','Filmmaker & Social Media Marketer':'صانع أفلام ومسوّق عبر وسائل التواصل',
 'Humanitarian & Development':'الإنساني والتنموي','Jul 2017 — Apr 2023':'يوليو 2017 — أبريل 2023','Aug 2020 — Jul 2022':'أغسطس 2020 — يوليو 2022',
 'Yemen Economical Corporation':'المؤسسة الاقتصادية اليمنية',"32-minute documentary on war's impact on the economy; visual identity redesign.":'فيلم وثائقي مدته 32 دقيقة عن أثر الحرب على الاقتصاد؛ وإعادة تصميم الهوية البصرية.',
 'Oct 2020 — May 2022':'أكتوبر 2020 — مايو 2022','Yemen Family Care Association':'جمعية رعاية الأسرة اليمنية','Communication Officer & Team Leader':'مسؤول اتصال وقائد فريق',
 'Communication guidelines, sector profile videos, website content, staff training.':'أدلة الاتصال، وفيديوهات تعريفية بالقطاعات، ومحتوى الموقع، وتدريب الموظفين.',
 'Nov 2018 — Dec 2019':'نوفمبر 2018 — ديسمبر 2019','Alrayyan Media & Marketing':'الريان للإعلام والتسويق','Media Executive · Qatar':'مسؤول إعلامي · قطر',
 'Filmmaker, Editor & Motion Graphics':'صانع أفلام ومونتير وموشن جرافيك',
 'UNDP, SMEPS, UNICEF, Tadhamon Islamic Bank, PepsiCo "Liter of Light".':'برنامج الأمم المتحدة الإنمائي، وSMEPS، واليونيسف، وبنك التضامن الإسلامي، وبيبسي "Liter of Light".',
 'Jun — Jul 2017':'يونيو — يوليو 2017','UNICEF & Labor Office':'اليونيسف ومكتب العمل','Documentary Filmmaker':'صانع أفلام وثائقية',
 'Journalism & Photography':'الصحافة والتصوير','Reporter · Photographer · Producer':'مراسل · مصوّر · منتج',
 'Yemen Times · National Yemen Newspaper':'يمن تايمز · صحيفة ناشيونال يمن','Journalist & Photojournalist':'صحفي ومصوّر صحفي','Jul — Oct 2014':'يوليو — أكتوبر 2014',
 'Professional Photographer':'مصوّر محترف','Stories of children reached by vaccination programmes in remote villages.':'قصص أطفال وصلت إليهم برامج التطعيم في قرى نائية.',
 'Mar — Oct 2013':'مارس — أكتوبر 2013','National Dialogue Conference · UNDP':'مؤتمر الحوار الوطني · UNDP','Alaan TV · Turkish Medical Conference':'قناة الآن · المؤتمر الطبي التركي','Film Director · Photographer':'مخرج أفلام · مصوّر',
 /* skills */
 'Aerial Filming':'التصوير الجوي','Video Editing':'المونتاج','Photography':'التصوير الفوتوغرافي','Live Concert Direction':'إخراج الحفلات الحية','Content Creation':'صناعة المحتوى','Motion Graphics':'الموشن جرافيك','Digital Marketing':'التسويق الرقمي',
 /* contact / footer */
 'Jeddah, Saudi Arabia ↑':'جدة، السعودية ↑','Stories. Crafted. Visually.':'حكايات تُصاغ بصرياً.',
 /* site 2 only */
 "Journey through a filmmaker's world · Jeddah, Saudi Arabia":'رحلة في عالم صانع أفلام · جدة، السعودية','Start the journey':'ابدأ الرحلة','See the journey':'شاهد الرحلة',
 '01 · Story':'01 · الحكاية','02 · Latest focus':'02 · أحدث تركيز','03 · Work':'03 · الأعمال','04 · Journey':'04 · الرحلة','05 · Craft':'05 · الحرفة','06 · Contact':'06 · تواصل',
 "I'm a communication specialist and filmmaker. For fourteen years I've worked across humanitarian and commercial projects, turning technical needs into visual stories that meet the highest standards.":'أنا أخصائي اتصال وصانع أفلام. على مدى أربعة عشر عاماً عملتُ في مشاريع إنسانية وتجارية، محوِّلاً الاحتياجات الفنية إلى حكايات بصرية بأعلى المعايير.',
 'International exposure has shaped how I work with government agencies, private organisations and journalists. As cinematographer, photographer, editor and colour grader, I deliver in any environment.':'صقلت خبرتي الدولية أسلوبي في العمل مع الجهات الحكومية والمؤسسات الخاصة والصحفيين. وبوصفي مصوّراً سينمائياً ومصوّراً ومونتيراً ومصحّح ألوان، أُنجز في أي بيئة.',
 'Swipe or scroll sideways →':'اسحب أو مرّر جانباً ←',
 /* pdf only */
 'Story first.':'الحكاية أولاً.','Cinematic AI video guided by real filmmaking: framing, light, pace and sound.':'فيديو سينمائي بالذكاء الاصطناعي تقوده صنعة الفيلم الحقيقية: كادر وإضاءة وإيقاع وصوت.','Worked with':'عملتُ مع','Jeddah, Saudi Arabia':'جدة، السعودية','Lebanese International University':'الجامعة اللبنانية الدولية','— Bachelor of Arts, Graphic Design · 2013 – 2017':'— بكالوريوس آداب في التصميم الجرافيكي · 2013 – 2017',
 'Portfolio & Resume · 2026':'البورتفوليو والسيرة الذاتية · 2026','Experience':'الخبرات','Latest focus ':'أحدث تركيز','Films & videos':'الأفلام والفيديوهات','Photography ':'التصوير','Craft':'الحرفة',
 'Career':'المسيرة','Since June 2026':'منذ يونيو 2026','Currently':'حالياً','AI Video Creator':'مبدع فيديو بالذكاء الاصطناعي','What I do':'ماذا أصنع'
};

/* ---------- blocks where Arabic word-order differs (innerHTML) ---------- */
var H_COMMON=[];
var H1=[
 ['.hero-info p','<b class="hl">14 سنة</b> وأنا أقتنص الواقع بعدستي. وفي <b class="hl">2026</b> — أصنع المستحيل. <b>صانع أفلام</b> يدمج <b>السينما</b> بـ<b class="hl">الذكاء الاصطناعي</b> ليجعلك <b class="hl">تشعر</b> بما لم يوجد قط.'],
 ['.focus p.lead','<b class="hl">الفصل القادم</b>. أُخرج <b>الذكاء الاصطناعي</b> كما أُخرج <b>الكاميرا</b>: كادر وإضاءة وإيقاع وحكاية. <b class="hl">الخيال حين يصير سينما.</b>'],
 ['#focus h2','إبداع فيديو <em>الذكاء الاصطناعي</em>'],
 ['#work h2','لقطات <em>تتحرّك</em>'],
 ['#career h2','رحلتي <em>المهنية</em>'],
 ['#skills h2','ماذا <em>أصنع</em>'],
 ['#contact h2','لنصنع<span>معاً</span>']
];
var H2=[
 ['.hero-t p','<b class="hl">14 سنة</b> أطارد الحكايات الحقيقية في الصحارى والمسارح والميادين. وفي <b class="hl">2026</b> — أبني <b>المستحيل</b>: <b class="hl">عوالم</b> سينمائية بـ<b>الذكاء الاصطناعي</b> لم توجد من قبل. <b>ادخل.</b>'],
 ['#ai p.sm','<b class="hl">الفصل القادم</b>، منذ <b>يونيو 2026</b>. أُخرج <b>الذكاء الاصطناعي</b> كما أُخرج <b>الكاميرا</b>: كادر وإضاءة وإيقاع وحكاية. <b class="hl">الخيال حين يصير سينما.</b>'],
 ['#story h2','حيث تبدأ كل <em>لقطة</em>'],
 ['#ai h2','فيديو الذكاء الاصطناعي <em>والخيال</em>'],
 ['#work h2','لقطات <em>تتحرّك</em>'],
 ['#journey h2','الطريق <em>حتى الآن</em>'],
 ['#skills h2','ماذا <em>أصنع</em>'],
 ['#contact h2','لنصنع<em class="fr">معاً</em>']
];
var H3=[
 ['.cover .sum p:first-child','<b class="hl">14 سنة</b> وأنا أقتنص الواقع بعدستي. وفي <b class="hl">2026</b> — أصنع المستحيل. <b>صانع أفلام</b> يدمج <b>السينما</b> بـ<b class="hl">الذكاء الاصطناعي</b> ليجعلك <b class="hl">تشعر</b> بما لم يوجد قط.'],
 ['.cover .sum p:nth-child(2)','صقلت خبرتي الدولية أسلوبي في العمل مع الجهات الحكومية والمؤسسات الخاصة والصحفيين. وبوصفي مصوّراً سينمائياً ومصوّراً ومونتيراً ومصحّح ألوان، أُنجز في أي بيئة.'],
 ['.pg:nth-of-type(2) h2','<span>رحلتي</span> <em>المهنية</em>'],
 ['.pg:nth-of-type(3) h2','إبداع فيديو <em>الذكاء الاصطناعي</em>'],
 ['.pg:nth-of-type(4) h2','لقطات <em>تتحرّك</em>'],
 ['.pg:nth-of-type(5) h2','لحظات <em>محفوظة</em>'],
 ['.pg:nth-of-type(6) h2','المهارات <em>والشركاء</em>'],
 ['.cta h2','لنصنع<span>معاً</span>']
];
var HMAP=PDF?H3:(S2?H2:H1);

/* ---------- styles ---------- */
var css=document.createElement('style');
css.textContent=[
 '#langbtn{border:1px solid currentColor;background:transparent;color:#fff;border-radius:30px;padding:8px 16px;font:700 12px Inter,Cairo,sans-serif;cursor:pointer;margin-inline-start:12px;transition:.2s;white-space:nowrap}',
 '#langbtn:hover{background:#fff;color:#111}',
 'html[lang=ar] body{font-family:Cairo,"Segoe UI",Tahoma,sans-serif}',
 'html[lang=ar] *{letter-spacing:0!important}',
 'html[lang=ar] body *:not(.latin){font-family:Cairo,"Segoe UI",Tahoma,sans-serif!important}',
 'html[lang=ar] .disp,html[lang=ar] .serif,html[lang=ar] .fr{font-weight:900!important;text-transform:none!important;line-height:1.25!important}',
 /* keep Latin display type where the name / numerals live */
 'html[lang=ar] .hero-name .disp,html[lang=ar] .cover h1,html[lang=ar] .logo b,html[lang=ar] .badge b,html[lang=ar] .stat b,html[lang=ar] .hb b,html[lang=ar] .ring b{font-family:Anton,Impact,sans-serif!important;font-weight:400!important}',
 'html[lang=ar] .hero-name .disp,html[lang=ar] .cover h1 span{text-transform:uppercase!important;line-height:.9!important}',
 'html[lang=ar] .hero-t h1,html[lang=ar] .brand,html[lang=ar] .hb b,html[lang=ar] .ring b{font-family:"DM Serif Display",Georgia,serif!important;font-weight:400!important}',
 'html[lang=ar] .hero-t h1{line-height:.98!important}',
 'html[lang=ar] a[href^="tel"],html[lang=ar] a[href*="tiktok"],html[lang=ar] a[href*="linkedin"]{direction:ltr;unicode-bidi:isolate}',
 'html[lang=ar] section:not(.contact) h2.disp,html[lang=ar] .sec:not(.contact) h2{font-size:clamp(34px,6vw,88px)!important}',
 /* site 1 */
 'html[dir=rtl] .hero-name{direction:ltr}',
 'html[dir=rtl] .marq,html[dir=rtl] .logos{direction:ltr}',
 'html[dir=rtl] .row:hover{padding-left:0;padding-right:14px;background:linear-gradient(270deg,rgba(242,162,12,.08),transparent)}',
 'html[dir=rtl] .reel .tag{left:auto;right:16px}',
 'html[dir=rtl] .reel .snd{right:auto;left:16px}',
 'html[dir=rtl] .hero-info p{text-align:right}',
 /* site 2 */
 'html[dir=rtl] .hero-t{left:auto;right:var(--pad);text-align:right}',
 'html[dir=rtl] .hero-t h1{direction:ltr;text-align:right}',
 'html[dir=rtl] .hero-t ~ .portrait{right:auto;left:clamp(0px,7vw,140px)}',
 'html[dir=rtl] .hero-badges{left:auto;right:var(--pad)}',
 'html[dir=rtl] .scroll{right:auto;left:var(--pad)}',
 'html[dir=rtl] .path{padding-left:0;padding-right:clamp(26px,5vw,70px)}',
 'html[dir=rtl] .path::before{left:auto;right:6px}',
 'html[dir=rtl] .stop::before{left:auto;right:calc(clamp(26px,5vw,70px)*-1 + 2px)}',
 'html[dir=rtl] .ai .reel .snd{left:22px}',
 'html[dir=rtl] .hero-t .top{flex-direction:row-reverse;justify-content:flex-end}',
 /* pdf */
 'html[lang=ar] .cover h1 span{font-family:Anton,Impact,sans-serif!important;font-weight:400!important;text-transform:uppercase!important;line-height:.92!important}',
 'html[lang=ar] .pg .row{padding:1.3mm 0}',
 'html[lang=ar] .pg .row .x{font-size:7.2pt;line-height:1.35}',
 'html[lang=ar] .pg .era{margin:3.4mm 0 .6mm}',
 'html[dir=rtl] .cover .sum{direction:rtl;text-align:right}',
 'html[dir=rtl] .cover .now,html[dir=rtl] .cover .nowbar{direction:rtl}',
 '@media (max-width:860px){html[dir=rtl] .hero-t{left:var(--pad)}html[dir=rtl] .hero-t ~ .portrait{left:50%;right:auto;transform:translateX(-50%)}}'
].join('\n');
document.head.appendChild(css);

/* ---------- engine ---------- */
function walk(fn){
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
    if(/^\s*$/.test(n.nodeValue))return NodeFilter.FILTER_REJECT;
    var p=n.parentElement; if(!p||p.closest('script,style,#langbtn'))return NodeFilter.FILTER_REJECT; return NodeFilter.FILTER_ACCEPT;}});
  var a=[]; while(w.nextNode())a.push(w.currentNode); a.forEach(fn);
}
var origTitle=document.title;
function apply(l){
  var ar=l==='ar';
  document.documentElement.lang=ar?'ar':'en';
  document.documentElement.dir=ar?'rtl':'ltr';
  HMAP.forEach(function(m){document.querySelectorAll(m[0]).forEach(function(el){
    if(el.dataset.en===undefined)el.dataset.en=el.innerHTML; el.innerHTML=ar?m[1]:el.dataset.en;});});
  walk(function(n){
    var raw=n._o!==undefined?n._o:n.nodeValue, key=raw.trim();
    if(TXT.hasOwnProperty(key)){ if(n._o===undefined)n._o=raw; n.nodeValue=ar?raw.replace(key,TXT[key]):n._o; }
  });
  document.title=ar?'Ezzaddin Alzain — صانع أفلام · صانع محتوى · فيديو بالذكاء الاصطناعي':origTitle;
  var b=document.getElementById('langbtn'); if(b)b.textContent=ar?'EN':'عربي';
  try{localStorage.setItem('lang',l)}catch(e){}
}
/* sound button text depends on state */
document.querySelectorAll('.snd').forEach(function(btn){
  btn.addEventListener('click',function(){
    var v=btn.closest('.reel')&&btn.closest('.reel').querySelector('video'); if(!v)return;
    var ar=document.documentElement.lang==='ar';
    btn.textContent=ar?(v.muted?'الصوت: متوقف':'الصوت: يعمل'):(v.muted?'SOUND OFF':'SOUND ON');
  });
});
/* toggle button */
if(!PDF){
  var btn=document.createElement('button'); btn.id='langbtn'; btn.type='button'; btn.textContent='عربي'; btn.setAttribute('aria-label','Language');
  var nav=document.querySelector('nav'), burger=nav&&nav.querySelector('.burger');
  if(nav){ nav.insertBefore(btn,burger||null); }
  btn.addEventListener('click',function(){apply(document.documentElement.lang==='ar'?'en':'ar')});
}
var fl=document.createElement('link'); fl.rel='stylesheet'; fl.href='https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;800;900&display=swap'; document.head.appendChild(fl);

var want='en';
try{ var q=new URLSearchParams(location.search).get('lang'); want=q||localStorage.getItem('lang')||'en'; }catch(e){}
if(want==='ar')apply('ar');
window.__applyLang=apply;
})();







