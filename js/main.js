let columActive = 1;
const columns = document.querySelectorAll('.column');

columns.forEach((column,index) => {
  column.addEventListener('click', () => {
    expandCard(index);
  })
})

const expandCard = (index) => {
  columns[columActive].classList.remove('active');
  columns[index].classList.add('active');
  columActive = index;
}