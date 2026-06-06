import Icon from "../components/ui/Icon";
import type {
  ICourse,
  IFaq,
  IFeature,
  IFooterColumn,
  INavLink,
  IStat,
  ITeacher,
  ITestimonial,
} from "../types/home.type";

export const navLinks: INavLink[] = [
  { label: "Bosh sahifa", href: "/", active: true },
  { label: "Kurslar", href: "/courses" },
  { label: "O'qituvchilar", href: "/teachers" },
  { label: "Blog", href: "/blog" },
  { label: "Aloqa", href: "/contact" },
];

export const stats: IStat[] = [
  {
    icon: Icon.users,
    value: "5 000+",
    label: "Bitiruvchilar",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Icon.book,
    value: "35+",
    label: "Kurslar",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Icon.logo,
    value: "42",
    label: "Tajribali o'qituvchi",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Icon.trending,
    value: "94%",
    label: "Ish bilan ta'minlash",
    color: "text-amber-600 bg-amber-50",
  },
];

export const courses: ICourse[] = [
  {
    title: "JavaScript dasturlash",
    tag: "Frontend",
    tagColor: "bg-blue-50 text-blue-600",
    rating: "4.9",
    reviews: "312",
    desc: "Nolinchi darajadan boshlab to'liq Frontend dasturchi bo'lish. ES6+, DOM, async.",
    teacher: "Akmal Karimov",
    price: "490 000 so'm",
    img: "https://picsum.photos/seed/jscode/600/360",
  },
  {
    title: "React.js asoslari",
    tag: "Frontend",
    tagColor: "bg-blue-50 text-blue-600",
    rating: "4.8",
    reviews: "245",
    desc: "React.js yetuklik, Hooks, Router, Context API va Redux bilan ishlash.",
    teacher: "Madina Ergasheva",
    price: "790 000 so'm",
    img: "https://picsum.photos/seed/reactjs/600/360",
  },
  {
    title: "UX/UI dizayn",
    tag: "Dizayn",
    tagColor: "bg-pink-50 text-pink-600",
    rating: "4.9",
    reviews: "189",
    desc: "Figma, foydalanuvchi tadqiqi, wireframe, prototip va portfolio yaratish.",
    teacher: "Madina Ergasheva",
    price: "890 000 so'm",
    img: "https://picsum.photos/seed/uxui/600/360",
  },
  {
    title: "Python dasturchilik",
    tag: "Backend",
    tagColor: "bg-amber-50 text-amber-600",
    rating: "4.7",
    reviews: "421",
    desc: "Asoslar, OOP, Django, REST API va ma'lumotlar bazasi bilan ishlash.",
    teacher: "Sherzod Rahimov",
    price: "790 000 so'm",
    img: "https://picsum.photos/seed/python/600/360",
  },
  {
    title: "Flutter mobil ilovalar",
    tag: "Mobil",
    tagColor: "bg-emerald-50 text-emerald-600",
    rating: "4.8",
    reviews: "156",
    desc: "Dart tilida iOS va Android uchun cross-platform mobil ilovalar yaratish.",
    teacher: "Otabek Salimov",
    price: "990 000 so'm",
    img: "https://picsum.photos/seed/flutter/600/360",
  },
  {
    title: "Data Science va ML",
    tag: "Data Science",
    tagColor: "bg-indigo-50 text-indigo-600",
    rating: "4.8",
    reviews: "98",
    desc: "Pandas, NumPy, vizualizatsiya va Machine Learning asoslari Python bilan.",
    teacher: "Sevara Tursunova",
    price: "1 200 000 so'm",
    img: "https://picsum.photos/seed/datasci/600/360",
  },
  {
    title: "DevOps muhandisi",
    tag: "DevOps",
    tagColor: "bg-orange-50 text-orange-600",
    rating: "4.7",
    reviews: "72",
    desc: "Linux, Docker, Kubernetes, CI/CD pipeline va AWS bulut infratuzilmasi.",
    teacher: "Jasur Mahmudov",
    price: "1 500 000 so'm",
    img: "https://picsum.photos/seed/devops/600/360",
  },
  {
    title: "Raqamli marketing",
    tag: "Marketing",
    tagColor: "bg-rose-50 text-rose-600",
    rating: "4.8",
    reviews: "203",
    desc: "SMM, kontent marketing, Google Ads, SEO va analitika asoslari.",
    teacher: "Dilnoza Nazarova",
    price: "690 000 so'm",
    img: "https://picsum.photos/seed/marketing/600/360",
  },
];

export const features: IFeature[] = [
  {
    icon: Icon.check,
    title: "Tajribali o'qituvchilar",
    desc: "Sohada 5+ yillik amaliy tajribaga ega mutaxassislar saboq beradi.",
    color: "bg-blue-600",
  },
  {
    icon: Icon.layers,
    title: "Zamonaviy dasturlar",
    desc: "Mehnat bozorida talab qilinadigan eng so'nggi texnologiyalar va metodlar.",
    color: "bg-purple-600",
  },
  {
    icon: Icon.chat,
    title: "Doimiy maslahat",
    desc: "Mentor va o'qituvchilarga istalgan vaqtda murojaat qilish imkoniyati.",
    color: "bg-green-600",
  },
  {
    icon: Icon.award,
    title: "Sertifikat",
    desc: "Bitiruvchi har bir talaba davlat tomonidan tan olingan sertifikatga ega bo'ladi.",
    color: "bg-amber-500",
  },
  {
    icon: Icon.rocket,
    title: "Amaliy loyihalar",
    desc: "Har bir kursda real biznes muammolarini hal qiluvchi 5+ amaliy loyiha.",
    color: "bg-teal-600",
  },
  {
    icon: Icon.briefcase,
    title: "Ish ta'minoti",
    desc: "100+ kompaniya bilan hamkorlik. Eng yaxshi bitiruvchilarni ishga joylashtiramiz.",
    color: "bg-red-600",
  },
];

