import {useState} from 'react';
import {Navbar} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {GetUser} from '../actions/getRepoAction';


const Nav = () =>{
	const dispatch = useDispatch();
	const [UserName, setUsername ] = useState('');

	const getInputVal = (e) =>{
		setUsername(e.target.value);
	}

	const GetUserFun = () =>{
		dispatch(GetUser(UserName))
	}
	return(
			<>
			 <Navbar bg="dark" variant="dark">
	            <Navbar.Brand href="/">
		           Github Users
	            </Navbar.Brand>
	        </Navbar>
	        <div className="container py-3 text-center">
				<input className="form-control" type="text" value={UserName} onChange={getInputVal} placeholder="search"/>
				<button className="mt-2 btn btn-success" onClick={GetUserFun}> Search</button>
			</div>
			</>
		)
}


export default Nav;