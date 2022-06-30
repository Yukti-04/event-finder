import React,{createContext, useReducer} from 'react';
import aReducer from "./aReducer";

//initialize
const initialState={
    events: []
}
export const GlobalContext = createContext(initialState);

// provider which provides access to the state

export const GlobalProvider =({children}) => {
    const [state, dispatch] =useReducer(aReducer, initialState); //dispatch will store event type,data type and action type 

    function addEvent(event){
        dispatch({
            type: 'ADD_EVENT',
            payload: event
        })
    }

    function deleteEvent(id){
        dispatch({
            type: 'DELETE_EVENT',
            payload: id
        })
    }
    return(
        <GlobalContext.Provider value={{
            events: state.events,
            addEvent,
            deleteEvent
        }}>
            {children}
        </GlobalContext.Provider>
    )
}