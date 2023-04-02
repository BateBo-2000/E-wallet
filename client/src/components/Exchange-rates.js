import NavBar from "./NavBar";
import Footer from "./Footer";
const ExchangeRates = () => {
    const NavElements = [{id:2,name:"Home" ,link:"/"}]
    return (
        <div>
            <NavBar elements={NavElements}/>
            <div className="exchange-rates">
                <div className="page-content">
                    <h2>Exchange Rates</h2>
                </div>
            </div>  
            <Footer/>
        </div>  
    );
}
 
export default ExchangeRates;