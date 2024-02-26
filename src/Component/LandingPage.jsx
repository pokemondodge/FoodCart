import { Link } from "react-router-dom";
import '../styles/LandingPageStyle.css';
const LandingPage = () => {
    // async function get()
    // {
    //     let res = await fetch('https://pokemondodge.github.io/database/data.json')
    //     let rd = await res.json();
    //     console.log(rd)
    // }
    // get()
    return (<div className="super">
                <div style={{backgroundImage:'url(landing.gif)',zIndex:'0',backgroundSize:'100% 100%',filter:'blur(5px)'}} className="homepage"></div>
                <div className="view">
                <img src="naru.gif" alt="" />
                    <Link id="mode" style={{'display':'block'}} to="admin">@admin</Link>
                    <Link id="mode" style={{'display':'block'}} to="user">@user</Link>
                </div>
                {
                }
            </div>);
}
 
export default LandingPage;