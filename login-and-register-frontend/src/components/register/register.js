import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { NavLink, useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:3000/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
			<div>
				<div className='header'>
					<h1>XENOSTACK</h1>
				</div>

				<div className='register'>
					{console.log('User', user)}
					<h1>Register To XenonStack</h1>
					<input
						type='text'
						name='name'
						value={user.name}
						placeholder='Your Name'
						onChange={handleChange}></input>
					<input
						type='text'
						name='email'
						value={user.email}
						placeholder='Your Email'
						onChange={handleChange}></input>
					<input
						type='password'
						name='password'
						value={user.password}
						placeholder='Your Password'
						onChange={handleChange}></input>
					<input
						type='password'
						name='reEnterPassword'
						value={user.reEnterPassword}
						placeholder='Re-enter Password'
						onChange={handleChange}></input>
					<div
						className='button'
						onClick={register}>
						Register{' '}
					</div>
					<div className='banner'>We Welcome to our family</div>
					<div>or</div>
					<div
						className='button'
						onClick={() => history.push('/login')}>
						Login
					</div>
					<div className="redirect">
						{' '}
						<button>
							<NavLink to='/Homepage'></NavLink>
							HomePage
						</button>
					</div>
				</div>
			</div>
		);
}

export default Register