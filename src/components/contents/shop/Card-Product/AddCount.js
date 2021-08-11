function AddCount(){
  console.log("add");
  const cardCount = document.querySelector('.card__count');
  console.log(cardCount.value);
  cardCount.value = +cardCount.value + 1;
}

export default AddCount;