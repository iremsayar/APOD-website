import React, { useState, useEffect } from "react";
import { Link,useNavigate,useLocation, useParams } from "react-router-dom";
import ProductDetail from './ProductDetail';
import '../pages/Products.css'

function Products() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=lcvRZpcDERbarcuh4P0aMyINMQPqIlpOkWTaxd5a&start_date=2021-08-12&end_date=2021-09-30")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";
  
  return (
    
    <div className="container-fluid bg-dark">
    
      <div className="row d-flex justify-content-center mt-5">

         {
          data.map((item, index) =>

            <div key={index} className="col-sm-12 col-md-6 card-style" >
              <Link to={`products/${item.date}`}><img src={item.url} className="card-img-top shadow-lg" alt="..." /></Link> 
              <div className="card-body bg-light rounded mt-2 border border-info shadow-lg">
                <p className="card-title d-flex text-font">{item.title}</p>
                <Link to={`products/${item.date}`} className='text-decoration-none d-flex justify-content-end'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-info-circle-fill mt-2" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg> <span className='mx-2 text-font'> Get Info</span> </Link>
                <p className="card-text text-secondary text-end mt-2 text-font">{item.copyright}</p>

              </div>
            </div>

          )} 
      </div>
    
    
      
      
    </div>

  )
}

export default Products;
