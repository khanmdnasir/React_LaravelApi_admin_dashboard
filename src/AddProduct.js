import React from 'react';
import { useState } from 'react';
import Header from './Header';

const AddProduct = () => {
    const [name,setName]=useState("")
    const [file,setFile]=useState("")
    const [desc,setDesc]=useState("")
    const [price,setPrice]=useState("")
    async function add(){
        // let item={name,file,desc,price}
        const formData=new FormData();
        formData.append('name',name);
        formData.append('file',file);
        formData.append('desc',desc);
        formData.append('price',price);

        await fetch("http://laravel.eshop.nasirkhan97.me/api/addProduct",{
            method:'POST',
            body:formData,
            

        })
        alert('Data has been saved');
        
        
        
    }
    return (
        <div>
            <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>Add Product</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" className="form-control" /><br/>
            <input type="file"  onChange={(e)=>setFile(e.target.files[0])}  className="form-control"/><br/>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="description" className="form-control"/><br/>
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="price" className="form-control"/><br/>
            
            <button onClick={add} className="btn btn-primary">Add Product</button>
        </div>
        </>
            
        </div>
    );
};

export default AddProduct;