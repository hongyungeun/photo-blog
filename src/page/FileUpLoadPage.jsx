import React,{useState , useCallback, useEffect} from 'react';
import Header2 from '../components/DetailHeader';
import MypageSidemenu from '../components/MypageSidemenu';
import '../css/file_upload.scss'
import {useDropzone} from 'react-dropzone'
import {useLocation} from 'react-router-dom'
import cloudImg from '../img/upload_cloud.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fileInputChangeField } from '../modules/fileUpReducer';

function FileUpload(){
  const [imgBase64, setImgBase64] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const onDrop = (acceptedFiles)=>{
    setImgFile(null);
    setImgBase64([]);
    for (let i = 0; i < acceptedFiles.length; i++) {
      const imgPriv = acceptedFiles[i]
      setImgBase64((prev) => [...prev, imgPriv]);
      console.log(imgBase64);
      console.log(acceptedFiles.length);
    }
  }
  const {getRootProps,getInputProps,isDragActive} = useDropzone({onDrop})

  const dispatch = useDispatch()

  const {inputFileName,title,hashTag,text} = useSelector(({fileUpReducer})=>({
    inputFileName : fileUpReducer.inputForm.inputFileName,
    title : fileUpReducer.inputForm.title,
    hashTag : fileUpReducer.inputForm.hashTag,
    text : fileUpReducer.inputForm.text
  }))
  const onChangeField = (e)=>{
    const {name,value} = e.target
    dispatch(fileInputChangeField({
      key:name,
      value
    }))
  }

 
  return(
    <div>
      <Header2></Header2>
      <div className='file_up_wrap'>
        <MypageSidemenu active='upload'></MypageSidemenu>
        <div className='file_up_main'>
          <p className='file_up_title'>파일 업로드</p>
          <div className='file_up_main_wrap'>
            <div className='file_up_box_section'>
              <div className="file_up_box">
                <label className='input_file_label' >
                  {imgBase64.length===0 ? <div><img src={cloudImg} /></div>: imgBase64.map((file) => (
                  <p className='file_upload_p'>{file.name}</p>
                ))}
                  <input {...getInputProps()}  hidden name='inputFileName' id='input_up' onChange={onChangeField} />
                </label>
              </div>
              <label {...getRootProps()} className="file_up_box_btn">
                파일 올리기
              </label>
            </div>
                
              
          </div>
          <div className='file_up_input_wrap'>
            <p>Title</p>
            <input type="text" className='file_up_input' name="title" onChange={onChangeField}/>
          </div>
          <div className='file_up_input_wrap'>
            <p>Hashtag</p>
            <input type="text" className='file_up_input' name="hashTag" onChange={onChangeField}/>
          </div>
          <div className='file_up_input_wrap'>
            <p>Text</p>
            <input type="text" className='file_up_input' name="text" onChange={onChangeField}/>
          </div>
          <div className='file_upload_btn'>Upload Files</div>
        </div>
      </div>
    </div>
  )
}
export default FileUpload