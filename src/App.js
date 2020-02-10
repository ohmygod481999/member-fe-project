import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import SideBar from './components/Layout/SideBar';
import MainContent from './components/Layout/MainContent';

function App() {
  return (
    <div class="kt-grid kt-grid--hor kt-grid--root">
      <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
      {/* <button class="kt-aside-close " id="kt_aside_close_btn"><i class="la la-close"></i></button> */}
        <SideBar />
        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
          <Header />
          <MainContent />
        </div>

      </div>
    </div>
  );
}

export default App;
