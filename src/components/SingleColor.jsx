import { toast } from "react-toastify"


export const SingleColor = ({index, color}) => {
  const { hex, weight} = color 
  
  const saveToClipboard = async () => {
if (navigator.clipboard) {
    try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard. Yay!')
    } catch (error) {
        toast.error(' Color was not copied to clipboard. :(  ')
    }
  } else {
    toast.error('Clipboard Access Not Available');
    } 
  }
    return (
    <article 
        className= {index > 10 ? 'color color-light':'color'} 
        style={{background:`#${hex}`}}
        onClick={saveToClipboard}
    >
        <p className="precent-value">{weight}%</p>
        <p className="precent-value">#{hex}</p>
    </article>
  )
}
