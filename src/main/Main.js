import React, { useState } from 'react';

import { $store } from './store/store';

import { useUnit } from 'effector-react';
import { useEffect } from 'react';

import '../css/Main.css';
import Header from '../header/Header';

import Slider_01 from './slider/slider_01';
import Slider_02 from './slider/slider_02';
import Slider_03 from './slider/slider_03';
import Slider_04 from './slider/slider_04';
import Slider_05 from './slider/slider_05';
import Slider_06 from './slider/slider_06';
import Slider_07 from './slider/slider_07';
import Slider_08 from './slider/slider_08';

function Main (){
        const data = useUnit($store);
        console.log(data); 
        const [activeBlockIndex, setActiveBlockIndex] = useState(0);

        const blocks = [
        { id: 1, content: <Slider_01/> },
        { id: 2, content: <Slider_02/> },
        { id: 3, content: <Slider_03/> },
        { id: 4, content: <Slider_04/> },
        { id: 5, content: <Slider_05/> },
        { id: 6, content: <Slider_06/> },
        { id: 7, content: <Slider_07/> },
        { id: 8, content: <Slider_08/> },
        ];

        const nextBlock = () => {
                setActiveBlockIndex((prevIndex) =>
                        prevIndex === blocks.length - 1 ? 0 : prevIndex + 1
                );
        };

        const prevBlock = () => {
                setActiveBlockIndex((prevIndex) =>
                        prevIndex === 0 ? blocks.length - 1 : prevIndex - 1
                );
        };

        const store = useUnit($store);
                useEffect(()=>{
        },[store]);

        return(
                <div className="main_div">
                        <Header/>
                        <main>
                                <div class="swiper-wrapper">
                                        {blocks[activeBlockIndex].content}
                                </div>
                        </main>
                        
                        <footer>
                                <div onClick={prevBlock} class={`button-prev ${activeBlockIndex === 0 ? 'button__off' : ''}
                                        ${activeBlockIndex === blocks.length -1 ? 'button-prev-on' : ''}
                                `}>
                                        <svg width="64" height="43" viewBox="0 0 64 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.39225 24.1717L60.6845 23.877C62.3622 23.8682 63.7152 22.501 63.7064 20.8233C63.6976 19.1456 62.3304 17.7927 60.6527 17.8015L4.36045 18.0962C2.68275 18.105 1.32983 19.4721 1.33861 21.1498C1.34739 22.8275 2.71455 24.1805 4.39225 24.1717Z" fill="#145134"/>
                                        <path d="M2.01675 20.0613C2.89818 18.5993 4.87879 18.2734 6.18213 19.376L25.2993 35.5492C26.3385 36.4284 26.5859 37.9319 25.8831 39.0976C25.0016 40.5596 23.021 40.8855 21.7177 39.7828L2.60048 23.6097C1.56128 22.7305 1.31395 21.227 2.01675 20.0613Z" fill="#145134"/>
                                        <path d="M1.75642 22.3298C2.6531 23.7825 4.63695 24.0877 5.92878 22.9717L24.8749 6.60372C25.9052 5.71354 26.1373 4.20715 25.4226 3.04813C24.5258 1.59374 22.54 1.28796 21.2472 2.40514L2.30301 18.7753C1.273 19.6653 1.04141 21.1714 1.75642 22.3298Z" fill="#145134"/>
                                        </svg>
                                </div>

                                <div onClick={nextBlock} id="button--next" class={`button-next ${activeBlockIndex === blocks.length - 1 ? 'button__off' : ''} 
                                ${activeBlockIndex === 0  ? 'button__on' : ''} `}>
                                        <svg width="64" height="42" viewBox="0 0 64 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M59.3241 17.8696L3.03744 18.7209C1.35991 18.7463 0.0205689 20.1268 0.045942 21.8043C0.0713151 23.4818 1.45179 24.8212 3.12932 24.7958L59.4159 23.9444C61.0935 23.9191 62.4328 22.5386 62.4074 20.861C62.3821 19.1835 61.0016 17.8442 59.3241 17.8696Z" fill="#145134"/>
                                                <path d="M61.7402 21.9562C60.8732 23.4269 58.8959 23.7723 57.5818 22.6826L38.3056 6.69928C37.2577 5.83044 36.9955 4.32947 37.6868 3.15684C38.5537 1.68617 40.531 1.34077 41.8452 2.43045L61.1214 18.4138C62.1692 19.2826 62.4314 20.7836 61.7402 21.9562Z" fill="#145134"/>
                                                <path d="M61.978 19.6852C61.067 18.2414 59.0803 17.9559 57.7995 19.0847L39.0163 35.6392C37.9947 36.5395 37.7776 38.0481 38.5037 39.2C39.4149 40.6454 41.4035 40.9316 42.6853 39.8017L61.4666 23.245C62.4878 22.3448 62.7045 20.8365 61.978 19.6852Z" fill="#145134"/>
                                        </svg>
                                </div>
                        </footer>
                </div>
        )
}   

export default Main;