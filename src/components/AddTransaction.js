import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '' || amount === 0){
            alert('Enter values')
        }
        else{const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text: text, amount: +amount,
        }
        addTransaction(newTransaction)}
    }
    return (
        <div>
            <h3> Add New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>
                    (negative - expense, positive - income)
                    </label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
