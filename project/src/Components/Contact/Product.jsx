import React from 'react'



const Coin = ({name,symbol,imgns,price}) => {
  return (
 <div className='coin'>
 <img src={imgns} alt='name' />
 <h1>{symbol}</h1>
 <p>{name}</p>
 <h4>${price}</h4>

 </div>
  )
}

export default Coin