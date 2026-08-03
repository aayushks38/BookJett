const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const totalSlides = slide.length;

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
    index++;

    if (index >= totalSlides) {
        index = 0;
    }

    updateSlider();
});

prev.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = totalSlides - 1;
    }

    updateSlider();
});

setInterval(() => {
    index++;

    if (index >= totalSlides) {
        index = 0;
    }

    updateSlider();
}, 4000);

// ===== DARK MODE TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('bookjett-theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('bookjett-theme', next);
    updateThemeIcon(next);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

// ===== BOOKS DATA =====
const books = [

    {
        title: "One Piece Vol. 1",
        author: "Eiichiro Oda",
        price: 499,
        image: "Books/onepiece.png",
        category: "manga",
        rating: 4.7
    },

    {
        title: "Naruto Vol. 1",
        author: "Masashi Kishimoto",
        price: 399,
        image: "Books/naruto.png",
        category: "manga",
        rating: 4.3
    },

    {
        title: "Jujutsu Kaisen Vol. 1",
        author: "Gege Akutami",
        price: 549,
        image: "Books/jjk.png",
        category: "manga",
        rating: 4.3
    },

    {
        title: "Demon Slayer Vol. 1",
        author: "Koyoharu Gotouge",
        price: 459,
        image: "Books/demonslayer.png",
        category: "manga",
        rating: 4.2
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        price: 699,
        image: "Books/atomichabits.png",
        category: "best-seller",
        rating: 4.4
    },

    {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 499,
        image: "Books/psychologyofmoney.jpg",
        category: "best-seller",
        rating: 4.3
    },

    {
        title: "Ikigai",
        author: "Hector Garcia",
        price: 399,
        image: "Books/ikigai.jpg",
        category: "best-seller",
        rating: 3.6
    },

    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 599,
        image: "Books/richdad.jpg",
        category: "best-seller",
        rating: 4.1
    },
    {
    title: "Orbital",
    author: "Samantha Harvey",
    price: 799,
    image: "Books/Orbital.jpg",
    category: "award-winners",
    rating: 3.4
    },

    {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    price: 599,
    image: "Books/godofsmallthings.jpg",
    category: "award-winners",
    rating: 3.9
    },

    {
    title: "Life of Pi",
    author: "Yann Martel",
    price: 549,
    image: "Books/lifeofpi.jpg",
    category: "award-winners",
    rating: 3.9
    },

    {
    title: "The White Tiger",
    author: "Aravind Adiga",
    price: 499,
    image: "Books/whitetiger.jpg",
    category: "award-winners",
    rating: 3.8
    },
    {
    title: "Harry Potter Box Set",
    author: "J.K. Rowling",
    price: 3999,
    image: "Books/harrypotterbox.jpg",
    category: "box-sets",
    rating: 4.8
    },

    {
        title: "Percy Jackson Box Set",
        author: "Rick Riordan",
        price: 2499,
        image: "Books/percyjacksonbox.jpg",
        category: "box-sets",
        rating: 4.3
    },

    {
        title: "The Lord of the Rings Box Set",
        author: "J.R.R. Tolkien",
        price: 2999,
        image: "Books/lotrbox.jpg",
        category: "box-sets",
        rating: 4.5
    },

    {
        title: "Diary of a Wimpy Kid Box Set",
        author: "Jeff Kinney",
        price: 2599,
        image: "Books/wimpykidbox.jpg",
        category: "box-sets",
        rating: 4.0
    },
    {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 599,
    image: "Books/thealchemist.jpg",
    category: "international",
    rating: 3.9
    },

    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        price: 499,
        image: "Books/thelittleprince.jpg",
        category: "international",
        rating: 4.3
    },

    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        price: 649,
        image: "Books/davincicode.jpg",
        category: "international",
        rating: 3.9
    },

    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        price: 599,
        image: "Books/thekiterunner.jpg",
        category: "international",
        rating: 4.3
    },
    {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    price: 899,
    image: "Books/sunriseonthereaping.jpg",
    category: "new-arrivals",
    rating: 4.0
    },

    {
        title: "Atmosphere",
        author: "Taylor Jenkins Reid",
        price: 799,
        image: "Books/atmosphere.jpg",
        category: "new-arrivals",
        rating: 3.7
    },

    {
        title: "Great Big Beautiful Life",
        author: "Emily Henry",
        price: 749,
        image: "Books/greatbigbeautifullife.jpg",
        category: "new-arrivals",
        rating: 3.8
    },

    {
        title: "The Emperor of Gladness",
        author: "Ocean Vuong",
        price: 699,
        image: "Books/emperorofgladness.jpg",
        category: "new-arrivals",
        rating: 3.9
    },
    {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 599,
    image: "Books/tokillamockingbird.jpg",
    category: "fiction",
    rating: 4.3
    },

    {
        title: "1984",
        author: "George Orwell",
        price: 499,
        image: "Books/1984.jpg",
        category: "fiction",
        rating: 4.2
    },

    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 549,
        image: "Books/thegreatgatsby.jpg",
        category: "fiction",
        rating: 3.9
    },

    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 449,
        image: "Books/prideandprejudice.jpg",
        category: "fiction",
        rating: 4.3
    },
    {
    title: "Charlotte's Web",
    author: "E.B. White",
    price: 399,
    image: "Books/charlottesweb.png",
    category: "children",
    rating: 4.2
    },

    {
        title: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        price: 349,
        image: "Books/veryhungrycaterpillar.jpg",
        category: "children",
        rating: 4.3
    },

    {
        title: "Matilda",
        author: "Roald Dahl",
        price: 499,
        image: "Books/matilda.jpg",
        category: "children",
        rating: 4.3
    },

    {
        title: "The Gruffalo",
        author: "Julia Donaldson",
        price: 299,
        image: "Books/gruffalo.jpg",
        category: "children",
        rating: 4.3
    },
    {
    title: "Bhagavad Gita",
    author: "Vyasa",
    price: 399,
    image: "Books/bhagavadgita.jpg",
    category: "spiritual",
    rating: 4.2
    },

    {
        title: "Ramayana",
        author: "Valmiki",
        price: 599,
        image: "Books/ramayana.jpg",
        category: "spiritual",
        rating: 4.4
    },

    {
        title: "The Holy Bible",
        author: "Various Authors",
        price: 699,
        image: "Books/bible.jpg",
        category: "spiritual",
        rating: 4.5
    },

    {
        title: "The Dhammapada",
        author: "Gautama Buddha",
        price: 349,
        image: "Books/dhammapada.jpg",
        category: "spiritual",
        rating: 4.2
    }

];

