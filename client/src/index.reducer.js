

const initialState = {

    pago : ''
}

const rootReducer = (state= initialState, action) => {

    switch(action.type){
        
        case 'PAGOMER':
        console.log('****************', action.payload)
        return{
            ...state,
            pago: action.payload
        }

        default:
            return{
                ...state
            }
    }

}






export default rootReducer;