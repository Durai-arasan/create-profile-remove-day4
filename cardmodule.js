// cardModule.js
export function createProfileCard(name, role) {
  const card = document.createElement('div');
  card.className = 'profile-card';

  const content = document.createElement('div');
  content.innerHTML = `<h3>${name}</h3><p>${role}</p>`;
  card.appendChild(content);

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', () => {
    card.remove();
  });

  card.appendChild(removeBtn);
  return card;
}
