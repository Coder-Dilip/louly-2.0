

const initialstate=0;

const changeTheNumber=(state=initialstate, action)=>{
switch(action.type){
    case "DECREMENT": return state-1;
    case "INCREMENT": return state+action.payload;
    default: return state;
}
}
export default changeTheNumber;
let initialstates={
    name:['dipin'],
squareValue:0
}
 export const SquareTheNumber=(state=initialstates, action)=>{
switch(action.type){
    case "SQUARE":return {...state,squareValue:action.payload*action.payload,name:[...state.name,'dilip'] }
    default:return state;
}
}

