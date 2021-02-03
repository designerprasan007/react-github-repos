import Repos from './Components/Repos';
import Nav from './Components/Nav'
import Profile from './Components/Profile'
import {useSelector} from 'react-redux';

function App() {
    const user = useSelector((state) =>state.Get_user)
    const repos  = useSelector((state) =>state.Get_Repos)
  return (
	<>
    <Nav />
    {user.length !== 0 && (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <Profile userData={user}/>
                </div>
                <div className="col-md-8 col-sm-8">
                    <ul className="list-group list-group-flush text-secondary">
                        {repos.map((repo)=>(
                            <Repos repos={repo} key={repo.id} />
                            ))
                        }
                    </ul>
                    
                </div>
            </div>
        </div>
        )	
    } 
    </>
  );
}

export default App;
