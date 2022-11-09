import { Link, NavLink, Router,useNavigate } from "react-router-dom"

function Navigationbar() {

    let id = localStorage.getItem("userId")
    let navigate=useNavigate()
    const logout = ()=>{
        localStorage.clear()
        navigate("/login")
    }
    const login = ()=>{
        navigate("/profile")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark bg-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {id ? <Link onClick={login} className="nav-link" to="/profile">Profile</Link> : ''}
                                
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/create">Create Blog</Link>
                            </li> */}
                           
                        </ul>

                    <div className="me-5">
                        
                        
                            {id?<Link onClick={logout} to="/login" type="button" className="btn btn-outline-info me-3">Logout</Link>
                            :<><Link to="/login" type="button" className="btn btn-outline-info me-3">Login</Link>
                            <Link to="/register" type="button" className="btn btn-outline-success">Register to Create Blog</Link></>}
                            
                            
                    </div>
                       
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigationbar;