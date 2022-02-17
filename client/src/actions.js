import axios from 'axios';


export  function sendCart(data){

    return async (dispatch) => {

        try {
            console.log('Actions>>>>>>>', data)
            // axios.post('https://demo-pasarela.herokuapp.com/mp', data);
            const payload = await axios.post('http://localhost:3001/mp', data);
            console.log('Payload', payload.data.url)
            return dispatch({
                type: 'PAGOMER',
                payload: payload.data.url
            })
            
        } catch (error) {
            console.log('Error>>>>>', error)
        }
    }
}