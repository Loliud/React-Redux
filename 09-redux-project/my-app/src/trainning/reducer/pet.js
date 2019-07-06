let initialState = {
    name: 'Tory',
    gender: 'male'
}
// reducer 
let myReducer = (state = initialState, action) => {

    if (action.type === 'CHANGE_PET') {
        const { name, gender } = action.pet;
        let newState = {
            name: name,
            gender: gender

        }
        return newState;
        // nếu dùng như dưới vì là object nên tất cả sẽ đều bị thay dổi ===> console.log(3 cai giong nhau)
        // state.pet.name = name;
        // state.pet.gender = gender;
    }
    return state;
}
export default myReducer;