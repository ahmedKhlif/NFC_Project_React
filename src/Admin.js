import Axios from 'axios';
import {useState, useEffect,} from 'react';
import {Link} from 'react-router-dom';
import './admin.css';


function Admin() {


    const [clients, setClients] = useState([]);
    const [searchValue, setSearchValue] = useState('');
  
    useEffect(() => {
      Axios.get('http://localhost:3001/user').then(res => {
        setClients(res.data);
      });
    }, []);
  
    const deleteClt = id => {
      Axios.delete(`http://localhost:3001/user/${id}`).then(() => {
        setClients(clients.filter(clt => clt.id !== id));
      });
    };
  
    const filteredClients = clients.filter(clt =>
      clt.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    const handleSearchChange = event => {
      setSearchValue(event.target.value);
    };
  



   return ( 
        
<>
  {/* Page Wrapper */}
  <div id="wrapper">
    {/* Sidebar */}
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-text mx-3 aaa">iDigix™</div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      {/* Nav Item - Orders */}
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-table" />
          <span>list users</span>
        </a>
      </li>
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-cog" />
          <span>Settings</span>
        </a>
      </li>
    </ul>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw" />
                {/* Counter - Alerts */}
                <span className="badge badge-danger badge-counter">3+</span>
              </a>
              {/* Dropdown - Alerts */}
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 12, 2020</div>
                    <span className="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-success">
                      <i className="fas fa-donate text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 7, 2020</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Show All Notifications
                </a>
              </div>
            </li>
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Admin
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/270239595_4333254453447387_6170828263414888191_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AWshUPoIuCYAX_TGp36&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAkRwPhPTJSJx0txzQ1pe6sFslEHbLh2eFb7ryeTEKdQA&oe=6456103E"
                />
              </a>
              {/* Dropdown - User Information */}
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                  Activity Log
                </a>
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4 pl-4 pr-3">
            <h1 className="h3 mb-0 text-gray-800">Users :</h1>
          </div>
          <div className="container">
            <div className="row">
            <div className="row">
        <div className="col-md-6">
          <form className="row">
            <div className="col">
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Chercher Nom du profile "
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            <div className="col">
              <div className="mb-2">
                <input
                  type="submit"
                  className="btn btn-outline-dark"
                  value="Chercher"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
              <div className="col-md-12 order-table">
              <Link to={"/ajoutuser"} >
                <button type="button" className="btn btn-info float-right">
                  add user +
                </button>
                </Link>
                <br />
                <br />
                <table
                  id="datatable"
                  className="table table-striped table-bordered"
                  cellSpacing={0}
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>about yourself</th>
                      <th>delete</th>
                      <th>Modify</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  {
           
           filteredClients.map((clt)=>{
                 return <tr key={clt.id}>
                    <td><img src= {clt.lim} alt="" width="70"/></td>
                   <td>{clt.name}</td>
                   <td> {clt.gender}</td>
                   <td> {clt.adress}</td>
 <td> <button className='btn btn-danger' onClick={() => deleteClt(clt.id)}><i class="fa-solid fa-trash"></i></button></td>
 <td> <Link to={`/updateclt/${clt.id}`} ><button className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i></button></Link></td>
 <td> <Link to={`/viewclt/${clt.id}`} ><button className='btn btn-primary'><i class="fa-solid fa-eye"></i></button></Link></td>
 
                   </tr>
             })
             
         }
                </table>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="edit"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="edit"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title custom_align" id="Heading">
                    Orders Detail
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body p-2 m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nam ipsam ullam sapiente veritatis, tempora doloremque
                  voluptatem. Iste animi ut sint, repellendus aliquam,
                  voluptates rerum a atque et molestiae ea.
                </div>
              </div>
              <div className="modal-footer ">
                <button
                  type="button"
                  className="btn btn-warning btn-lg"
                  data-dismiss="modal"
                  style={{ width: "100%" }}
                >
                  Okay
                </button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        <div
          className="modal fade"
          id="delete"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="edit"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title custom_align" id="Heading">
                  Delete this entry
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger">
                  <span className="glyphicon glyphicon-warning-sign" />
                  Are you sure you want to delete this Record?
                </div>
              </div>
              <div className="modal-footer ">
                <button type="button" className="btn btn-success">
                  <span className="glyphicon glyphicon-ok-sign" />
                  &nbsp;Yes
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  <span className="glyphicon glyphicon-remove" />
                  &nbsp;No
                </button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
      </div>
      {/* End of Main Content */}
      {/* Footer */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span> © Copyright 2023 iDigix. All rights reserved.</span>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}
  <div
    className="modal fade"
    id="logoutModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Ready to Leave?
          </h5>
          <button
            className="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Select "Logout" below if you are ready to end your current session.
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            type="button"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <a className="btn btn-primary" href="./loginv2/index.html">
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>


        </>
     );
}

export default Admin;

