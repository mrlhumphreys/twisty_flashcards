const SETS = {
  cfopOll: [
    { imageName: "3x3x3-cfop-fridrich-3-a-1.svg", algorithm: "(M' U M) U<sup>2</sup> (M' U M)" },
    { imageName: "3x3x3-cfop-fridrich-3-a-2.svg", algorithm: "(R U R' U') (M' U R U') Rw'" },
    { imageName: "3x3x3-cfop-fridrich-3-a-3.svg", algorithm: "Rw' (R U) (R U R' U' Rw<sup>2</sup>) (R<sup>2</sup>) U) (R U') Rw'" },
    { imageName: "3x3x3-cfop-fridrich-3-b-1.svg", algorithm: "(R<sup>2</sup> D) (R' U<sup>2</sup>) (R D') (R' U<sup>2</sup> R')" },
    { imageName: "3x3x3-cfop-fridrich-3-b-2.svg", algorithm: "(Lw' U') (L U) (R U') (Rw' F)" },
    { imageName: "3x3x3-cfop-fridrich-3-b-3.svg", algorithm: "(R' F) (R B') (R' F') (R B)" },
    { imageName: "3x3x3-cfop-fridrich-3-b-4.svg", algorithm: "(R U R' U) (R U<sup>2</sup> R')" },
    { imageName: "3x3x3-cfop-fridrich-3-b-5.svg", algorithm: "(R U<sup>2</sup>) (R' U' R U' R')" },
    { imageName: "3x3x3-cfop-fridrich-3-b-6.svg", algorithm: "(R U<sup>2</sup>) (R<sup>2</sup> U') (R<sup>2</sup> U') (R<sup>2</sup> U<sup>2</sup> R)" },
    { imageName: "3x3x3-cfop-fridrich-3-b-7.svg", algorithm: "(R U<sup>2</sup>) (R' U' R U R' U' R U' R')" },
    { imageName: "3x3x3-cfop-fridrich-3-c-1.svg", algorithm: "Fw (R U R' U') Fw' U' F (R U R' U') F'" },
    { imageName: "3x3x3-cfop-fridrich-3-c-2.svg", algorithm: "Fw (R U R' U') Fw' U F (R U R' U') F'" },
    { imageName: "3x3x3-cfop-fridrich-3-c-3.svg", algorithm: "(R U R' U) (R' F R F') U<sup>2</sup> (R' F R F')" },
    { imageName: "3x3x3-cfop-fridrich-3-c-4.svg", algorithm: "Rw' (R U) (R U R' U' Rw) x (R<sup>2</sup> U) (R U')" },
    { imageName: "3x3x3-cfop-fridrich-3-c-5.svg", algorithm: "F (R U R' U) y' (R' U<sup>2</sup>) (R' F R F')" },
    { imageName: "3x3x3-cfop-fridrich-3-c-6.svg", algorithm: "F (R U R' U') S (R U R' U') Fw'" },
    { imageName: "3x3x3-cfop-fridrich-3-c-7.svg", algorithm: "(R U<sup>2</sup>) (R<sup>2</sup> F R F') U<sup>2</sup> (R' F R F'" },
    { imageName: "3x3x3-cfop-fridrich-3-d-1.svg", algorithm: "(R U R' U') (R' F R F')" },
    { imageName: "3x3x3-cfop-fridrich-3-d-2.svg", algorithm: "F (R U R' U') F'" },
    { imageName: "3x3x3-cfop-fridrich-3-e-1.svg", algorithm: "Fw (R U R' U') Fw'" },
    { imageName: "3x3x3-cfop-fridrich-3-e-2.svg", algorithm: "Fw' (L' U' L U) Fw" },
    { imageName: "3x3x3-cfop-fridrich-3-e-3.svg", algorithm: "(R Dw) (L' Dw') (R' U) (Lw U Lw')" },
    { imageName: "3x3x3-cfop-fridrich-3-e-4.svg", algorithm: "(R' U') F (U R U' R') F' R" },
    { imageName: "3x3x3-cfop-fridrich-3-f-1.svg", algorithm: "(R U R' U) (R U' R' U') (R' F R F')" },
    { imageName: "3x3x3-cfop-fridrich-3-f-2.svg", algorithm: "(L' U' L U') (L' U L U) (L F' L' F)" },
    { imageName: "3x3x3-cfop-fridrich-3-g-1.svg", algorithm: "(Rw U) (R' U) (R U') (R' U) (R U<sup>2</sup> Rw')" },
    { imageName: "3x3x3-cfop-fridrich-3-g-2.svg", algorithm: "(Rw' U') (R U') (R' U) (R U') (R' U<sup>2</sup> Rw)" },
    { imageName: "3x3x3-cfop-fridrich-3-g-3.svg", algorithm: "(R B' R B R<sup>2</sup>) U<sup>2</sup> (F R' F' R)" },
    { imageName: "3x3x3-cfop-fridrich-3-g-4.svg", algorithm: "(R' F R' F' R<sup>2</sup>) U<sup>2</sup> y (R' F R F')" },
    { imageName: "3x3x3-cfop-fridrich-3-g-5.svg", algorithm: "F (R U R' U') (R U R' U') F'" },
    { imageName: "3x3x3-cfop-fridrich-3-g-6.svg", algorithm: "F' (L' U' L U) (L' U' L U) F" },
    { imageName: "3x3x3-cfop-fridrich-3-h-1.svg", algorithm: "(L F') (L' U' L U) F U' L'" },
    { imageName: "3x3x3-cfop-fridrich-3-h-2.svg", algorithm: "(R' F) (R U R' U') F' U R" },
    { imageName: "3x3x3-cfop-fridrich-3-i-1.svg", algorithm: "(R U R<sup>2</sup> U') (R' F) (R U) (R U') F'" },
    { imageName: "3x3x3-cfop-fridrich-3-i-2.svg", algorithm: "(R' U') (R' F R F') (U R)" },
    { imageName: "3x3x3-cfop-fridrich-3-j-1.svg", algorithm: "(Rw' U<sup>2</sup>) (R U R' U Rw)" },
    { imageName: "3x3x3-cfop-fridrich-3-j-2.svg", algorithm: "(Rw U<sup>2</sup>) (R' U' R U' Rw')" },
    { imageName: "3x3x3-cfop-fridrich-3-k-1.svg", algorithm: "(Rw U R' U) (R U<sup>2</sup> Rw')" },
    { imageName: "3x3x3-cfop-fridrich-3-k-2.svg", algorithm: "(M U<sup>2</sup>) (R' U' R U') (R' U<sup>2</sup> R) U M'" },
    { imageName: "3x3x3-cfop-fridrich-3-k-3.svg", algorithm: "(Rw' U' R U') (R' U<sup>2</sup> Rw)" },
    { imageName: "3x3x3-cfop-fridrich-3-k-4.svg", algorithm: "Rw' (R<sup>2</sup> U R' U R U<sup>2</sup> R') U M'" },
    { imageName: "3x3x3-cfop-fridrich-3-l-1.svg", algorithm: "F (R U') (R' U' R U) (R' F')" },
    { imageName: "3x3x3-cfop-fridrich-3-l-2.svg", algorithm: "(R U<sup>2</sup>) (R<sup>2</sup>) F) (R F' R U<sup>2</sup> R')" },
    { imageName: "3x3x3-cfop-fridrich-3-l-3.svg", algorithm: "(R U R' U) (R' F R F') (R U<sup>2</sup> R')" },
    { imageName: "3x3x3-cfop-fridrich-3-l-4.svg", algorithm: "(R U R' U' R' F) (R<sup>2</sup> U R' U' F')" },
    { imageName: "3x3x3-cfop-fridrich-3-m-1.svg", algorithm: "Fw (R U R' U') (R U R' U') Fw'" },
    { imageName: "3x3x3-cfop-fridrich-3-m-2.svg", algorithm: "(R U R' U R Dw') (R U' R' F')" },
    { imageName: "3x3x3-cfop-fridrich-3-m-3.svg", algorithm: "Fw (R U R' U') Fw' F (R U R' U') (R U R' U') F'" },
    { imageName: "3x3x3-cfop-fridrich-3-m-4.svg", algorithm: "(R U<sup>2</sup>) (R<sup>2</sup> U' R U' R' U<sup>2</sup>) (F R F')" },
    { imageName: "3x3x3-cfop-fridrich-3-n-1.svg", algorithm: "(Rw U' Rw' U') (Rw U Rw') y' (R' U R)" },
    { imageName: "3x3x3-cfop-fridrich-3-n-2.svg", algorithm: "(Rw U Rw') (R U R' U') (Rw U' Rw')" },
    { imageName: "3x3x3-cfop-fridrich-3-n-3.svg", algorithm: "(R' F) (R U R' F' R) y' (R U' R')" },
    { imageName: "3x3x3-cfop-fridrich-3-n-4.svg", algorithm: "(Lw' U' Lw) (L' U' L U) (Lw' U Lw)" },
    { imageName: "3x3x3-cfop-fridrich-3-o-1.svg", algorithm: "(R U') (R' U<sup>2</sup>) (R U) y (R U') (R' U' F')" },
    { imageName: "3x3x3-cfop-fridrich-3-o-2.svg", algorithm: "(R<sup>2</sup> U R' B') (R U') (R<sup>2</sup> U) (Lw U Lw')" },
    { imageName: "3x3x3-cfop-fridrich-3-o-3.svg", algorithm: "(L' U) (L U<sup>2</sup>) (L' U') y' (L' U) (L U F)" },
    { imageName: "3x3x3-cfop-fridrich-3-o-4.svg", algorithm: "(L<sup>2</sup> U' L B) (L' U) (L<sup>2</sup> U') (Rw' U' Rw)" }
  ],
  cfopPll: [
    { imageName: "3x3x3-cfop-fridrich-4-a-1.svg", algorithm: "x (R' U R') D<sup>2</sup> (R U' R') D<sup>2</sup> R<sup>2</sup>" },
    { imageName: "3x3x3-cfop-fridrich-4-a-2.svg", algorithm: "x R<sup>2</sup> D<sup>2</sup> (R U R') D<sup>2</sup> (R U' R)" },
    { imageName: "3x3x3-cfop-fridrich-4-a-3.svg", algorithm: "x' (R U') (R' D) (R U R' D') (R U R' D) (R U') (R' D')" },
    { imageName: "3x3x3-cfop-fridrich-4-b-1.svg", algorithm: "(R U' R U) (R U) (R U') (R' U' R<sup>2</sup>)" },
    { imageName: "3x3x3-cfop-fridrich-4-b-2.svg", algorithm: "(R<sup>2</sup> U) (R U R' U') (R' U') (R' U R')" },
    { imageName: "3x3x3-cfop-fridrich-4-b-3.svg", algorithm: "(M<sup>2</sup> U) (M<sup>2</sup> U<sup>2</sup>) (M<sup>2</sup> U) (M<sup>2</sup>)" },
    { imageName: "3x3x3-cfop-fridrich-4-b-4.svg", algorithm: "(M<sup>2</sup> U) (M<sup>2</sup> U) (M' U<sup>2</sup>) (M<sup>2</sup> U<sup>2</sup>) (M' U<sup>2</sup>)" },
    { imageName: "3x3x3-cfop-fridrich-4-c-1.svg", algorithm: "(R' U L') U<sup>2</sup> (R U' R') U<sup>2</sup> (L R U')" },
    { imageName: "3x3x3-cfop-fridrich-4-c-2.svg", algorithm: "(R U R' F') (R U R' U') (R' F) (R<sup>2</sup> U') (R' U')" },
    { imageName: "3x3x3-cfop-fridrich-4-c-3.svg", algorithm: "(R U R' U') (R' F) (R<sup>2</sup> U') (R' U' R U) (R' F')" },
    { imageName: "3x3x3-cfop-fridrich-4-c-4.svg", algorithm: "(R' U<sup>2</sup>) (R U<sup>2</sup>) (R' F R U R' U') (R' F' R<sup>2</sup> U')" },
    { imageName: "3x3x3-cfop-fridrich-4-c-5.svg", algorithm: "(R U R' F') (R U<sup>2</sup> R' U<sup>2</sup>) (R' F) (R U) (R U<sup>2</sup> R' U')" },
    { imageName: "3x3x3-cfop-fridrich-4-c-6.svg", algorithm: "R' U' F' (R U R' U') (R' F) (R<sup>2</sup> U') (R' U' R U) (R' U R)" },
    { imageName: "3x3x3-cfop-fridrich-4-d-1.svg", algorithm: "(R<sup>2</sup> Uw) (R' U R' U' R Uw') R<sup>2</sup> y' (R' U R)" },
    { imageName: "3x3x3-cfop-fridrich-4-d-2.svg", algorithm: "(R' U' R) y (R<sup>2</sup> Uw R' U) (R U' R Uw' R<sup>2</sup>)" },
    { imageName: "3x3x3-cfop-fridrich-4-d-3.svg", algorithm: "(R<sup>2</sup> Uw' R U') (R U R' Uw R<sup>2</sup>) (Fw R' Fw')" },
    { imageName: "3x3x3-cfop-fridrich-4-d-4.svg", algorithm: "(R U R') y' (R<sup>2</sup> Uw' R U') (R' U R' Uw R<sup>2</sup>)" },
    { imageName: "3x3x3-cfop-fridrich-4-e-1.svg", algorithm: "(R' U R' Dw') (R' F' R<sup>2</sup> U') (R' U R' F) (R F)" },
    { imageName: "3x3x3-cfop-fridrich-4-e-2.svg", algorithm: "z U (R' D) (R<sup>2</sup> U' R D' U) (R' D) (R<sup>2</sup> U' R D') R" },
    { imageName: "3x3x3-cfop-fridrich-4-e-3.svg", algorithm: "z D' (R U') (R<sup>2</sup> D R' U D') (R U') (R<sup>2</sup> D R' U) R'" },
    { imageName: "3x3x3-cfop-fridrich-4-e-4.svg", algorithm: "(F R U') (R' U' R U) (R' F') (R U R' U') (R' F R F')" }
  ]
};

