import {useState} from 'react'



export const Form = () => {
    const [color, setColor] = useState("#e66465")

    const handleSubmit = () => {
        
}
  return (
    <div>
        <h4>Form</h4>
        <Form className='' onSubmit={handleSubmit}>
            <label htmlFor='color'>Color</label>
            <input type='color' name='color' id='head'
            value={color} 
            onChange={(e) => setColor(e.target.value)}/>
            
            <label htmlFor='text'>HEX</label>
            <input type='text' name='text' id='text'
            value={color} 
            onChange={(e) => setColor(e.target.value)}/>
            
        </Form>
    
    </div>
  )
}
