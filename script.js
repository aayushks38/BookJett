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
    },
    {
    title: "Orbital",
    author: "Samantha Harvey",
    price: 799,
    image: "Books/Orbital.jpg",
    category: "award-winners"
    },

    {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    price: 599,
    image: "Books/godofsmallthings.jpg",
    category: "award-winners"
    },

    {
    title: "Life of Pi",
    author: "Yann Martel",
    price: 549,
    image: "Books/lifeofpi.jpg",
    category: "award-winners"
    },

    {
    title: "The White Tiger",
    author: "Aravind Adiga",
    price: 499,
    image: "Books/whitetiger.jpg",
    category: "award-winners"
    },
    {
    title: "Harry Potter Box Set",
    author: "J.K. Rowling",
    price: 3999,
    image: "Books/harrypotterbox.jpg",
    category: "box-sets"
    },

    {
        title: "Percy Jackson Box Set",
        author: "Rick Riordan",
        price: 2499,
        image: "Books/percyjacksonbox.jpg",
        category: "box-sets"
    },

    {
        title: "The Lord of the Rings Box Set",
        author: "J.R.R. Tolkien",
        price: 2999,
        image: "Books/lotrbox.jpg",
        category: "box-sets"
    },

    {
        title: "Diary of a Wimpy Kid Box Set",
        author: "Jeff Kinney",
        price: 2599,
        image: "Books/wimpykidbox.jpg",
        category: "box-sets"
    },
    {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 599,
    image: "Books/thealchemist.jpg",
    category: "international"
    },

    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        price: 499,
        image: "Books/thelittleprince.jpg",
        category: "international"
    },

    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        price: 649,
        image: "Books/davincicode.jpg",
        category: "international"
    },

    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        price: 599,
        image: "Books/thekiterunner.jpg",
        category: "international"
    },
    {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    price: 899,
    image: "Books/sunriseonthereaping.jpg",
    category: "new-arrivals"
    },

    {
        title: "Atmosphere",
        author: "Taylor Jenkins Reid",
        price: 799,
        image: "Books/atmosphere.jpg",
        category: "new-arrivals"
    },

    {
        title: "Great Big Beautiful Life",
        author: "Emily Henry",
        price: 749,
        image: "Books/greatbigbeautifullife.jpg",
        category: "new-arrivals"
    },

    {
        title: "The Emperor of Gladness",
        author: "Ocean Vuong",
        price: 699,
        image: "Books/emperorofgladness.jpg",
        category: "new-arrivals"
    },
    {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 599,
    image: "Books/tokillamockingbird.jpg",
    category: "fiction"
    },

    {
        title: "1984",
        author: "George Orwell",
        price: 499,
        image: "Books/1984.jpg",
        category: "fiction"
    },

    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 549,
        image: "Books/thegreatgatsby.jpg",
        category: "fiction"
    },

    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 449,
        image: "Books/prideandprejudice.jpg",
        category: "fiction"
    },
    {
    title: "Charlotte's Web",
    author: "E.B. White",
    price: 399,
    image: "Books/charlottesweb.png",
    category: "children"
    },

    {
        title: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        price: 349,
        image: "Books/veryhungrycaterpillar.jpg",
        category: "children"
    },

    {
        title: "Matilda",
        author: "Roald Dahl",
        price: 499,
        image: "Books/matilda.jpg",
        category: "children"
    },

    {
        title: "The Gruffalo",
        author: "Julia Donaldson",
        price: 299,
        image: "Books/gruffalo.jpg",
        category: "children"
    },
    {
    title: "Bhagavad Gita",
    author: "Vyasa",
    price: 399,
    image: "Books/bhagavadgita.jpg",
    category: "spiritual"
    },

    {
        title: "Ramayana",
        author: "Valmiki",
        price: 599,
        image: "Books/ramayana.jpg",
        category: "spiritual"
    },

    {
        title: "The Holy Bible",
        author: "Various Authors",
        price: 699,
        image: "Books/bible.jpg",
        category: "spiritual"
    },

    {
        title: "The Dhammapada",
        author: "Gautama Buddha",
        price: 349,
        image: "Books/dhammapada.jpg",
        category: "spiritual"
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
displayBooks("spiritual");
displayBooks("children");
displayBooks("new-arrivals");
displayBooks("international");
displayBooks("award-winners");
displayBooks("box-sets");