class TrickOrTreater  {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
  }

  putCandyInBag(candy)  {
    this.hasCandy = true;
    this.bag.candies.push(candy);
  }
}

module.exports = TrickOrTreater;
