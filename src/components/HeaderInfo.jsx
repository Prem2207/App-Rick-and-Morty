import React from 'react';
import axios from 'axios'

const HeaderInfo = ({ appLocation }) => {
    return (
        <div className='header--info'>

            <div>
                <h3><b>Name:</b></h3>
                <br />
                <p>{appLocation.name}</p>

            </div>


            <div>
                <h3><b>Type:</b></h3>
                <br />
                <p>{appLocation.type}</p>
            </div>


            <div>
                <h3><b>Dimension:</b></h3>
                <br />
                <p>{appLocation.dimension}</p>
            </div>


            <div>
                <h3><b>Residents:</b></h3>
                <br />
                <p>{appLocation.residents.length}</p>
            </div>
        </div>
    );
};

export default HeaderInfo;