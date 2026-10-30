const $ = (selector) => document.querySelector(selector);
const stains = ['Kahve', 'Çay', 'Yağ', 'Çikolata', 'Domates sosu', 'Meyve suyu', 'Mürekkep', 'Ruj', 'Fondöten', 'Çimen', 'Çamur', 'Mum', 'Kan', 'Deodorant', 'Sakız', 'Ter'];
const grid = $('.source-grid');
const stainSelect = $('#stain');

stains.forEach((stain, index) => {
  const tile = document.createElement('button');
  tile.type = 'button';
  tile.className = 'source-tile';
  tile.dataset.stain = stain;
  tile.dataset.index = index;
  tile.setAttribute('aria-pressed', String(index === 0));
  tile.hidden = index >= 12;
  const x = (index % 4) * 100 / 3;
  const y = Math.floor(index / 4) * 100 / 3;
  tile.innerHTML = `<span class="source-art" style="--sx:${x}%;--sy:${y}%" aria-hidden="true"></span><span>${stain}</span>`;
  grid.append(tile);
  const option = document.createElement('option');
  option.textContent = stain;
  stainSelect.append(option);
});

$('#finder').addEventListener('submit', (event) => {
  event.preventDefault();
  renderFinderRecommendation($('#surface').value, $('#stain').value, $('#age').value);
});
