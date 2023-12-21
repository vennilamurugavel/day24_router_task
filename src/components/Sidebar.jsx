import React from 'react'
import {Link} from 'react-router-dom'
function Sidebar() {
  return <>
{/* <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <li className="nav-item">
    <Link to={'/add1'} className="nav-link">
            <i className="fas fa-fw fa-cog"></i>
            <span>Courses</span>
        </Link>
        
    </li>
    <li className="nav-item">
        <Link to={'/pycourse'} className="nav-link">
            <i className="fas fa-fw fa-cog"></i>
            <span>Pythoncourse</span>
        </Link>
    </li>
    <li className="nav-item">
     <Link to={'/fullstackcourse'} className="nav-link">
            <i className="fas fa-fw fa-cog"></i>
            <span>Fullstack</span>
        </Link>
           </li>
    <li className="nav-item">
    <Link to={'/cybercourse'} className="nav-link">
            <i className="fas fa-fw fa-cog"></i>
            <span>CyberSecurityCourse</span>
        </Link>
            </li>
    <li className="nav-item">
        <Link to={'/Datascience'} className="nav-link">
            <i className="fas fa-fw fa-cog"></i>
            <span>Datascience</span>
        </Link>
    </li>
    <hr className="sidebar-divider"/>
</ul> */}
<div className="navbar-nav bg-gradient-primary" id='firstalign'>
    <div className="nav-item" id='design1'>
    <Link to={'/add1'} className="nav-link">
            <span>Courses</span>
            
        </Link>
    </div>
    <div className="nav-item" id='design2'>
        <Link to={'/pycourse'} className="nav-link">
            <span>Pythoncourse</span>
        </Link>
    </div>
    <div className="nav-item" id='design3'>
     <Link to={'/fullstackcourse'} className="nav-link">
            <span>Fullstack</span>
        </Link>
           </div>
    <div className="nav-item" id='design4'>
    <Link to={'/cybercourse'} className="nav-link">
            <span>CyberSecurityCourse</span>
        </Link>
            </div>
    <div className="nav-item" id='design5'>
        <Link to={'/Datascience'} className="nav-link">
            <span>Datascience</span>
        </Link>
    </div>
    <hr className="sidebar-divider"/>
</div>
  </>
}
export default Sidebar