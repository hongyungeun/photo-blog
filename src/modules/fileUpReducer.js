
import {createAction,handleActions} from 'redux-actions'
import {produce} from 'immer'

const INPUT_FILE_UP = 'file/INPUT_FILE_UP'
const FILE_INPUT_CHANG = 'file/FILE_INPUT_CHANG'
const INPUT_FILE_INITIALIZE = 'file/INPUT_FILE_INITIALIZE'

export const inputFileInitialzie = createAction(INPUT_FILE_INITIALIZE)
export const fileInputChangeField = createAction(FILE_INPUT_CHANG ,({key,value}) => ({key,value}))
export const inputFileUp = createAction(INPUT_FILE_UP, ({key,value}) =>({key,value}))

export const initialState = {
  inputForm :{
    inputFileName:[],
    title : '',
    hashTag:[],
    text:''
  }
}


export default handleActions({
  [INPUT_FILE_UP]: (state,{payload: {key,value}}) =>produce(state,draft=>{
    draft.inputForm[key] = value
  }),
  [FILE_INPUT_CHANG]: (state,{payload: {key,value}}) =>produce(state,draft=>{
    draft.inputForm[key] = value
  }), 
  [INPUT_FILE_INITIALIZE]:state => initialState
  
},initialState)