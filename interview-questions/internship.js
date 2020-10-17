
// 1. How do we reorder the list when we drop an item? Why do we need to reverse items?

// 2. What is the purpose of updateView(), and how does it accomplish that purpose? 
//    Why does updateView() have special handling for the "lifted" item?
//    How many times does updateView() remove or add an element to the document 
//    each time it runs? Does the answer depend on whether or not state.items has
//    changed?
  
// 3. What would go wrong if we moved the line `itemDiv.id = itemId` from 
// `updateView()` into `createItem()`?

type ItemId = string;

type State = {
  items: ItemId[];
  liftedItem: { itemId: ItemId; posx: number; posy: number } | undefined;
};

let state: State = {
  items: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  liftedItem: undefined
};

function updateView() {
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('No root element found.');
  }

  while (root.firstChild) {
    root.firstChild.remove();
  }

  for (const itemId of state.items) {
    const itemDiv = createItem(itemId);
    if (state.liftedItem && state.liftedItem.itemId == itemId) {
      root.appendChild(createPlaceholder());
      hoverDiv(itemDiv, state.liftedItem.posx, state.liftedItem.posy);
      root.appendChild(itemDiv);
    } else {
// label div with item id so we can look up its position for drop
      // itemDiv.id = itemId;
      root.appendChild(itemDiv);
    }
  }
}
updateView()

function hoverDiv(div: HTMLDivElement, posx: number, posy: number) {
  div.style.position = 'absolute';
  div.style.top = posy + 'px';
  div.style.left = posx + 'px';
}

function createItem(itemId: ItemId) {
  const itemDiv = document.createElement('div');
  itemDiv.innerText = itemId.toString();
    itemDiv.id = itemId;

  itemDiv.addEventListener('mousedown', (evt) => pickupItem(itemId, evt));
      // label div with item id so we can look up its position for drop
  return itemDiv;
}

function createPlaceholder() {
  const placeholderDiv = document.createElement('div');
  placeholderDiv.innerText = '_';
  return placeholderDiv;
}

function pickupItem(itemId: ItemId, evt: MouseEvent) {
  state.liftedItem = {
    itemId,
    posx: evt.clientX,
    posy: evt.clientY
  };
  updateView();
  document.addEventListener('mouseup', dropItem);
  document.addEventListener('mousemove', moveItem);
}

function dropItem(evt: MouseEvent) {
  document.removeEventListener('mouseup', dropItem);
  document.removeEventListener('mousemove', moveItem);

  if (!state.liftedItem) {
    return;
  }
  
  // use Array "spread" syntax to make a copy before reversing so that we don't reverse state.items in place 
  const copyOfItems = [...state.items]; 
  const reversedItems = copyOfItems.reverse();

  const dropy = evt.clientY;
  let dropAfterId: ItemId | undefined;
  for (const itemId of reversedItems) {
    const itemDiv = document.getElementById(itemId);
    if (itemDiv) {
      const bottom = itemDiv.getBoundingClientRect().bottom;
      if (dropy > bottom) {
        dropAfterId = itemId;
        break;
      }
    }
  }

  const nextItems: ItemId[] = [];
  if (dropAfterId == undefined) {
    nextItems.push(state.liftedItem.itemId);
  }

  for (const itemId of state.items) {
    if (itemId == state.liftedItem.itemId) {
      continue;
    }
    nextItems.push(itemId);
    if (itemId == dropAfterId) {
      nextItems.push(state.liftedItem.itemId);
    }
  }

  state.items = nextItems;
  state.liftedItem = undefined;
  updateView();
}

function moveItem(evt: MouseEvent) {
  if (!state.liftedItem) {
    throw new Error('moveItem called while there was no lifted item.');
  }

  state.liftedItem.posx = evt.clientX;
  state.liftedItem.posy = evt.clientY;
  updateView();
}
