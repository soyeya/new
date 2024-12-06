import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main.jsx';
import Header from './lib/header.jsx';
import Nav from './lib/nav.jsx';
import MyPage from './components/myPage.jsx';
import MyProject from './components/myProject.jsx';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Header />
     <Nav />
     <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/mypage" element={<MyPage/>}></Route>
      <Route path="/myproject" element={<MyProject/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
