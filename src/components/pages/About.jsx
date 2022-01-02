import React from 'react'
import Products from './Products';
function About() {    
    return (
        <div>
            <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-8">
            
           <div class="card-dark text-center mt-5">
  <div class="card-header text-light">
    About
  </div>
  <div class="card-body">
    <h1 class="card-title mt-5 text-light">APOD: Astronomy Picture of the Day</h1>
    <p class="card-text h3 mt-5 mx-5 text-light">One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular among all federal agencies.
You can access images from all over the universe.
</p> <p className='h3 my-5 text-light'> <a href="https://apod.nasa.gov/apod/archivepixFull.html" class="btn btn-primary">Click here</a> to access the full archive since 1996.</p>
  </div>
  <div class="card-footer text-muted">
   
  </div>
            </div></div>
            <div className="col-md-2"></div>
            </div>
        </div>
    )
}
export default About;