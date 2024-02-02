document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("title");
  title.innerHTML = title.textContent.replace(/\S/g, "<span>$&</span>");

  const letters = document.querySelectorAll('.title span');

  const categories = [
    { name: "Lipsticks", image: "lip.jpg", description: "Long-lasting lipsticks in various shades." },
    { name: "Eyeshadows", image: "eye.jpg", description: "Vibrant eyeshadow palettes for every occasion." },
    { name: "Foundations", image: "found.jpg", description: "Flawless finish foundations for all skin types." },
    { name: "Blushes", image: "blush.jpg", description: "Natural-looking blushes for a healthy glow." },
  ];

  const makeupItems = {
    Lipsticks: [
      { brand: "COLOURETTE", name: " Easy Matte (Cool Down)", description: "One swipe of this all-day velvet lipstick is everything you need!", image: "cool.jpg" },
      { brand: "NATURALE", name: "OBMP Matte Stain (Acacia)", description: "formulated to give a lightweight yet highly pigmented lip stain.", image: "acacia.jpg" },
      { brand: "DAZZLE ME", name: "Matte Lip Cream (Misty)", description: "Lip Cream with light texture, smooth and easy to spread, with hazy blurry finish", image: "misty.jpeg" }
    ],
    Eyeshadows: [
      { brand: "FOCALLURE", name: "Pro Pallete", description: "Its fade resistant formula stays on for hours, plus it is waterproof!", image: "foc.jpg" },
      { brand: "ZEESEA", name: "Alice Kingdom of Fantasy", description: "Enter the wonderful fantasy color world and create different sensory colors", image: "ali.jpg" },
      { brand: "BEAUTY GLAZED", name: "MIX & MATCH", description: "Rich, vibrant hues, and a touch of glitter, of course. That will go with any skin tone and brighten up any look.", image: "BG.jpg" }
    ],
    Foundations: [
      { brand: "GRWM", name: "Cosmetic Radiant Skin Luminous Foundation (fn04 pearl)", description: "A creamy, buildable, blendable, & long-wearing multi-use makeup. ", image: "grwm.jpg" },
      { brand: "ISSY", name: "Active Foundation (nf1.5)", description: "An incredibly forgiving foundation that applies beautifully on ever-evolving skin.", image: "act.jpg" },
      { brand: "MAYBELLINE", name: "Fit Me Matte + Poreless Liquid Foundation (natural ivory)", description: "refines pores and leaves a natural, seamless finish. Same natural weightless matte texture, now improved with SPF 22.", image: "ivo.jpg" }
    ],
    Blushes: [
      { brand: "CARELINE", name: "Oil Control Blush On (Rosy Cheek)", description: "A lightweight powder blush that is non-sticky and has different shades that are perfect for every skin tone.", image: "rs.jpg" },
      { brand: "CHU CHU", name: "Beauty Heart Blush Duo (miss dolly)", description: "compact blush palette with a mirror.", image: "ch.jpg" },
      { brand: "BLK", name: "Cosmetics Powder Multi Palette - Blush", description: "Powder perfect. Color, buff, and blend your way to an effortless full-face look with our expert trio of powders featuring a blush, highlighter, and contour in one handy palette.", image: "blk.jpg" }
    ],
  };

  const container = document.getElementById("content");
  const backButton = document.getElementById("backBtn");

  letters.forEach(letter => {
    letter.addEventListener('mouseenter', () => {
        letter.style.color = getRandomColor();
    });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  const categoryContents = {};
  Object.keys(makeupItems).forEach(category => {
    categoryContents[category] = renderMakeupItems(category, makeupItems[category]);
  });

  renderCategories();

  function renderCategories() {
    container.innerHTML = '';
    categories.forEach(category => {
      const div = document.createElement("div");
      div.classList.add("category");
      div.innerHTML = `
        <img src="images/${category.image}" alt="${category.name}">
        <h2>${category.name}</h2>
        <p>${category.description}</p>
      `;
      div.addEventListener('click', () => displayMakeupItems(category.name));
      container.appendChild(div);
    });
    backButton.style.display = 'none';
  }

  function displayMakeupItems(categoryName) {
    container.innerHTML = '';
    container.appendChild(categoryContents[categoryName]);
    backButton.style.display = 'block';
    backButton.addEventListener('click', renderCategories);
  }

  function renderMakeupItems(category, items) {
    const div = document.createElement('div');
    div.classList.add('makeup-items-container');
    items.forEach(item => {
      const makeupItem = document.createElement('div');
      makeupItem.classList.add('makeup-item');
      makeupItem.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Brand:</strong> ${item.brand}</p>
        <p>${item.description}</p>
        <img src="images/${item.image}" alt="${item.name}">
      `;
      div.appendChild(makeupItem);
    });
    return div;
  }
});
