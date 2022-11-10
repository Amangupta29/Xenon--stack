import React from "react"
import "./homepage.css"
import { useHistory } from 'react-router-dom';

const Homepage = ({ setLoginUser }) => {
    const history = useHistory()
  

    return (
			<div className='homepage'>
				<h1>Hello Homepage</h1>
				<h1> Welcome to XENONSTACK</h1>
				<h1>A Complete professional and familiar environment for developers</h1>
				<div
					className='button'
					onClick={() => setLoginUser({})}>
					Logout
				</div>
				<div
					className='button'
					onClick={() => history.push('/login')}>
					Login
				</div>
			</div>
		);
}

export default Homepage