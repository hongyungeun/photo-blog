import React from "react";

export default function InputComponent({inputIcon, loginInputType, loginInputPlace,onChangeField,inputName}) {
  return (
    <>
      <div className='input_wrap'>
            <p><i className={inputIcon}></i></p>
            <input type={loginInputType} className='login_input' required placeholder={loginInputPlace} name={inputName} onChange={onChangeField}/>
      </div>
    </>
  )
}