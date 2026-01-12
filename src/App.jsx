import React from 'react'
import Logo from "./assets/logo.png"

const App = () => {
  return (
    <div>
         <nav>
          <ul>
              <img src={Logo} alt="" />
              <h1>Product</h1>
          </ul>
          <ul> 
            <li><a href="">Product</a></li>
            <li><a href="">Costumers</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Sources</a></li>
            <button>Sign in</button>
            <button>Sign up</button>
            </ul>
         </nav>
    </div>
  )
}

export default App
