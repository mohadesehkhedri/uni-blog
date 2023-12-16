import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ReadMore from './pages/ReadMore';
import Layout from "src/components/Layout"
import './App.css';

  <Layout/>

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/read-more" element={<ReadMore />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
