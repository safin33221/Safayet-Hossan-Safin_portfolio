import React from 'react';
import "../App.css"
import { motion } from 'framer-motion';
const ScrollSection = (Components, idName) =>
    function HOC() {
        return (
            <section
                id={idName}
            >

                <Components />
            </section>
        )
    }



export default ScrollSection;