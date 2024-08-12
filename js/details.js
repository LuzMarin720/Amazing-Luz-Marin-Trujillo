document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    const title = params.get('name');
    const image = params.get('image');
    const description = params.get('description');
    const price = params.get('price') || '';
    const capacity = params.get('capacity');
    const category = params.get('category');
    const date = params.get('date');
    const place = params.get('place');
    const assistance = params.get('assistance');

    document.getElementById('event-title').textContent = title;
    document.getElementById('event-image').src = image;
    document.getElementById('event-image').style.display = image ? 'block' : 'none';
    document.getElementById('event-description').textContent = description;
    document.getElementById('description-item').style.display = description ? '' : 'none';
    document.getElementById('event-price').textContent = price ? `$${price}` : '';
    document.getElementById('price-item').style.display = price ? '' : 'none';
    document.getElementById('event-capacity').textContent = capacity;
    document.getElementById('capacity-item').style.display = capacity ? '' : 'none';
    document.getElementById('event-category').textContent = category;
    document.getElementById('category-item').style.display = category ? '' : 'none';
    document.getElementById('event-date').textContent = date;
    document.getElementById('date-item').style.display = date ? '' : 'none';
    document.getElementById('event-place').textContent = place;
    document.getElementById('place-item').style.display = place ? '' : 'none';
    document.getElementById('event-assistance').textContent = assistance;
    document.getElementById('assistance-item').style.display = assistance ? '' : 'none';
  });