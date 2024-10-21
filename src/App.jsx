import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AuthPage from './userForms/AuthPage';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 font-playfair bg-purple-950 text-gray-200 rounded-md py-5 opacity-80">
        User Registration and Demo App🏠☀️🤗
      </h1>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
      
      <AuthPage />
      
      <main className="max-w-7xl mx-auto p-4">
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  
  )

}

export default App
