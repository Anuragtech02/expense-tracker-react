import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State of the items
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: +4000 },
    { id: 3, text: "Book", amount: -200 },
    { id: 4, text: "Camera", amount: -2500 },
    { id: 5, text: "Phone", amount: -20000 },
  ],
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provier Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext>
  );
};
