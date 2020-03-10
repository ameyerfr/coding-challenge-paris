import React, { useState } from 'react'

export default function Temperature() {

  const [temperature, setTemp] = useState();

  const onTempChange = (e) => {
    setTemp(parseInt(e.target.value, 10));
  }

  return (
    <div className="c-temperature">
      <h1>Temperature</h1>
      <input type="number" onChange={onTempChange} />
      { (temperature < 10) && <p style={{color:'blue'}}>It's cold ❄️</p>}
      { (temperature >= 10 && temperature <= 30 ) && <p style={{color:'black'}}>It's nice 🌼</p>}
      { (temperature > 30) && <p style={{color:'red'}}>It's warm ☀️</p>}
    </div>
  )
}
