const link = document.getElementById('translate-button');
let language = localStorage.getItem('currentLanguage') || 'en';

link.addEventListener('click', function (event) {
    event.preventDefault();
    language = language === 'en' ? 'ru' : 'en';

    getTranslate();
});

function getTranslate() {
    localStorage.setItem('currentLanguage', language);

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
        const translationKey = element.dataset.i18n;

        if (i18n.hasOwnProperty(language) && i18n[language].hasOwnProperty(translationKey)) {
            element.textContent = i18n[language][translationKey];
        }
    });
}

const i18n = {
    'en': {
        'company-name': 'Branding &',
        'company-name-smaller': 'Design Studio',
        'company-address-1': 'Double Bay 2028,',
        'company-address-2': 'New York',
        'contact-us': 'Contact us',
        'company-name-huge': 'branding & digital design studio.',
        'intro-info-header': 'We\'re a creative digital studio',
        'intro-info-text-1': 'We are a forward-thinking team of designers and developers driven by passion — and fuelled by curiosity.',
        'intro-info-text-2': 'We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.',
        'meet-team-button': 'meet the team',
        'collaborations': 'Teams and companies we work with',
        'view-work-button': 'view our work',
        'our-work-header': 'Our work',
        'all-projects-button': 'all projects',
        'section-header-1': 'We build experiences',
        'card-description-1': 'Make sure you\'re building the right product.',
        'card-description-2': 'Attract and engage your customers with a website.',
        'card-description-3': 'Ensure your site performs up to your users’ standards.',
        'section-header-2': 'Testimonials',
        'review-text': '"Together with the Görm team, we have compiled a new product page."',
        'credits': 'Görm Customer',
        'section-header-3': 'Our skills',
        'parameter-name-1': 'Graphic Design',
        'parameter-name-2': 'Lead Generation',
        'parameter-name-3': 'Photoshop',
        'parameter-name-4': 'Illustration',
        'annotation': '* Companies we\'ve helped build their website with Görm',
        'fun-facts-header': 'Fun facts',
        'fact-info-1': 'Years on market',
        'fact-info-2': 'Projects done',
        'fact-info-3': 'Hero\'s member',
        'fact-info-4': 'Cups of coffee',
        'contact-us': 'Contact us',
        'section-header-5': 'From Blog',
        'blog-type-1': 'Marketing',
        'blog-header-1': 'Curating a workplace that inspires all of us',
        'read-more-1': 'Read More',
        'blog-type-2': 'Design',
        'blog-header-2': 'Designers who changed the web with Webflow',
        'footer-header': 'Contact Us',
        'company-info': 'Görm is an award UI/UX designs and branding agency based in New York, USA.',
        'home': 'Home',
        'about': 'About',
        'guide': 'Style Guide',
        'licensing': 'Licensing',
        'instructions': 'Instructions',
    },
    'ru': {
        'company-name': 'Брендинг и',
        'company-name-smaller': 'Дизайн-студия',
        'company-address-1': 'Дабл-Бей 2028,',
        'company-address-2': 'Нью-Йорк',
        'contact-us': 'Свяжитесь с нами',
        'company-name-huge': 'студия брендинга и цифрового дизайна.',
        'intro-info-header': 'Мы творческая цифровая студия',
        'intro-info-text-1': 'Мы - команда дизайнеров и разработчиков, вдохновленная страстью и питаемая любопытством.',
        'intro-info-text-2': 'Мы верим, что человеческие взаимоотношения являются неотъемлемой частью успешного запуска любого проекта и именно здесь рождаются прекрасные эмоциональные связи между компанией и людьми.',
        'meet-team-button': 'познакомьтесь с командой',
        'collaborations': 'Команды и компании, с которыми мы работаем',
        'view-work-button': 'посмотреть нашу работу',
        'our-work-header': 'Наши работы',
        'all-projects-button': 'все проекты',
        'section-header-1': 'Мы создаем уникальные впечатления',
        'card-description-1': 'Убедитесь, что вы создаете правильный продукт.',
        'card-description-2': 'Привлекайте и вовлекайте ваших клиентов с помощью веб-сайта.',
        'card-description-3': 'Обеспечьте работу вашего сайта в соответствии с ожиданиями пользователей.',
        'section-header-2': 'Отзывы',
        'review-text': '"Вместе с командой Görm мы составили новую страницу продукта."',
        'credits': 'Клиент Görm',
        'section-header-3': 'Наши навыки',
        'parameter-name-1': 'Графический дизайн',
        'parameter-name-2': 'Привлечение клиентов',
        'parameter-name-3': 'Photoshop',
        'parameter-name-4': 'Иллюстрация',
        'annotation': '* Компании, которым мы помогли создать их веб-сайт с помощью Görm',
        'fun-facts-header': 'Интересные факты',
        'fact-info-1': 'Лет на рынке',
        'fact-info-2': 'Выполненных проектов',
        'fact-info-3': 'Член команды',
        'fact-info-4': 'Чашек кофе',
        'contact-us': 'Свяжитесь с нами',
        'section-header-5': 'Из блога',
        'blog-type-1': 'Маркетинг',
        'blog-header-1': 'Создание рабочего места, которое вдохновляет каждого из нас',
        'read-more-1': 'Читать далее',
        'blog-type-2': 'Дизайн',
        'blog-header-2': 'Дизайнеры, изменившие веб с помощью Webflow',
        'footer-header': 'Свяжитесь с нами',
        'company-info': 'Görm - награжденное агентство по дизайну UI/UX и брендингу, базирующееся в Нью-Йорке, США.',
        'home': 'Главная',
        'about': 'О нас',
        'guide': 'Руководство по стилю',
        'licensing': 'Лицензирование',
        'instructions': 'Инструкции',
    }
}