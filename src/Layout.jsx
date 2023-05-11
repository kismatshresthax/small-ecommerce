import React from 'react'
import { Head } from './Components/Head/Head'
import Footer from './Components/Footer/Footer'
export const Layout = ({children}) => {
  
  return (
<>
<Head/>

{children}

<Footer/>


</>  )
}
