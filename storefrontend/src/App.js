import Home from '../src/pages/Home'
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Cart from './pages/Cart';
import Category from './pages/Category';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { SignIn, SignUp } from './components/UserCredentials';
import Profile from './pages/Profile';
import Logout from './pages/Logout';


function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}>
          </Route>

          <Route path='/cart' component={Cart}>
          </Route>

          <Route path='/category' component={Category}>
          </Route>

          <Route path='/login' component={SignIn}>
          </Route>

          <Route path='/register' component={SignUp}>
          </Route>

          <Route path='/profile' component={Profile}>
          </Route>
          <Route path='/logout' component={Logout}>
          </Route>

        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
