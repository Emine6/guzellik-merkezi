/* ==========================================================================
   LuxeAura Beauty & Wellness - Dynamic Application Logic & Instagram Router
   Software Engineering Project - Interactive Features
   ========================================================================== */

// Service Data Repository
const servicesData = [
    {
        id: 'hydrafacial',
        category: 'cilt',
        name: 'Hydrafacial Medikal Cilt Bakımı',
        shortDesc: 'Gözenekleri derinlemesine temizleyen, cildi nemlendiren ve leke karşıtı 9 adımlı medikal cilt bakımı.',
        fullDesc: 'Hydrafacial; vakumlu girdap teknolojisi ile cildi ölü hücrelerden ve siyah noktalardan arındıran, peptit ve hyalüronik asit serumları ile derinlemesine besleyen patentli medikal bir cilt bakımı sistemidir.',
        duration: '60 Dakika',
        sessions: '1-4 Seans / Ayda 1',
        priceTier: 'Popüler İşlem',
        image: './images/hydrafacial.png',
        suitableFor: 'Tüm cilt tipleri, sivilce izleri, mat görünüm ve geniş gözenekler.'
    },
    {
        id: 'diode-laser',
        category: 'lazer',
        name: 'Buz Başlıklı Diode Lazer Epilasyon',
        shortDesc: 'Ağrısız, acısız ve 4 mevsim uygulanabilen en son teknoloji soğutmalı buz başlık lazer.',
        fullDesc: 'Gelişmiş soğutma teknolojisi sayesinde cilt yüzeyini -5°C’ye kadar soğutarak sıfır acı hissi ile kıl köklerini kalıcı olarak hedef alır. İnce ve açık renkli kıllarda dahi yüksek başarı sağlar.',
        duration: '30-45 Dakika',
        sessions: '6-8 Seans',
        priceTier: 'En Çok Tercih Edilen',
        image: './images/laser.png',
        suitableFor: 'Kadın & Erkek tüm cilt tipleri ve kıl tipleri.'
    },
    {
        id: 'microblading',
        category: 'kalici-makyaj',
        name: 'Microblading Kaş Tasarımı',
        shortDesc: 'Altın oran ölçümü ile yüz hatlarınıza özel, doğal kıl efekti veren kalıcı kaş tasarımı.',
        fullDesc: 'Steril mikro iğneler ve organik bitkisel pigmentler kullanılarak kaş aralarına doğal kıl atımları yapılır. Yüzünüze en uygun altın oran çizimi önceden gerçekleştirilir.',
        duration: '90 Dakika',
        sessions: '2 Seans (Ana + Rötuş)',
        priceTier: 'Özel Tasarım',
        image: './images/microblading.png',
        suitableFor: 'Seyrek kaşlar, asimetrik kaş yapısı ve şekil kaybı.'
    },
    {
        id: 'g5-slimming',
        category: 'vucut',
        name: 'G5 Bölgesel İncelme & Selülit Bakımı',
        shortDesc: 'Ritmik masaj ve titreşim dalgaları ile selülit görünümünü azaltan ve bölgesel sıkılaşma sağlayan terapi.',
        fullDesc: 'G5 cihazı, kan dolaşımını hızlandırır, birikmiş yağ dokularını parçalamaya yardımcı olur ve ilk seanstan itibaren gözle görülür sıkılaşma ve incelme sağlar.',
        duration: '45 Dakika',
        sessions: '8-10 Seans',
        priceTier: 'Hızlı Sonuç',
        image: './images/slimming.png',
        suitableFor: 'Selülit problemi, bölgesel yağlanma ve bacak/karın sıkılaşması.'
    },
    {
        id: 'deeplift-facial',
        category: 'cilt',
        name: 'Gold Serum Anti-Aging Bakım',
        shortDesc: '24K Altın parçacıklı ve kolajen tetikleyici özel yaşlanma karşıtı lüks cilt bakımı.',
        fullDesc: 'İnce çizgileri hafifleten, cilt esnekliğini artıran ve anında göz alıcı bir parlaklık kazandıran yüksek konsantrasyonlu anti-aging bakım kürümüzdür.',
        duration: '75 Dakika',
        sessions: 'Özel Günler / Rutin',
        priceTier: 'Lüks Segment',
        image: './images/hydrafacial.png',
        suitableFor: 'Olgun ciltler, esneklik kaybı ve özel gün öncesi ışıltı.'
    },
    {
        id: 'lash-lifting',
        category: 'kalici-makyaj',
        name: 'Keratin Kirpik Lifting & Vitamin Bakımı',
        shortDesc: 'Kendi doğal kirpiklerinizi kıvıran, besleyen ve 2 kat daha hacimli gösteren bakım.',
        fullDesc: 'Keratin ve protein yüklemesi ile kendi doğal kirpiklerinizi yukarı doğru kıvırır, siyah pigment yüklemesi ile maskara etkili uzun ömürlü kıvrıklık sağlar.',
        duration: '45 Dakika',
        sessions: 'Etkisi 6-8 Hafta',
        priceTier: 'Doğal Bakışlar',
        image: './images/microblading.png',
        suitableFor: 'Düz, zayıf veya açık renkli doğal kirpikler.'
    }
];

