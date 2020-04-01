const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
      <img src="images/${randomNumber(12)}.jpg">
      <div class="item__overlay">
        <button>View →</button>
      </div>
    </div>
  `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  // const src = e.currentTarget.querySelector('img').src;
  const {src} = e.currentTarget.querySelector('img');
  overlayImage.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

// result is an array of 50 pairs of array
const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);
    
// The gallery has a lot of [1,1] blank spots. The way to fill all those spots is concat a bunch of new array of 100px height and width
// using concat([[1,1],[1,1],[1,1]])