// details.js
fetch('foods.json')
  .then(response => response.json())
  .then(data => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'), 10);
    const item = data.find(d => d.id === id);

    if (item) {
      document.getElementById('food-image').src = item.image;
      document.getElementById('food-title').textContent = item.name;
      document.getElementById('food-price').textContent = "$"+item.price;
      document.getElementById('food-description').textContent = item.description;
    }
  });

