import React from 'react'
import '../Styles/styles.css'

const StartMenu = ({toggle}) => {

    

  return (
    <main className='flex items-center justify-center p-40 '>
        <img  className='' src="/images/front-img.png" alt="form logo" />
        
        <div className='font-poppins w-3/5 flex items-center flex-col gap-6'>
            <h1 className='text-9xl font-bold text-black w-auto text-center ' >FORM <br/> BUILDER</h1>
            <button onClick={toggle} className='text-3xl font-semibold border-transparent border-2 bg-[#8fd7f0] text-white hover:bg-white hover:text-sky-500 hover:border-solid duration-700 hover:border-2 hover:border-sky-500 py-2 px-2 h-16 w-4/5 rounded'>Start Building</button>
        </div>
    </main>
  )
}

export default StartMenu