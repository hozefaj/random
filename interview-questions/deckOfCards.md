```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="src/styles.css" />
  </head>

  <body>
    <div id="app"></div>
  </body>
  <button id="deal" type="button">
    Deal a new hand
  </button>

  <div id="dealtCards"></div>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
  <script src="src/index.js"></script>
</html>
```

```css
body {
  background-color: #59a856;
}

/*
style the cards
*/
.cardContainer {
  background-color: #fff;
  border: 1px solid #000;
  width: 150px;
  height: 200px;
  border-radius: 5px;
  display: inline-block;
  margin: 20px;
}

.cardValue {
  font-size: 3em;
  padding: 5px;
}

.cardSuit {
  font-size: 3em;
  padding: 5px;
  position: relative;
  top: 80px;
  left: 100px;
}

.red {
  color: red;
}
```

```js
import _ from "lodash";

const elem = document.getElementById("deal");
elem.addEventListener("click", function () {
  // dealing the cards
  deal();
});

// random shuffle of cards
// UI needs to look like a deck of cards
const CARD_SUITS = ["♠", "♥", "♦", "♣"];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

let DECK_OF_CARDS = [];

function createDeck() {
  for (let i = 0; i < CARD_SUITS.length; i++) {
    for (let x = 0; x < CARD_VALUES.length; x++) {
      let card = { value: CARD_VALUES[x], suit: CARD_SUITS[i] };
      DECK_OF_CARDS.push(card);
    }
  }
}

function shuffle() {
  DECK_OF_CARDS = _.shuffle(DECK_OF_CARDS);
}

// deal 5 cards from the deck
// if there are less than 5 cards generate a new deck then shuffle
function deal() {
  if (DECK_OF_CARDS.length <= 5) {
    // re-create a deck as needed
    createDeck();
    shuffle();
  }

  const DEALT_CARDS = [];
  for (let j = 0; j < 5; j++) {
    DEALT_CARDS.push(DECK_OF_CARDS.pop());
  }
  renderDeck(DEALT_CARDS);
}

function renderDeck(cards) {
  const list = document.getElementById("dealtCards");
  list.innerHTML = "";
  let elements = "";

  cards.forEach((card) => {
    elements =
      elements +
      `
        <div class="cardContainer">
          <div 
          class="
            cardValue
            ${card.suit === "♥" || card.suit === "♦" ? "red" : ""}">
              ${card.value}</div>
          <div 
            class="
              cardSuit 
              ${card.suit === "♥" || card.suit === "♦" ? "red" : ""}">
                ${card.suit}
            </div>
        </div>  
    `;
  });

  list.innerHTML = elements;
}
```
