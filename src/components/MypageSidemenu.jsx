import React from 'react';
import { Link } from 'react-router-dom';

const MypageSidemenu = ({active}) => {
  return (
    <div className='main_side_menu'>
          <Link to={'/file_upload'}>
            <div className={"main_side_icon " + (active==='upload' && 'main_side_icon_active') }>
              <i className='xi-file-upload file_up_icon'></i>
              <p>파일업로드</p>
            </div>
          </Link>
          <Link to={'/file_manage'}>
            <div className={"main_side_icon " + (active === 'fileManage' && 'main_side_icon_active')}>
              <i className='xi-file-image file_up_icon'></i>
              <p>파일관리</p>
            </div>
          </Link>
          <div className="main_side_icon">
            <i className='xi-user-plus file_up_icon'></i>
            <p>회원관리</p>
          </div>
    </div>
  );
};

export default MypageSidemenu;