// utils
const shuffle = function(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// models
const initializeFlashCardState = function(sets, setIndex) { 
  const set = SETS[setIndex];
  let firstBox = [];
  let counter = 0; 

  while (counter < set.length) {
    firstBox.push(counter);
    counter += 1;
  }

  // randomise firstBox
  shuffle(firstBox);

  return {
    boxes: [firstBox, [], [], [], []],
    setIndex: setIndex,
    currentCardIndex: firstBox[0],
    currentFace: 'front' 
  };
};

const passFlashCard = function(flashCardState) {
  let newBoxes = flashCardState.boxes;
  let nextCardBoxIndex = undefined;
  let newCardIndex = undefined;

  // Find box where current card index is and remove it from box
  newBoxes.forEach(function(box, boxIndex) {
    let i = box.findIndex(function(card) { 
      return card == flashCardState.currentCardIndex;
    });
    if (i > -1) {
      box.splice(i,1);
      nextCardBoxIndex = boxIndex + 1;
    }
  });

  // put it at the back of the next (+1) box
  // Otherwise discard it (do nothing)
  if (nextCardBoxIndex <= 4) {
    newBoxes[nextCardBoxIndex].push(flashCardState.currentCardIndex);
  } 
  
  // find first populated box
  // set newCardIndex to first card 
  let populatedBox = newBoxes.find(function(box) { return box.length > 0; });

  if (populatedBox === undefined) {
    newCardIndex = undefined;
  } else {
    newCardIndex = populatedBox[0];
  }

  return {
    boxes: newBoxes,
    setIndex: flashCardState.setIndex,
    currentCardIndex: newCardIndex,
    currentFace: 'front'
  };
};

const failFlashCard = function(flashCardState) {
  let newBoxes = flashCardState.boxes;
  let nextCardBoxIndex = undefined;

  // Find box where current card index is remove it from box
  newBoxes.forEach(function(box, boxIndex) {
    let i = box.findIndex(function(card) { 
      return card == flashCardState.currentCardIndex;
    });
    if (i > -1) {
      box.splice(i,1);
      nextCardBoxIndex = boxIndex - 1;
    }
  });

  // put it at the back of the prev (-1) box
  // put it in 0 otherwise
  if (nextCardBoxIndex >= 0) {
    newBoxes[nextCardBoxIndex].push(flashCardState.currentCardIndex);
  } else {
    newBoxes[0].push(flashCardState.currentCardIndex);
  }

  // find first populated box
  // set newCardIndex to first card 
  let populatedBox = newBoxes.find(function(box) { return box.length > 0; });
  let newCardIndex = populatedBox[0];

  return {
    boxes: newBoxes,
    setIndex: flashCardState.setIndex,
    currentCardIndex: newCardIndex,
    currentFace: 'front'
  };
};

const flipFlashCard = function(flashCardState) {
  return {
    boxes: flashCardState.boxes,
    setIndex: flashCardState.setIndex,
    currentCardIndex: flashCardState.currentCardIndex,
    currentFace: 'back'
  };
}

// views

const updateBoxes = function(boxes) {
  var counter = 0;
  while (counter < boxes.length) {
    document.querySelector(`.box[data-id='${counter}']`).innerHTML = boxes[counter].length;
    counter += 1;
  }
};

const fetchCurrentCard = function(flashCardState) {
  return SETS[flashCardState.setIndex][flashCardState.currentCardIndex];
};

const updateCurrentCardImage = function(currentCard) {
  document.querySelector('.image').src = `images/${currentCard.imageName}`;
};

const updateCurrentCardAlgorithm = function(currentCard) {
  document.querySelector('.algorithm span').innerHTML = currentCard.algorithm;
};

const blankCurrentCardAlgorithm = function() {
  document.querySelector('.algorithm span').innerHTML = '-';
};

const showButton = function(buttonName) {
  document.querySelector(`.${buttonName}`).classList.remove('hidden'); 
};

const hideButton = function(buttonName) {
  document.querySelector(`.${buttonName}`).classList.add('hidden'); 
};

const initialFlashCardView = function(flashCardState) {
  let currentCard = fetchCurrentCard(flashCardState);
  updateCurrentCardImage(currentCard);
};

const passFlashCardView = function(flashCardState) {
  updateBoxes(flashCardState.boxes);

  let currentCard = fetchCurrentCard(flashCardState);
  updateCurrentCardImage(currentCard);
}

const flipFlashCardView = function(flashCardState) {
  let currentCard = fetchCurrentCard(flashCardState);
  updateCurrentCardAlgorithm(currentCard);

  hideButton('pass');
  hideButton('flip');
  showButton('fail');
}

const failFlashCardView = function(flashCardState) {
  updateBoxes(flashCardState.boxes);

  let currentCard = fetchCurrentCard(flashCardState);
  updateCurrentCardImage(currentCard);
  blankCurrentCardAlgorithm();

  showButton('pass');
  showButton('flip');
  hideButton('fail');
}

document.addEventListener('DOMContentLoaded', function(event) {
  let setName = document.querySelector('#flashcards').getAttribute('data-set');
  let flashCardState = initializeFlashCardState(SETS, setName); 
  initialFlashCardView(flashCardState);

  let body = document.querySelector('body');
  body.addEventListener('click', function(event) {
    if (event.target.classList.contains('pass')) {
      event.preventDefault();
      flashCardState = passFlashCard(flashCardState);
      passFlashCardView(flashCardState);
      return false;
    } else if (event.target.classList.contains('flip')) {
      event.preventDefault();
      flashCardState = flipFlashCard(flashCardState);
      flipFlashCardView(flashCardState);
      return false;
    } else if (event.target.classList.contains('fail')) {
      event.preventDefault();
      flashCardState = failFlashCard(flashCardState);
      failFlashCardView(flashCardState);
      return false;
    }
  });
});
