/* ═══════════════════════════════════════════════════════════════════════════
   MOROCCO WELL DRILLING — main.js
   Engine: loader · theme · i18n (AR/FR/EN) · typed · counters · parallax ·
   geo drill animation · sliders · before/after · reveal · ripple ·
   burger · scrollspy · quote form → WhatsApp
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var PHONE = "212652879789";

  /* ═══════════════════ 1) Loader ═══════════════════ */
  var loader = $("#loader");
  function hideLoader() {
    if (!loader || loader.classList.contains("done")) return;
    loader.classList.add("done");
    setTimeout(function () { loader.style.display = "none"; }, 700);
  }
  window.addEventListener("load", function () { setTimeout(hideLoader, 350); });
  setTimeout(hideLoader, 2600); /* safety: never trap the visitor */

  /* ═══════════════════ 2) Theme ═══════════════════ */
  var themeToggle = $("#themeToggle");
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("mwd-theme", t); } catch (e) {}
  }
  try {
    var savedTheme = localStorage.getItem("mwd-theme");
    if (savedTheme) setTheme(savedTheme);
  } catch (e) {}
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      setTheme(cur === "dark" ? "light" : "dark");
    });
  }

  /* ═══════════════════ 3) i18n ═══════════════════ */
  var I18N = {
    ar: {
      "title": "MOROCCO WELL DRILLING | حفر الآبار — حفر آبار المياه في المغرب فاس مكناس",
      "brand.sub": "حفر الآبار",
      "nav.about": "من نحن", "nav.services": "خدماتنا", "nav.equipment": "معداتنا",
      "nav.areas": "مناطق الخدمة", "nav.gallery": "معرض الأعمال",
      "nav.testimonials": "آراء العملاء", "nav.contact": "اتصل بنا", "nav.quote": "عرض سعر مجاني",
      "hero.badge": "شركة عائلية مغربية بخبرة سورية عريقة في الحفر",
      "hero.title": "نحفر عميقاً… لنصل إلى الماء أينما كنت في المغرب",
      "hero.sub": "حلول مائية متكاملة من الضربة الأولى إلى ضخّ الماء — بتجهيزات حديثة وفرق عائلية تغطي كل جهات المملكة.",
      "hero.call": "اتصل الآن", "hero.quote": "اطلب عرض سعر",
      "stats.wells": "بئر محفورة", "stats.meters": "متر حفر",
      "stats.regions": "جهة مغطاة", "stats.years": "سنة خبرة",
      "about.kicker": "قصتنا",
      "about.title": "حرفةٌ توارثناها… وجذورٌ غرسناها في المغرب",
      "about.p1": "من قلب الشام إلى أرض المغرب، حملت عائلاتنا معها حرفةً توارثتها الأجيال: حفر الآبار واستخراج الماء من أعماق الأرض. عقودٌ من الخبرة السورية العريقة في الحفر الارتوازي اجتمعت اليوم مع جذورٍ مغربية أصيلة تمتد من فاس ومكناس إلى أكادير ومراكش.",
      "about.p2": "تقود MOROCCO WELL DRILLING فرقاً عائلية متكاملة تمتلك جميع آلات الحفر ومعداته — من شاحنات الحفر المتنقلة إلى المطارق الغاطسة ولقم DTH — لتخدم الفلاحين والمربين والصناعيين والعائلات في كل جهة من جهات المملكة، بسرعة العائلة والتزامها، وبمعايير الشركات العالمية.",
      "about.p3": "مقرّنا الرئيسي في منطقة فاس – مكناس، وفروعنا العائلية في أكادير ومراكش جاهزة للانطلاق نحو موقعك في أي وقت.",
      "about.feat1": "خبرة سورية متوارثة في الحفر العميق",
      "about.feat2": "أسطول شاحنات ومعدات مملوكة بالكامل",
      "about.feat3": "فرق عائلية في 4 مدن تغطي كل المملكة",
      "city.fes": "فاس", "city.meknes": "مكناس", "city.agadir": "أكادير", "city.marrakech": "مراكش",
      "about.badgeYears": "+25 سنة خبرة", "about.badgeSub": "في حفر الآبار",
      "services.kicker": "خدماتنا",
      "services.title": "كل ما يحتاجه بئرك… من أول ضربة إلى آخر قطرة",
      "svc1.t": "حفر الآبار الارتوازية والسطحية",
      "svc1.d": "حفر آبار ارتوازية وسطحية بأقطار وأعماق مختلفة وفق طبيعة الأرض، بأحدث أنظمة الحفر Rotary وDTH.",
      "svc2.t": "الدراسات الجيولوجية وتحديد مواقع المياه",
      "svc2.d": "تحديد مواقع المياه ودراسة الطبقات قبل الحفر لضمان أعلى نسبة نجاح وأفضل عمق.",
      "svc3.t": "تركيب وصيانة المضخات الغاطسة",
      "svc3.d": "توريد وتركيب وصيانة المضخات الغاطسة بأنواعها مع لوحات التحكم والكابلات.",
      "svc4.t": "تجهيز الآبار والتعقيم وتحلية المياه",
      "svc4.d": "تجهيز كامل للآبار: التعقيم، التحلية والتنقية للاستعمال المنزلي أو الفلاحي أو الصناعي.",
      "svc4.extra": "اعمال جانبية",
      "svc5.t": "صيانة وإعادة تأهيل الآبار القديمة",
      "svc5.d": "تنظيف الآبار القديمة، تعميقها، إعادة تأهيلها واسترجاع صبيبها المفقود.",
      "svc6.t": "بيع جميع المعدات للحفارات",
      "svc6.d": "نبيع جميع معدات وقطع الحفارات: من لقم الحفر والمطارق إلى المضخات والوصلات — جديدة ومضمونة.",
      "services.cta.t": "تحتاج خدمة غير مذكورة؟",
      "services.cta.d": "كلمنا على واتساب وسنجد لك الحل المائي المناسب.",
      "services.cta.btn": "راسلنا واتساب",
      "geo.kicker": "رحلة الماء",
      "geo.title": "من السطح إلى العمق… نعرف الطريق",
      "geo.d": "تابع الحفرة وهي تخترق طبقات الأرض طبقةً طبقة حتى بلوغ الخزان الجوفي.",
      "geo.layer1": "التربة السطحية", "geo.layer2": "الطبقات الصخرية", "geo.layer3": "الخزان الجوفي — الماء",
      "equip.kicker": "معداتنا",
      "equip.title": "عتادٌ كامل مملوك… جاهز للتدخل في أي وقت",
      "equip.note": "نمتلك جميع آلات الحفر ومعداتنا جاهزة للتدخل السريع — لا ننتظر مورّداً ولا نؤجّر عتاداً.",
      "eq1.t": "لقم الحفر DTH",
      "eq1.d": "لقم ثقب بأقطار متعددة مصممة لأقسى التكوينات الصخرية، جاهزة في مخازننا.",
      "eq2.t": "المطارق الغاطسة DHD380",
      "eq2.d": "مطارق ضغط عالي بكفاءة عالمية نمتلكها بالكامل لتدخل سريع.",
      "eq3.t": "شاحنات الحفر المتنقلة",
      "eq3.d": "أسطول شاحنات مرسيدس مجهزة للحفر في أصعب المواقع وإلى أعماق كبيرة.",
      "eq4.t": "قطع الغيار والمستهلكات",
      "eq4.d": "وصلات، جرابات ومستهلكات متوفرة لتقليل أي توقف عن العمل.",
      "areas.kicker": "مناطق الخدمة",
      "areas.title": "حيث يوجد الماء… نصل إليك",
      "areas.hq": "المقر الرئيسي", "areas.branch": "فرع عائلي",
      "areas.fes.d": "سهل سايس وضواحيه — قلب نشاطنا اليومي.",
      "areas.meknes.d": "الفلاحيّون والكسّابة حول مكناس على موعد مع الماء.",
      "areas.agadir.d": "سوس والجنوب — فرق مجهزة للتكوينات الصخرية العميقة.",
      "areas.marrakech.d": "الحوز والنخيل — ماءٌ للضياع والمنتجعات والفلاحين.",
      "areas.more": "ونصل إلى أي جهة في المملكة — الرباط، الدار البيضاء، وجدة، العيون… كل مدن المغرب.",
      "gallery.kicker": "معرض الأعمال",
      "gallery.title": "من الميدان… صورٌ تتحدث عنا",
      "gallery.c1": "بيع جميع المعدات للحفارات من الى",
      "gallery.c2": "برج الحفر جاهز للانطلاق",
      "gallery.c3": "جميع القطع و المزيد", "gallery.c4": "جميع القطع و المزيد",
      "gallery.c5": "حفارة ريح", "gallery.c6": "حفر في أماكن ضيقة",
      "gallery.ph": "مكان محجوز لصور أعمالك القادمة",
      "ba.kicker": "قبل / بعد",
      "ba.title": "أرضٌ عطشى… تصيرُ خضراء",
      "ba.before": "قبل", "ba.after": "بعد",
      "ba.caption": "من أرضٍ عطشى إلى ماءٍ يجري — هكذا نغيّر الأراضي.",
      "why.kicker": "لماذا نحن",
      "why.title": "ثلاثُ ضمانات… كُتبت في شعارنا",
      "why1.t": "حلول المياه",
      "why1.d": "نرافقك من الضربة الأولى إلى ضخّ أول قطرة، بحلول مائية متكاملة.",
      "why2.t": "احترافية",
      "why2.d": "معدات حديثة، فرق مدرّبة، والتزام صارم بالسلامة وبمواعيد التسليم.",
      "why3.t": "موثوق ومستدام",
      "why3.d": "آبار تدوم لعقود، أسعار شفافة، وضمان على حفر البئر.",
      "test.kicker": "آراء العملاء",
      "test.title": "كلمةٌ من أرضٍ جرى ماؤها",
      "t1.q": "وعدوني بعمق 180 متراً فوجدنا الماء عند 165. دراسة جيولوجية صادقة وفريق نظيف في التعامل. البئر تشتغل منذ موسمين بلا توقف.",
      "t1.n": "الحاج محمد السالمي", "t1.r": "فلاح — سهل سايس، فاس",
      "t2.q": "ثالث بئر نحفرها معهم. الصبيب الموعود هو الصبيب المكتوب في العقد، والتسليم قبل الموعد.",
      "t2.n": "تعاونية أمل الفلاحية", "t2.r": "مكناس",
      "t3.q": "جاؤوا من فاس إلى أكادير خلال 48 ساعة، حفروا وركّبوا المضخة وعقّموا البئر. خدمة كاملة بسعر واضح.",
      "t3.n": "يوسف بناني", "t3.r": "مستثمرة فلاحية — أكادير",
      "t4.q": "كنت أخاف على حديقة الرياض، لكن الفريق حفر ونسّق دون إتلاف شيء. الماء صار متوفراً في كل المواسم.",
      "t4.n": "رياض دار القمر", "t4.r": "مراكش",
      "quote.kicker": "عرض سعر مجاني",
      "quote.title": "أخبرنا عن مشروعك… ونردّ عليك خلال ساعات",
      "form.name": "الاسم الكامل", "form.name.ph": "مثال: أحمد العلوي",
      "form.phone": "رقم الهاتف", "form.city": "المدينة / المنطقة",
      "form.city.ph": "فاس، مكناس، أكادير…", "form.service": "نوع الخدمة",
      "form.service.ph": "اختر الخدمة…",
      "form.depth": "العمق التقريبي المطلوب (اختياري)", "form.depth.ph": "مثال: 120 متر",
      "form.send": "أرسل الطلب عبر واتساب",
      "form.note": "يُفتح واتساب مباشرةً ورسالتك جاهزة للإرسال — لا نحفظ بياناتك على أي خادم.",
      "quote.step1.t": "أرسل طلبك",
      "quote.step1.d": "عبّئ النموذج وسنستقبله فوراً على واتساب.",
      "quote.step2.t": "نتصل ونحدد الزيارة",
      "quote.step2.d": "معاينة الموقع والضربة الأولى خلال أيام.",
      "quote.step3.t": "نحفر ونسلّم الماء",
      "quote.step3.d": "حفرٌ نظيف، تجهيز كامل، وماءٌ يجري في أرضك.",
      "contact.kicker": "اتصل بنا",
      "contact.title": "فريقنا جاهز… كلمنا اليوم",
      "contact.call.t": "الهاتف", "contact.wa.t": "واتساب",
      "contact.wa.d": "رد سريع طوال أيام الأسبوع",
      "contact.hours.t": "أوقات العمل",
      "contact.hours.d": "خدمة 24 ساعة — 7 أيام في الأسبوع",
      "contact.loc.t": "المقر والفروع",
      "contact.loc.d": "فاس – مكناس • أكادير • مراكش",
      "contact.follow": "تابعنا:",
      "footer.about": "شركة عائلية مغربية بخبرة سورية عريقة في حفر الآبار الارتوازية وحلول المياه، مقرها فاس–مكناس وفروعها في أكادير ومراكش.",
      "footer.links.t": "روابط سريعة", "footer.contact.t": "تواصل",
      "footer.rights": "© 2026 MOROCCO WELL DRILLING — جميع الحقوق محفوظة"
    },
    fr: {
      "title": "MOROCCO WELL DRILLING | Forage de puits au Maroc — Fès, Meknès, Agadir, Marrakech",
      "brand.sub": "Forage de puits",
      "nav.about": "À propos", "nav.services": "Nos services", "nav.equipment": "Nos équipements",
      "nav.areas": "Zones desservies", "nav.gallery": "Galerie",
      "nav.testimonials": "Témoignages", "nav.contact": "Contact", "nav.quote": "Devis gratuit",
      "hero.badge": "Entreprise familiale marocaine, héritage syrien du forage",
      "hero.title": "Nous forons profond… pour trouver l'eau, où que vous soyez au Maroc",
      "hero.sub": "Solutions d'eau complètes, du premier coup de foret au pompage — équipements modernes et équipes familiales couvrant tout le Royaume.",
      "hero.call": "Appeler maintenant", "hero.quote": "Demander un devis",
      "stats.wells": "Puits forés", "stats.meters": "Mètres forés",
      "stats.regions": "Régions couvertes", "stats.years": "Ans d'expérience",
      "about.kicker": "Notre histoire",
      "about.title": "Un savoir-faire hérité… des racines plantées au Maroc",
      "about.p1": "Du cœur du Levant jusqu'au Maroc, nos familles ont porté un métier transmis de génération en génération : le forage de puits et l'extraction de l'eau des profondeurs. Des décennies d'expertise syrienne en forage artésien réunies aujourd'hui à des racines marocaines authentiques, de Fès et Meknès à Agadir et Marrakech.",
      "about.p2": "MOROCCO WELL DRILLING dirige des équipes familiales complètes qui possèdent toutes leurs machines de forage — des camions de forage mobiles aux marteaux fond-de-trou et aux taillants DTH — au service des agriculteurs, éleveurs, industriels et familles de tout le Royaume, avec la rapidité et l'engagement d'une famille, aux standards des grandes entreprises internationales.",
      "about.p3": "Notre siège se situe dans la région Fès – Meknès, et nos antennes familiales d'Agadir et Marrakech sont prêtes à partir vers votre site à tout moment.",
      "about.feat1": "Expertise syrienne héritée du forage profond",
      "about.feat2": "Flotte de camions et équipements détenus à 100 %",
      "about.feat3": "Équipes familiales dans 4 villes couvrant tout le Royaume",
      "city.fes": "Fès", "city.meknes": "Meknès", "city.agadir": "Agadir", "city.marrakech": "Marrakech",
      "about.badgeYears": "+25 ans d'expérience", "about.badgeSub": "de forage de puits",
      "services.kicker": "Nos services",
      "services.title": "Tout ce que votre puits exige… du premier coup de foret à la dernière goutte",
      "svc1.t": "Forage de puits artésiens et de surface",
      "svc1.d": "Forage de puits artésiens et de surface, diamètres et profondeurs variés selon la nature du terrain, avec les derniers systèmes Rotary et DTH.",
      "svc2.t": "Études géologiques et localisation de l'eau",
      "svc2.d": "Localisation de l'eau et étude des couches avant forage pour garantir le meilleur taux de réussite et la profondeur optimale.",
      "svc3.t": "Installation et maintenance de pompes immergées",
      "svc3.d": "Fourniture, installation et maintenance de pompes immergées, avec tableaux de commande et câbles.",
      "svc4.t": "Équipement, désinfection et dessalement des puits",
      "svc4.d": "Équipement complet des puits : désinfection, dessalement et purification pour usage domestique, agricole ou industriel.",
      "svc4.extra": "Travaux annexes",
      "svc5.t": "Maintenance et réhabilitation des vieux puits",
      "svc5.d": "Nettoyage des vieux puits, approfondissement, réhabilitation et récupération du débit perdu.",
      "svc6.t": "Vente de tous les équipements de forage",
      "svc6.d": "Vente de tous les équipements et pièces de forage : des taillants et marteaux aux pompes et raccords — neufs et garantis.",
      "services.cta.t": "Un service non mentionné ?",
      "services.cta.d": "Écrivez-nous sur WhatsApp et nous trouverons la solution eau adaptée.",
      "services.cta.btn": "Écrivez-nous sur WhatsApp",
      "geo.kicker": "Le parcours de l'eau",
      "geo.title": "De la surface aux profondeurs… nous connaissons le chemin",
      "geo.d": "Suivez le trépan traverser les couches de la terre, couche par couche, jusqu'à la nappe phréatique.",
      "geo.layer1": "Sol de surface", "geo.layer2": "Couches rocheuses", "geo.layer3": "Nappe phréatique — l'eau",
      "equip.kicker": "Nos équipements",
      "equip.title": "Un parc complet qui nous appartient… prêt à intervenir à tout moment",
      "equip.note": "Nous possédons toutes nos machines de forage, prêtes pour une intervention rapide — sans fournisseur à attendre, sans matériel loué.",
      "eq1.t": "Taillants DTH",
      "eq1.d": "Taillants de plusieurs diamètres, conçus pour les formations rocheuses les plus dures, en stock dans nos dépôts.",
      "eq2.t": "Marteaux fond-de-trou DHD380",
      "eq2.d": "Marteaux haute pression de standard mondial, entièrement détenus, pour des interventions rapides.",
      "eq3.t": "Camions de forage mobiles",
      "eq3.d": "Une flotte de camions Mercedes équipés pour forer sur les sites les plus difficiles et aux grandes profondeurs.",
      "eq4.t": "Pièces de rechange et consommables",
      "eq4.d": "Raccords, manchons et consommables en stock pour limiter tout arrêt de travail.",
      "areas.kicker": "Zones desservies",
      "areas.title": "Là où se trouve l'eau… nous arrivons",
      "areas.hq": "Siège principal", "areas.branch": "Antenne familiale",
      "areas.fes.d": "La plaine du Saïs et ses environs — le cœur de notre activité quotidienne.",
      "areas.meknes.d": "Agriculteurs et éleveurs autour de Meknès, rendez-vous avec l'eau.",
      "areas.agadir.d": "Souss et le Sud — des équipes équipées pour les formations rocheuses profondes.",
      "areas.marrakech.d": "Al Haouz et les palmeraies — de l'eau pour les fermes, les resorts et les agriculteurs.",
      "areas.more": "Et nous intervenons dans toute région du Royaume — Rabat, Casablanca, Oujda, Laâyoune… toutes les villes du Maroc.",
      "gallery.kicker": "Réalisations",
      "gallery.title": "Depuis le terrain… des images qui parlent de nous",
      "gallery.c1": "Vente de tous les équipements de forage — de A à Z",
      "gallery.c2": "Le mât de forage prêt à démarrer",
      "gallery.c3": "Toutes les pièces et plus encore", "gallery.c4": "Toutes les pièces et plus encore",
      "gallery.c5": "Foreuse dans le vent", "gallery.c6": "Forage en espaces exigus",
      "gallery.ph": "Place réservée à vos futures réalisations",
      "ba.kicker": "Avant / Après",
      "ba.title": "Une terre assoiffée… qui devient verte",
      "ba.before": "Avant", "ba.after": "Après",
      "ba.caption": "D'une terre assoiffée à une eau qui coule — voilà comment nous transformons les terres.",
      "why.kicker": "Pourquoi nous",
      "why.title": "Trois garanties… inscrites dans notre devise",
      "why1.t": "Solutions eau",
      "why1.d": "Nous vous accompagnons du premier coup de foret au pompage de la première goutte, avec des solutions intégrées.",
      "why2.t": "Professionnalisme",
      "why2.d": "Équipements modernes, équipes formées et respect strict de la sécurité et des délais.",
      "why3.t": "Fiable et durable",
      "why3.d": "Des puits qui durent des décennies, des prix transparents et un forage garanti.",
      "test.kicker": "Témoignages",
      "test.title": "Une parole de terres où l'eau coule",
      "t1.q": "« Ils m'avaient promis 180 mètres et nous avons trouvé l'eau à 165. Une étude géologique honnête et une équipe irréprochable. Le puits tourne depuis deux saisons sans arrêt. »",
      "t1.n": "El Hadj Mohamed Es-Salami", "t1.r": "Agriculteur — plaine du Saïs, Fès",
      "t2.q": "« Notre troisième puits avec eux. Le débit promis est celui écrit dans le contrat, et la livraison en avance sur le délai. »",
      "t2.n": "Coopérative Amal Al Fellaha", "t2.r": "Meknès",
      "t3.q": "« Ils sont venus de Fès à Agadir en 48 heures, ont foré, installé la pompe et désinfecté le puits. Un service complet à prix clair. »",
      "t3.n": "Youssef Bennani", "t3.r": "Ferme agricole — Agadir",
      "t4.q": "« Je craignais pour le jardin du riad, mais l'équipe a foré et aménagé sans rien endommager. L'eau est disponible en toute saison. »",
      "t4.n": "Riad Dar Al Qamar", "t4.r": "Marrakech",
      "quote.kicker": "Devis gratuit",
      "quote.title": "Parlez-nous de votre projet… réponse en quelques heures",
      "form.name": "Nom complet", "form.name.ph": "Ex. : Ahmed Alaoui",
      "form.phone": "Téléphone", "form.city": "Ville / Région",
      "form.city.ph": "Fès, Meknès, Agadir…", "form.service": "Type de service",
      "form.service.ph": "Choisissez…",
      "form.depth": "Profondeur approximative souhaitée (optionnel)", "form.depth.ph": "Ex. : 120 mètres",
      "form.send": "Envoyer via WhatsApp",
      "form.note": "WhatsApp s'ouvre directement avec votre message prêt à envoyer — aucune donnée n'est stockée sur un serveur.",
      "quote.step1.t": "Envoyez votre demande",
      "quote.step1.d": "Remplissez le formulaire, nous le recevons immédiatement sur WhatsApp.",
      "quote.step2.t": "Nous appelons et fixons la visite",
      "quote.step2.d": "Visite du site et premier coup de foret sous quelques jours.",
      "quote.step3.t": "Nous forons et livrons l'eau",
      "quote.step3.d": "Un forage propre, un équipement complet et de l'eau qui coule sur votre terre.",
      "contact.kicker": "Contact",
      "contact.title": "Notre équipe est prête… appelez-nous aujourd'hui",
      "contact.call.t": "Téléphone", "contact.wa.t": "WhatsApp",
      "contact.wa.d": "Réponse rapide 7 jours sur 7",
      "contact.hours.t": "Horaires",
      "contact.hours.d": "Service 24h/24 — 7 jours sur 7",
      "contact.loc.t": "Siège et antennes",
      "contact.loc.d": "Fès – Meknès • Agadir • Marrakech",
      "contact.follow": "Suivez-nous :",
      "footer.about": "Entreprise familiale marocaine, héritage syrien du forage artésien et solutions eau, siège à Fès–Meknès, antennes à Agadir et Marrakech.",
      "footer.links.t": "Liens rapides", "footer.contact.t": "Contact",
      "footer.rights": "© 2026 MOROCCO WELL DRILLING — Tous droits réservés"
    },
    en: {
      "title": "MOROCCO WELL DRILLING | Water Well Drilling in Morocco — Fès, Meknès, Agadir, Marrakech",
      "brand.sub": "Well Drilling",
      "nav.about": "About", "nav.services": "Services", "nav.equipment": "Equipment",
      "nav.areas": "Service Areas", "nav.gallery": "Gallery",
      "nav.testimonials": "Testimonials", "nav.contact": "Contact", "nav.quote": "Free Quote",
      "hero.badge": "Moroccan family company with a proud Syrian drilling heritage",
      "hero.title": "We drill deep… to reach water, wherever you are in Morocco",
      "hero.sub": "Complete water solutions from the first strike to pumping — modern equipment and family teams covering the whole Kingdom.",
      "hero.call": "Call now", "hero.quote": "Get a quote",
      "stats.wells": "Wells drilled", "stats.meters": "Meters drilled",
      "stats.regions": "Regions covered", "stats.years": "Years of experience",
      "about.kicker": "Our story",
      "about.title": "A craft we inherited… roots we planted in Morocco",
      "about.p1": "From the heart of the Levant to Morocco, our families carried a craft passed down through generations: well drilling and drawing water from the depths. Decades of Syrian expertise in artesian drilling, united today with authentic Moroccan roots stretching from Fès and Meknès to Agadir and Marrakech.",
      "about.p2": "MOROCCO WELL DRILLING leads complete family teams that own all their drilling machinery — from mobile drilling trucks to down-the-hole hammers and DTH bits — serving farmers, breeders, industrials and families across the Kingdom, with a family's speed and commitment, to global company standards.",
      "about.p3": "Our headquarters are in the Fès–Meknès region, and our family branches in Agadir and Marrakech are ready to head to your site at any time.",
      "about.feat1": "Inherited Syrian expertise in deep drilling",
      "about.feat2": "Fleet of trucks and equipment 100% owned",
      "about.feat3": "Family teams in 4 cities covering the whole Kingdom",
      "city.fes": "Fès", "city.meknes": "Meknès", "city.agadir": "Agadir", "city.marrakech": "Marrakech",
      "about.badgeYears": "+25 years of experience", "about.badgeSub": "of well drilling",
      "services.kicker": "Our services",
      "services.title": "Everything your well needs… from the first strike to the last drop",
      "svc1.t": "Artesian and surface well drilling",
      "svc1.d": "Artesian and surface wells drilled at various diameters and depths to suit the ground, using the latest Rotary and DTH systems.",
      "svc2.t": "Geological studies and water location",
      "svc2.d": "Locating water and studying the layers before drilling to ensure the highest success rate and the best depth.",
      "svc3.t": "Submersible pump installation and maintenance",
      "svc3.d": "Supply, installation and maintenance of submersible pumps, with control panels and cables.",
      "svc4.t": "Well equipment, disinfection and desalination",
      "svc4.d": "Complete well outfitting: disinfection, desalination and purification for domestic, agricultural or industrial use.",
      "svc4.extra": "Additional works",
      "svc5.t": "Old well maintenance and rehabilitation",
      "svc5.d": "Cleaning old wells, deepening, rehabilitating them and recovering lost flow.",
      "svc6.t": "Sale of all drilling equipment",
      "svc6.d": "We sell all drilling rig equipment and parts: from bits and hammers to pumps and fittings — new and guaranteed.",
      "services.cta.t": "Need a service not listed?",
      "services.cta.d": "Message us on WhatsApp and we will find the right water solution for you.",
      "services.cta.btn": "Message us on WhatsApp",
      "geo.kicker": "The water's journey",
      "geo.title": "From surface to depth… we know the way",
      "geo.d": "Follow the drill bit as it pierces the earth's layers, one by one, down to the aquifer.",
      "geo.layer1": "Surface soil", "geo.layer2": "Rock layers", "geo.layer3": "Aquifer — water",
      "equip.kicker": "Our equipment",
      "equip.title": "Fully owned equipment… ready to deploy at any time",
      "equip.note": "We own all our drilling machinery, ready for rapid deployment — no waiting on suppliers, no rented equipment.",
      "eq1.t": "DTH drill bits",
      "eq1.d": "Bits in multiple diameters, built for the hardest rock formations, stocked in our warehouses.",
      "eq2.t": "DHD380 down-the-hole hammers",
      "eq2.d": "World-class high-pressure hammers, fully owned, for rapid interventions.",
      "eq3.t": "Mobile drilling trucks",
      "eq3.d": "A fleet of Mercedes trucks equipped to drill in the toughest sites and to great depths.",
      "eq4.t": "Spare parts and consumables",
      "eq4.d": "Joints, sleeves and consumables in stock to minimize any downtime.",
      "areas.kicker": "Service areas",
      "areas.title": "Wherever there is water… we reach you",
      "areas.hq": "Headquarters", "areas.branch": "Family branch",
      "areas.fes.d": "The Saïs plain and its surroundings — the heart of our daily work.",
      "areas.meknes.d": "Farmers and breeders around Meknès have a date with water.",
      "areas.agadir.d": "Souss and the South — teams equipped for deep rock formations.",
      "areas.marrakech.d": "Al Haouz and the palm groves — water for farms, resorts and farmers.",
      "areas.more": "And we travel to any region of the Kingdom — Rabat, Casablanca, Oujda, Laâyoune… every city in Morocco.",
      "gallery.kicker": "Our work",
      "gallery.title": "From the field… photos that speak for us",
      "gallery.c1": "Sale of all drilling equipment — from A to Z",
      "gallery.c2": "The drilling mast ready to go",
      "gallery.c3": "All parts and more", "gallery.c4": "All parts and more",
      "gallery.c5": "Rig in the wind", "gallery.c6": "Drilling in tight spaces",
      "gallery.ph": "Reserved for your future work photos",
      "ba.kicker": "Before / After",
      "ba.title": "A thirsty land… turning green",
      "ba.before": "Before", "ba.after": "After",
      "ba.caption": "From thirsty land to flowing water — that is how we change lands.",
      "why.kicker": "Why us",
      "why.title": "Three guarantees… written in our motto",
      "why1.t": "Water solutions",
      "why1.d": "We accompany you from the first strike to pumping the first drop, with complete integrated solutions.",
      "why2.t": "Professionalism",
      "why2.d": "Modern equipment, trained teams, and a strict commitment to safety and deadlines.",
      "why3.t": "Reliable and sustainable",
      "why3.d": "Wells that last for decades, transparent prices and guaranteed drilling.",
      "test.kicker": "Testimonials",
      "test.title": "Words from land where water flows",
      "t1.q": "“They promised 180 meters and we found water at 165. An honest geological study and a clean, professional team. The well has been running non-stop for two seasons.”",
      "t1.n": "El Hadj Mohamed Es-Salami", "t1.r": "Farmer — Saïs plain, Fès",
      "t2.q": "“Our third well with them. The promised flow is the one written in the contract, and delivery was ahead of schedule.”",
      "t2.n": "Amal Al Fellaha Cooperative", "t2.r": "Meknès",
      "t3.q": "“They came from Fès to Agadir within 48 hours, drilled, installed the pump and disinfected the well. Complete service at a clear price.”",
      "t3.n": "Youssef Bennani", "t3.r": "Agricultural farm — Agadir",
      "t4.q": "“I was worried about the riad's garden, but the team drilled and finished without damaging anything. Water is now available in every season.”",
      "t4.n": "Riad Dar Al Qamar", "t4.r": "Marrakech",
      "quote.kicker": "Free quote",
      "quote.title": "Tell us about your project… we reply within hours",
      "form.name": "Full name", "form.name.ph": "e.g. Ahmed Alaoui",
      "form.phone": "Phone", "form.city": "City / Region",
      "form.city.ph": "Fès, Meknès, Agadir…", "form.service": "Service type",
      "form.service.ph": "Choose…",
      "form.depth": "Approximate depth required (optional)", "form.depth.ph": "e.g. 120 meters",
      "form.send": "Send via WhatsApp",
      "form.note": "WhatsApp opens directly with your message ready to send — no data is stored on any server.",
      "quote.step1.t": "Send your request",
      "quote.step1.d": "Fill in the form and we receive it instantly on WhatsApp.",
      "quote.step2.t": "We call and schedule the visit",
      "quote.step2.d": "Site survey and first strike within days.",
      "quote.step3.t": "We drill and deliver the water",
      "quote.step3.d": "Clean drilling, complete outfitting, and water flowing on your land.",
      "contact.kicker": "Contact",
      "contact.title": "Our team is ready… talk to us today",
      "contact.call.t": "Phone", "contact.wa.t": "WhatsApp",
      "contact.wa.d": "Fast replies 7 days a week",
      "contact.hours.t": "Working hours",
      "contact.hours.d": "24-hour service — 7 days a week",
      "contact.loc.t": "HQ and branches",
      "contact.loc.d": "Fès – Meknès • Agadir • Marrakech",
      "contact.follow": "Follow us:",
      "footer.about": "Moroccan family company with Syrian heritage in artesian well drilling and water solutions, headquartered in Fès–Meknès with branches in Agadir and Marrakech.",
      "footer.links.t": "Quick links", "footer.contact.t": "Contact",
      "footer.rights": "© 2026 MOROCCO WELL DRILLING — All rights reserved"
    }
  };

  var SLOGANS = {
    ar: ["نحفر اليوم، لنؤمّن الغد", "من الضربة الأولى إلى آخر قطرة", "خبرة سورية عريقة… جذور مغربية أصيلة", "نصل إلى كل جهات المملكة"],
    fr: ["Forer aujourd'hui, sécuriser demain", "Du premier coup de foret à la dernière goutte", "Savoir-faire syrien… racines marocaines", "Nous couvrons tout le Royaume"],
    en: ["Drilling today, securing tomorrow", "From the first strike to the last drop", "Syrian know-how… Moroccan roots", "We cover the whole Kingdom"]
  };

  var FORM_MSG = {
    ar: { h: "طلب عرض سعر جديد", name: "الاسم", phone: "الهاتف", city: "المدينة/المنطقة", service: "الخدمة المطلوبة", depth: "العمق المطلوب" },
    fr: { h: "Nouvelle demande de devis", name: "Nom", phone: "Téléphone", city: "Ville/Région", service: "Service souhaité", depth: "Profondeur souhaitée" },
    en: { h: "New quote request", name: "Name", phone: "Phone", city: "City/Region", service: "Service needed", depth: "Depth required" }
  };

  var currentLang = "ar";
  var typedTimer = null;

  function applyLang(lang) {
    currentLang = I18N[lang] ? lang : "ar";
    var dict = I18N[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.title = dict["title"] || document.title;

    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
      else if (I18N.ar[key] !== undefined) el.textContent = I18N.ar[key];
    });
    $$("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    $$(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === currentLang);
    });

    try { localStorage.setItem("mwd-lang", currentLang); } catch (e) {}
    startTyped();
  }

  $$(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  var savedLang = null;
  try { savedLang = localStorage.getItem("mwd-lang"); } catch (e) {}
  applyLang(savedLang || "ar");

  /* ═══════════════════ 4) Typed slogans ═══════════════════ */
  var typedEl = $("#typed");
  function startTyped() {
    if (!typedEl) return;
    if (typedTimer) { clearTimeout(typedTimer); typedTimer = null; }
    if (reducedMotion) { typedEl.textContent = SLOGANS[currentLang][0]; return; }
    var list = SLOGANS[currentLang];
    var li = 0, ci = 0, deleting = false;
    typedEl.textContent = "";
    (function tick() {
      var word = list[li];
      typedEl.textContent = word.slice(0, ci);
      if (!deleting) {
        ci++;
        if (ci > word.length) { deleting = true; typedTimer = setTimeout(tick, 1900); return; }
        typedTimer = setTimeout(tick, 55);
      } else {
        ci--;
        if (ci < 0) { deleting = false; li = (li + 1) % list.length; ci = 0; }
        typedTimer = setTimeout(tick, 26);
      }
    })();
  }

  /* ═══════════════════ 5) Counters ═══════════════════ */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (reducedMotion) { el.textContent = fmt(target); return; }
    var t0 = null, dur = 1800;
    function fmt(n) { return n.toLocaleString("en-US").replace(/,/g, " "); }
    function step(ts) {
      if (!t0) t0 = ts;
      var p = clamp((ts - t0) / dur, 0, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var statsGrid = $(".stats-grid");
  if (statsGrid && "IntersectionObserver" in window) {
    var cObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          $$(".num[data-count]", statsGrid).forEach(animateCount);
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 });
    cObs.observe(statsGrid);
  } else {
    $$(".num[data-count]").forEach(animateCount);
  }

  /* ═══════════════════ 6) Parallax hero ═══════════════════ */
  var heroBg = $(".hero-bg[data-parallax]");
  var hero = $(".hero");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.scrollY || 0;
      if (header) header.classList.toggle("scrolled", y > 30);
      if (heroBg && hero && !reducedMotion && y < hero.offsetHeight) {
        heroBg.style.transform = "translate3d(0," + (y * 0.22) + "px,0)";
      }
      updateGeo(y);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ═══════════════════ 7) Geo drill animation ═══════════════════ */
  var geoSection = $("#geo");
  var drillPipe = $(".drill-pipe");
  var depthVal = $("#depthVal");
  var layers = { soil: $(".layer.soil"), rock: $(".layer.rock"), water: $(".layer.water") };

  function updateGeo(y) {
    if (!geoSection || !drillPipe) return;
    var rect = geoSection.getBoundingClientRect();
    var total = geoSection.offsetHeight - window.innerHeight;
    var p = clamp((window.innerHeight / 2 - rect.top) / (total > 0 ? total : 1), 0, 1);
    drillPipe.style.setProperty("--p", p.toFixed(4));
    if (depthVal) depthVal.textContent = Math.round(p * 1000);
    if (layers.soil) layers.soil.classList.toggle("active", p > 0.04);
    if (layers.rock) layers.rock.classList.toggle("active", p > 0.32);
    if (layers.water) layers.water.classList.toggle("active", p > 0.68);
  }
  updateGeo(window.scrollY || 0);

  /* ═══════════════════ 8) Sliders ═══════════════════ */
  function makeSlider(rootSel, trackSel, buildDots) {
    var root = $(rootSel);
    if (!root) return;
    var track = $(trackSel, root);
    if (!track) return;
    var slides = Array.prototype.slice.call(track.children);
    var prev = $(".sl-arrow.prev", root);
    var next = $(".sl-arrow.next", root);

    function goTo(i) {
      i = clamp(i, 0, slides.length - 1);
      var s = slides[i];
      if (s && s.scrollIntoView) {
        s.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", inline: "center", block: "nearest" });
      }
    }
    function current() {
      var center = (track.scrollLeft || 0) + track.clientWidth / 2;
      var best = 0, bestD = Infinity;
      slides.forEach(function (s, i) {
        var c = s.offsetLeft + s.offsetWidth / 2;
        var d = Math.abs(c - center);
        if (d < bestD) { bestD = d; best = i; }
      });
      return best;
    }

    if (prev) prev.addEventListener("click", function () { goTo(current() - 1); });
    if (next) next.addEventListener("click", function () { goTo(current() + 1); });

    var dotsWrap = null;
    var dots = [];
    if (buildDots) {
      dotsWrap = $(".sl-dots", root);
      if (dotsWrap) {
        slides.forEach(function (_, i) {
          var b = document.createElement("button");
          b.setAttribute("aria-label", "slide " + (i + 1));
          b.addEventListener("click", function () { goTo(i); });
          dotsWrap.appendChild(b);
          dots.push(b);
        });
      }
    }

    var sTick = false;
    track.addEventListener("scroll", function () {
      if (sTick) return;
      sTick = true;
      requestAnimationFrame(function () {
        sTick = false;
        var i = current();
        dots.forEach(function (d, j) { d.classList.toggle("active", j === i); });
      });
    }, { passive: true });

    /* keyboard + wheel: let native scroll work; add drag for mouse */
    var isDown = false, startX = 0, startScroll = 0;
    track.addEventListener("mousedown", function (e) {
      isDown = true; startX = e.pageX; startScroll = track.scrollLeft;
      track.style.cursor = "grabbing";
    });
    window.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      track.scrollLeft = startScroll - (e.pageX - startX) * 1.4;
    });
    window.addEventListener("mouseup", function () {
      if (!isDown) return;
      isDown = false;
      track.style.cursor = "";
    });
    track.style.cursor = "grab";

    if (dots.length) dots[0].classList.add("active");
  }

  makeSlider("#galSlider", ".g-track", true);
  makeSlider("#tSlider", ".t-track", false);

  /* ═══════════════════ 9) Before / After ═══════════════════ */
  var baSlider = $("#baSlider");
  var baRange = $("#baRange");
  if (baSlider && baRange) {
    function setPos(v) {
      baSlider.style.setProperty("--pos", clamp(v, 0, 100) + "%");
      baRange.value = v;
    }
    baRange.addEventListener("input", function () { setPos(baRange.value); });
    if (baSlider.addEventListener) {
      var hammer = null;
      baSlider.addEventListener("pointerdown", function (e) {
        if (e.target === baRange) return;
        hammer = e.pointerId;
        move(e);
      });
      window.addEventListener("pointermove", function (e) {
        if (hammer === null || e.pointerId !== hammer) return;
        move(e);
      });
      window.addEventListener("pointerup", function () { hammer = null; });
    }
    function move(e) {
      var r = baSlider.getBoundingClientRect();
      setPos(((e.clientX - r.left) / r.width) * 100);
    }
    setPos(50);
  }

  /* ═══════════════════ 10) Reveal on scroll ═══════════════════ */
  var revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    var rObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); rObs.unobserve(en.target); }
      });
    }, { threshold: 0.14 });
    revealEls.forEach(function (el) { rObs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ═══════════════════ 11) Header · burger · scrollspy ═══════════════════ */
  var header = $("#header");
  var burger = $("#burger");
  var nav = $("#nav");
  onScroll();

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target && e.target.closest("a")) {
        nav.classList.remove("open");
        burger.classList.remove("open");
      }
    });
  }

  var navLinks = $$("#nav > a[href^='#']");
  var sectionMap = navLinks
    .map(function (a) { return { link: a, sec: $(a.getAttribute("href")) }; })
    .filter(function (o) { return o.sec; });
  if ("IntersectionObserver" in window && sectionMap.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = "#" + en.target.id;
        sectionMap.forEach(function (o) { o.link.classList.toggle("active", o.link.getAttribute("href") === id); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sectionMap.forEach(function (o) { spy.observe(o.sec); });
  }

  /* Social placeholder links shouldn't jump to top */
  $$('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });

  /* ═══════════════════ 12) Ripple ═══════════════════ */
  document.addEventListener("pointerdown", function (e) {
    var el = e.target.closest ? e.target.closest(".ripple") : null;
    if (!el || reducedMotion) return;
    var r = el.getBoundingClientRect();
    var d = Math.max(r.width, r.height);
    var ink = document.createElement("span");
    ink.className = "ink";
    ink.style.width = ink.style.height = d + "px";
    ink.style.left = (e.clientX - r.left - d / 2) + "px";
    ink.style.top = (e.clientY - r.top - d / 2) + "px";
    el.appendChild(ink);
    setTimeout(function () { if (ink.parentNode) ink.parentNode.removeChild(ink); }, 650);
  });

  /* ═══════════════════ 13) Map pins ↔ area cards ═══════════════════ */
  $$(".area-card").forEach(function (card) {
    var city = card.getAttribute("data-city");
    var pin = $('.map-pin[data-city="' + city + '"]');
    if (!pin) return;
    card.addEventListener("mouseenter", function () { pin.classList.add("active"); });
    card.addEventListener("mouseleave", function () { pin.classList.remove("active"); });
    card.addEventListener("touchstart", function () {
      $$(".map-pin").forEach(function (p) { p.classList.remove("active"); });
      pin.classList.add("active");
    }, { passive: true });
  });

  /* ═══════════════════ 14) Quote form → WhatsApp ═══════════════════ */
  var form = $("#quoteForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var vals = {
        name: $("#qName"), phone: $("#qPhone"),
        city: $("#qCity"), service: $("#qService"), depth: $("#qDepth")
      };
      var ok = true;
      ["name", "phone", "city", "service"].forEach(function (k) {
        var field = vals[k];
        var empty = !field || !String(field.value || "").trim() ||
          (k === "service" && field.tagName === "SELECT" && !field.value);
        var wrap = field ? field.closest(".f-field") : null;
        if (wrap) wrap.classList.toggle("err", empty);
        if (empty) { ok = false; if (field && ok === false && !document.querySelector(".f-field.err input, .f-field.err select")) {} }
      });
      var firstErr = $(".f-field.err input, .f-field.err select");
      if (firstErr) firstErr.focus();
      if (!ok) return;

      var L = FORM_MSG[currentLang] || FORM_MSG.ar;
      var lines = [
        "🚱 " + L.h + " — MOROCCO WELL DRILLING",
        L.name + ": " + vals.name.value.trim(),
        L.phone + ": " + vals.phone.value.trim(),
        L.city + ": " + vals.city.value.trim(),
        L.service + ": " + vals.service.value.trim()
      ];
      if (vals.depth && vals.depth.value.trim()) lines.push(L.depth + ": " + vals.depth.value.trim());
      var url = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener");
    });
    form.addEventListener("input", function (e) {
      var wrap = e.target.closest ? e.target.closest(".f-field") : null;
      if (wrap) wrap.classList.remove("err");
    });
  }
})();
