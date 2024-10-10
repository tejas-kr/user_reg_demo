import { useState } from 'react'
import './App.css'
import AuthPage from './userForms/AuthPage'

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 font-playfair bg-purple-950 text-gray-200 rounded-md py-5 opacity-80">
        User Registration and Demo App🏠☀️🤗
      </h1>
      
      <AuthPage/>
    </div>
  
  )

}

export default App
