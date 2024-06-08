import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,changeData]= useState([])
      const fetchData=()=>{
           axios.get("https://jsonplaceholder.typicode.com/photos").then(
            (response)=>{changeData(response.data)

            }
           ).catch().finally()

          

      }
      useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                          {data.map(
                            (value,index)=>{
                                return   <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src={value.thumbnailUrl} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.albumId}</h5>
                                        <p class="card-text">id:{value.id}</p>
                                        <p class="card-text">title:{value.title}</p>
                                        <a href="#" class="btn btn-primary">click to see photo</a>
                                    </div>
                                </div>
                            </div>
                            }
                          )

                          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View