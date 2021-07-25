import React from 'react';
import { useState,useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

const UpdateProduct = (props) => {
    const [data,setData]=useState([])
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [file,setFile]=useState("")
    const [desc,setDesc]=useState("")
    const [price,setPrice]=useState("")
    useEffect(() => {
        async function getProductApi(){
            let result=await fetch('http://laravel.eshop.nasirkhan97.me/api/product/'+props.match.params.id);
            result=await result.json();
            setData(result);
        }
        getProductApi();
    }, []);
    async function update(){
        // let item={name,file,desc,price}
        // const formData=new FormData();
        // formData.append('id',id);
        // formData.append('name',name);
        // formData.append('file',file);
        // formData.append('desc',desc);
        // formData.append('price',price);

        let result=await fetch("http://laravel.eshop.nasirkhan97.me/api/update",{
            method:'POST',
            
            

        })
        
        alert(result.name);
        
        
        
    }
    return (
        <div>
            <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>Update Product</h1>
            <input type="hidden" defaultValue={data.id}  className="form-control" onChange={(e)=>setId(e.target.value)}/><br/>
            <input type="text" defaultValue={data.name} onChange={(e)=>setName(e.target.value)} placeholder="name" className="form-control" /><br/>
            <input type="file" defaultValue={data.file_path}  onChange={(e)=>setFile(e.target.files[0])}  className="form-control"/><br/>
            <img style={{width:100}} src={"http://laravel.eshop.nasirkhan97.me/images/ProductApi/"+data.file_path}/>
            <input type="text" defaultValue={data.description} onChange={(e)=>setDesc(e.target.value)} placeholder="description" className="form-control"/><br/>
            <input type="number" defaultValue={data.price} onChange={(e)=>setPrice(e.target.value)} placeholder="price" className="form-control"/><br/>
            
            <button onClick={update} className="btn btn-primary">Update</button>
        </div>
        </>
            
        </div>
    );
};

export default withRouter(UpdateProduct);