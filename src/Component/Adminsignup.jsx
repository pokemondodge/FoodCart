import '../styles/Signup.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AdminSignup = () => {
    let [name,setname]=useState("")
    let [uname,setuname]=useState("")
    let [phone,setphone]=useState("")
    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")
    let [cnfpassword,setcnfpassword]=useState("")
    let [captcha,setcaptcha]=useState("")
    let navigate = useNavigate(); // we can use useNavigate directly but destructuring need to perform
    
    function addAdmin(e){
        let admins = {name,uname,phone,email,password}  //add hashing sha-256 algorithm to password storage and write in resume
        if(name!=''& uname!=''& phone!='' & email!='' & password!=''& password==cnfpassword  & cnfpassword!='')
        {
        e.preventDefault();
        axios.post('http://localhost:1000/Admin',admins)
        .then((res)=>{console.log(res); alert(`data added successfully`);navigate('/')})
        .catch((res)=>{console.log(res); alert(`invalid data`)})
        }
        else if(password!=cnfpassword) alert(`password does not match`)
        else alert(`invalid data`)
    }
    
    function addUser(e){
        let users = {name,uname,phone,email,password}  //add hashing sha-256 algorithm to password storage and write in resume
        e.preventDefault();
        // this is to prevent default rendering property of button tag if not then on click will sometimes re-render and erases forms data to default values i.e empty and inappropriate data will submitted
        if(name!=''& uname!=''& phone!='' & email!='' & password!='' & password==cnfpassword &  cnfpassword!=''){
        fetch('http://localhost:1000/User',{
            method:'post',
            headers:{'content-type':'application/json'}, // if we don't do this then data will be in string format we convert data from string format to json format
            body:JSON.stringify(users) // predefined method that converts all admin data to string 
        })
        .then((res)=>{console.log(res); alert(`data added successfully`);navigate('/')})
        .catch((res)=>{console.log(res); alert(`invalid data`)})
    }
    else if(password!=cnfpassword) alert(`password does not match`)
    else { alert(`invalid data`)}
    }

    return ( <div className="parent" style={{display: 'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height: '100vh',width: '100wh',backgroundImage: 'url(register.gif)',backgroundSize: '100% 100%'}}>
        <div className="child">
        <form action="submit" onSubmit="" method="">
            <h1 align="center">Signup</h1>
            Name : <input required value={name} onChange={(data)=>{setname(data.target.value)}} class="ip" type="text" /> <br />
            Username : <input required value={uname} onChange={(data)=>{setuname(data.target.value)}} class="ip" type="text" /><br />
            Phone : <input required value={phone} onChange={(data)=>{setphone(data.target.value)}} class="ip" type="tel" pattern='[0-9]{10}' /><br />
            Email : <input required value={email} onChange={(data)=>{setemail(data.target.value)}} class="ip" type="email" /><br />
            Password : <input id="pass" required value={password} onChange={(data)=>{setpassword(data.target.value)}} class="ip" type="password" /><br />
            Confirm password : <input required value={cnfpassword} onChange={(data)=>{setcnfpassword(data.target.value)}} class="ip" type="password" /> <br /><br />
            <div className="cap">
            Captcha  <img height={30} width={100} src="captcha.jpg" alt="" /> :
             <input value={captcha} onChange={(data)=>{setcaptcha=data.target.value}} type="text" /><br /><br />
            </div><br />
            <span><input required checked type="checkbox" /> I abide by the rules</span> <br /><br />
            <button id='btnA' type='submit' onClick={addAdmin}  style={{border:'none',padding:'5px',background:'transparent',color:'blue',textShadow:'0px 0px 5px darkgreen',margin:'5px 50px',borderRadius:'3px'}}>Register for admin</button>
            <button id='btnU' type='submit' onClick={addUser} style={{border:'none',padding:'5px',background:'transparent',color:'blue',textShadow:'0px 0px 5px darkgreen',margin:'5px 50px',borderRadius:'3px'}}>Register for user</button>
        </form>
        </div>
        <h1 style={{display:'flex',position:'absolute',top:'15%',left:'3%',color:'red',textShadow:'0px 2px 9px orange'}} color='white'>Register and kickstart <br /> exciting adventurous journey with us...!</h1>
    </div> );
}
 
export default AdminSignup;