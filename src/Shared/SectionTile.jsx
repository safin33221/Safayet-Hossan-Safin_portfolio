import React from 'react';

const SectionTile = ({ heading, subheading }) => {
    return (
        <div

            data-aos="fade-up"
            data-aos-duration="1000"
            className='text-center pt-5 px-2'>
            <p className={`sm:text-[16px] text-[12px] text-secondary uppercase tracking-wider`}>{subheading}</p>
            <h3 className={`text-white/80 font-black md:text-[25px] sm:text-[20px] xs:text-[16px] text-[30px]`}>{heading}</h3>
        </div>
    );
};

export default SectionTile;