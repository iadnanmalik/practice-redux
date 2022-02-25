import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from "../features/users/usersSlice"
const Login = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(login(
            {
                name: "Adnan",
                age: 22,
                email: "adnan@gmail.com"
            }
        ))}>
            Login
        </button>
        <button onClick={() => dispatch(logout())}>
            Logout
        </button>
        
    </div>
  )
}

export default Login