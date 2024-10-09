import {useState} from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";


function Navbar(){
    const[open,setOpen]=useState(false);

    const user=true;
return(
    <nav>
        <div className="left">
<a href="/" className="logo">
    <img src="/logo.png" alt="" />
    <span>PROPERY</span>
</a>
<a href="/">Home</a>
<a href="/">About</a>

</div>
 <div className="right">
    {user ?(
    <div className="user">
        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <span>jhon</span>
        <Link to="/py" className="profile">
            <div className="motification">3</div>
            <span>Profile</span>
        </Link>
    </div>
   ):(<>
       <a href="/">Sign in</a>
        <a href="/" className="register">Sign up</a></>)}


            <div className="menuIcon">
                <img src="/menu.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
            </div>

            <div className={open ? "menu active":"menu"}>
            <a href="/">Home</a>
<a href="/">About</a>
<a href="/">Contact</a>



            </div>
        </div>
    </nav>
)

}
export default Navbar;