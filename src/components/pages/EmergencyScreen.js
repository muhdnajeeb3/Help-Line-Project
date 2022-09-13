import React from 'react'

const obj = {
  title:"hey",
  age:'12'
}

function EmergencySCreen(props) {
  return (
    <div>Emergency
      <h1>{obj.title},{props.age}</h1>
    </div>
  )
}

export default EmergencySCreen