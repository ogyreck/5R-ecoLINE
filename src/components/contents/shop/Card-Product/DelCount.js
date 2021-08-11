function DelCount(){
  console.log("del");
  const cardCount = document.querySelector('.card__count');
  cardCount.value = +cardCount.value - 1;
}

export default DelCount;