// Instagram Profile Configuration
const INSTAGRAM_CONFIG = {
    username: 'luxeaurabeauty',
    profileUrl: 'https://www.instagram.com/luxeaurabeauty/',
    fallbackMessage: 'Merhaba! Güzellik merkezinizden işlem için randevu almak istiyorum.'
};

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    renderServices(servicesData);
    initCategoryFilter();
    initBeforeAfterSlider();
    initFaqAccordion();
    initQuiz();
    initModals();
});

/* ==========================================================================
   HEADER SCROLL & MOBILE NAV
   ========================================================================== */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = toggleBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                toggleBtn.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
}

/* ==========================================================================
   SERVICES RENDER & FILTERING
   ========================================================================== */
function renderServices(data) {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = data.map(service => `
        <div class="service-card" data-category="${service.category}">
            <div class="service-img">
                <img src="${service.image}" alt="${service.name}" loading="lazy">
                <span class="service-category-tag">${getCategoryName(service.category)}</span>
            </div>
            <div class="service-body">
                <h3 class="service-title">${service.name}</h3>
                <p class="service-desc">${service.shortDesc}</p>
                <div class="service-meta">
                    <span><i class="far fa-clock"></i> ${service.duration}</span>
                    <span><i class="far fa-calendar-alt"></i> ${service.sessions}</span>
                </div>
                <div class="service-actions">
                    <button class="btn btn-outline" onclick="openDetailModal('${service.id}')">
                        <i class="fas fa-info-circle"></i> Detaylar
                    </button>
                    <button class="btn btn-instagram" onclick="openInstagramBookingModal('${service.name}')">
                        <i class="fab fa-instagram"></i> Randevu Al
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryName(catKey) {
    const map = {
        'cilt': 'Cilt Bakımı',
        'lazer': 'Lazer Epilasyon',
        'kalici-makyaj': 'Kalıcı Makyaj',
        'vucut': 'Bölgesel İncelme'
    };
    return map[catKey] || 'Güzellik İşlemi';
}

function initCategoryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            if (filterValue === 'all') {
                renderServices(servicesData);
            } else {
                const filtered = servicesData.filter(s => s.category === filterValue);
                renderServices(filtered);
            }
        });
    });
}

/* ==========================================================================
   INSTAGRAM ROUTER & MODAL SYSTEM
   ========================================================================== */
let currentBookingTreatment = '';

function openInstagramBookingModal(treatmentName = '') {
    currentBookingTreatment = treatmentName || 'Genel Güzellik Danışmanlığı & Randevu';
    const modal = document.getElementById('instagram-modal');
    const selectedTreatmentText = document.getElementById('selected-treatment-name');
    
    if (selectedTreatmentText) {
        selectedTreatmentText.innerText = currentBookingTreatment;
    }

    if (modal) {
        modal.classList.add('active');
    }
}

function redirectToInstagram() {
    const message = `Merhaba @${INSTAGRAM_CONFIG.username}, websiteniz üzerinden "${currentBookingTreatment}" işlemi için randevu almak istiyorum. Müsaitlik durumunu öğrenebilir miyim?`;
    
    // Copy pre-formatted message to user's clipboard for seamless booking
    navigator.clipboard.writeText(message).then(() => {
        console.log('Randevu mesajı panoya kopyalandı.');
    }).catch(err => {
        console.log('Pano erişim hatası:', err);
    });

    // Open Instagram Profile/DM in new tab
    window.open(INSTAGRAM_CONFIG.profileUrl, '_blank');
}

function openDetailModal(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    if (!service) return;

    const modal = document.getElementById('detail-modal');
    const modalBody = document.getElementById('detail-modal-body');

    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <img src="${service.image}" alt="${service.name}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem;">
            <h3 style="font-size: 1.8rem; font-family: var(--font-heading); color: var(--text-main);">${service.name}</h3>
            <span style="display: inline-block; padding: 0.3rem 1rem; background: rgba(216,164,143,0.15); color: #B87D68; border-radius: 20px; font-weight: 600; font-size: 0.85rem; margin-top: 0.5rem;">
                ${service.priceTier}
            </span>
        </div>
        <div style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
            <p style="margin-bottom: 1rem;">${service.fullDesc}</p>
            <div style="background: var(--bg-nude-light); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--primary-rose-gold);">
                <strong><i class="fas fa-check-circle" style="color: var(--primary-rose-gold);"></i> Kimler İçin Uygundur?</strong>
                <p style="margin-top: 0.3rem; font-size: 0.9rem;">${service.suitableFor}</p>
            </div>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: space-between; margin-bottom: 1.5rem; background: #FFF; padding: 1rem; border: 1px solid var(--border-light); border-radius: 8px;">
            <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">İşlem Süresi</span>
                <strong style="font-size: 1rem; color: var(--text-main);"><i class="far fa-clock"></i> ${service.duration}</strong>
            </div>
            <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Önerilen Seans</span>
                <strong style="font-size: 1rem; color: var(--text-main);"><i class="far fa-calendar-alt"></i> ${service.sessions}</strong>
            </div>
        </div>
        <button class="btn btn-instagram" style="width: 100%;" onclick="closeModal('detail-modal'); openInstagramBookingModal('${service.name}');">
            <i class="fab fa-instagram"></i> Bu İşlem İçin Instagram'dan Randevu Al
        </button>
    `;

    modal.classList.add('active');
}

function initModals() {
    // Close modal when clicking overlay or close button
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

/* ==========================================================================
   BEFORE & AFTER DRAGGABLE SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
    const container = document.getElementById('ba-slider');
    if (!container) return;

    const afterImage = container.querySelector('.ba-after');
    const handle = container.querySelector('.ba-handle');
    let isDragging = false;

    const setSliderPosition = (x) => {
        const rect = container.getBoundingClientRect();
        let position = ((x - rect.left) / rect.width) * 100;
        
        if (position < 0) position = 0;
        if (position > 100) position = 100;

        afterImage.style.width = `${position}%`;
        handle.style.left = `${position}%`;
    };

    // Mouse Events
    handle.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        setSliderPosition(e.clientX);
    });

    // Touch Events for Mobile
    handle.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchend', () => isDragging = false);
    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        setSliderPosition(e.touches[0].clientX);
    });
}

/* ==========================================================================
   INTERACTIVE BEAUTY QUIZ
   ========================================================================== */
let quizAnswers = {
    goal: '',
    skinType: ''
};

function initQuiz() {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            const step = this.closest('.quiz-step');
            const stepNum = step.getAttribute('data-quiz-step');

            step.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');

            if (stepNum === '1') {
                quizAnswers.goal = this.getAttribute('data-value');
                setTimeout(() => goToQuizStep(2), 250);
            } else if (stepNum === '2') {
                quizAnswers.skinType = this.getAttribute('data-value');
                setTimeout(() => showQuizResult(), 250);
            }
        });
    });
}

