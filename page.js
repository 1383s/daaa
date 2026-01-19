import Link from 'next/link';
// استدعاء الأيقونات
import { Phone, MessageCircle, Wrench, Snowflake, Thermometer, Truck, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 font-sans">
      
      {/* --- Navbar (القائمة العلوية) --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Snowflake className="text-blue-600 h-9 w-9" />
              <span className="text-3xl font-black text-gray-800 tracking-wide">
                القمة <span className="text-blue-600">للتكييف</span>
              </span>
            </div>
            <div className="hidden md:flex gap-7 font-semibold text-gray-700">
              <Link href="#home" className="hover:text-blue-700 transition">الرئيسية</Link>
              <Link href="#services" className="hover:text-blue-700 transition">خدماتنا</Link>
              <Link href="#about" className="hover:text-blue-700 transition">عن الشركة</Link>
              <Link href="#contact" className="hover:text-blue-700 transition">تواصل معنا</Link>
            </div>
            {/* زرار اتصال سريع في القائمة */}
            <a 
              href="tel:+201000000000" // غير الرقم هنا
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition flex items-center gap-2 text-md shadow-lg shadow-blue-200"
            >
              <Phone size={18} />
              اتصل الآن
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section (الواجهة الرئيسية) --- */}
      <section id="home" className="pt-40 pb-28 px-4 text-center bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* تأثيرات بسيطة للخلفية */}
        <div className="absolute top-10 left-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="inline-block px-5 py-2 mb-8 rounded-full bg-blue-100 text-blue-700 text-base font-semibold border border-blue-200 shadow-sm">
            ❄️ راحتك الجوية تبدأ من هنا
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            خبراء <span className="text-blue-600">التبريد والتكييف</span> لمنزل ومكتب <span className="text-blue-600">مثالي</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            في القمة للتبريد، نقدم حلول متكاملة لجميع أنواع التكييفات. صيانة، تركيب، بيع، وإصلاح سريع وموثوق.
          </p>
          
          {/* --- أزرار التواصل --- */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 items-center">
            <a 
              href="https://wa.me/201000000000" // غير الرقم هنا لرقم الواتساب
              target="_blank"
              className="w-full sm:w-auto px-9 py-4 bg-green-500 text-white font-bold rounded-full shadow-2xl shadow-green-200 hover:bg-green-600 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle size={24} />
              رسالة واتساب
            </a>
            <a 
              href="tel:+201000000000" // غير الرقم هنا لرقم التليفون
              className="w-full sm:w-auto px-9 py-4 bg-gray-800 text-white font-bold rounded-full shadow-2xl shadow-gray-200 hover:bg-gray-700 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={24} />
              اتصال مباشر
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-md text-gray-600">
            <span className="flex items-center gap-2"><Award size={20} className="text-yellow-500"/> جودة مضمونة</span>
            <span className="flex items-center gap-2"><Users size={20} className="text-blue-500"/> فريق متخصص</span>
            <span className="flex items-center gap-2"><Clock size={20} className="text-gray-500"/> سرعة في الأداء</span>
          </div>
        </div>
      </section>

      {/* --- Services Section (خدماتنا) --- */}
      <section id="services" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">كل ما تحتاجه لتكييفك</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">نقدم مجموعة شاملة من الخدمات لضمان أفضل أداء لأجهزة التكييف الخاصة بك.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* كارت الخدمة 1: الصيانة الدورية */}
            <div className="group p-8 border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-100 transition duration-300 bg-white text-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                <Wrench />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">صيانة وقائية</h3>
              <p className="text-gray-600 leading-relaxed">
                حافظ على تكييفك في أفضل حالاته مع عقود الصيانة الدورية والنظافة الشاملة.
              </p>
            </div>

            {/* كارت الخدمة 2: إصلاح الأعطال */}
            <div className="group p-8 border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-red-100 transition duration-300 bg-white text-center">
              <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                <Thermometer />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">إصلاح الأعطال الفورية</h3>
              <p className="text-gray-600 leading-relaxed">
                مهما كان العطل، فريقنا مستعد للتدخل السريع وإعادة تكييفك للعمل بكفاءة.
              </p>
            </div>

            {/* كارت الخدمة 3: تركيب وتوريد */}
            <div className="group p-8 border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-green-100 transition duration-300 bg-white text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                <Truck />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">تركيب وتوريد أجهزة</h3>
              <p className="text-gray-600 leading-relaxed">
                بيع وتركيب أجهزة تكييف جديدة ومستعملة بجودة عالية وضمان على التركيب.
              </p>
            </div>
            
            {/* كارت الخدمة 4: شحن الفريون */}
            <div className="group p-8 border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-100 transition duration-300 bg-white text-center">
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                <Snowflake />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">شحن الفريون</h3>
              <p className="text-gray-600 leading-relaxed">
                فحص تسريب الفريون وشحن التكييف بالنوع المناسب لضمان أقصى تبريد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Us Section (ليه تختارنا؟) --- */}
      <section id="about" className="py-28 bg-gradient-to-t from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-5 py-2 mb-6 rounded-full bg-blue-100 text-blue-700 text-base font-semibold border border-blue-200 shadow-sm">
              🌟 سر تميزنا
            </span>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              القمة للتبريد: <span className="text-blue-600">الجودة والثقة</span> في كل خدمة
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              مع خبرة تمتد لسنوات، نلتزم بتقديم أعلى مستويات الخدمة لعملائنا. فريق عمل مدرب ومجهز بأحدث الأدوات لضمان راحتك.
            </p>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0"/>
                <span>فنيون متخصصون ومدربون على أعلى مستوى.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0"/>
                <span>استجابة سريعة لطلبات الصيانة والإصلاح.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0"/>
                <span>استخدام قطع غيار أصلية ومضمونة.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0"/>
                <span>أسعار تنافسية تناسب ميزانيتك.</span>
              </li>
            </ul>
          </div>
          {/* هنا ممكن تحط صورة معبرة عن العمل او الفريق */}
          <div className="order-first md:order-last">
            <div className="bg-gray-200 h-96 w-full rounded-3xl shadow-2xl flex items-center justify-center text-gray-500 text-2xl">
                {/* صورة أو أيقونة كبيرة هنا */}
                <img src="/ac-tech.jpg" alt="فني تكييف" className="rounded-3xl object-cover w-full h-full" /> 
                {/* لو مش عايز تحط صورة، ممكن تخليها فاضية او تحط أيقونة */}
                {/* <Wrench size={100} className="text-gray-400"/> */}
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section (تواصل معنا) --- */}
      <section id="contact" className="py-28 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">احجز خدمتك الآن!</h2>
          <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
            متشغلش بالك بحر الصيف، تواصل معانا في أي وقت وهنكون عندك في أسرع وقت.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 items-center">
            <a 
              href="https://wa.me/201000000000" // غير الرقم هنا
              target="_blank"
              className="w-full sm:w-auto px-9 py-4 bg-white text-green-600 font-bold rounded-full shadow-xl shadow-blue-500 hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle size={24} />
              واتساب مباشر
            </a>
            <a 
              href="tel:+201000000000" // غير الرقم هنا
              className="w-full sm:w-auto px-9 py-4 bg-blue-800 text-white font-bold rounded-full shadow-xl shadow-blue-500 hover:bg-blue-900 transition flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={24} />
              اتصل بينا
            </a>
          </div>
        </div>
      </section>

      {/* --- Footer (التذييل) --- */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-3xl font-black text-white">القمة</span>
            <span className="text-blue-500 text-3xl font-black">.</span>
            <p className="mt-4 text-gray-400 max-w-md mx-auto">
              شريكك الموثوق لتوفير بيئة عمل ومنزل مريحة طوال العام.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-blue-500"/>
              <span>القاهرة، مصر (نخدم جميع أنحاء الجمهورية)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-500"/>
              <span>يومياً من 9 صباحاً لـ 11 مساءً</span>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} شركة القمة للتبريد والتكييف. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}
