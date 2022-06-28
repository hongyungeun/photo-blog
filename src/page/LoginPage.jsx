import React, { useEffect } from 'react';
import '../App.css';
import '../css/login.css';
import SingUp from '../container/registerContainer';
import { useSelector, useDispatch } from 'react-redux';
import { userChangeForm,userInitialize } from '../modules/userReducer';
import userReducer from '../modules/userReducer';
import LoginContainer from '../container/LoginContainer';
function LoginPage() {
  const dispatch = useDispatch()
  const changeForm = (popupType)=>{
    dispatch(userChangeForm(popupType)) 
  }
  const {type} = useSelector(({userReducer})=>({
    type  : userReducer.formType
  }))
 
  useEffect(
    ()=>{dispatch(userInitialize())}
  ,[])
  return (
    <div className='login_wrap'>
      
      <div className="black_box"></div>
      <div className='gray_box'></div>
      {type==='login'?<LoginContainer onChangeForm={changeForm} />:<SingUp onChangeForm={changeForm}/>}
      
      
      <div className="black_box2"></div>
      <div className='gray_box2'></div>
    </div>
  )
}
export default LoginPage