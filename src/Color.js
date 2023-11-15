import React from 'react'
import colorName from 'colornames'


const Color = ({colorvalue,setcolor,hex,setHex,dark,setDark}) => {
 
  return (
    <div className='combine'>
        <div className='color' style={{backgroundColor : colorvalue, color : dark ? "#000" : "#FFF" }}>
           <p >{colorvalue ? colorvalue : "empty value"}</p>
           <p>{hex ? hex : null}</p>
        </div>
        <input 
        autoFocus
            type='text'
            placeholder='Add color name'
            onChange={(e)=> {
            setcolor(e.target.value)
            setHex(colorName(e.target.value))
            }}
        />
        <button type='button' onClick={() => setDark(!dark)}>
          Toggle text color
        </button>
    </div>
  )
}

export default Color