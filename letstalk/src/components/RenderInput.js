import React from 'react';

const RenderInput =({input,meta:{ touched, error },label})=>{
  return(
  <div>
      <input {...input} placeholder={label} />
      {touched && error && <span>{error}</span>}
  </div>)
}

export default RenderInput;

