import NavBar from "./NavBar";
import Footer from "./Footer";
import ListBalance from "./ListBalance";
import { useAuth } from "../utils/auth";
const Home = () => {
    const auth = useAuth()
    const NavElements = [
        {id:3,name:"Account" ,link:"/account", onClickF: ()=> {console.log('account')}},
        {id:4,name:"Stats" ,link:"/stats", onClickF: ()=> {console.log('stats')}},
        {id:5,name:"Reminders" ,link:"/reminders", onClickF: ()=> {console.log('reminders')}},
        {id:6,name:"Exchange rates" ,link:"/exchange-rates", onClickF: ()=> {console.log('rates')}}, 
        {id:7,name:"Log out" ,link:"/login", onClickF: ()=> {auth.Logout()}}
    ]
    if(auth.user.role === 'admin'){
        NavElements.unshift({id:1,name:"Admin" ,link:"/admin", onClickF: ()=> {console.log('admin')}})
    }

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