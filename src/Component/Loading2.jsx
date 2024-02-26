import '../styles/LoadingCss.css'
import { useNavigate } from 'react-router-dom';
const Loading2 = () => { 
    let navigate = useNavigate();  
    return (<div>
        <h1 align="center" className="pulsate">Wait while we're setting up for you...</h1>
    <img style={{display:'flex',position:'relative',left:'37%'}} src="load2.gif" alt="" />
    {setTimeout(()=>{navigate('/adminhome')},3000)}
    </div>);
}
 
export default Loading2; 