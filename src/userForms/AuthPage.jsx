import React, { useState } from 'react'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const active_tab_css = "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
  const inactive_tab_css = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
  
  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 my-5">
          <li className="me-2">
              <button onClick={() => setIsLogin(true)} className={`${isLogin ? active_tab_css : inactive_tab_css}`}>Login</button>
          </li>
          <li className="me-2">
              <button onClick={() => setIsLogin(false)} className={`${isLogin ? inactive_tab_css : active_tab_css}`}>Register</button>
          </li>
      </ul>

      {isLogin && <div className='flex-1'>
        <LoginForm/>
      </div>}

      {!isLogin && <div className='flex-2'>
        <RegistrationForm/>
      </div>}
    </>
  )
}

export default AuthPage
