


const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();


const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};



const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");


const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const superWater = changeState("water")(5);




