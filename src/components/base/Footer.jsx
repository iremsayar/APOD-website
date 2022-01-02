import React from 'react'

function Footer() {
    return (
        <div>
            <hr className='text-muted'/>
            <footer class="footer container bg-dark my-5 sticky-bottom">
                <p class="float-end text-muted "><a href="#" className='text-decoration-none'>Back to top</a></p>
                <p className='text-muted'>© 2015–2021 Company, Inc. 
                    <a href="https://apod.nasa.gov/apod/archivepixFull.html " className='mx-5 text-decoration-none'> Archive</a> 
                    <a href="https://api.nasa.gov/" className='text-decoration-none'>APIs</a>
                </p>
            </footer>
        </div>
    )
}
export default Footer;