import {createAction,handleActions} from 'redux-actions'
import {produce} from 'immer'

const USER_CHANGE_FORM = 'user/CHANGE_FORM'
const USER_INITIALIZE = 'user/INITIALIZE'
const USER_LOGIN_CHANGE_FIELD = 'user/USER_LOGIN_CHANGE_FIELD'
const USER_REGISTER_FIELD = 'user/USER_REGISTER_FIELD'

export const userInitialize = createAction(USER_INITIALIZE)
export const userChangeForm = createAction(USER_CHANGE_FORM,type=>type);
export const userLoginChangeField = createAction(USER_LOGIN_CHANGE_FIELD,({key,value})=>({key,value}))
export const userRegisterField = createAction(USER_REGISTER_FIELD,({key,value})=>({key,value}))

export const initialState = {
  formType:'login',
  loginForm : {
    loginUserId:'',
    loginUserPw:''
  },
  signupForm : {
    registerID:'',
    registerPw:'',
    registerPwCk:'',
    registerName:'',
    registerPhone:'',
    registerEmail:'',
    registerEmailCode:''
  }
}
export default handleActions({
  [USER_CHANGE_FORM]:(state, {payload : type} )=>produce(state,draft=>{
    draft.formType = type
  }),
  [USER_LOGIN_CHANGE_FIELD]:(state, {payload : {key,value}})=>produce(state,draft=>{
    draft.loginForm[key] = value;
  }),
  [USER_REGISTER_FIELD]:(state, {payload : {key,value}}) =>produce(state,draft=>{
    draft.signupForm[key] = value
  })
,[USER_INITIALIZE]:state=>initialState
},initialState)