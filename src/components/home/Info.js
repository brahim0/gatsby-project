import React from 'react'
import {Link} from 'gatsby';
import Title from '../globals/Title';
export default function Info() {
  return (
  <section className="py-4">
   <div className="container">
   <div className="row">
   <div className="col-10 col-sm-8 mx-auto text-center">
   <p className="lead text-muted mb-5">
   <Title title="our story" />
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
     culpa qui officia deserunt mollit anim id est laborum.<br />
     <Link to="/about/">
     <button className="btn text-uppercase btn-yellow mt-2">about page</button>
     </Link>
   </p>
   </div>

   </div>
   </div>
  </section>
  )
}
