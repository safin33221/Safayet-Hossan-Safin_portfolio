import React from 'react';
import "../App.css"
import {motion} from 'framer-motion';
const ScrollSection = (Components, idName) =>
    function HOC() {
        return (
            <motion.section

            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Components />
            </motion.section>
        )
    }



export default ScrollSection;