import *as types from '../constants/ActionTypes';

let initialState = [
    {   id: 0,
        name: 'Điều bí mật',
        link: "https://thegioidohoa.com/wp-content/uploads/2017/08/tong-hop-20-mau-bia-sach-doc-dao-nhat-nam-2017-7.jpg",
        price: 10,
        inventory : 20
    },
    {
        id: 1,
        name: 'The vanishing act',
        link: "http://vietart.co/blog/wp-content/uploads/2014/01/9_thiet_ke_bia_sach_dep_20.jpg",
        price: 30,
        inventory : 10
    },
    {
        id: 2,
        name: 'Lấp lánh',
        link: "https://i.pinimg.com/originals/bf/eb/48/bfeb4898fd66d22e9741cb9830032a4f.jpg",
        price: 50,
        inventory : 20
    },
    {
        id: 3,
        name: 'Shatter me',
        link: "http://vietart.co/blog/wp-content/uploads/2014/01/20_thiet_ke_bia_sach_dep_20.jpg",
        price: 30,
        inventory : 20
    },
    {
        id: 4,
        name: 'The selection',
        link: "http://1.bp.blogspot.com/-nSxCM8RcsBs/Ufi0lpEwPdI/AAAAAAAAAiM/jt7U9gYfER4/s1600/20+b%C3%ACa+s%C3%A1ch+%C4%91%E1%BA%B9p+l%C3%A0m+h%C3%A0i+l%C3%B2ng+c%E1%BA%A3+nh%E1%BB%AFng+ng%C6%B0%E1%BB%9Di+kh%C3%B3+t%C3%ADnh+nh%E1%BA%A5t.jpg",
        price: 20,
        inventory : 20
    },
    {
        id: 5,
        name: 'Em không biết',
        link: "https://hacaodidong.files.wordpress.com/2013/06/581957_548331755212535_2077873751_n.jpg",
        price: 100,
        inventory : 20
    },
    
    {
        id: 6,
        name: 'Nàng và mèo con của nàng',
        link: "https://www.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/a/nangvaconmeocuanang_bia.jpg",
        price: 45,
        inventory : 20
    },
    {
        id: 7,
        name: 'Tôi thấy hoa vàng trên cỏ xanh',
        link: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_08352010_033550.jpg",
        price: 40,
        inventory : 20
    },
    {
        id: 8,
        name: 'Xì trum',
        link: "https://upload.wikimedia.org/wikipedia/vi/0/08/Xi-trum-01.jpg",
        price: 80,
        inventory : 20
    }
];

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SHOW_PRODUCTS:
            return state;
        default:
            return state;
    }
}
export default myReducer;
