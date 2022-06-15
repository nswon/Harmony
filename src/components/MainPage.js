import { render } from '@testing-library/react';
import React from 'react'
import { Fade, Slide, Zoom } from 'react-reveal';

export default function Test01() {

        return (
            <div className='gallery'>
                <Fade>
                    <img className='img01' src='./img01.png' />
                    <img className='img03' src='./img03.png' />
                    <img className='img04' src='./img04.png' />
                    <img className='img05' src='./img05.png' />
                </Fade>
                <a href='#' >
                    <Fade left>
                            <img className='img01' src='./img04_N.png' />
                    </Fade>    
                </a>
                <a href='#' >
                    <Zoom >
                        <img className='img02' src='./img04_N.png' />
                    </Zoom>    
                </a>
                <a href='#' >
                    <Fade right>
                        <img className='img03' src='./img04_N.png' />
                    </Fade>    
                    </a>
                <a href='#' >
                    <Zoom>
                        <img className='img04' src='./img04_N.png' />
                    </Zoom>                    
                    </a>

            </div>
        );
}