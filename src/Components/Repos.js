import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import myData from '../LangColor.json';

const Repos = ({repos}) =>{
	var lang = repos.language;
	function getcolor(lang, myData){
	  for(var [key,value] of Object.entries(myData)){
	  if(lang === key){
	    return value
	    }
	  }
	}
	const gotcolor = getcolor(lang, myData);
	return (
		<>
			<li className="list-group-item py-4">
			  	<h3 className="text-primary">{repos.name}</h3>
			  	<div className="pb-2">
			  		<small><FontAwesomeIcon style={{color:gotcolor}} icon={faCircle} /> {repos.language}<span className="pl-5">{repos.created_at}</span></small>
			  	</div>
			  	<a href={repos.html_url} target="_blank" rel="noreferrer">
			  	<button className="btn btn-primary btn-sm">Open Repo</button>
			  	</a>
		  </li>
		</>
	)
}


export default Repos;