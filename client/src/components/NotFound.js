import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const NotFound = () => {
    const NavElements = [{id:2,name:"Home" ,link:"/"}]
    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="NotFound">
                <div className="page-content">
                        <div className="title">
                            <h2>Sorry!</h2>
                            <p>The page you are looking for cannot be found</p>
                            <Link to='/'><h4>Back to home page ...</h4></Link>
                        </div>
                </div>
            </div>
            <Footer/>
        </div>  
        
     );
}
 
export default NotFound;