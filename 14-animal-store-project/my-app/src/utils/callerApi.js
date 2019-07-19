import *as configs from '../constants/configs';
import axios from 'axios';

export default function  callApi  (url , method = 'GET', body){
        // chu y là hàm trả về function
        return axios({
            method: method,
            url: `${configs.URL_API}/${url}`,
            data : body
        })
        .catch((err) =>{
            console.log(err);
        });
};

