import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
function SearchResult(props) {

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search)

  const [data, setData] = useState([]);
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
        // setData(data.filter(item => item.title.includes(urlParams.get('q'))))
        setData(data)

      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  //console.log(data)
  if (loading) return "Loading...";
  if (error) return "Error!";
  return (
    <div className='bg-dark' style={{ height: "80rem" }}>
     
      <div className='d-flex justify-content-center mx-5'>
        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg></Link>
      </div>
      <div className="row d-flex justify-content-center">

        {
          //data.map(item => <div> data = {item.title }</div>)
          data.filter(item =>
            item.title.includes(urlParams.get('q')) === true).map((item, index) =>
            
                <div key={index} className="col-md-6  m-5 " style={{ width: "30rem" }}>
              <img src={item.url} className="card-img-top shadow-lg" alt="..." />
              <div className="card-body bg-light rounded mt-2 border border-info shadow-lg">
                <h5 className="card-title lead d-flex">{item.title}</h5>
                <a href={`products/${item.date}`} className='text-decoration-none d-flex justify-content-end'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg> <span className='h4 mx-2'> Get Info</span> </a>
                <p className="card-text text-secondary text-end mt-2">{item.copyright}</p>

              </div>
            </div>
            )
        }

      </div>

    </div>
  )
}
export default SearchResult
