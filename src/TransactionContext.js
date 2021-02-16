import React, { createContext, useReducer } from 'react';
import reducer from './Reducer';

const initialData = [
    { desc: "Fuel Expenses", amount: -10 },
    { desc: "Camera", amount: -10 },
    { desc: "Income", amount: 1000 },
]

export const transactions = createContext(initialData);
export const TransProvider=({ children })=>{
    let [state, dispatch] = useReducer(reducer, initialData);

    function addTransaction(transObj) {
        dispatch({
            type: "Add-Transaction",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
        console.log(transObj,"transObj")
    }
    function deleteTransaction(id){
        dispatch({
            type:"Delete",
            payload:{
                id:id
            }
        })
    }
    return (
        <transactions.Provider value={
            {
                trans: state,
                addTransaction,
                deleteTransaction
            }
        }>
            {children}

        </transactions.Provider>
    )
}