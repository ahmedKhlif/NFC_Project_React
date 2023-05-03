import {useState} from 'react';
import Axios from 'axios';
import './Login.css';
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";

function Login() {
    const [inputs, setInputs] = useState({});
    
  const navigate =useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    if (inputs.name === null || inputs.name === '') {
        isproceed = false;
        errormessage += ' Username';
    }

    if (inputs.password === null || inputs.password === '') {
        isproceed = false;
        errormessage += ' Password';
    }
    if (inputs.email === null || inputs.email === '') {
        isproceed = false;
        errormessage += ' Email';
    }
    
if (inputs.ls === null || inputs.ls === '') {
  isproceed = false;
  errormessage += ' link skype';
}
if (inputs.lf === null || inputs.lf === '') {
isproceed = false;
errormessage += ' link facebook';
}
    if(!isproceed){
        toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputs.email)){

        }else{
            isproceed = false;
            toast.warning('Please enter the valid email');
        }
    }
    return isproceed;
}





  
      const handleSubmit=(event)=>{
        event.preventDefault();
        if (IsValidate()) {
        Axios.post("http://localhost:3001/user",inputs).then(res=>{
            console.log(res);
            if (Object.keys(res).length === 0) {
              toast.error('Login failed, invalid credentials');
              navigate("/ajoutuser")
          }else{
               toast.success('Registered successfully');
               navigate("/listeusers")
             }  
          
          }).catch((err) => {
            toast.error('Failed :' + err.message);
        });
    }}  
    


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
       }











    return ( 
<>
      <form onSubmit={(event)=>handleSubmit(event)}>
      <section className=" gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                    <p className="text-white-50 mb-5">please enter your information !</p>
                    <div className="form-outline form-white mb-4">
                      <input type="text" id="typeEmailX" name="name" className="form-control form-control-lg" value={inputs.name} onChange={(e)=>handleChange(e)} />
                      <label className="form-label" htmlFor="typeEmailX" >user name</label>
                    </div>
                

                    <div className="form-outline form-white mb-4">
                      <input   type="password" id="typePasswordX" name="password" className="form-control form-control-lg" value={inputs.password} onChange={(e)=>handleChange(e)} />
                      <label className="form-label" htmlFor="typePasswordX">password</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input   type="email" id="typePasswordX" name="email" className="form-control form-control-lg" value={inputs.email} onChange={(e)=>handleChange(e)}  />
                      <label className="form-label" htmlFor="typePasswordX">email</label> 
                    </div>

                    <div className="form-outline form-white mb-4 form-group">
                                        
                                        <select className="form-control" name="country" value={inputs.country} onChange={(e)=>handleChange(e)}  >
                                            <option value="Tunis">Tunis</option>
                                            <option value="Sfax">Sfax</option>
                                            <option value="singapore">Sousse</option>
                                            <option value="Monastir">Monastir</option>
                                            <option value="Bizerte">Bizerte</option>
                                            <option value="Mahdia">Mahdia</option>
                                            <option value="Jendouba">Jendouba</option>
                                            <option value="Gafsa">Gafsa</option>
                                            <option value="Gabès">Gabès</option>
                                        </select   >
                                        <label className="form-label">city</label>
                                    </div>
                                    <div className="form-outline form-white mb-4 form-group">
                                        
                                        <select className="form-control" name="mode" value={inputs.mode} onChange={(e)=>handleChange(e)}  >
                                        <option value="lightm">light mode</option>
                                        <option value=" a7a">dark mode</option>
                                        </select   >
                                        <label className="form-label">select your mode </label>

                                        </div>

                                    <div className="form-outline form-white mb-4 form-group">
                  
                                
                                        <input  style={{margin: '6px'}} type="radio" checked={inputs.gender === 'male'}  onChange={(e)=>handleChange(e)}  name="gender" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input  style={{margin: '6px'}} type="radio" checked={inputs.gender === 'female'}  onChange={(e)=>handleChange(e)}  name="gender" value="female" className="app-check"></input>
                                        <label>Female</label>
                                      
                                    </div>
                                  


                                    <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>about yourself</label>
                                        <textarea name="adress" value={inputs.adress} onChange={(e)=>handleChange(e)} className="form-control"></textarea>
                                    </div>
                                </div>
                                    <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"><i className="fab fa-facebook-f fa-lg" /></span>
        </div>
        <input type="text" name="lf" value={inputs.lf} onChange={(e)=>handleChange(e)} className="form-control" placeholder="your facebook link !" aria-label="Username" aria-describedby="basic-addon1" />
      </div>



      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"><i class="fa-brands fa-discord fa-lg"></i></span>
        </div>
        <input type="text" name="ls"  value={inputs.ls} onChange={(e)=>handleChange(e)} className="form-control" placeholder="your discord link !" aria-label="Username" aria-describedby="basic-addon1" />
      </div>




      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"><i class="fa-brands fa-instagram fa-lg"></i></span>
        </div>
        <input type="text" name="li"  value={inputs.li} onChange={(e)=>handleChange(e)} className="form-control" placeholder="your instagram link !" aria-label="Username" aria-describedby="basic-addon1" />
      </div>



      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"><i class="fa-brands fa-github fa-lg"></i></span>
        </div>
        <input type="text" name="lg"  value={inputs.lg} onChange={(e)=>handleChange(e)} className="form-control" placeholder="your github link !" aria-label="Username" aria-describedby="basic-addon1" />
      </div>


      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-image fa-lg"></i></span>
        </div>
        <input type="text" name="lim"   value={inputs.lim} onChange={(e)=>handleChange(e)} className="form-control" placeholder="your image link !" aria-label="Username" aria-describedby="basic-addon1" />
      </div>



      
                                </div>

                    <div><input   required  className="btn btn-outline-light btn-lg px-5 blackk" type="submit" value="Valider"/></div>


                  
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
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

export default Login;