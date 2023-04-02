import NavBar from "./NavBar";
import Footer from "./Footer";
const Account = () => {
    const NavElements = [{id:2,name:"Home" ,link:"/"}]
    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="account">
                <div className="page-content">
                <h2>Account</h2>
                </div>
            </div>
            <Footer/>
        </div>  
        
     );
}
 
export default Account;