// ============= SHOW SIDEBAR ============


// ============= SIDEBAR SHOW ============



// ============= SIDEBAR HIDDEN ============
// validate If Constant Exists

// ============= SKILLS TABS ============
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills_active")
        })

        target.classList.add('skills_active')

        tabs.forEach(tab => {
            tab.classList.remove('skills_active')
        })

        tab.classList.add('skills_active')
    })
})


// ============= MIXITUP FILTER PORTFOLIO ============
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
})

// ============= link Active Work ============
const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

// ============= Works Popup ============
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('work_button')) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp_thumbnail img').src = portfolioItem.querySelector('.work_img').src;
    document.querySelector('.portfolio_popup-subtitle span').innerHTML = portfolioItem.querySelector('.work_title').innerHTML;
    document.querySelector('.portfolio_popup-body').innerHTML = portfolioItem.querySelector('.portfolio_item-details').innerHTML;
}

// ============= SERVICES MODAL ============
const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// ============= SWIPER TESTIMONIAL ============
let swiper = new Swiper(".testimonials_container", {
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
});

// ============= INPUT ANIMATION ============
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

// ============= SCROLL SECTIONS ACTIVE LINK ============


// ============= SHOW SCROLL UP ============