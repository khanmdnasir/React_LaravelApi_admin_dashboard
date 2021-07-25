import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import Header from './Header';

const  Register = () => {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const history=useHistory()
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            history.push('/list')
        }
    }, []);
    async function signup(){
        let item={name,email,password}
        

        let result=await fetch("http://laravel.eshop.nasirkhan97.me/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }

        })
        result=await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        
        history.push("/add")
    }
    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>Register</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" className="form-control" /><br/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" className="form-control"/><br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="form-control"/><br/>
            
            <button onClick={signup} className="btn btn-primary">Register</button>
        </div>
        </>
    );
};

export default Register;