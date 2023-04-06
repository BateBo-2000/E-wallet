import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

const NavBar = ({elements}) => {
    const auth = useAuth()
    return ( 
        <nav>
            <div className="box">
                <div className="logo">
                    <img src='https://cdn.discordapp.com/attachments/903228880222060564/1092201949178384525/image.png' alt="Logo" />
                </div>

                {/**added check if user is logged*/}
                {auth.user && elements && elements.map((element)=>(
                    <div className="link-wrap" key={element.id}>
                        <Link to={element.link} onClick={element.onClickF} >
                            <h2>{element.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
     );
}
 
export default NavBar;