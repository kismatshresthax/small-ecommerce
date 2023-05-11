import React from 'react'
import { Route, Routes } from 'react-router'

import Products from './Components/Product/Products'
import Product from './Components/Product/Product'
import About from './Components/About/About'
import { Contact } from './Components/Contact/Contact'


export const PrivateRouter = () => {
  
  return (
<>
<Routes>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<Product/>}/>

    <Route path = '/about' element={<About/>}/>
    <Route path = '/contact' element={<Contact/>}/>

   
    
</Routes>



</> 
 )
}
