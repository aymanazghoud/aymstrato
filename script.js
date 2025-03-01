window.addEventListener('load', function () {
    // Hide the loading overlay once the page is fully loaded
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
      loadingOverlay.style.display = 'none';
    }
  });
// Initialize Vanta.js NET effect only in the .hero section
VANTA.NET({
    el: ".hero",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00a3ff,
    backgroundColor: 0x131822,
    points: 10,
    spacing: 15
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Language Switcher
const translations = {
    en: {
        home: "Home",
        about: "About",
        features: "Features",
        subscriptions: "Subscriptions",
        testimonials: "Testimonials",
        contact: "Contact",
        heroTitle: "Empower Your Trading Journey",
        heroSubtitle: "Join thousands of successful traders worldwide",
        ctaButton: "Get Started",
        capitalDeployed: "Capital Deployed",
        tradersFunded: "Traders Funded",
        countriesSupported: "Countries Supported",
        analyticsTitle: "High Win Rate",
        analyticsDescription: "AYMstrato uses a proven strategy with a high win rate, giving you consistent results.",
        riskTitle: "Risk Management",
        riskDescription: "Our advanced risk management system ensures your capital is protected at all times.",
        supportTitle: "24/7 Support",
        supportDescription: "Round-the-clock customer support service",
        subscriptionTitle: "Subscription Plans",
        subscriptionSubtitle: "Choose a plan that suits your trading needs",
        monthlyPlan: "1 Month",
        monthlyDescription: "Perfect for short-term traders",
        yearlyPlan: "1 Year",
        yearlyDescription: "Ideal for serious traders",
        lifetimePlan: "Lifetime",
        lifetimeDescription: "For traders committed to long-term success",
        subscribeButton: "Subscribe Now",
        testimonialsTitle: "What Our Traders Say",
        testimonial1: "\"AYMSTRATO has transformed my trading journey. Highly recommended!\"",
        testimonial2: "\"The support team is amazing, and the tools are top-notch.\"",
        testimonial3: "\"I’ve never felt more confident in my trading decisions.\"",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service"
    },
    fr: {
        home: "Accueil",
        about: "À propos",
        features: "Fonctionnalités",
        subscriptions: "Abonnements",
        testimonials: "Témoignages",
        contact: "Contact",
        heroTitle: "Renforcez Votre Parcours de Trading",
        heroSubtitle: "Rejoignez des milliers de traders réussis dans le monde",
        ctaButton: "Commencer",
        capitalDeployed: "Capital Déployé",
        tradersFunded: "Traders Financés",
        countriesSupported: "Pays Supportés",
        analyticsTitle: "Analyses Avancées",
        analyticsDescription: "Données de marché en temps réel et outils de graphiques avancés",
        riskTitle: "Gestion des Risques",
        riskDescription: "Outils et protocoles sophistiqués de gestion des risques",
        supportTitle: "Support 24/7",
        supportDescription: "Service d'assistance clientèle disponible 24 heures sur 24",
        subscriptionTitle: "Plans d'Abonnement",
        subscriptionSubtitle: "Choisissez un plan qui correspond à vos besoins de trading",
        monthlyPlan: "1 Mois",
        monthlyDescription: "Parfait pour les traders à court terme",
        yearlyPlan: "1 An",
        yearlyDescription: "Idéal pour les traders sérieux",
        lifetimePlan: "À Vie",
        lifetimeDescription: "Pour les traders engagés dans le succès à long terme",
        subscribeButton: "S'abonner Maintenant",
        testimonialsTitle: "Ce Que Disent Nos Traders",
        testimonial1: "\"AYMSTRATO a transformé mon parcours de trading. Hautement recommandé !\"",
        testimonial2: "\"L'équipe de support est incroyable, et les outils sont de premier ordre.\"",
        testimonial3: "\"Je n'ai jamais été aussi confiant dans mes décisions de trading.\"",
        privacyPolicy: "Politique de Confidentialité",
        termsOfService: "Conditions d'Utilisation"
    },
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        features: "الميزات",
        subscriptions: "الاشتراكات",
        testimonials: "الشهادات",
        contact: "اتصل بنا",
        heroTitle: "عزز رحلتك في التداول",
        heroSubtitle: "انضم إلى آلاف المتداولين الناجحين حول العالم",
        ctaButton: "ابدأ الآن",
        capitalDeployed: "رأس المال المُنفّذ",
        tradersFunded: "المتداولون الممولون",
        countriesSupported: "الدول المدعومة",
        analyticsTitle: "التحليلات المتقدمة",
        analyticsDescription: "بيانات السوق في الوقت الفعلي وأدوات الرسم البياني المتقدمة",
        riskTitle: "إدارة المخاطر",
        riskDescription: "أدوات وبروتوكولات متطورة لإدارة المخاطر",
        supportTitle: "الدعم على مدار الساعة",
        supportDescription: "خدمة دعم العملاء المتاحة 24/7",
        subscriptionTitle: "خطط الاشتراك",
        subscriptionSubtitle: "اختر خطة تناسب احتياجاتك في التداول",
        monthlyPlan: "1 شهر",
        monthlyDescription: "مثالي للمتداولين على المدى القصير",
        yearlyPlan: "1 سنة",
        yearlyDescription: "مثالي للمتداولين الجادين",
        lifetimePlan: "مدى الحياة",
        lifetimeDescription: "للمتداولين الملتزمين بالنجاح على المدى الطويل",
        subscribeButton: "اشترك الآن",
        testimonialsTitle: "ما يقوله متداولونا",
        testimonial1: "\"AYMSTRATO غيرت رحلتي في التداول. أوصي بها بشدة!\"",
        testimonial2: "\"فريق الدعم رائع، والأدوات هي الأفضل.\"",
        testimonial3: "\"لم أشعر أبدًا بمزيد من الثقة في قرارات التداول الخاصة بي.\"",
        privacyPolicy: "سياسة الخصوصية",
        termsOfService: "شروط الخدمة"
    }
};

const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    updateContent(lang);
});

function updateContent(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });

    // Update Arabic text direction
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }
}

// Set default language to English
updateContent('en');