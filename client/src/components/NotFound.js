import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const NotFound = () => {
    const NavElements = [{id:2,name:"Home" ,link:"/"}]
    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="NotFound">
                <h2>Sorry!</h2>
                <p>The page you are looking for cannot be found</p>
                <Link to='/'>Back to home page ...</Link>
            </div>
            <Footer/>
        </div>  
        
     );
}
 
export default NotFound;