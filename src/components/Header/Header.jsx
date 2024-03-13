import React from 'react';

const Header = () => {
      return (
            <div className="navbar container mx-auto my-8">
                  <div className="flex-1">
                        <p className="text-3xl font-bold">Knowledge Cafe</p>
                  </div>
                  
                  <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                              </div>
                        </div>
                        
                  </div>
            </div>
      );
}

export default Header;