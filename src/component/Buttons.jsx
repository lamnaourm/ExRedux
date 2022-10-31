import React, { useDeferredValue } from 'react';
import { useDispatch } from 'react-redux';
import * as ActionsCreators from '../redux/ActionsCreators'

const Buttons = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() =>  dispatch({type:'INCREMENT', payload:2})}>Incrementer</button>
            <button onClick={() =>  dispatch(ActionsCreators.decrementer(3))}>Decrementer</button>
            <button onClick={() =>  dispatch(ActionsCreators.initialiser())}>Initialiser</button>
        </div>
    );
}

export default Buttons;
