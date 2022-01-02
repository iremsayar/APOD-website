import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Products from './Products';
import SearchResult from './SearchResult';

function SearchProduct() {

    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();

    
    const urlParams = new URLSearchParams(location.search)
    const [q,setQ] = useState(urlParams.get('q'))
    console.log(urlParams.get('q') + " params")
    
    const [value, setValue] = useState()
    const submitHandler = (e) => {
        e.preventDefault();
        //console.log(e.target[0].value)
        setValue(e.target.q.value)
        navigate("searchProduct?q=" + e.target.q.value)
    }

    

    //console.log(value + " value ")
    return (
        <div>
            <form className="form-inline d-flex bg-dark" onSubmit={submitHandler}>
                <input name='q' className="form-control p-2" type="search" placeholder="Search" defaultValue={q}  />
                <button className="btn btn-outline-light mx-4" type="submit">Search</button>
                <button type='reset' className='btn btn-dark'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg></button>
            </form>

            
            {
                location.pathname==='searchProduct' && <SearchResult value={value} q={q} />
            }
            
            
        </div>
    )
}
export default SearchProduct;