// ===== RENDER STARS =====
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.3 && rating % 1 <= 0.7;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalf) {
        stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="fa-regular fa-star"></i>';
    }
    return stars;
}

// ===== DISPLAY BOOKS =====
function displayBooks(category){

    const grid = document.querySelector(`#${category} .books-grid`);

    books.forEach((book, idx) =>{

        if(book.category === category){

            const card = document.createElement("div");

            card.className = "book-card";

            card.innerHTML = `
                <i class="fa-regular fa-heart wishlist-btn" data-title="${book.title}"></i>
                <div class="card-image-wrapper">
                    <img src="${book.image}" alt="${book.title}">
                </div>
                <div class="card-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <span class="price">₹${book.price}</span>
                    <div class="book-rating">
                        ${renderStars(book.rating)}
                        <span class="rating-number">${book.rating}</span>
                    </div>
                </div>
            `;

            grid.appendChild(card);
        }

    });

}
displayBooks("manga");
displayBooks("best-seller");
displayBooks("fiction");
displayBooks("spiritual");
displayBooks("children");
displayBooks("new-arrivals");
displayBooks("international");
displayBooks("award-winners");
displayBooks("box-sets");

// ===== WISHLIST TOGGLE =====
// Load wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem('bookjett-wishlist') || '[]');

// Apply saved wishlist state
document.querySelectorAll('.wishlist-btn').forEach(btn => {
    if (wishlist.includes(btn.dataset.title)) {
        btn.classList.remove('fa-regular');
        btn.classList.add('fa-solid', 'active');
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('wishlist-btn')) {
        e.stopPropagation();
        const btn = e.target;
        const title = btn.dataset.title;

        btn.classList.toggle('fa-regular');
        btn.classList.toggle('fa-solid');
        btn.classList.toggle('active');

        // Pop animation
        btn.classList.add('pop');
        setTimeout(() => btn.classList.remove('pop'), 400);

        // Save to localStorage
        if (btn.classList.contains('active')) {
            if (!wishlist.includes(title)) wishlist.push(title);
        } else {
            wishlist = wishlist.filter(t => t !== title);
        }
        localStorage.setItem('bookjett-wishlist', JSON.stringify(wishlist));
    }
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== BACK TO TOP =====
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});