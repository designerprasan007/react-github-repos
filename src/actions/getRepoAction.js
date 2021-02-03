import * as api from '../api';

export const GetUser = (UserName) => async(dispatch) =>{
	try {
		const {data} = await api.fetchUser(UserName);
		dispatch({type: 'FETCH_USER', payload:data});

		if (data) {
			const response = await api.fetchRepo(data.login);
			dispatch({type: 'FETCH_REPO', payload:response.data})
		}
	} catch(e) {
		console.log(e.message);
	}
}