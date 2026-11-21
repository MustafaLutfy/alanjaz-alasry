// Business info (from the @alanjaz_alasry Instagram bio)
export const phones = [
  { label: '0773 334 2925', tel: '+9647733342925' },
  { label: '0783 334 2925', tel: '+9647833342925' },
]
export const instagram = 'https://www.instagram.com/alanjaz_alasry'
export const socials = [
  { name: 'instagram', label: 'انستغرام', handle: '@alanjaz_alasry', url: instagram },
  { name: 'facebook', label: 'فيسبوك', handle: 'صفحتنا على فيسبوك', url: 'https://www.facebook.com/share/19wCnDUhcW/' },
  { name: 'tiktok', label: 'تيك توك', handle: '@alanjaz_alasry', url: 'https://www.tiktok.com/@alanjaz_alasry' },
]
// Trade agencies the company holds (client brief)
export const agencies = ['GROMIX', 'OPRA', 'MELANIE', 'AVISA']
// NBSPs + word joiner after the dash keep the time range on one line when it wraps
export const hours = 'يومياً عدا الجمعة · 8 صباحاً –⁠ 3 عصراً'
export const waLink = (text = '') => `https://wa.me/9647733342925${text ? `?text=${encodeURIComponent(text)}` : ''}`

// Showroom pin (from the client's Google Maps link)
export const location = {
  name: 'شركة الإنجاز العصري (أوبرا)',
  city: 'بغداد',
  url: 'https://maps.app.goo.gl/4qpazR8qSy38LQ856',
  // final /maps/embed URL — the ?output=embed form redirects via a response with X-Frame-Options: SAMEORIGIN
  embed: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s33.3014363,44.455233!6i17!3m1!1sar!5m1!1sar',
}

export const nav = [
  { label: 'الرئيسية', to: '/' },
  { label: 'المعرض', to: '/gallery' },
  { label: 'من نحن', to: '/about' },
  { label: 'اتصل بنا', to: '/contact' },
]

// Types of items the showroom deals in — descriptions stay generic (no stock or material claims)
export const categories = [
  { slug: 'counter', title: 'مغاسل كاونتر', en: 'Counter Basins', img: '/images/vanity-white.jpg', desc: 'مغاسل كاونتر بتصاميم عصرية تناسب مختلف المساحات.' },
  { slug: 'porcelain', title: 'مغاسل بورسلين', en: 'Porcelain Basins', img: '/images/basin-black.jpg', desc: 'مغاسل بورسلين بأشكال معلقة وأرضية وألوان متعددة.' },
  { slug: 'mirrors', title: 'المرايا', en: 'Mirrors', img: '/images/vanity-led.jpg', desc: 'مرايا بلمسات إضاءة تضيف أجواء دافئة لحمامك.' },
  { slug: 'showers', title: 'الدوش', en: 'Showers', img: '/images/bathroom-grey.jpg', desc: 'دوشات بتشطيبات وأشكال متنوعة.' },
  { slug: 'toilets', title: 'غربي وشرقي', en: 'Western & Eastern Toilets', img: '/images/toilet-wall.jpg', desc: 'مراحيض غربية وشرقية بتصاميم حديثة تسهّل التنظيف.' },
  { slug: 'accessories', title: 'الاكسسوارات', en: 'Accessories', img: '/images/towel-rack.jpg', desc: 'حمّالات ورفوف واكسسوارات تكمّل تفاصيل حمامك.' },
]
// Gallery-only tab for real photos of the showroom itself
export const galleryCats = [{ slug: 'showroom', title: 'معرضنا', en: 'Our Showroom' }, ...categories]
export const categoryBy = (slug) => galleryCats.find((c) => c.slug === slug)

// Gallery photos: the real showroom first, then display-only inspiration shots (not a stock list)
export const showcase = [
  { img: '/images/showroom-hall.jpg', cat: 'showroom' },
  { img: '/images/showroom-mixers.jpg', cat: 'showroom' },
  { img: '/images/storefront.jpg', cat: 'showroom' },
  { img: '/images/company-sign.jpg', cat: 'showroom' },
  { img: '/images/storefront-side.jpg', cat: 'showroom' },
  { img: '/images/vanity-led.jpg', cat: 'counter' },
  { img: '/images/vanity-white.jpg', cat: 'counter' },
  { img: '/images/mirror-round.jpg', cat: 'mirrors' },
  { img: '/images/basin-black.jpg', cat: 'porcelain' },
  { img: '/images/toilet-wall.jpg', cat: 'toilets' },
  { img: '/images/bathroom-grey.jpg', cat: 'showers' },
  { img: '/images/shower-panel.jpg', cat: 'showers' },
  { img: '/images/towel-rack.jpg', cat: 'accessories' },
  { img: '/images/towel-shelf.jpg', cat: 'accessories' },
  { img: '/images/soap-dispenser.jpg', cat: 'accessories' },
  { img: '/images/soap-dish.jpg', cat: 'accessories' },
  { img: '/images/paper-holder.jpg', cat: 'accessories' },
  { img: '/images/hair-dryer.jpg', cat: 'accessories' },
]

export const governorates = [
  'بغداد', 'البصرة', 'نينوى', 'أربيل', 'السليمانية', 'دهوك', 'كركوك', 'ديالى', 'الأنبار', 'صلاح الدين',
  'بابل', 'كربلاء', 'النجف', 'واسط', 'القادسية', 'المثنى', 'ذي قار', 'ميسان', 'حلبجة',
]

export const faq = [
  { q: 'هل يوجد توصيل لمحافظتي؟', a: 'نعم، نوفر خدمة التوصيل إلى جميع المحافظات العراقية، مع تغليف آمن والتزام بالوقت.' },
  { q: 'هل الصور بالموقع هي المتوفر حالياً؟', a: 'الصور للعرض والإلهام فقط، والتشكيلة المتوفرة تتغير باستمرار. راسلنا على واتساب ونخبرك بالمتوفر حالياً.' },
  { q: 'شلون أعرف السعر؟', a: 'الأسعار تختلف حسب القطعة والمقاس واللون. ابعث صورة أو وصف اللي تريده على واتساب ونرد عليك بالتفاصيل.' },
  { q: 'ما هي أوقات الدوام؟', a: 'المعرض مفتوح يومياً من 8 الصبح لحد 3 العصر، عدا يوم الجمعة.' },
  { q: 'وين موقع المعرض؟', a: 'المعرض في بغداد، والموقع موجود على الخريطة بصفحة "اتصل بنا" — تكدر تفتحه مباشرة على خرائط Google.' },
]
