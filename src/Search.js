import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './admin.css';


 
function Search() {


  const deleteClt=(id)=>{
    axios.delete(`http://localhost:3001/user/${id}`)
     window.location.reload(true);

       }

    const[search,setSearch]=useState([]);
    const[record,setRecord]=useState([]);
 
    var i =1; // For Serial no increment
 
    // For loading reacord on Windoe Load
    const loadRecords = async () => {
      axios.get("http://localhost:3001/user")
        .then(response => {
          setSearch(response.data);
        });
       
    }
    useEffect(() => {
        loadRecords();
    }, []);
 
     
    // Search Item by Name
    const searchRecords = () =>
    {   if (record === '') {
      axios.get("http://localhost:3001/user")
      .then(response => {
        setSearch(response.data);    });
    } else
        axios.get(`http://localhost:3001/user/?name=${record}`)
        .then(response => {
          setSearch(response.data);
        });
    }
     
 
  return (

  
  <div class="container">
  <h4 className="text-center text-success mt-5"><b>admin panel</b></h4>
    <div class="input-group mb-4 mt-3">
     <div class="form-outline">
        <input type="text" id="form1" onChange={(e)=>setRecord(e.target.value)} class="form-control" placeholder="search record" style={{backgroundColor:"#ececec"}}/>
   </div>
   <button type="button" onClick={searchRecords} class="btn btn-success">
       Search user
   </button>
  </div>
                     
  <table class="table table-striped ">
    <thead>
      <tr>
      <th>#</th>
          <th>user phote</th>
          <th>name</th>
          <th>gender</th>
          <th>about yourself</th>
          <th>Delete</th>
          <th>Modify</th>
          <th>View</th>
      </tr>
    </thead>
    <tbody>
      {search.map((name)=>
      <tr>
        <td>{i++}</td>  
<td><img src= {name.lim} alt="" width="70"/></td>
                  <td>{name.name}</td>
                  <td> {name.gender}</td>
                  <td> {name.adress}</td>
<td> <button onClick={() => deleteClt(name.id)} className='btn btn-danger' ><i class="fa-solid fa-trash"></i></button></td>
<td> <Link to={`/updateclt/${name.id}`} ><button className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i></button></Link></td>
<td> <Link to={`/viewclt/${name.id}`} ><button className='btn btn-primary'><i class="fa-solid fa-eye"></i></button></Link></td>

                  </tr>      
      )}  
 
    </tbody>
  </table>
</div>
 
  );
}
 
export default Search;