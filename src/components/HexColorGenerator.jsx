import React, { useState } from 'react'

export const HexColorGenerator = () => {
    const [color,setColor] = useState("")
  return (
  <>
        <style>
        {
            `
            .main {
                height: 400px;
                width: 250px;
                background: #3A3A38;
                border-radius: 10px;
                display: grid;
                place-items: center;
                color: #fff;
                font-family: verdana;
                border-radius: 15px;
            }

            #colorPicker {
                background-color: none;
                outline: none;
                border: none;
                height: 40px;
                width: 60px;
                cursor: pointer;
            }

            #box {
                outline: none;
                border: 2px solid #333;
                border-radius: 50px;
                height: 40px;
                width: 120px;
                padding: 0 10px;
            }
             `
        }
        </style>
        <div className='main'>
            {/*To select the color */}
            Color Picker: <input type="color"
                id="colorPicker" value={color} onChange={ e => setColor(e.target.value)}/>
    
            {/* To display hex code of the color */}
            Hex Code: <input type="text" id="box" value={color}/>
        </div>
</>
  )
}
