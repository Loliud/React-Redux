import {createStore} from 'redux';
import {status, pet} from './actions/index.js';
import myReducer from './reducer/myReducer';

// store
let store = createStore(myReducer);
console.log('Defaut:',store.getState());
// tao 1 action
// cho action vao reducer
store.dispatch(status());
console.log('changeStatus is done:', store.getState());
// them 1 action nua
store.dispatch(pet({
        name: 'Mickey',
        gender: 'famale'
   
    }));
console.log('changePet is done:', store.getState());


