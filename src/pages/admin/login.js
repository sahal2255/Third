import LoginForm from '@/components/common/LoginForm'
import React from 'react'

const login = () => {
    const onSubmit=async(data)=>{
        console.log('form data in component',data)
    }
  return (
    <div>
      <LoginForm formSubmit={onSubmit}/>
    </div>
  )
}

export default login
