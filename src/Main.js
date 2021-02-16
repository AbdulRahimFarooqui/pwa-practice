import React, { useContext, useState } from 'react';
import { transactions } from './TransactionContext';
import {configureNotification} from './firebase_service'

function Main() {
    let { trans, addTransaction, deleteTransaction } = useContext(transactions);
    // console.log(trans,":trans")
    let [newAmount, setAmount] = useState(0);
    let [newDesc, setDesc] = useState("");
    const handleAddition = (event) => {
        event.preventDefault();
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setAmount(0);
        setDesc("");
    }
    const handleDelete = (id) => {
        deleteTransaction(id);
    }
    const totalIncome = () => {
        let totalI = 0;
        for (let i = 0; i < trans.length; i++) {
            if (trans[i].amount > 0) {
                totalI += trans[i].amount;
            }
        }
        return totalI;
    }
    const totalExpense = () => {
        let totalE = 0
        for (var x = 0; x < trans.length; x++) {
            if (trans[x].amount < 0) {

                totalE += trans[x].amount;
            }
        }
        return (totalE * -1);
    }
    return (
        <div className="main">
            <div className="confNoti" onClick={configureNotification}>Allow Notifications<br/> From This Web App</div>
            <h1 className="app-name">Expense Tracker App</h1>
            <div className="balance">
                <h3>
                    Your Balance <br />${totalIncome() - totalExpense()}
                </h3>
            </div>
            <div className="totals">
                <h3>Total Income <br />${totalIncome()}</h3>
                <h3>Total Expenses <br />${totalExpense()}</h3>
            </div>
            <h3>History<hr /></h3>
            <ul className="history" >
                {trans.map((val, ind) => {

                    return (
                        <li key={ind} onClick={() => handleDelete(ind)}>
                            <span>
                                {val.desc}
                            </span>
                            <span>
                                ${val.amount}
                            </span>
                        </li>
                    );
                })}

            </ul>
            <h3>ADD NEW TRANSACTION<hr /></h3>
            <form onSubmit={handleAddition}>
                <label>
                    Enter Description:<br />
                    <input type="text"
                        required
                        onChange={(ev) => setDesc(ev.target.value)}
                        value={newDesc}
                        className="input-desc" />
                </label>
                <br />
                <label>
                    Enter Amount:<br />
                    <input type="Number"
                        required
                        placeholder="(in USD)"
                        onChange={(ev) => setAmount(ev.target.value)}
                        value={newAmount}
                        className="input-amount">
                            
                    </input>
                </label>
                <br />
                <div className="buttons">
                    <input type="submit" required value="Income" />
                    <input type="submit" required value="Expense" onClick={() => { setAmount((-1 * newAmount)) }} />
                </div>
            </form>

        </div>
    );

}
export default Main;