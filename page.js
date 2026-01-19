import Link from 'next/link';
// استدعاء الأيقونات
import { Phone, MessageCircle, Wrench, Snowflake, ShoppingBag, CheckCircle, MapPin, Clock } from 'lucide-react';

export default function Home() {
  return (
    // عملنا اتجاه الصفحة من اليمين لليسار عشان العربي يظهر مظبوط
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* --- Navbar (القائمة العلوية) --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Snowflake className="text-blue-500 h-8 w-8" />
              <span className="text-2xl font-black text-gray-800 tracking-wide">
                دهب <span className="text-blue-500">للتكييف</span>
              </span>
            </div>
            <div className="hidden md:flex gap-6 font-medium text-gray-600">
              <Link href="#home" className="hover:text-blue-600 transition">الرئيسية</Link>
              <Link href="#services" className="hover:text-blue-600 transition">خدماتنا</Link>
              <Link href="#why-us" className="hover:text-blue-600 transition">ليه دهب؟</Link>
            </div>
            {/* زرار اتصال سريع في القائمة */}
            <a 
              href="tel:+201000000000" // غير الرقم هنا
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition flex items-center gap-2 text-sm shadow-lg shadow-blue-200"
            >
              <Phone size={18} />
              اتصل الآن
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section (الواجهة: أول حاجة العميل يشوفها) --- */}
      <section id="home" className="pt-32 pb-20 px-4 text-center bg-gradient-to-b from-blue-50 via-white to-gray-50 relative overflow-hidden">
        {/* دايرة ديكور في الخلفية */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold border border-blue-200">
            ❄️ انتعاشك.. مسؤوليتنا
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            خلي صيفك <span className="text-yellow-500 relative">
              دهب
              <svg className="absolute w-full h-3 -bottom-1 right-0 text-yellow-300 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> مع تكييفك المثالي
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            شركة دهب بتقدم لك حلول متكاملة للتكييف. صيانة فورية، بيع أجهزة كسر زيرو، وحل جميع الأعطال بأعلى جودة وأفضل سعر في مصر.
          </p>
          
          {/* --- الزرارين الرئيسيين (واتساب وفون) --- */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a 
              href="https://wa.me/201000000000" // غير الرقم هنا لرقم الواتساب
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-green-500 text-white font-bold rounded-xl shadow-xl shadow-green-100 hover:bg-green-600 transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} />
              تواصل واتساب
            </a>
            <a 
              href="tel:+201000000000" // غير الرقم هنا
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-xl shadow-gray-200 hover:bg-gray-800 transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone size={24} />
              اتصل تليفونياً
            </a>
          </div>
          
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> ضمان حقيقي</span>
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> فنيين محترفين</span>
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> خدمة 24 ساعة</span>
          </div>
        </div>
      </section>

      {/* --- Services Section (خدماتنا) --- */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">خدمات شركة دهب</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">إحنا مش بس بنصلح، إحنا بنرجع التكييف جديد. دي الخدمات اللي بنقدمها:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* كارت الخدمة 1: الصيانة */}
            <div className="group p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 w-2 h-full transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition">
                <Wrench />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">صيانة دورية وشاملة</h3>
              <p className="text-gray-600 leading-relaxed">
                غسيل وتنظيف الوحدات الداخلية والخارجية، شحن فريون، وتظبيط التكييف عشان يرجع تلاجة زي الأول.
              </p>
            </div>

            {/* كارت الخدمة 2: البيع */}
            <div className="group p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-yellow-100 transition duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 w-2 h-full transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition">
                <ShoppingBag />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">بيع أجهزة مستعملة</h3>
              <p className="text-gray-600 leading-relaxed">
                عندنا تكييفات كسر زيرو (مستعملة بحالة الجديد) بأسعار "دهب" وضمان من الشركة. وفر فلوسك واشتري المضمون.
              </p>
            </div>

            {/* كارت الخدمة 3: حل المشاكل */}
            <div className="group p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-red-100 transition duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 w-2 h-full transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition">
                <CheckCircle />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">حل جميع الأعطال</h3>
              <p className="text-gray-600 leading-relaxed">
                التكييف بينقط مية؟ صوته عالي؟ مش بيسقع؟ سيب المشكلة دي علينا، بنحدد العطل ونصلحه في مكانه.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer (التذييل) --- */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-3xl font-black text-white">دهب</span>
            <span className="text-blue-500 text-3xl font-black">.</span>
            <p className="mt-4 text-gray-400 max-w-md mx-auto">
              اختيارك الأول لراحة بالك وانتعاش بيتك. إحنا موجودين عشان نخدمك في أي وقت.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-blue-500"/>
              <span>القاهرة، مصر (نخدم جميع المناطق)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-500"/>
              <span>يومياً من 9 صباحاً لـ 10 مساءً</span>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} شركة دهب لخدمات التكييف. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}
