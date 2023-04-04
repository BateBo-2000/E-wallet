import NavBar from "./NavBar";
import Footer from "./Footer";

const CreateBalance = () => {

    const currency = "BGN"
    const NavElements = [
        {id:1,name:"Back" ,link:"/"},
    ]

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="transaction">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Create New Balance</h2>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Currency</label>
                                    <input type="text"/>
                                </div>
                            </form>
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button">Create</button>
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
 
export default CreateBalance;