import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css'
function ProductDetail() {

    const params = useParams()
    console.log(params);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // &end_date=2021-08-20
    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=lcvRZpcDERbarcuh4P0aMyINMQPqIlpOkWTaxd5a&start_date=2021-08-12&end_date=2021-09-30")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setData(data.filter(item => item.date === params.productId).map(item => { return item }));
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
    console.log(data[0].title)
    return (
        <div className=" mt-5 mx-5" >
                <div className="card mb-3 bg-dark">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div className="card bg-dark text-white">
                                <img src={data[0].url} className="card-img" alt="..." />
                                <div className="card-img-overlay ">
                                    <h1 className="card-title">{data[0].title}</h1>
                                    <h2 className="card-text ">{data[0].copyright}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-title text-white lh-base font-exp">{data[0].explanation}</p>
                                <p className=' text-white card-text fst-italic fw-lighter font-p' >
                                Get the HD picture here <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-right-short text-white" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>

                                <a href={data[0].hdurl}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-image text-white" viewBox="0 0 16 16">
                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                </svg></a></p>
                                <p className="card-text text-end font-p"><small className="text-white">Date taken: {data[0].date}</small></p>
                                <p className="card-text text-end font-p"><small className="text-white">Media type: {data[0].media_type}</small></p>
                                <p className="card-text text-end font-p"><small className="text-white">Version: {data[0].service_version}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
         



            {/* <div className="row mx-5 ">
                <div className="col-md-12 d-flex ">
                    <div id="carouselExampleCaptions" className="carousel slide m-5 shadow-lg bg-body rounded carousel-style" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={data[0].url} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>{data[0].title}</h1>
                                    <h3>{data[0].copyright}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className=" col-md-7 d-flex shadow-lg bg-body rounded">
                        <div className="mt-5 mx-4">
                            <p className='text-end mt-5 fs-2 fw-lighter'>{data[0].date}</p>
                            <p className='text-end mb-5 fs-4 fst-italic fw-lighter' >
                                Get the HD picture here <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-right-short text-secondary" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>

                                <a href={data[0].hdurl}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                </svg></a></p>
                            <h6 className='fw-light mx-5 lh-lg'>{data[0].explanation}</h6>


                        </div>

                    </div>  
                </div>

            </div> 
*/}

        </div>
    )
}
export default ProductDetail;