import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {userRegisterField} from '../modules/userReducer';
import '../css/login.css'
import '../css/sign_up.css'

export default function SingUp({onChangeForm}) {
  const dispatch = useDispatch()
  const {registerID, 
    registerPw, 
    registerPwCk, 
    registerName, 
    registerPhone, 
    registerEmail, 
    registerEmailCode
  } = useSelector(({userReducer}) => ({
    registerID: userReducer.signupForm.registerID,
    registerPw: userReducer.signupForm.registerPw,
    registerPwCk: userReducer.signupForm.registerPwCk,
    registerName: userReducer.signupForm.registerName,
    registerPhone: userReducer.signupForm.registerphone,
    registerEmail: userReducer.signupForm.registerEmail,
    registerEmailCode:userReducer.signupForm.registerEmailCode,
  })
  )

  const onChangeField = (e) => {
    const {name,value} = e.target;
    dispatch(userRegisterField({
      key:name,
      value
    }))
  }


  return(
    <div className='logo_plus_wrap'>
      
      <div className='main_login'>
        <form className='login_form sign_form'  action="">
          <p className='sign_title'>Sign Up</p>
          <div className='sign_wrap'>
            <div className='sign_list'>
              <p>아이디</p>
              <div className='sign_list_input_box'>
                <input type="text" placeholder='아이디를 입력하세요' className='sign_input' name='registerID'autoComplete='off' onChange={onChangeField} />
                <div className='deli_btn deli_id'>중복확인</div>
              </div>
            </div>
            <div className='sign_list'>
              <p>비밀번호</p>
              <div className='sign_list_input_box one_input_box'>
                <input type="password" placeholder='비밀번호를 입력하세요' className='sign_input one_input' name='registerPw'autoComplete='off' onChange={onChangeField}/>
              </div>
            </div>
            <div className='sign_list'>
              <p>비밀번호 확인</p>
              <div className='sign_list_input_box one_input_box'>
                <input type="password" placeholder='비밀번호를 확인' className='sign_input one_input' name='registerPwCk'autoComplete='off' onChange={onChangeField}/>
              </div>
            </div>
            <div className='sign_list'>
              <p>이름</p>
              <div className='sign_list_input_box one_input_box'>
                <input type="text" placeholder='이름을 입력하세요' className='sign_input one_input' name='registerName'autoComplete='off' onChange={onChangeField}/>
              </div>
            </div>
            <div className='sign_list'>
              <p>전화번호</p>
              <div className='sign_list_input_box one_input_box'>
                <input type="text" placeholder='전화번호를 입력하세요' className='sign_input one_input' name='registerPhone' autoComplete='off' onChange={onChangeField}/>
              </div>
            </div>
            <div className='sign_list'>
              <p>이메일</p>
              <div className='sign_list_input_box'>
                <input type="text" placeholder='이메일을 입력하세요' className='sign_input' name='registerEmail'autoComplete='off' onChange={onChangeField}/>
                <div className='deli_btn deli_email'>중복확인</div>
              </div>
            </div>
            <div className='sign_list'>
              <p>코드입력</p>
              <div className='sign_list_input_box'>
                <input type="text" placeholder='코드를 입력하세요' className='sign_input' name='registerEmailCode' autoComplete='off' onChange={onChangeField}/>
                <div className='deli_btn code_check_btn'>코드확인</div>
              </div>
            </div>
            <div className='sign_btn_wrap'>
              <div>회원가입</div>
              <div onClick={()=>onChangeForm('login')}>가입취소</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
