import { render } from '@testing-library/react';
import React from 'react'
import { Fade, Slide, Zoom } from 'react-reveal';

export default function Test01() {

        return (
            <div className='gallery'>
                <Fade left>
                    <img className='img01' src='./img01_N.png' />
                    <img className='test01' src='./img02_N.png' />
                </Fade>    
                <Fade right>
                    <img className='img02' src='./img02_N.png' />
                </Fade>    
                <Fade left>
                    <img className='img03' src='./img03_N.png' />
                </Fade>
                <Slide right>
                    <img className='img04' src='./img04_N.png' />
                </Slide>                    
            </div>
        );
}