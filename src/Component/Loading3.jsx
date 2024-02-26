import { useNavigate } from 'react-router-dom';
const Loading3 = () => { 
    let navigate = useNavigate();  
    return (<div style={{height:'100vh',backgroundColor:'black',color:'white',textShadow:'0px 0px 10px white'}}>
        <br />
        <h1 style={{marginLeft:'40%'}} className="puls">You got it</h1>
    <img style={{display:'flex',position:'relative',left:'32%',top:'5%'}} src="load3.gif" alt="" /> <br /> <br />
        <h1 style={{marginLeft:'40%'}} className="puls">Wait a moment...</h1>
    {setTimeout(()=>{navigate('/userhome')},3000)}
    </div>);
}
 
export default Loading3; 