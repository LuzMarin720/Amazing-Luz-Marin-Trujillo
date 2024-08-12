const data = {
    currentDate: "2023-01-01",  /*actual fecha*/
    events: [
        {
            _id: "639c723b992482e5f2834be9",
            name: "Collectivities Party",
            image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            date: "2022-12-12",
            description:
                "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 5,
            __v: 0,
        },
        {
            _id: "639c723b992482e5f2834beb",
            name: "Korean style",
            image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            price: 10,
            __v: 0,
            estimate: 42756,
        },
        {
            _id: "639c723c992482e5f2834bed",
            name: "Jurassic Park",
            image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            date: "2022-11-02",
            description:
                "Let's go meet the biggest dinosaurs in the paleontology museum.",
            category: "Museum",
            place: "Field",
            capacity: 82000,
            price: 15,
            __v: 0,
            assistance: 65892,
        },
        {
            _id: "639c723c992482e5f2834bef",
            name: "Parisian Museum",
            image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            date: "2023-11-02",
            description:
                "A unique tour in the city of lights, get to know one of the most iconic places.",
            category: "Museum",
            place: "Paris",
            capacity: 8200,
            estimate: 8200,
            price: 3500,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf1",
            name: "Comicon",
            image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            date: "2022-02-12",
            description:
                "For comic lovers, all your favourite characters gathered in one place.",
            category: "Costume Party",
            place: "Room C",
            capacity: 120000,
            assistance: 110000,
            price: 54,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf3",
            name: "Halloween Night",
            image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            date: "2023-02-12",
            description: "Come with your scariest costume and win incredible prizes.",
            category: "Costume Party",
            place: "Room C",
            capacity: 12000,
            estimate: 9000,
            price: 12,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf5",
            name: "Metallica in concert",
            image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            date: "2023-01-22",
            description: "The only concert of the most emblematic band in the world.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            estimate: 138000,
            price: 150,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf7",
            name: "Electronic Fest",
            image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            date: "2022-01-22",
            description:
                "The best national and international DJs gathered in one place.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            assistance: 110300,
            price: 250,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bf9",
            name: "10K for life",
            image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            date: "2022-03-01",
            description: "Come and exercise, improve your health and lifestyle.",
            category: "Race",
            place: "Soccer field",
            capacity: 30000,
            assistance: 25698,
            price: 3,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bfb",
            name: "15K NY",
            image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
            date: "2023-03-01",  /*10*/
            description:
                "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            category: "Race",
            place: "New York",
            capacity: 3000000,
            price: 3,
            __v: 0,
            estimate: 2569800,
        },
        {
            _id: "639c723d992482e5f2834bfd",
            name: "School's book fair",
            image: "https://i.postimg.cc/Sst763n6/book1.jpg",
            date: "2023-10-15", /*11*/
            description: "Bring your unused school book and take the one you need.",
            category: "Book Exchange",
            place: "Room D1",
            capacity: 150000,
            estimate: 123286,
            price: 1,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bff",
            name: "Just for your kitchen",
            image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
            date: "2022-11-09", /*12*/
            description:
                "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            category: "Book Exchange",
            place: "Room D6",
            capacity: 130000,
            assistance: 90000,
            price: 100,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c01",
            name: "Batman",
            image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            date: "2022-3-11",
            description: "Come see Batman fight crime in Gotham City.",
            category: "Cinema",
            place: "Room D1",
            capacity: 11000,
            assistance: 9300,
            price: 225,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c03",
            name: "Avengers",
            image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
            date: "2023-10-15",
            description:
                "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            category: "Cinema",
            place: "Room D1",
            capacity: 9000,
            estimate: 9000,
            price: 250,
            __v: 0,
        },
    ],
};


/* Limpio la data y ordeno en pastEvents */
let x = data['events'].length;
const baselineDate = new Date(data['currentDate']);

let pastEvents = [];
for (let i = 0; i < x; i++) {
    let eventDate = new Date(data['events'][i].date);
    if (eventDate < baselineDate) {
        pastEvents.push(data['events'][i]);
    }
}

