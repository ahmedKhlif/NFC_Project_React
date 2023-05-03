import './App.css';
import AdminPage from './Admin'
import FormulaireClient from './AddtoWhishlist'
import UpdateClient from './Modify'
import Users from './Login';
import User from './Register';
import Aogin from './Aogin';
import Loginii from './logini';
import ViewClient from './View';
import { ToastContainer } from 'react-toastify';
import SearchData from './Search';
import HomePage from './home';
import "bootstrap/dist/css/bootstrap.min.css";


import {Route,Routes,Link,BrowserRouter as Router} from 'react-router-dom';

function App() {




  
  return (
<div >
<ToastContainer theme='colored' position='top-center'></ToastContainer>

<Router>
 <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
 <li className="nav-item"> <Link className="nav-link" to="/listeusers">admin panel</Link></li>
 <li className="nav-item"> <Link className="nav-link" to="/ajoutuser">Add Users </Link></li>
 <li className="nav-item"> <Link className="nav-link" to="/loginii">Login </Link></li>


</ul>
	</nav>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/listeusers" element={<AdminPage />} />
<Route path="/ajoutclt" element={<FormulaireClient />} />
<Route path="/ajoutuser" element={<Users />} />
<Route path="/registerf" element={<User />} />
<Route path="/loginf" element={<Aogin />} />
<Route path="/updateclt/:id" element={<UpdateClient />} />
<Route path="/viewclt/:id" element={<ViewClient />} />
<Route path="/search" element={<SearchData />} />
<Route path="/loginii" element={<Loginii />} />
</Routes>

</Router>
 </div>
  );
}

export default App;
