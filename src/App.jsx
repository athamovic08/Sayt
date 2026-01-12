import React from 'react'
import Logo from "./assets/logo.png"
import Hero from "./assets/hero.png"

const App = () => {
  return (
    <div>

      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
          <h1 className="text-2xl text-[#173A56] font-bold">Product</h1>
        </div>

        <ul className="flex items-center gap-6">
          <li><p className="text-[#3d2228] text-base hover:text-blue-500 cursor-pointer">Product</p></li>
          <li><p className="text-[#3d2228] text-base hover:text-blue-500 cursor-pointer">Customers</p></li>
          <li><p className="text-[#3d2228] text-base hover:text-blue-500 cursor-pointer">Pricing</p></li>
          <li><p className="text-[#3d2228] text-base hover:text-blue-500 cursor-pointer">Sources</p></li>
          <li>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
              Sign in
            </button>
          </li>
          <li>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Sign up
            </button>
          </li>
        </ul>
      </nav>

      <div className='flex justify-center items-center gap-24'>
          <div>
             <h1 className='text-[40px] text-[#22343D] font-bold'>Work at the speed <br /> of thought</h1>
             <p className='text-[18px] text-[#22343D] mt-5'>Tools, tutorials, design and innovation experts, all <br /> in one place! The most intuitive way to imagine <br /> your next user experience.</p>
             <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mt-5">
              Get started
            </button>
          </div>
          <div>
             <img className='mt-6' src={Hero} alt="" />
          </div>
      </div>








      <div className='flex justify-center items-center gap-9'>

        <div>
        <h2 className='text-xl'>Effortless Validation for</h2>
        <h1 className='text-2xl font-bold'>Management</h1>
        </div>

        <div className='flex justify-center items-center flex-col gap-4'>
        <div>
          <h1 className='text-xl'>Accessory makers</h1>
          <p className='text-xl'>While most people enjoy casino gambling, sports betting, <br /> lottery and bingo playing for the fun</p>
        </div>
        <div>
          <h2 className='text-xl'>Alterationists</h2>
          <p className='text-xl'>If you are looking for a new way to promote your business <br /> that won’t cost you more money, </p>
        </div></div>
<div>
  <img src="Sayt/src/assets/amico.png" alt="" />
</div>
      </div>

    </div>
  )
}

export default App

