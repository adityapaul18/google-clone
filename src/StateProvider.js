import React, {createContext, useContext, useReducer} from "react";
export const StateContext = createContext();

export const StateProvider = ({ reducer,initialState,children}) => (
    <StateContext.Provider  value={ useReducer(reducer ,initialState)}>
        {children}
    </StateContext.Provider>
);

// hooke that allows us to poor info frm data layer
export const useStateValue = () => useContext(StateContext);
