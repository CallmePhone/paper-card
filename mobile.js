const papers = document.querySelectorAll('.paper');

papers.forEach((paper) => {
  let isDragging = false;
  let startX, startY, initialX, initialY;

  // For mouse events
  paper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = paper.offsetLeft;
    initialY = paper.offsetTop;
    paper.style.position = 'absolute';
    paper.style.zIndex = '1000';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - startX + initialX;
    const y = e.clientY - startY + initialY;
    paper.style.left = `${x}px`;
    paper.style.top = `${y}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // For touch events (mobile)
  paper.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    initialX = paper.offsetLeft;
    initialY = paper.offsetTop;
    paper.style.position = 'absolute';
    paper.style.zIndex = '1000';
  });

  paper.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.clientX - startX + initialX;
    const y = touch.clientY - startY + initialY;
    paper.style.left = `${x}px`;
    paper.style.top = `${y}px`;
    e.preventDefault(); // Prevents scrolling while dragging
  });

  paper.addEventListener('touchend', () => {
    isDragging = false;
  });
});
