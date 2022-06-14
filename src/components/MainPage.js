import { render } from '@testing-library/react';
import React from 'react'
import { Fade, Zoom } from 'react-reveal';

export default function Test01() {

        return (
            <div className='gallery'>
                <Fade>
                    <img className='img01' src='./img01.png' />
                    <img className='img03' src='./img03.png' />
                    <img className='img04' src='./img04.png' />
                    <img className='img05' src='./img05.png' />
                    hello
                    dffad
                </Fade>
            </div>
        );
}