export const Get_user = (user = [], action) => {
	switch (action.type) {
		case 'FETCH_USER':
			return action.payload
		default :
			return user
	}
}


export const Get_Repos = (repos =[], action)=>{
	switch (action.type) {
		case "FETCH_REPO":
			return action.payload
		default:
			return repos;
	}
}