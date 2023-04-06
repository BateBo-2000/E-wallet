import { Link, useHistory } from "react-router-dom";

const ListBalance = ({balances}) => {
    

    const history = useHistory()
    const handleClick = () => {
        history.push('/create-balance')
    }

    return ( 
        <div className="balances">
            {balances.map((balance) => (
                <div className="balanceElement" key={balance.balance_id}>
                    <Link to={`/balance/id=${balance.balance_id}`}>
                        <div className="element-box" >
                            <div className="balance-preview">
                                <div className="balance-id-wrap">
                                    <h2>Balance: {balance.balance_id}</h2>
                                </div>
                                <div className="balance-data-wrap">
                                    <h3>{balance.balance}{balance.currency_id}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            <div className="balanceElement" key="add-balance">
                <div className="submit-button-wrap">
                    <button className="submit-button" onClick={handleClick}>+</button>
                </div>
            </div>
        </div> 
    );
}
 
export default ListBalance;