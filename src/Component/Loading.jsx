import '../styles/LoadingCss.css'
import { useNavigate } from 'react-router-dom';
const Loading = () => { 
    let navigate = useNavigate();  
    return (<div className="delay" style={{'backgroundColor':'rgba(255,252,252)','height':'100vh'}} >
        <h1 className="pulsate" align="center">Loading...</h1>
         <marquee behavior="scroll" direction="right" scrollamount="40">
    <img style={{'margin':'1% 27%'}} src="naruto.gif" alt="" />
    </marquee>
    {setTimeout(()=>{navigate('/signup')},2000)}
    </div>);
}
 
export default Loading; // use props to navigate switching to different pages based on props input