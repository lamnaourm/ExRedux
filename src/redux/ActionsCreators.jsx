import * as ActionsTypes from './ActionsTypes'

// Incrementer
export function incrementer(pas){
    return {
        type: ActionsTypes.INCREMNET,
        payload: pas
    }
}

// Incrementer
export function decrementer(pas){
    return {
        type: ActionsTypes.DECREMNET,
        payload: pas
    }
}

// Incrementer
export function initialiser(){
    return {
        type: ActionsTypes.INIT
    }
}

