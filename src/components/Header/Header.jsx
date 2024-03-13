import React from 'react';
import profile from '../../assets/images/profile.png';

const Header = () => {
      return (
            <div className="navbar container mx-auto my-8 border-b-2 ">
                  <div className="flex-1">
                        <p className="text-3xl font-bold">Knowledge Cafe</p>
                  </div>
                  
                  <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={profile} />
                              </div>
                        </div>
                        
                  </div>
            </div>
      );
}

export default Header;