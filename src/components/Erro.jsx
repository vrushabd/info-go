import React from 'react'

function Erro(props) {
    const styling ={
      visibility: props.state ? "hidden" : "visible"

      }
  return (
    <>
    <div className="container" style={styling}>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Error!</strong> You should Have to type something.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> 
    </div>
    </>
  )
}

export default Erro;
