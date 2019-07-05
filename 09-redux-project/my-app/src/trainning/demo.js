import {createStore} from 'redux';
console.log('Hello Redux');

// state
let newState = {
    status: false,
    pet: {
        name: 'Tory',
        gender: 'male'
    }
}

// reducer 
let myReducer = (state = newState, action) =>{
    if(action.type === 'CHANGE_STATUS'){
        state.status = !state.status;
    }
    if(action.type === 'CHANGE_PET'){
        const {name, gender} = action.pet;
        let newState = {
            status: state.status,
            pet:{
                name: name,
                gender: gender
            }
        }
        return newState;
        // nếu dùng như dưới vì là object nên tất cả sẽ đều bị thay dổi ===> console.log(3 cai giong nhau)
        // state.pet.name = name;
        // state.pet.gender = gender;
    }
    return state;
}

// store
let store = createStore(myReducer);
console.log('Defaut:',store.getState());
// tao 1 action
const changeStatus = {
    type: 'CHANGE_STATUS'
};
// cho action vao reducer
store.dispatch(changeStatus);
console.log('changeStatus is done:', store.getState());

// them 1 action nua
const changePet = {
    type: 'CHANGE_PET',
    pet :{
        name: 'Mickey',
        gender: 'famale'
   
    }
} ;
store.dispatch(changePet);
console.log('changePet is done:', store.getState());


