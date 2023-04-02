import { Link } from "react-router-dom";

const NavBar = ({elements}) => {
    
    console.log(elements)

    return ( 
        <nav>
            <div className="box">
                <div className="logo">
                    <img src='https://cdn.discordapp.com/attachments/903228880222060564/1092201949178384525/image.png' alt="Logo" />
                </div>

                {elements && elements.map((element)=>(
                    <div className="link-wrap">
                    <Link to={element.link}>
                        <h2>{element.name}</h2>
                    </Link>
                    </div>
                ))}
            </div>
        </nav>
     );
}
 
export default NavBar;