import React from 'react';
import '../App.css';


const Solo1 = () => {
  return (
    <div className='wrapper'>
        <header>
            <div className='nav-container'>
                <a href='#' className='brand'>
                    <img  src='https://syscoin.org/imgs/syscoin-logo.svg' style={{width:'185px'}} />
                </a>

                <div className='nav-button'>
                    <div className='icon-nav-menu'>
                        <i className='icon-nav-menu'>
                         
                        </i>
                    </div>
                    </div>

                    <nav role="navigation" className='nav-menu'>
                        <div className='dropdown'>
                            <div className='navbar-link toggle'> Developers </div>
                            {/* <div className='dropdown-list'>
                                <a href='https://docs.syscoin.org/' target="_blank" className="dropdown-link" > Docs & Tutorials</a>
                                <a href='#' className='dropdown-link'>Guides</a>
                                <a href='#' className='dropdown-link'>Research & Whitepapers</a>
                            </div> */}
                        </div>

                        <div className='dropdown'>
                            <div className='navbar-link toggle'> Resources</div>
                            {/* <div className='dropdown-list'>
                                <a href='#' className='dropdown-link'>Features</a>
                                <a href='#' className='dropdown-link'>Get SYS</a>
                                <a href='#' className='dropdown-link'>Sysmint</a> 
                                <a href='#' className='dropdown-link'>Masternodes</a>
                                <a href='#' className='dropdown-link'>NEVM explorer</a>
                                <a href='#' className='dropdown-link'>NEVM stats</a>
                                <a href='#' className='dropdown-link'>Core Explorer</a>
                                <a href='#' className='dropdown-link'>Syscoin Bridge</a>
                            </div> */}
                        </div>
                           
                        <div className='dropdown'>
                            <div className='navbar-link toggle'> Community</div>
                            {/* <div className='dropdown-list'>
                                <a href='#' className='dropdown-link'>Brand Assets</a>
                                <a href='#' className='dropdown-link'>FAQ</a>
                                <a href='#' className='dropdown-link'>Contact</a> 
                            </div> */}
                        </div>
                                <div className='portion'>
                                <a href='#' className='navbar-link '>NEWS</a>
                                <a href='#' className='navbar-link spc'>ABOUT</a>
                                <a href='#' className='navbar-link btn-blue spc'>Get SYS</a>
                                <a href='#' id='#' className='navbar-link btn-blue spec '>Get Started</a>
                                </div>
                    </nav>
                </div>
        </header>
    </div>
  )
}

export default Solo1