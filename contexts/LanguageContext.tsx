'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'ru' | 'tr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.dashboard': 'Dashboard',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.logout': 'Logout',

    // Hero Section
    'hero.title': 'Your Gateway to Business Success in Dubai',
    'hero.subtitle': 'Expert business setup consultancy services in the UAE. From company formation to legal compliance, we guide you every step of the way.',
    'hero.cta': 'Book Free Consultation',
    'hero.learnMore': 'Learn More',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive business solutions tailored to your needs',
    'services.businessSetup': 'Business Setup',
    'services.legalServices': 'Legal Services',
    'services.taxAccounting': 'Tax & Accounting',
    'services.visaServices': 'Visa Services',
    'services.investment': 'Investment',
    'services.consulting': 'Consulting',
    
    // Services Section
    'services.sectionTitle': 'Our Services',
    'services.sectionDescription': 'Comprehensive business solutions tailored to your needs in the UAE market',
    'services.ctaTitle': 'Ready to Start Your Business Journey?',
    'services.ctaDescription': 'Get a personalized consultation and discover how we can help you establish and grow your business in Dubai.',
    'services.ctaButton': 'Get Free Consultation',
    'services.viewAllButton': 'View All Services',

    // Business Setup
    'businessSetup.title': 'Business Setup Services',
    'businessSetup.subtitle': 'Establish your business presence in Dubai with our expert guidance',
    'businessSetup.mainland': 'Mainland Company Formation',
    'businessSetup.freezone': 'Free Zone Company Setup',
    'businessSetup.offshore': 'Offshore Company Formation',
    'businessSetup.llc': 'LLC Formation',
    'businessSetup.branch': 'Branch Office Setup',

    // Legal Services
    'legalServices.title': 'Legal Services',
    'legalServices.subtitle': 'Comprehensive legal support for your business operations',
    'legalServices.contracts': 'Contract Drafting & Review',
    'legalServices.compliance': 'Regulatory Compliance',
    'legalServices.disputes': 'Dispute Resolution',
    'legalServices.intellectual': 'Intellectual Property',
    'legalServices.employment': 'Employment Law',

    // Tax & Accounting
    'taxAccounting.title': 'Tax & Accounting Services',
    'taxAccounting.subtitle': 'Expert financial guidance for UAE businesses',
    'taxAccounting.corporate': 'Corporate Tax Planning',
    'taxAccounting.vat': 'VAT Registration & Filing',
    'taxAccounting.bookkeeping': 'Bookkeeping Services',
    'taxAccounting.audit': 'Audit & Assurance',
    'taxAccounting.payroll': 'Payroll Management',

    // Visa Services
    'visaServices.title': 'Visa Services',
    'visaServices.subtitle': 'Streamlined visa solutions for entrepreneurs and employees',
    'visaServices.investor': 'Investor Visa',
    'visaServices.employment': 'Employment Visa',
    'visaServices.family': 'Family Visa',
    'visaServices.tourist': 'Tourist Visa Extension',
    'visaServices.golden': 'Golden Visa',

    // Investment
    'investment.title': 'Investment Services',
    'investment.subtitle': 'Strategic investment opportunities in the UAE',
    'investment.realEstate': 'Real Estate Investment',
    'investment.stocks': 'Stock Market Investment',
    'investment.crypto': 'Cryptocurrency Investment',
    'investment.mutual': 'Mutual Funds',
    'investment.private': 'Private Equity',

    // About
    'about.title': 'About KPM Global Services',
    'about.subtitle': 'Your trusted partner in UAE business success',
    'about.description': 'With over 15 years of experience, KPM Global Services has helped thousands of entrepreneurs establish and grow their businesses in the UAE. Our team of experts provides comprehensive guidance across all aspects of business setup and operations.',
    'about.mission': 'Our Mission',
    'about.missionText': 'To simplify the business setup process in the UAE and empower entrepreneurs with the knowledge and support they need to succeed.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To be the leading business consultancy in the UAE, known for excellence, integrity, and client success.',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your business journey in Dubai?',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company Name',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.service': 'Service Interest',
    'contact.form.budget': 'Budget Range',
    'contact.form.timeline': 'Timeline',
    'contact.form.submit': 'Send Message',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Working Hours',

    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.contactUs': 'Contact Us',
    'common.readMore': 'Read More',
    'common.download': 'Download',
    'common.view': 'View',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.warning': 'Warning',
    'common.info': 'Information',

    // Footer
    'footer.description': 'Your trusted partner for business setup and growth in the UAE. Expert guidance, comprehensive services, and proven results.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.copyright': '© 2024 KPM Global Services. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy'
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.resources': 'Ресурсы',
    'nav.contact': 'Контакты',
    'nav.dashboard': 'Панель управления',
    'nav.login': 'Вход',
    'nav.register': 'Регистрация',
    'nav.logout': 'Выход',

    // Hero Section
    'hero.title': 'Ваш путь к бизнес-успеху в Дубае',
    'hero.subtitle': 'Экспертные консультационные услуги по созданию бизнеса в ОАЭ. От регистрации компании до правового соответствия - мы ведем вас на каждом шагу.',
    'hero.cta': 'Заказать бесплатную консультацию',
    'hero.learnMore': 'Узнать больше',

    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Комплексные бизнес-решения, адаптированные под ваши потребности',
    'services.businessSetup': 'Создание бизнеса',
    'services.legalServices': 'Юридические услуги',
    'services.taxAccounting': 'Налоги и бухгалтерия',
    'services.visaServices': 'Визовые услуги',
    'services.investment': 'Инвестиции',
    'services.consulting': 'Консалтинг',

    // Common
    'common.learnMore': 'Узнать больше',
    'common.getStarted': 'Начать',
    'common.contactUs': 'Связаться с нами',
    'common.readMore': 'Читать далее',
    'common.download': 'Скачать',
    'common.view': 'Просмотр',
    'common.edit': 'Редактировать',
    'common.delete': 'Удалить',
    'common.save': 'Сохранить',
    'common.cancel': 'Отмена',
    'common.submit': 'Отправить',
    'common.loading': 'Загрузка...',
    'common.error': 'Ошибка',
    'common.success': 'Успех',
    'common.warning': 'Предупреждение',
    'common.info': 'Информация'
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.resources': 'Kaynaklar',
    'nav.contact': 'İletişim',
    'nav.dashboard': 'Kontrol Paneli',
    'nav.login': 'Giriş',
    'nav.register': 'Kayıt Ol',
    'nav.logout': 'Çıkış',

    // Hero Section
    'hero.title': 'Dubai\'de İş Başarısına Giden Yolunuz',
    'hero.subtitle': 'BİR\'de uzman iş kurma danışmanlık hizmetleri. Şirket kurulumundan yasal uyumluluğa kadar, her adımda size rehberlik ediyoruz.',
    'hero.cta': 'Ücretsiz Danışmanlık Alın',
    'hero.learnMore': 'Daha Fazla Bilgi',

    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'İhtiyaçlarınıza uyarlanmış kapsamlı iş çözümleri',
    'services.businessSetup': 'İş Kurulumu',
    'services.legalServices': 'Yasal Hizmetler',
    'services.taxAccounting': 'Vergi ve Muhasebe',
    'services.visaServices': 'Vize Hizmetleri',
    'services.investment': 'Yatırım',
    'services.consulting': 'Danışmanlık',

    // Common
    'common.learnMore': 'Daha Fazla Bilgi',
    'common.getStarted': 'Başlayın',
    'common.contactUs': 'Bizimle İletişime Geçin',
    'common.readMore': 'Devamını Oku',
    'common.download': 'İndir',
    'common.view': 'Görüntüle',
    'common.edit': 'Düzenle',
    'common.delete': 'Sil',
    'common.save': 'Kaydet',
    'common.cancel': 'İptal',
    'common.submit': 'Gönder',
    'common.loading': 'Yükleniyor...',
    'common.error': 'Hata',
    'common.success': 'Başarılı',
    'common.warning': 'Uyarı',
    'common.info': 'Bilgi'
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Get language from localStorage or default to English
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'ru', 'tr'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update document language attribute
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || translations.en[key as keyof typeof translations.en] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
