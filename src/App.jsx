import { useState } from "react";
import { Form } from "./components/Form";
import { SingleColor } from "./components/SingleColor";
import { ColorList } from "./components/ColorList";
import Values from "values.js";// we can set this up as a stat value



//we imported an array of objects from the values.js library
// created a new instance of the Values array/obj we imported 
// declared a useState hook and set its value to that of the new obj instance we just created 
// passed that new instance to the <ColorList> component as a prop and set it to [colors] stat value 

const App = () => {
const [colors, setColors] = useState([new Values('#f15025').all(10)]) 



  return(
    <div>
      <Form/>
      <ColorList color={colors} />
    </div>
  ) 
};
export default App;
