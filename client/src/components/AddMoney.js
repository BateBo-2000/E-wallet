import NavBar from "./NavBar";
import Footer from "./Footer";

const AddMoney = () => {

    const currency = "BGN"
    const NavElements = [
        {id:1,name:"Back" ,link:"/balance"},
    ]

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="transaction">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Insert money into your wallet</h2>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Amount in {currency}</label>
                                    <input type="Number"/>
                                </div>
                            </form>
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button">Make Transaction</button>
                        </div>
                        <div className="title">
                            <h2>error</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default AddMoney;