import axios from 'axios';


export function sendCart(data){

    try {
         axios.post('https://demo-pasarela-v2.herokuapp.com/mp', data);
        //axios.post('http://localhost:3001/mp', data);
        console.log('Actions>>>>>>>', data)
    } catch (error) {
        console.log('Error>>>>>', error)
    }
}
