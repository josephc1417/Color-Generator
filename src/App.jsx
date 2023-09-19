import { useState } from "react";
import { Form } from "./components/Form";
import { SingleColor } from "./components/SingleColor";
import { ColorList } from "./components/ColorList";
import Values from "values.js";// we can set this up as a stat value
import { ToastContainer, toast } from "react-toastify";






const App = () => {

  const [colors, setColors] = useState(new Values('#f15025').all(10)) 

const addColor = (color) => {
  try {
    const newColors = new Values(color).all(10)
    setColors(newColors)
  } catch (error) {
    toast.error(error.message)
  }
}

return(
    <div>
      <Form  addColor={addColor}/>
      <ColorList colors ={colors} />
      <ToastContainer position ='top-center' />
    </div>
  )
};
export default App;
