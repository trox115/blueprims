import React from 'react';

import Header from '../components/Header/Header';
import MainPage from '../components/MainPage/MainPage';
import SideBar from '../components/SideBar/SideBar';
import './Page.scss';

function Page() {
  return (
    <div className="page">
      <Header />
      <SideBar />
      <MainPage />
    </div>
  );
}

export default Page;
