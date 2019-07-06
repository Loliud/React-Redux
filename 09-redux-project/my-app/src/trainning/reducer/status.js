let initialState = false;
// reducer 
let myReducer = (state = initialState, action) =>{
    if(action.type === 'CHANGE_STATUS'){
        state = !state;
    }
    
    return state;
}
export default myReducer;