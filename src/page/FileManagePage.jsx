import React from 'react';
import Header2 from '../components/DetailHeader';
import MypageSidemenu from '../components/MypageSidemenu';
import '../css/file_manage.scss'
const FileManagePage = () => {
  return (
    <div>
      <Header2></Header2>
      <div className="file_manage_wrap">
        <MypageSidemenu active='fileManage'></MypageSidemenu>
        <div className="file_manage_main_wrap">
          <p className="file_manage_title">파일 관리</p>
          <div className="file_manage_find_wrap">
            <select name="" className="file_manage_select">
              <option value="title">제목</option>
              <option value="hash">해시태그</option>
            </select>
            <input type="text" />
            <div className="file_manage_find_btn">찾기</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileManagePage;