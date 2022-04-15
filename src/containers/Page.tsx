import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header/Header';
import MainPage from '../components/MainPage/MainPage';
import SideBar from '../components/SideBar/SideBar';
import { RootState } from '../store';
import './Page.scss';

function Page() {
  const dispatch = useDispatch();

  const { schedules: { list } } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch.schedules.getSchedules();
  }, []);

  return (
    <div className="page">
      <Header />
      <SideBar list={ list } />
      <MainPage />
    </div>
  );
}

export default Page;
