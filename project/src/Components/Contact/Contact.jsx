import React, { Fragment ,useState} from 'react'
import './Contact.css'

const Contact = () => {

const [name, setname] = useState("")



const handleonChange=(e)=>{
  setname(e.target.value)
}



  return (
    <Fragment>
      <form >

<input type="text" placeholder='Enter Name' onChange={handleonChange}/>
<input type="text"  placeholder='Enter Email'/>

<button >
  Press
</button>

<p> {name} </p>

      </form>
    </Fragment>
  )
}

export default Contact