import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import ProductList from './ProductList';

import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Route
                
                path="/"
                render={() => {
                    return (
                      localStorage.getItem('user-info') ?
                      <Redirect to="/list" /> :
                      <Redirect to="/login" /> 
                    )
                }}
              />
      <Route  path="/login">
        <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/add">
        <Protected Cmp={AddProduct}/>
      </Route>
      <Route path="/list">
        <Protected Cmp={ProductList}/>
      </Route>
      <Route path="/update/:id">
        <Protected Cmp={UpdateProduct}/>
      </Route>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
