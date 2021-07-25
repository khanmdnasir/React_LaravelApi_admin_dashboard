import React,{useState,useEffect} from 'react';
import Header from './Header';
import { Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [data,setData]=useState([]);
    useEffect(  () => {
        
        fetchMyApi();


    }, [])
    async function search(key){
      if(key==""){
        fetchMyApi();
      }else{
        setData([])
      let result= await fetch("http://laravel.eshop.nasirkhan97.me/api/search/"+key);
    result=await result.json();
    setData(result);
      }
      
    }
    async function fetchMyApi(){
        let result= await fetch("http://laravel.eshop.nasirkhan97.me/api/list");
    result=await result.json();
    setData(result);
    }
    
    async function deleteProduct(id){
        let result=await fetch('http://laravel.eshop.nasirkhan97.me/api/delete/'+id,{
            method:'GET'
        });
        result=await result.json();
        fetchMyApi();
        
    }
    
    return (
        <div>
            <Header/>
            <h1>Products List</h1>
            <div className="col-sm-6 offset-sm-3">
            <input type="text"  onChange={(e)=>search(e.target.value)} placeholder="search" className="form-control" />
            </div><br/> 
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Image</th>
      <th>Description</th>
      <th>Price</th>
      <th>Action</th>
      
    </tr>
  </thead>
  <tbody>
      {
         data.map((item)=>
      
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td><img style={{width:100}} src={"http://laravel.eshop.nasirkhan97.me/images/ProductApi/"+item.file_path}/></td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>
          <span  className="btn btn-primary"  ><Link className="link" to={"/update/"+item.id}>Edit</Link> </span>
          <span className="btn btn-danger" onClick={()=>deleteProduct(item.id)}>Delete</span>
      </td>
      
      
    </tr>)
    }
    
  </tbody>
</Table>
        </div>
    );
};

export default ProductList;