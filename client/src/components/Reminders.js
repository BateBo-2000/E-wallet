import NavBar from "./NavBar";
import Footer from "./Footer";
const Reminders = () => {
    const NavElements = [{id:2,name:"Home" ,link:"/"}]
    return ( 
    <div>
        <NavBar elements={NavElements}/>
        <div className="reminders">
            <div className="page-content">
                <h2>reminders</h2>
            </div>  
        </div>     
        <Footer/>
    </div>
    );
}
 
export default Reminders;