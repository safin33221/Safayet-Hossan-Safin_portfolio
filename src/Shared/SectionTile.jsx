import React from 'react';

const SectionTile = ({heading, subheading}) => {
    return (
        <div className='text-center pt-5'>
            <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>{subheading}</p>
            <h3 className={`text-white-100 font-black md:text-[40px] sm:text-[35px] xs:text-[30px] text-[30px]`}>{heading}</h3>
        </div>
    );
};

export default SectionTile;