export const teachers: ITeacher[] = [
  {
    name: "Akmal Karimov",
    role: "JavaScript Lead",
    bio: "Frontend yo'nalishida 6 yillik tajriba. EPAM va Uzcard kompaniyalarida ishlagan.",
    stats: [
      ["12", "Kurs"],
      ["540", "Talaba"],
      ["4.9", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=12",
  },
  {
    name: "Madina Ergasheva",
    role: "UX/UI dizayner",
    bio: "7 yillik tajriba. Yandex va Behance'da chop etilgan loyihalar muallifi.",
    stats: [
      ["8", "Kurs"],
      ["320", "Talaba"],
      ["4.9", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=47",
  },
  {
    name: "Sherzod Rahimov",
    role: "Python / Django Senior",
    bio: "Backend dasturchi sifatida 15 yillik tajriba. AWS sertifikatlangan.",
    stats: [
      ["15", "Kurs"],
      ["680", "Talaba"],
      ["4.8", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=33",
  },
  {
    name: "Nodira Yusupova",
    role: "React Developer",
    bio: "5 yillik React tajriba. Bir nechta yirik fintech mahsulotlarini yaratgan.",
    stats: [
      ["6", "Kurs"],
      ["280", "Talaba"],
      ["4.8", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=45",
  },
  {
    name: "Sevara Tursunova",
    role: "Data Scientist",
    bio: "Mashinaviy o'rganish bo'yicha 6 yillik tajriba. Kaggle Master.",
    stats: [
      ["4", "Kurs"],
      ["160", "Talaba"],
      ["4.7", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=20",
  },
  {
    name: "Otabek Salimov",
    role: "Flutter Developer",
    bio: "Mobil ilovalar yaratish bo'yicha 5+ yillik tajriba va 30+ ilova.",
    stats: [
      ["5", "Kurs"],
      ["210", "Talaba"],
      ["4.8", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=15",
  },
];

export const testimonials: ITestimonial[] = [
  {
    text: "JavaScript kursini tugatgandan keyin 2 hafta ichida ishga kirdim. O'qituvchilar har bir savolga sabr bilan javob berishdi. Tavsiya qilaman!",
    name: "Bobur Tojiev",
    role: "Frontend Developer, Uzum",
    img: "https://i.pravatar.cc/100?img=53",
  },
  {
    text: "UX/UI kursi mening hayotimni o'zgartirdi. Hech narsadan boshlagan, hozir esa xalqaro kompaniyada dizayner bo'lib ishlayman.",
    name: "Zilola Ahmedova",
    role: "Product Designer, EPAM",
    img: "https://i.pravatar.cc/100?img=44",
  },
  {
    text: "Python kursi juda yaxshi tashkillashtirilgan. O'qituvchi har bir mavzuni amaliy misol bilan tushuntirdi. Endi backend dasturchi sifatida ishlayman.",
    name: "Rustam Olimov",
    role: "Backend Developer, Iste University",
    img: "https://i.pravatar.cc/100?img=68",
  },
];

export const faqs: IFaq[] = [
  {
    q: "O'quv markaziga qanday yozilish mumkin?",
    a: "Saytdagi \"Ro'yxatdan o'tish\" tugmasini bosing yoki ofisimizga keling. Konsultantlarimiz sizga eng mos kursni tanlashda yordam berishadi va to'lov shartlari haqida ma'lumot beradi.",
  },
  {
    q: "Darslar qachon va qayerda bo'lib o'tadi?",
    a: "Darslar hafta davomida ertalabki, kunduzgi va kechki guruhlarda, ham offline (markazda) ham online formatda o'tkaziladi.",
  },
  {
    q: "To'lov qaysi usullar orqali amalga oshiriladi?",
    a: "To'lovni naqd, plastik karta yoki bo'lib-bo'lib to'lash imkoniyati orqali amalga oshirishingiz mumkin.",
  },
  {
    q: "Sertifikat beriladimi va u tan olinadimi?",
    a: "Ha, kursni muvaffaqiyatli tugatgan har bir talaba davlat tomonidan tan olingan sertifikatga ega bo'ladi.",
  },
  {
    q: "Online va offline kurslar o'rtasidagi farq nimada?",
    a: "Offline kurslar markazimizda jonli, online kurslar esa masofadan, lekin bir xil dastur va o'qituvchilar bilan o'tkaziladi.",
  },
  {
    q: "Ishga joylashishda yordam berasizmi?",
    a: "Albatta. 100+ hamkor kompaniyamiz bor va eng yaxshi bitiruvchilarni ishga joylashtirishda yordam beramiz.",
  },
];

export const footerColumns: IFooterColumn[] = [
  {
    title: "SAHIFALAR",
    links: ["Biz haqimizda", "Kurslar", "O'qituvchilar", "Blog", "Aloqa"],
  },
  {
    title: "KURSLAR",
    links: [
      "Frontend",
      "Backend",
      "UX/UI Dizayn",
      "Mobil dasturlash",
      "Marketing",
    ],
  },
];
