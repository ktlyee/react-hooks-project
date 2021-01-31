import React, { useState, useEffect } from 'react'

const AccountBalance = () => {
    const [balance, setBalance] = useState(1500)
    const [savings, setSavings] = useState(1263)
    const [notification, setNotification] = useState(false)

    const handleSpending = () => {
        if(balance >= 1000) {
            setBalance(balance - 100)
            setSavings(savings + 100)
        }
    }

    const handleSavings = () => {
        if(savings > 100) {
            setSavings(savings - 100)
            setBalance(balance + 100)
        }
    }

    useEffect(() => {
        if(balance < 1000) {
            setNotification(true)
        } else {
            setNotification(false)
        }
    }, [balance])

     return (
         <div className="columns">
             <div className="column">
                <div className="box">
                    <h4 className="title is-4">Your account balance: </h4>
                    <div className="amount">{balance} Baht</div>
                    <button 
                        className="button is-info"
                        onClick={handleSpending}
                    >
                        Send 100 Baht
                    </button>
                </div>
             </div>
             <div className="column">
                <div className="box">
                    <h4 className="title is-4">Your saving balance: </h4>
                    <div className="amount savings">{savings} Baht</div>
                    <button 
                        className="button is-info"
                        onClick={handleSavings}
                    >
                        Send 100 Baht
                    </button>
                </div>
             </div>
             {notification && (
                <div className="notification is-danger">
                    <button 
                        onClick={() => setNotification(false)}
                        className="delete"
                    ></button>
                    <p>Your account balance is too low.</p>
                    <p>You cannot transfer your money today.</p>
                </div>
             )}
         </div>
     )
}

export default AccountBalance;