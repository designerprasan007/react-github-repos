import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faBuilding, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

const Profile = ({userData}) =>{
	return <>
			<div className="card text-secondary bg-dark">
			  <img src={userData.avatar_url} className="card-img-top" alt="" />
			  <div className="card-body">
			    <h5 className="card-title">{userData.login}</h5>
			    <p><small>{userData.created_at}</small></p>
			    {userData.bio !== null && (<h6>{userData.bio}</h6>)}
			    <div>
			    	<FontAwesomeIcon icon={faUsers} /><span className="pl-2">{userData.followers} Followers -</span> <span>{userData.following} Following -</span> {userData.public_repos} repos 
			    </div>
			    <div className="py-2">
			    {userData.company !== null && (<div><FontAwesomeIcon icon={faBuilding} /><span className="pl-2">{userData.company} </span></div>)}
			  	</div>
			    {userData.location !== null && (<div><FontAwesomeIcon icon={faMapMarkerAlt} /><span className="pl-2">{userData.location} </span></div>)}
			  </div>
			</div>
		</>
}


export default Profile