function goToQuizStep(stepNum) {
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    const targetStep = document.querySelector(`.quiz-step[data-quiz-step="${stepNum}"]`);
    if (targetStep) targetStep.classList.add('active');
}

function showQuizResult() {
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    const resultDiv = document.getElementById('quiz-result');
    const recName = document.getElementById('recommendation-name');
    const recDesc = document.getElementById('recommendation-desc');
    
    let recommended = servicesData[0]; // Default Hydrafacial

    if (quizAnswers.goal === 'smooth-skin') {
        recommended = servicesData.find(s => s.id === 'diode-laser') || servicesData[1];
    } else if (quizAnswers.goal === 'makeup') {
        recommended = servicesData.find(s => s.id === 'microblading') || servicesData[2];
    } else if (quizAnswers.goal === 'slimming') {
        recommended = servicesData.find(s => s.id === 'g5-slimming') || servicesData[3];
    } else {
        recommended = servicesData.find(s => s.id === 'hydrafacial') || servicesData[0];
    }

    if (recName && recDesc && resultDiv) {
        recName.innerText = recommended.name;
        recDesc.innerText = `Cilt tipiniz ve güzellik hedefleriniz doğrultusunda uzmanlarımız tarafından sizin için en ideal işlem olarak "${recommended.name}" önerilmektedir.`;
        resultDiv.classList.add('active');
    }
}

function resetQuiz() {
    quizAnswers = { goal: '', skinType: '' };
    document.getElementById('quiz-result').classList.remove('active');
    document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    goToQuizStep(1);
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}
