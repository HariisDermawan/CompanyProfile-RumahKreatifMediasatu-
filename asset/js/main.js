AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    delay: 100,
    easing: 'ease-in-out',
    mirror: false
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    hamburger.classList.toggle('hamburger-active');
});
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active');
    });
});
let currentSlide = 0;
const teamCards = document.querySelectorAll('.team-card-new');
const totalCards = teamCards.length;
const carouselTrack = document.getElementById('team-carousel-track');
const prevButton = document.getElementById('prev-team');
const nextButton = document.getElementById('next-team');
const dotsContainer = document.getElementById('carousel-dots');
function getCardsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}
function getTotalSlides() {
    const cardsPerView = getCardsPerView();
    return Math.max(totalCards - cardsPerView + 1, 1);
}
function updateCarousel() {
    const cardsPerView = getCardsPerView();
    const cardWidth = 100 / cardsPerView;
    const translateX = -currentSlide * cardWidth;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    updateDots();
}
function createDots() {
    dotsContainer.innerHTML = '';
    const totalSlides = getTotalSlides();

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
}
function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
nextButton.addEventListener('click', () => {
    const totalSlides = getTotalSlides();
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateCarousel();
});
prevButton.addEventListener('click', () => {
    const totalSlides = getTotalSlides();
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateCarousel();
});
createDots();
updateCarousel();
window.addEventListener('resize', () => {
    const newCardsPerView = getCardsPerView();
    const oldCardsPerView = window.lastCardsPerView || 1;

    if (newCardsPerView !== oldCardsPerView) {
        currentSlide = Math.min(currentSlide, getTotalSlides() - 1);
        createDots();
        updateCarousel();
    }

    window.lastCardsPerView = newCardsPerView;
});
window.lastCardsPerView = getCardsPerView();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Mengirim...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const modalActionBtn = document.getElementById('modal-action-btn');
const teamMembers = {
    1: {
        name: 'Jhondry Fernando',
        position: 'Web Developer',
        experience: '5+ Tahun Pengalaman',
        email: 'rumahkreatifmediasatu@gmail.com',
        phone: '+62 816-1125-676',
        description: 'Memimpin tim kreatif dengan pengalaman lebih dari 10 tahun di industri media. Sebelum bergabung dengan MediaSphere, Alex bekerja sebagai Creative Director di agensi periklanan ternama di New York dan London.',
        image: 'asset/tim/jhon.jpeg',
        skills: ['Creative Strategy', 'Brand Storytelling', 'Content Development', 'Team Leadership', 'Client Relations'],
        achievements: [
            'Memenangkan 8 penghargaan kreatif internasional',
            'Meningkatkan engagement klien rata-rata 150%',
            'Membimbing 15+ creative talent'
        ]
    },
    2: {
        name: 'Haris Darmawan',
        position: 'Web Developer',
        experience: '6+ Proyek',
        email: 'harisdermawaan.id@gmail.com',
        phone: '+62 812 3456 7892',
        description: 'Spesialis dalam produksi konten video dengan fokus pada storytelling yang powerful. Telah memproduksi lebih dari 50 proyek video untuk berbagai klien dari industri fashion hingga teknologi.',
        image: 'asset/tim/me.jpeg',
        skills: ['Laravel', 'ApiRest', 'php', 'Html', 'css', 'java script', 'tailwindcss', 'figma design'],
        achievements: [
            'Memproduksi 50+ proyek video sukses',
            'Meningkatkan ROI klien rata-rata 200%',
            'Mengelola tim produksi hingga 20 orang'
        ]
    },
    3: {
        name: 'No name',
        position: 'Motion Designer',
        experience: 'Editor & Motion Designer',
        email: 'michael@mediasphere.com',
        phone: '+62 812 3456 7893',
        description: 'Ahli dalam editing video dan motion graphics dengan kemampuan teknis yang luar biasa. Berpengalaman dengan berbagai software profesional seperti Adobe After Effects, Premiere Pro, dan Cinema 4D.',
        image: '#',
        skills: ['Video Editing', 'Motion Graphics', 'Visual Effects', '3D Animation', 'Color Grading'],
        achievements: [
            'Bekerja pada 5 proyek yang memenangkan penghargaan',
            'Mengembangkan template motion graphics yang digunakan tim',
            'Melatih 8 junior motion designer'
        ]
    },
    4: {
        name: 'No Name',
        position: 'Manajer Media Sosial',
        experience: 'Strategi Media Sosial',
        email: 'lisa@mediasphere.com',
        phone: '+62 812 3456 7894',
        description: 'Mengelola strategi media sosial dan engagement dengan audiens di berbagai platform. Meningkatkan engagement hingga 300% untuk beberapa klien dengan konten yang relevan dan interaktif.',
        image: '#',
        skills: ['Social Media Strategy', 'Content Planning', 'Community Management', 'Analytics', 'Influencer Marketing'],
        achievements: [
            'Meningkatkan engagement hingga 300%',
            'Menumbuhkan followers klien rata-rata 50K+',
            'Mengembangkan strategi viral untuk 3 kampanye'
        ]
    },
    5: {
        name: 'No Name',
        position: 'Sound Engineer',
        experience: 'Audio Specialist',
        email: 'david@mediasphere.com',
        phone: '+62 812 3456 7895',
        description: 'Spesialis audio dengan pengalaman 8 tahun di industri rekaman. Menguasai teknik mixing dan mastering untuk berbagai genre musik. Bekerja dengan berbagai artis dan label musik ternama.',
        image: '#',
        skills: ['Audio Mixing', 'Mastering', 'Sound Design', 'Foley Recording', 'Audio Restoration'],
        achievements: [
            'Bekerja pada 3 album platinum',
            'Mengembangkan teknik mastering proprietary',
            'Melatih 5 audio engineer junior'
        ]
    },
    6: {
        name: 'No Name',
        position: 'Content Strategist',
        experience: 'Strategi Konten',
        email: 'emma@mediasphere.com',
        phone: '+62 812 3456 7896',
        description: 'Mengembangkan strategi konten untuk berbagai platform media. Berpengalaman dalam penelitian pasar dan analisis audiens. Membantu klien mengembangkan voice dan tone brand yang konsisten.',
        image: '#',
        skills: ['Content Strategy', 'Market Research', 'Audience Analysis', 'Brand Voice Development', 'Content Calendar'],
        achievements: [
            'Mengembangkan strategi konten untuk 20+ klien',
            'Meningkatkan conversion rate rata-rata 35%',
            'Membuat framework content strategy yang digunakan perusahaan'
        ]
    }
};
function showTeamModal(teamId) {
    const member = teamMembers[teamId];
    if (!member) return;

    modalTitle.textContent = `${member.name} - ${member.position}`;

    const content = `
                <div class="space-y-4 sm:space-y-6">
                    <div class="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                        <div class="md:w-1/3">
                            <img src="${member.image}" alt="${member.name}" class="rounded-xl sm:rounded-2xl w-full shadow-lg">
                        </div>
                        <div class="md:w-2/3 space-y-3 sm:space-y-4">
                            <div>
                                <h3 class="text-xl sm:text-2xl font-bold">${member.name}</h3>
                                <p class="text-primary font-medium text-sm sm:text-base">${member.position}</p>
                                <p class="text-gray-600 text-sm sm:text-base">${member.experience}</p>
                            </div>
                            
                            <div class="flex items-center text-gray-600 text-sm sm:text-base">
                                <i class="fas fa-envelope mr-2 sm:mr-3"></i>
                                <span>${member.email}</span>
                            </div>
                            
                            <div class="flex items-center text-gray-600 text-sm sm:text-base">
                                <i class="fas fa-phone mr-2 sm:mr-3"></i>
                                <span>${member.phone}</span>
                            </div>
                            
                            <div class="flex space-x-3 sm:space-x-4">
                                <a href="#" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                    <i class="fab fa-linkedin-in text-xs sm:text-sm"></i>
                                </a>
                                <a href="#" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                    <i class="fab fa-twitter text-xs sm:text-sm"></i>
                                </a>
                                <a href="#" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                    <i class="fab fa-instagram text-xs sm:text-sm"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="space-y-3 sm:space-y-4">
                        <div>
                            <h4 class="font-bold text-base sm:text-lg mb-1 sm:mb-2">Profil Profesional</h4>
                            <p class="text-gray-600 text-sm sm:text-base">${member.description}</p>
                        </div>
                        
                        <div class="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 sm:p-6">
                            <h4 class="font-bold mb-3 sm:mb-4 text-gray-800 text-base sm:text-lg">Keahlian & Spesialisasi:</h4>
                            <div class="flex flex-wrap gap-1 sm:gap-2">
                                ${member.skills.map(skill => `
                                    <span class="px-2 py-1 sm:px-3 sm:py-1 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full">${skill}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-base sm:text-lg mb-1 sm:mb-2">Pencapaian</h4>
                            <ul class="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                                ${member.achievements.map(achievement => `
                                    <li class="flex items-start">
                                        <i class="fas fa-trophy text-yellow-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 text-xs sm:text-sm"></i>
                                        <span>${achievement}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;

    modalContent.innerHTML = content;
    modalActionBtn.textContent = 'Tutup';
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function hideModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}
modalClose.addEventListener('click', hideModal);
modalActionBtn.addEventListener('click', hideModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        hideModal();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        hideModal();
    }
});
document.querySelectorAll('.team-card-new').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const teamId = card.getAttribute('data-team');
        showTeamModal(teamId);
    });
});
window.addEventListener('resize', function () {
    AOS.refresh();
});

