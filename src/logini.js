import { useState } from 'react';
import Axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

function Logini() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      Axios.get(`http://localhost:3001/user`)
        .then((res) => res.data)
        .then((users) => {
          const user = users.find(u => u.name === username);
          if (!user) {
            toast.error('Please enter a valid username.');
          } else if (user.password === password) {
            toast.success('Success');
            sessionStorage.setItem('username', username);
            navigate('/');
          } else {
            toast.error('Please enter valid credentials.');
          }
        })
        .catch((err) => {
          toast.error('Login failed due to: ' + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (!username) {
      result = false;
      toast.warning('Please enter your username.');
    }
    if (!password) {
      result = false;
      toast.warning('Please enter your password.');
    }
    return result;
  };

  return (
    <>
      <form onSubmit={proceedLoginUsingAPI}>
        <section className="gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your information!</p>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeEmailX"
                          name="username"
                          className="form-control form-control-lg"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                          Username
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          name="password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                      </div>
                    </div>

                    <div>
                      <input required className="btn btn-outline-light btn-lg px-5 blackk" type="submit" value="Submit" />
                    </div>

                    <Link className="btn btn-success" to={'/register'}>
                      New User
                    </Link>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>

                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        
      </section>

      </form>













</>
     );
}

export default Logini;