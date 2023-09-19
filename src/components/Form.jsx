import React from 'react'
import {useState} from 'react'


export const Form = () => {

    const [color, setColor] = useState('')

    const handleSubmit = (e) => {
    
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




// import {useState} from 'react'
// export const Form = () => {
//     const [color, setColor] = useState(null)
//     const handleSubmit = () => {
        
// }
//   return (
//     <div>
//         <h4>Form</h4>
//         <Form className='' onSubmit={handleSubmit}>
//             <label htmlFor='color'>Color</label>
//             <input type='color' name='color' id='head'
//             value={color} 
//             onChange={(e) => setColor(e.target.value)}/>
            
//             <label htmlFor='text'>HEX</label>
//             <input type='text' name='text' id='text'
//             value={color} 
//             onChange={(e) => setColor(e.target.value)}/>
            
//         </Form>
    
//     </div>
//   )
// }
