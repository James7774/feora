import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      // Navbar
      nav: {
        features: "Imkoniyatlar",
        about: "Biz haqimizda",
        download: "Yuklab olish",
      },
      // Hero
      hero: {
        badge: "Moliyaviy boshqaruv ilova",
        title1: "Moliyangizni",
        title2: "Aqlli boshqaring",
        description: "Finova — bu oddiy va zamonaviy moliyaviy boshqaruv ilovasi. Xarajatlaringizni kuzating, byudjet tuzing va moliyaviy maqsadlaringizga erishing.",
        downloadApp: "Ilovani yuklab olish",
        version: "v1.0.0 • Android uchun",
      },
      // Phone mockup
      phone: {
        hello: "Salom,",
        balance: "Umumiy balans",
        grocery: "Oziq-ovqat",
        salary: "Oylik",
        uber: "Taksi",
        analytics: "Tahlil",
        secure: "Xavfsiz",
      },
      // Features
      features: {
        title: "Nima uchun Finova?",
        learnMore: "Batafsil →",
        close: "Yopish",
        expense: {
          title: "Xarajatlarni kuzatish",
          description: "Barcha xarajatlaringizni oson va tez kuzating.",
          details: "Finova yordamida har bir xarajatingizni kategoriyalarga bo'lib, real vaqtda kuzatib borish mumkin. Kunlik, haftalik va oylik statistika bilan moliyaviy holatni to'liq nazorat qiling. Avtomatik kategoriyalash, kvitansiya skaneri va aqlli bildirishnomalar orqali hech qanday xarajat e'tiborsiz qolmaydi."
        },
        budget: {
          title: "Byudjet rejalashtirish",
          description: "Har oylik byudjetingizni belgilang va nazorat qiling.",
          details: "Har bir kategoriya uchun alohida byudjet belgilang — oziq-ovqat, transport, o'yin-kulgi va boshqalar. Finova real vaqtda qancha sarflaganingizni ko'rsatadi va limit yaqinlashganda ogohlantirish beradi. Aqlli tavsiyalar orqali tejamkorlikni oshiring."
        },
        analytics: {
          title: "Moliyaviy tahlil",
          description: "Grafik va diagrammalar orqali moliyangizni tahlil qiling.",
          details: "Chiroyli grafiklar va diagrammalar yordamida daromad va xarajatlaringizni chuqur tahlil qiling. Vaqt bo'yicha tendensiyalar, kategoriya bo'yicha taqsimot va moliyaviy salomatlik ko'rsatkichlari — hammasini bir joyda ko'ring."
        },
        security: {
          title: "Yuqori darajadagi xavfsizlik",
          description: "Ma'lumotlaringiz to'liq himoyalangan.",
          details: "PIN-kod, barmoq izi va yuz identifikatsiyasi orqali ilovangizni himoyalang. Barcha ma'lumotlar shifrlangan holda saqlanadi. Mahalliy saqlash tizimi — ma'lumotlaringiz faqat sizning qurilmangizda qoladi."
        },
      },
      // Stats
      stats: {
        downloads: "Yuklab olishlar",
        rating: "Reyting",
        users: "Faol foydalanuvchilar",
        countries: "Mamlakatlar",
      },
      // How it works
      howItWorks: {
        title: "Qanday ishlaydi?",
        step1: {
          title: "Ilovani yuklab oling",
          description: "Google Play yoki APK orqali ilovani o'rnating."
        },
        step2: {
          title: "Hisobingizni sozlang",
          description: "Valyuta, kategoriyalar va byudjet limitlarini belgilang."
        },
        step3: {
          title: "Moliyangizni boshqaring",
          description: "Xarajatlarni qo'shing, tahlil qiling va maqsadlarga erishing!"
        },
      },
      // Testimonials
      testimonials: {
        title: "Foydalanuvchilar nima deyishadi",
        review1: {
          name: "Aziz Karimov",
          role: "Tadbirkor",
          text: "Finova menga moliyaviy tartibni o'rgatdi. Endi har bir so'mni qaerga sarflaganimni bilaman."
        },
        review2: {
          name: "Nilufar Aliyeva",
          role: "Talaba",
          text: "Juda qulay va chiroyli ilova! Stipendiyamni aqlli sarflashni o'rgandim."
        },
        review3: {
          name: "Bobur Toshmatov",
          role: "Dasturchi",
          text: "Eng yaxshi moliyaviy ilova. Tez, xavfsiz va to'liq o'zbek tilida ishlaydi."
        },
      },
      // FAQ
      faq: {
        title: "Ko'p so'raladigan savollar",
        q1: {
          question: "Finova bepulmi?",
          answer: "Ha, hozirda Finova to'liq bepul va barcha asosiy imkoniyatlar ochiq. Yaqinda Premium reja ham chiqadi — qo'shimcha ilg'or funksiyalar bilan. Premium ixtiyoriy bo'ladi, xohlasangiz sotib olasiz, xohlamasangiz bepul versiyada davom etasiz."
        },
        q2: {
          question: "Ma'lumotlarim xavfsizmi?",
          answer: "Albatta! Barcha ma'lumotlar faqat sizning qurilmangizda saqlanadi. Biz hech qanday serverga ma'lumot yubormaymiz."
        },
        q3: {
          question: "Qaysi qurilmalarda ishlaydi?",
          answer: "Hozircha Finova Android qurilmalarda ishlaydi. iOS versiyasi tez orada chiqadi."
        },
        q4: {
          question: "Internet kerakmi?",
          answer: "Yo'q, Finova to'liq offline ishlaydi. Internet ulanganda ma'lumotlar sinxronlanadi."
        },
      },
      // Footer
      footer: {
        privacy: "Maxfiylik siyosati",
        terms: "Foydalanish shartlari",
        contact: "Bog'lanish",
        copyright: "© 2025 Finova. Barcha huquqlar himoyalangan.",
      }
    }
  },
  ru: {
    translation: {
      nav: {
        features: "Возможности",
        about: "О нас",
        download: "Скачать",
      },
      hero: {
        badge: "Приложение для управления финансами",
        title1: "Управляйте",
        title2: "финансами умно",
        description: "Finova — это простое и современное приложение для управления финансами. Отслеживайте расходы, планируйте бюджет и достигайте финансовых целей.",
        downloadApp: "Скачать приложение",
        version: "v1.0.0 • Для Android",
      },
      phone: {
        hello: "Привет,",
        balance: "Общий баланс",
        grocery: "Продукты",
        salary: "Зарплата",
        uber: "Такси",
        analytics: "Аналитика",
        secure: "Безопасно",
      },
      features: {
        title: "Почему Finova?",
        learnMore: "Подробнее →",
        close: "Закрыть",
        expense: {
          title: "Отслеживание расходов",
          description: "Легко и быстро отслеживайте все свои расходы.",
          details: "С помощью Finova вы можете отслеживать каждую трату в реальном времени, разделяя их по категориям. Ежедневная, еженедельная и ежемесячная статистика обеспечит полный контроль над вашими финансами. Автоматическая категоризация, сканер чеков и умные уведомления — ни одна трата не останется незамеченной."
        },
        budget: {
          title: "Планирование бюджета",
          description: "Устанавливайте и контролируйте ежемесячный бюджет.",
          details: "Устанавливайте отдельный бюджет для каждой категории — продукты, транспорт, развлечения и многое другое. Finova показывает в реальном времени, сколько вы потратили, и предупреждает при приближении к лимиту. Повышайте экономию с помощью умных рекомендаций."
        },
        analytics: {
          title: "Финансовая аналитика",
          description: "Анализируйте финансы с помощью графиков и диаграмм.",
          details: "Глубоко анализируйте свои доходы и расходы с помощью красивых графиков и диаграмм. Тренды по времени, распределение по категориям и показатели финансового здоровья — всё в одном месте."
        },
        security: {
          title: "Высокий уровень безопасности",
          description: "Ваши данные полностью защищены.",
          details: "Защитите своё приложение с помощью PIN-кода, отпечатка пальца и распознавания лица. Все данные хранятся в зашифрованном виде. Локальное хранилище — ваши данные остаются только на вашем устройстве."
        },
      },
      stats: {
        downloads: "Скачиваний",
        rating: "Рейтинг",
        users: "Активных пользователей",
        countries: "Стран",
      },
      howItWorks: {
        title: "Как это работает?",
        step1: {
          title: "Скачайте приложение",
          description: "Установите приложение через Google Play или APK."
        },
        step2: {
          title: "Настройте аккаунт",
          description: "Выберите валюту, категории и лимиты бюджета."
        },
        step3: {
          title: "Управляйте финансами",
          description: "Добавляйте расходы, анализируйте и достигайте целей!"
        },
      },
      testimonials: {
        title: "Что говорят пользователи",
        review1: {
          name: "Азиз Каримов",
          role: "Предприниматель",
          text: "Finova научила меня финансовой дисциплине. Теперь я знаю, куда уходит каждый сум."
        },
        review2: {
          name: "Нилуфар Алиева",
          role: "Студентка",
          text: "Очень удобное и красивое приложение! Научилась умно тратить стипендию."
        },
        review3: {
          name: "Бобур Тошматов",
          role: "Программист",
          text: "Лучшее финансовое приложение. Быстрое, безопасное и полностью на узбекском."
        },
      },
      faq: {
        title: "Часто задаваемые вопросы",
        q1: {
          question: "Finova бесплатна?",
          answer: "Да, на данный момент Finova полностью бесплатна, и все основные функции доступны. Скоро появится Premium-план с дополнительными продвинутыми возможностями. Premium будет необязательным — хотите покупайте, а хотите продолжайте пользоваться бесплатной версией."
        },
        q2: {
          question: "Мои данные в безопасности?",
          answer: "Конечно! Все данные хранятся только на вашем устройстве. Мы не отправляем данные на серверы."
        },
        q3: {
          question: "На каких устройствах работает?",
          answer: "Сейчас Finova работает на Android. Версия для iOS скоро будет доступна."
        },
        q4: {
          question: "Нужен ли интернет?",
          answer: "Нет, Finova работает полностью офлайн. При подключении к интернету данные синхронизируются."
        },
      },
      footer: {
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        contact: "Контакты",
        copyright: "© 2025 Finova. Все права защищены.",
      }
    }
  },
  en: {
    translation: {
      nav: {
        features: "Features",
        about: "About",
        download: "Download",
      },
      hero: {
        badge: "Finance Management App",
        title1: "Manage Your",
        title2: "Finances Smartly",
        description: "Finova is a simple and modern finance management app. Track your expenses, plan budgets, and achieve your financial goals.",
        downloadApp: "Download App",
        version: "v1.0.0 • For Android",
      },
      phone: {
        hello: "Hello,",
        balance: "Total Balance",
        grocery: "Grocery",
        salary: "Salary",
        uber: "Uber Ride",
        analytics: "Analytics",
        secure: "Secure",
      },
      features: {
        title: "Why Finova?",
        learnMore: "Learn more →",
        close: "Close",
        expense: {
          title: "Expense Tracking",
          description: "Easily and quickly track all your expenses.",
          details: "With Finova, you can track every expense in real time, categorizing them automatically. Daily, weekly, and monthly statistics give you full control over your financial situation. Automatic categorization, receipt scanner, and smart notifications ensure no expense goes unnoticed."
        },
        budget: {
          title: "Budget Planning",
          description: "Set and control your monthly budget.",
          details: "Set a separate budget for each category — groceries, transport, entertainment, and more. Finova shows you in real time how much you've spent and alerts you when approaching limits. Boost your savings with smart recommendations."
        },
        analytics: {
          title: "Financial Analytics",
          description: "Analyze your finances with charts and graphs.",
          details: "Deeply analyze your income and expenses with beautiful charts and diagrams. Time-based trends, category distribution, and financial health indicators — all in one place."
        },
        security: {
          title: "Top-Level Security",
          description: "Your data is fully protected.",
          details: "Protect your app with PIN code, fingerprint, and face recognition. All data is stored encrypted. Local storage system — your data stays only on your device."
        },
      },
      stats: {
        downloads: "Downloads",
        rating: "Rating",
        users: "Active Users",
        countries: "Countries",
      },
      howItWorks: {
        title: "How It Works",
        step1: {
          title: "Download the App",
          description: "Install the app via Google Play or APK."
        },
        step2: {
          title: "Set Up Your Account",
          description: "Choose currency, categories, and budget limits."
        },
        step3: {
          title: "Manage Your Finances",
          description: "Add expenses, analyze trends, and achieve your goals!"
        },
      },
      testimonials: {
        title: "What Users Say",
        review1: {
          name: "Aziz Karimov",
          role: "Entrepreneur",
          text: "Finova taught me financial discipline. Now I know where every sum goes."
        },
        review2: {
          name: "Nilufar Aliyeva",
          role: "Student",
          text: "Very convenient and beautiful app! Learned to spend my scholarship wisely."
        },
        review3: {
          name: "Bobur Toshmatov",
          role: "Developer",
          text: "The best finance app. Fast, secure, and fully available in Uzbek."
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: {
          question: "Is Finova free?",
          answer: "Yes, Finova is currently completely free with all core features available. A Premium plan with advanced features will be launching soon. Premium is entirely optional — buy it if you want, or keep using the free version."
        },
        q2: {
          question: "Is my data safe?",
          answer: "Absolutely! All data is stored only on your device. We don't send any data to servers."
        },
        q3: {
          question: "Which devices does it support?",
          answer: "Currently, Finova works on Android devices. iOS version is coming soon."
        },
        q4: {
          question: "Do I need internet?",
          answer: "No, Finova works completely offline. Data syncs when you connect to the internet."
        },
      },
      footer: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact",
        copyright: "© 2025 Finova. All rights reserved.",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
