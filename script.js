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

const books = [

    {
        title: "One Piece Vol. 1",
        author: "Eiichiro Oda",
        price: 499,
        image: "Books/onepiece.png",
        category: "manga"
    },

    {
        title: "Naruto Vol. 1",
        author: "Masashi Kishimoto",
        price: 399,
        image: "Books/naruto.png",
        category: "manga"
    },

    {
        title: "Jujutsu Kaisen Vol. 1",
        author: "Gege Akutami",
        price: 549,
        image: "Books/jjk.png",
        category: "manga"
    },

    {
        title: "Demon Slayer Vol. 1",
        author: "Koyoharu Gotouge",
        price: 459,
        image: "Books/demonslayer.png",
        category: "manga"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        price: 699,
        image: "Books/atomichabits.png",
        category: "best-seller"
    },

    {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 499,
        image: "Books/psychologyofmoney.jpg",
        category: "best-seller"
    },

    {
        title: "Ikigai",
        author: "Hector Garcia",
        price: 399,
        image: "Books/ikigai.jpg",
        category: "best-seller"
    },

    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 599,
        image: "Books/richdad.jpg",
        category: "best-seller"
    }

];
function displayBooks(category){

    const grid = document.querySelector(`#${category} .books-grid`);

    books.forEach(book =>{

        if(book.category === category){

            const card = document.createElement("div");

            card.className = "book-card";

            card.innerHTML = `
                <img src="${book.image}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <span>₹${book.price}</span>
            `;

            grid.appendChild(card);
        }

    });

}
displayBooks("manga");
displayBooks("best-seller");
displayBooks("fiction");
displayBooks("comic");
displayBooks("children");
displayBooks("new-arrivals");
displayBooks("international");
displayBooks("award-winners");
displayBooks("box-sets");