let n = pastEvents.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (new Date(pastEvents[j]['date']) < new Date(pastEvents[j + 1]['date'])) {
            [pastEvents[j], pastEvents[j + 1]] = [pastEvents[j + 1], pastEvents[j]];
        }
    }
}


let carouselInner = document.getElementById('carousel-inner');
let cardInfo = document.getElementById('cardInfo');

// Funcion para crear las imagenes/slide del carrusel
function carouselSlider(event, isActive) {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item${isActive ? ' active' : ''}`;

    const img = document.createElement('img');
    img.src = event.image;
    img.className = 'd-block w-100';

    const caption = document.createElement('div');
    caption.className = 'carousel-caption d-none d-md-block';

    const h5 = document.createElement('h5');
    h5.textContent = "PAST EVENTS";

    caption.appendChild(h5);
    carouselItem.appendChild(img);
    carouselItem.appendChild(caption);

    return carouselItem;
}

// Función para crear la card de evento
function eventCard(event) {
    const eventParams = new URLSearchParams({
        name: (event.name) != undefined ? event.name : '--',
        image: (event.image) != undefined ? event.image : '--',
        description: (event.description) != undefined ? event.description : '--',
        price: (event.price) != undefined ? event.price : '--',
        place: (event.place) != undefined ? event.place : '--',
        category: (event.category) != undefined ? event.category : '--',
        capacity: (event.capacity) != undefined ? event.capacity : '--',
        date: (event.date) != undefined ? event.date : '--',
        assistance: (event.assistance) != undefined ? event.assistance : '--'
    }).toString();

    const info = document.createElement('div');
    info.innerHTML = ` 
    <div class="col h-100">
        <div class="card h-100">
            <img src="${event.image}" class="card-img-top" alt="${event.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text flex-grow-1">${event.description}</p>
                <div class="mt-auto text-center d-flex  justify-content-between align-items-center">
                    <span class="float-start">Price: $${event.price}</span>
                    <a href="/pages/details.html?${eventParams}" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
    </div>
    `;
    return info;

}


for (let i = 0; i < pastEvents.length; i++) {
    eventItem = pastEvents[i];
    const isActive = i === 0;
    const carouselItem = carouselSlider(eventItem, isActive);
    carouselInner.appendChild(carouselItem);

}

const uniqueCategories = [...new Set(data.events.map(event => event.category))];


for (let index = 0; index < uniqueCategories.length; index++) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'form-check form-check-inline';
    categoryDiv.innerHTML = ` 
    <input class="form-check-input" type="checkbox" id="${uniqueCategories[index]}" value="${uniqueCategories[index]}">
    <label class="form-check-label" for="${uniqueCategories[index]}">${uniqueCategories[index]}</label>
`;

    categorias.appendChild(categoryDiv);

}

function mostrarEventos() {
    cardInfo.innerHTML = '';
    const filtroTexto = document.getElementById('searchInput').value.toLowerCase();
    const categoriasSeleccionadas = Array.from(document.querySelectorAll('.form-check-input:checked')).map(input => input.value);

    const mostrarFiltradas = pastEvents.filter(evento => {
        const cumpleTexto = evento.description.toLowerCase().includes(filtroTexto) || evento.name.toLowerCase().includes(filtroTexto);
        const cumpleCategoria = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category);
        return cumpleTexto && cumpleCategoria;
    });

    if (mostrarFiltradas.length === 0) {
        cardInfo.innerHTML = `
            <div class="text-center py-5">
                <div class="alert alert-info d-inline-block" role="alert">
                    <h4 class="text-muted">¡Ups!</h4>
                    <p class="lead">No hay eventos para mostrar en este momento.</p>
                    <p class="mb-0">Mientras tanto, explora otras secciones de nuestro sitio para descubrir más.</p>
                </div>
            </div>
`;
        return;
    }

    for (let i = 0; i < mostrarFiltradas.length; i++) {
        eventItem = mostrarFiltradas[i];
        const cardItem = eventCard(eventItem);
        cardInfo.appendChild(cardItem);

    }
}

document.getElementById('searchInput').addEventListener('input', mostrarEventos);
document.querySelectorAll('.form-check-input').forEach(checkbox => {
    checkbox.addEventListener('change', mostrarEventos);
});

window.onload = () => {
    mostrarEventos();
};