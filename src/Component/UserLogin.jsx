import '../styles/LoginStyle.css'
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const UserLogin = () => {

    let [uname,setuname]=useState();
    let[password,setpassword]=useState();
    let[user,setUser]=useState();
    const[name,setName]=useState();
    let navigate=useNavigate();

    // function login()
    // {
    //     if(uname=="abc" & password==123) alert(`login success`)
    //     else alert(`login unsuccess`)
    // }

    useEffect(()=>{
        axios.get('http://localhost:1000/User')
        .then((res)=>{setUser(res.data)}) // res.data because it is in raw data form we want in array of json format
        .catch((err)=>{console.log(err)})
    },[])

    function login(e)
    {
        if(user == undefined) {document.querySelector('#denial').style.display ='flex';setTimeout(()=>{document.querySelector('#denial').style.display ='none'},800)}
        else if(uname!=undefined & password!=undefined | (uname!='' & password!='' ))
        {
            e.preventDefault();
            let detected=false;
            user.map((data)=>{
                if(data.uname==uname & data.password==password) {document.querySelector('#access').style.display ='flex';setTimeout(()=>{navigate('/loading3')},2000);detected=true;setName(data.name)}
            })
            if(!detected) {document.querySelector('#denial').style.display ='flex';setTimeout(()=>{document.querySelector('#denial').style.display ='none'},800)}
        }
    else {document.querySelector('#denial').style.display ='flex';setTimeout(()=>{document.querySelector('#denial').style.display ='none'},800)}
    }
    return ( <div className="div1" style={{backgroundImage:'url(landing.gif)',zIndex:'0',backgroundSize:'100% 100%'}}>
    <div className="div2">
        <div className="div3">
        Username - <input id='un' placeholder='User username' value={uname}  onChange={(data)=>{setuname(data.target.value)}} type="text" /> <br />
        Password - <input id='pass' value={password} onChange={(data)=>{setpassword(data.target.value)}} type="password" /> <br /> <br />
        <center>
        <img style={{marginRight:'18%'}} height={50} src="login.gif" alt="" /><br />
            </center>
        <button onClick={login}>Login</button> <br /> <br />
        <h4 style={{marginTop:'15%'}}><span>Not yet registered? <Link to ="/loading">click here</Link></span></h4>
        </div>
    </div>
    <div id='access' style={{border:'2px solid blue',display:'none',position:'absolute',top:'35%',left:'30%',filter:'opacity(80%)',backgroundColor:'green',height:'30%',width:'40%',zIndex:'5',transition:'1s',color:'white'}}>
        <h1 style={{margin:'3% 37%'}}>Welcome&nbsp;{name}</h1> <br />
        {/* <Link to='/userhome'>Ok</Link> */}
    </div>
    <div id='denial' style={{border:'2px solid yellow',display:'none',position:'absolute',top:'35%',left:'32%',filter:'opacity(80%)',backgroundColor:'red',height:'30%',width:'36%',zIndex:'5',transition:'1s',color:'white'}}>
        <h1 style={{padding:'0% 20%'}}>Wrong Credentials</h1> <br />
        {/* <Link to='/userhome'>Ok</Link> */}
    </div>
</div>
    );
}
 
export default UserLogin;

// new things learnt flex-wrap:wrap; display grid , grid-template-column and grid-template-rows
// mui icons material user interface icons --> visit the website and copy paste the code to terminal to install library