const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dragDrop);
});

item.addEventListener('dragstart', dragstart);

item.addEventListener('dragend', dragend);

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
}
function dragOver(event) {
  event.preventDefault();
}
function dragEnter(event) {
  event.target.classList.add('hovered');
}
function dragLeave(event) {
  event.target.classList.remove('hovered');
}
function dragDrop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item);
}
