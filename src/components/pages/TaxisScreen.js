import React from 'react'

function TaxisScreen(props) {
  console.log(props);
  return (
    <div>Taxis
      hi{props.title}this
    </div>
  )
}

export default TaxisScreen;