const filterButtons = document.querySelectorAll(".filter-btn");
const contentCards = document.querySelectorAll(".content-card");
const toggleShowBtn = document.getElementById("toggle-show-btn");

let currentFilter = "all";
let showAllMode = false;
const defaultLimit = 8;

function applyFilterAndLimit() {
    let filteredCards = [];

    contentCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        const match = (currentFilter === "all" || category === currentFilter);

        if (match) {
            filteredCards.push(card);
        } else {
            card.style.display = "none";
        }
    });

    // Kalau mode "lebih sedikit" = tampil 6
    if (!showAllMode) {
        filteredCards.forEach((card, index) => {
            card.style.display = (index < defaultLimit) ? "block" : "none";
        });

        // Kalau card <= 6, tombol disembunyikan
        if (filteredCards.length <= defaultLimit) {
            toggleShowBtn.style.display = "none";
        } else {
            toggleShowBtn.style.display = "inline-flex";
            toggleShowBtn.innerText = "Tampilkan Semua";
        }
    } else {
        // Mode tampil semua
        filteredCards.forEach((card) => {
            card.style.display = "block";
        });

        // tombol muncul kalau card lebih dari 6
        if (filteredCards.length <= defaultLimit) {
            toggleShowBtn.style.display = "none";
        } else {
            toggleShowBtn.style.display = "inline-flex";
            toggleShowBtn.innerText = "Tampilkan Lebih Sedikit";
        }
    }
}

function setActiveButton(activeBtn) {
    filterButtons.forEach((b) => b.classList.remove("active-filter"));
    if (activeBtn) activeBtn.classList.add("active-filter");
}

// Default: tampil 6 pertama
applyFilterAndLimit();

// Klik filter category
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentFilter = btn.getAttribute("data-filter");
        showAllMode = false; // reset ke mode 6 lagi saat filter berubah
        setActiveButton(btn);
        applyFilterAndLimit();
    });
});

// Toggle show more / less
toggleShowBtn.addEventListener("click", () => {
    showAllMode = !showAllMode;
    applyFilterAndLimit();
});
