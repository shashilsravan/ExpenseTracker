import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    // console.log('amounts', amounts)
    const total = amounts.reduce((a, b) => (a += b), 0).toFixed(1);
    // console.log('total', total)
    return (
        <>
            <h4>My Balance</h4>
            <h1>₹ { total }</h1>
        </>
    )
}
