let appleCount = 0;
const appleContainer = document.createElement('div');
document.body.appendChild(appleContainer);

function addApple() {
  appleCount++;
  const newApple = document.createElement('div');
  newApple.classList.add('apple');
  appleContainer.appendChild(newApple);
  document.getElementById('apple-count').textContent = appleCount;
}
