import { Switch, Route, Routes , Redirect} from 'react-router-dom';

import Layout from './Main/components/Layout/Layout';
import UserProfile from './Main/components/Profile/UserProfile';
import AuthPage from './Main/pages/AuthPage';
import HomePage from './Main/pages/HomePage';
import { useContext } from 'react';
import AuthContext from './Main/store/auth-context';

function App() {
  const authCtx= useContext(AuthContext)
  return (
    <>
    <Layout>
      <Switch>
       
        <Route path="/" exact component={HomePage} />
        {!authCtx.isLoggedIn && (<Route path="/auth" exact component={AuthPage} />)}
        <Route path="/profile">
         {authCtx.isLoggedIn && <UserProfile/>}
         {!authCtx.isLoggedIn && <Redirect to='/auth'/>}
        </Route>
        <Route path ='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </Layout>
    </>
  );
}

export default App;
