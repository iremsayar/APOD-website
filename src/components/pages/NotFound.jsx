import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className='text-center display-1 text-primary'>
            <Link to="/"> Click Here </Link> and Try Again..
        </div>
    )
}
export default NotFound
