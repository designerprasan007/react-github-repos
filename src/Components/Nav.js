import {useState} from 'react';
import {Navbar} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {GetUser} from '../actions/getRepoAction';


const Nav = ({DWmode, SetDWMode, DarkLighToggle}) =>{
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
	            <div className="ml-auto">
	            <div className="custom-control custom-switch">
				  <input type="checkbox" className="custom-control-input" value={DWmode} id="customSwitch1" onChange={DarkLighToggle}/>
				  <label className="custom-control-label" htmlFor="customSwitch1"></label>
				</div>
	            </div>
	        </Navbar>
	        <div className="container py-3 text-center">
				<input className="form-control" type="text" value={UserName} onChange={getInputVal} placeholder="search"/>
				<button className="mt-2 btn btn-success" onClick={GetUserFun}> Search</button>
			</div>
			</>
		)
}


export default Nav;