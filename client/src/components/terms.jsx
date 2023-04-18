import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
const Terms = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet terms of use'
    }, []);

    return ( 
        <div>
            <NavBar></NavBar>
            <div className="terms">
                    <div className="page-content">
                        <div className="box">
                            <div className="title">
                                <h2>Terms and Conditions</h2>
                            </div>
                            <div className="p-wrap">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quis ea nemo quas deleniti fugit mollitia veritatis, natus esse illum asperiores, dignissimos corporis ex eos hic, vel sint rem aliquam deserunt cupiditate nobis. Maiores deserunt quam voluptas, recusandae delectus nam id temporibus odit voluptatum explicabo debitis nobis, repellat expedita cupiditate non? Nulla, corrupti omnis iure illo, molestias deserunt velit ut magni eius, commodi harum. Facilis dignissimos nobis officia ex et eum velit ea, ullam beatae aliquid corporis alias hic tempora amet sequi pariatur dolores nam quae. Laborum provident, molestias quas delectus error reprehenderit neque quis nesciunt facilis in consectetur officiis reiciendis ducimus aperiam enim aliquid doloribus culpa repellat numquam iusto ipsam dolorem soluta? Eligendi nulla asperiores facere atque laudantium enim rerum, non quae commodi error officiis tempora sunt corrupti in qui, ex ea quaerat inventore consectetur reiciendis placeat perferendis praesentium debitis corporis! Dignissimos quisquam neque provident sunt officia iusto, quae consectetur totam eligendi facilis? Harum, beatae expedita odio minima nihil labore soluta ut ipsum quidem eveniet atque pariatur hic esse quas optio dolor, unde facere porro ratione saepe nisi! Voluptates ipsa autem ut voluptas vero a odio nam tempore libero nobis consequatur, inventore consequuntur perspiciatis earum excepturi voluptatum? Quo, vitae.z</p>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>  
       
    );
}
 
export default Terms;