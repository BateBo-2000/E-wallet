import NavBar from "./NavBar";
import Footer from "./Footer";
import ListBalance from "./ListBalance";
const Home = () => {
    const NavElements = [
        {id:1,name:"Admin" ,link:"/admin"},
        {id:3,name:"Account" ,link:"/account"},
        {id:4,name:"Money" ,link:"/money"},
        {id:5,name:"Reminders" ,link:"/reminders"},
        {id:6,name:"Exchange rates" ,link:"/exchange-rates"}, 
        {id:7,name:"Log out" ,link:"/login"}
      ]
    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="home">  
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Home</h2>
                            <ListBalance/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>  
     );
}
 
export default Home;