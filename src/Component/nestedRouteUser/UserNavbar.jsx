import { Link } from "react-router-dom";
import './Nested style/UserNavbar.css'
const UserNavbar = () => {
    let revert=true;
       function theme()
        {   
            if(revert) {document.body.style.backgroundColor = 'black';document.body.style.color="white"; revert=false; document.querySelector('button').innerText='😎';}
            else {document.body.style.backgroundColor = 'white';revert=true;document.body.style.color="black";document.querySelector('button').innerText='🌚';}
        }
        return ( <div className="navbar">
            <h1 style={{color:'black',fontFamily:'sans-serif',textShadow:'0px 0px 7px darkgreen'}}>< img height={50} src="giphy.gif" alt="" />Food<span style={{color:'red',fontFamily:'revert-layer'}}>Cart</span></h1>
            <div className="options">
            <Link to ='/userhome/userprofile'>profile</Link>
            <Link to ='/userhome/usercart'>🛒cart</Link>
            <Link to ='/'>Logout📴</Link>
            <button id="button" onClick={theme} style={{border:'none',backgroundColor:'transparent','fontSize':'20px'}}>🌚</button>
            </div>
            {/* <div style={{display:'flex'}}>
            <input id="search" type="text" placeholder="Search" /><button>🔍</button>   
            </div> */}
        </div> );
} 
export default UserNavbar; // i am using ovveride inline css property