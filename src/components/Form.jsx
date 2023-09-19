import React from 'react'
import {useState} from 'react'


export const Form = ({addColor}) => {

    const [color, setColor] = useState('')
    
    const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color)
    }

  return (
    <section className='container'>
        <h4 className=''> Color Generator</h4>
        <form onSubmit={handleSubmit} className='color-form'>
            <input type='color' value={color} onChange={(e) => setColor(e.target.value)}/>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value) } placeholder="#FF0391"/>
            <button type='submit' className='btn' style={{background:color}}>Submit</button>
        </form>
    </section>
  )
}

