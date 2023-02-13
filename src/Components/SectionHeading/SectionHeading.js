import React from 'react';

const SectionHeading = (props) => {
    return (
        <>
           <h3 className='text-center mb-5 section-title'>{props.heading}</h3> 
        </>
    );
};

export default SectionHeading;