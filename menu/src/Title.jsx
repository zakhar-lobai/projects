import React from 'react'

function Title ({text}) {
    return (
        <div className='title'>
            <h2>{text || 'Defaul Title'}</h2>
            <div className="title-underline"></div>
        </div>
    );
};

export default Title;