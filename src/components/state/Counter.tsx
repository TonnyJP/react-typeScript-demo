import React from "react";

const initialState = { count: 0};
type StateType = {
    count: number;
}
type UpdateActionT = {
    type: "increment" | "decrement";
    payload: number;
}
type ResetActionT = {
    type: "reset"
}
function reducer(state: StateType, action: UpdateActionT | ResetActionT){
    switch( action.type){
        case 'increment': return{count: state.count + action.payload};
        case 'decrement': return { count: state.count - action.payload};
        case 'reset': return initialState;
        default: return state;
    }
}
export const Counter: React.FC = () => {
    const [ state, dispatch] = React.useReducer(reducer, initialState);

    return(<>
    Count: {state.count} <br/>
    <button onClick= {() => dispatch({type: 'increment', payload: 10})}>Increment 10</button> <br/>
    <button onClick={() => dispatch({type:"decrement", payload: 10})}>Decrement 10</button><br/>
    <button onClick={ () =>dispatch({type: 'reset'})}>Reset to 0</button>
    </>)
}