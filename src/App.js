import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom'
import './App.css';
import Main from './page/MainPage.jsx'
import LoginPage from './page/LoginPage';
import MainDetail from './page/MainDetailPage';
import FileUpload from './page/FileUpLoadPage';
import FileManagePage from './page/FileManagePage';
import ErrPage from './page/ErrPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/main">
          <Main/>
        </Route>
        <Route exact path="/main_detail">
          <MainDetail />
        </Route>
        <Route exact path='/file_upload'>
          <FileUpload />
        </Route>
        <Route exact path='/file_manage'>
          <FileManagePage></FileManagePage>
        </Route>
        <Route exact path='/*'>
          <ErrPage />
        </Route>
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}
export default App;
