import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Loading from './Loading';

const ResidentsInfo = ({ url }) => {
    const [urlUsers, setUrlUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // const [isDead, setIsDead] = useState (true)

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => {
                setIsLoading(false)
                setUrlUsers(res.data)
            })
    }, [])

 
    console.log(urlUsers)


    return (
        <>
            {
                isLoading ? <Loading /> : (
                    <div >
                        <li className='card'>
                            
                                <img style={{width: "399px" , height:"350px"}} src={urlUsers.image} alt="" />
                            


                            
                                <h2>{urlUsers.name}</h2>
                                <hr />
                                <h3><span>Condition: </span>{urlUsers.status} 
                                <div className={`card-circle ${urlUsers?.status}`}></div>
                                </h3>
                                <h3><span>Race: </span>{urlUsers.species}</h3>
                                <h3><span>Origin: </span>{urlUsers.origin?.name}</h3>
                                <h3><span>Episodes in which he appears: </span>{urlUsers.episode?.length}</h3>
                            
                        </li>

                    </div>
                )
            }

        </>
    );
};

export default ResidentsInfo;