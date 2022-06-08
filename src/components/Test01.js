import { render } from '@testing-library/react';
import React from 'react'
import { Fade } from 'react-reveal';

export default function Test01() {

        return (
            <div className='gallery'>
                <Fade left>
                    <img className='TestImg01' src="./img/t01.png"/>
                </Fade>
            </div>
        );
}