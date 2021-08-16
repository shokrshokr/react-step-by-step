const createStore = require("redux").createStore;

//state
const initialState = {
    counter: 0
}

//Action Types
const INCREAMENT = 'INCREAMENT'
const DECREAMENT = 'DECREAMENT'

//Action Creator
function createIncreamentAction(number){
    // Actions
    return {
        
        type: INCREAMENT,
        number
        
    }
}
//Action Creator
function createDecreamentAction(number){
    // Actions
    return {
        
        type: DECREAMENT,
        number
        
    }
}

//Reducers
const reducers = (state, action) => {

    switch(action.type){
        case(INCREAMENT): {
            return {
                counter: state.counter + action.number
            }
        }
        case(DECREAMENT): {
            return {
                counter: state.counter - action.number
            }
        }
    }

    return state;
}

//store
const store = createStore(reducers, initialState);

//action
const action = createIncreamentAction(2)

//dispatch
store.dispatch(action);
store.dispatch(action);

store.dispatch(createDecreamentAction(1));

const newState = store.getState();
console.log({newState})