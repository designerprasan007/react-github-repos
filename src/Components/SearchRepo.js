import {useState} from 'react';
import axios from 'axios';
import Repos from './Repos';

const SearchRepo  = () =>{
	const [inputField, setInputField] = useState('designerprasan007');
	const [getrepos, setRepos] = useState([]);
	const getSearchVal = (e) =>{
		setInputField(e.target.value);
	}

	const handleSearch = async() =>{
		try {
			const {data} = await axios.get(`https://api.github.com/users/${inputField}/repos`,{ params: {
		      per_page: 5
		     }});
			setRepos(data)
		} catch(e) {
			console.log(e);
		}
	}

	return (
		<div style={{padding : '20px'}}>
			<input type="text" placeholder="search" value={inputField} onChange={getSearchVal} /><button onClick={handleSearch}> Search</button>
			<Repos getrepos={getrepos} />
		</div>

		)
}


export default SearchRepo