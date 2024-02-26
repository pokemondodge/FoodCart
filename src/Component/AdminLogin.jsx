import { useState,useEffect } from 'react';
import'../styles/LoginStyle.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminLogin = () => {

    let [uname,setuname]=useState(''); //auto sets while onChange
    let[password,setpassword]=useState(''); //auto sets while onChange
    let[admin,setadmin]=useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:1000/Admin')
        .then((res)=>{setadmin(res.data)}) // res.data because it is in raw data form we want in array of json format
        .catch((err)=>{console.log(err)})
    },[])

    function login(e)
    {
        if(uname!=undefined & password!=undefined)
        {
            e.preventDefault();
            let detected=false;
            admin.map((data)=>{
                if(data.uname==uname & data.password==password) {document.querySelector('#access').style.display ='flex';setTimeout(()=>{navigate('/loading2')},2000);detected=true;} //navigate works same as console.redirect('link')
            })
            if(!detected) {document.querySelector('#denial').style.display ='flex';setTimeout(()=>{document.querySelector('#denial').style.display ='none'},800)}
            return;
        }
    }
    
    // async function get() // optional we can use this also alternative substitute variant
    // {
    //     let result=[]
    //     let flag=false;
    //     let response = await fetch('http://localhost:1000/Admin')
    //     result = await response.json()
    //     result.map((data)=>{
    //         if(data.uname==uname & data.password==password) {alert(`login successful`);flag=true;}
    //     }) // can we do code fragmenting here?
    //     if(!flag) alert(`logon denied inappropriate data`)
    // }
    // get()  



    return (<div className="div1" style={{backgroundImage:'url(landing.gif)',zIndex:'0',backgroundSize:'100% 100%'}}>
    <div className="div2">
        <div className="div3">
        Username - <input placeholder='Admin username' value={uname}  onChange={(data)=>{setuname(data.target.value)}} type="text" /><br/>
        Password - <input value={password} onChange={(data)=>{setpassword(data.target.value)}} type="password" /><br/> <br />
            <center>
        <img style={{marginRight:'18%'}} height={50} src="login.gif" alt="" /><br />
            </center>
        <button onClick={login}>Login</button><br/>
        <h4 style={{marginTop:'15%'}}><span>If you have not registered <Link to="/loading"> Sign-up</Link></span></h4>
        </div>
    </div>
    <div id='access' style={{border:'2px solid yellow',display:'none',position:'absolute',top:'35%',left:'30%',filter:'opacity(80%)',backgroundColor:'darkgreen',height:'30%',width:'40%',zIndex:'5',transition:'1s',color:'white'}}>
        <h1 style={{margin:'3% 30%'}}>Access Granted</h1> <br />
        {/* <Link to='/userhome'>Ok</Link> */}
    </div>
    <div id='denial' style={{border:'2px solid yellow',display:'none',position:'absolute',top:'35%',left:'30%',filter:'opacity(80%)',backgroundColor:'red',height:'30%',width:'40%',zIndex:'5',transition:'1s',color:'white'}}>
        <h1 style={{margin:'3% 30%'}}>Access Denied</h1> <br />
        {/* <Link to='/userhome'>Ok</Link> */}
    </div>
</div>
    );
}
 
export default AdminLogin;