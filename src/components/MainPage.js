import { render } from '@testing-library/react';
import React from 'react'
import { Fade, Zoom } from 'react-reveal';

export default function Test01() {

        return (
            <div className='bg'>
                <Fade left>
                    <img className='img01' src='./img/img01.png' />
                    <h1>Hello</h1>
                </Fade>
            </div>
        );
}