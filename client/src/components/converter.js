import NavBar from "./NavBar";
import Footer from "./Footer";

const Converter = () => {

    // const converted = {
    //     "success": true,
    //     "query": {
    //       "from": "BGN",
    //       "to": "EUR",
    //       "amount": 100000
    //     },
    //     "info": {
    //       "timestamp": 1676246399,
    //       "rate": 0.511448
    //     },
    //     "date": "2023-02-12",
    //     "historical": true,
    //     "result": 51144.8
    //   }


    const NavElements = [{id:1,name:"Home" ,link:"/"}]
    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="converter">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Converter</h2>
                        </div>
                        <div className="content-box">
                            <div className="form-pair">
                                <label>from Currency</label>
                                <input type="text" className="selector-mini"/>
                            </div>
                            <div className="form-pair">
                                <label>to Currency</label>
                                <input type="text" className="selector-mini"/>
                            </div> 
                            <div className="form-pair">
                                <label>Amount</label>
                                <input type="number" className="selector-mini"/>
                            </div> 
                            <div className="form-pair">
                                <label>Date</label>
                                <input type="date" className="selector-mini"/>
                            </div>
                        
                        </div>
                        <div className="button-wrap">
                                <button className="submit-button">Convert</button>
                            </div>
                        <div className="answer-wrap">
                                <input type="text" className="answer"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

     );
}
 
export default Converter;