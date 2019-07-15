// let data = JSON.parse(localStorage.get('listBuys'));
// let inititalState = data ? data : [];

let inititalState = [
    {
        product: {
            id: 1,
            name: 'The vanishing act',
            link: "http://vietart.co/blog/wp-content/uploads/2014/01/9_thiet_ke_bia_sach_dep_20.jpg",
            price: 30,
            inventory: 10
        },
        quantity: 5
    },
    {
        product: {
            id: 4,
            name: 'The selection',
            link: "http://1.bp.blogspot.com/-nSxCM8RcsBs/Ufi0lpEwPdI/AAAAAAAAAiM/jt7U9gYfER4/s1600/20+b%C3%ACa+s%C3%A1ch+%C4%91%E1%BA%B9p+l%C3%A0m+h%C3%A0i+l%C3%B2ng+c%E1%BA%A3+nh%E1%BB%AFng+ng%C6%B0%E1%BB%9Di+kh%C3%B3+t%C3%ADnh+nh%E1%BA%A5t.jpg",
            price: 20,
            inventory: 30
        },
        quantity: 10
    },
    {
        product: {
            id: 5,
            name: 'Em không biết',
            link: "https://hacaodidong.files.wordpress.com/2013/06/581957_548331755212535_2077873751_n.jpg",
            price: 100,
            inventory: 20
        },
        quantity: 2
    }
];

let myReducer = (state = inititalState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default myReducer;



