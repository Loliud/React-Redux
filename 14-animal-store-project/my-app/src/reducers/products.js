
let initialState = [
    {
        id: '3189233',
        name: 'Mèo ấn độ',
        price: 2000,
        status: true
    },
    {
        id: '232133',
        name: 'Mèo thái lan',
        price: 1000,
        status: true
    },
    {
        id: '923733',
        name: 'Chó phú quốc',
        price: 3000,
        status: false
    },
    {
        id: '99923233',
        name: 'Chó Husky',
        price: 4000,
        status: true
    }
];

let myReducer = (state = initialState, action) =>{
    switch(action){
        default:
            return [...state];
    }
}

export default myReducer;