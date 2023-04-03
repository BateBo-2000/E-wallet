import { Link } from "react-router-dom";
const ListBalance = () => {
    const balances = [
        {
            "balance_id": 17,
            "user_id": 35,
            "balance": 302.57,
            "currency_id": 5
          },
          {
            "balance_id": 18,
            "user_id": 35,
            "balance": 256.05,
            "currency_id": 5
          }
    ]
    return ( 
        <div className="balances">
            {balances.map((balance) => (
                <div className="balanceElement" key={balance.balance_id}>
                    <Link to={`/balance/${balance.balance_id}`}>
                        <div className="element-box" >
                            {<div className="balance-preview">
                                <div className="balance-id-wrap">
                                    <h2>Balance: {balance.balance_id}</h2>
                                </div>
                                <div className="balance-data-wrap">
                                    <h3>{balance.balance}{balance.currency_id}</h3>
                                </div>
                            </div>}
                        </div>
                    </Link>
                </div>
            ))}
        </div> 
    );
}
 
export default ListBalance;