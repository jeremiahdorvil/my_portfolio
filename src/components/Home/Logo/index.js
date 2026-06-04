import './index.scss';
import LogoJ from '../../../assets/images/logo-j.png';
import SolidJ from '../../../assets/images/logo_j_3d_sketch_transparent.png'
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
            .to(bgRef.current, {
            duration: 1,
            opacity: 1,
            })
            .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
            })

        gsap.fromTo(
            solidLogoRef.current, 
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            },
        )
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={SolidJ} alt='J' />
            <svg
            className="logo-j-svg"
            viewBox="0 0 420 520"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Stylized 3D letter J logo"
            >
            <defs>
                <filter id="tealGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
                </filter>

                <linearGradient id="frontGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ff" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#0b7f7f" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#052f35" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="sideGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#095b61" />
                <stop offset="100%" stopColor="#03191d" />
                </linearGradient>
            </defs>

            {/* 3D back/extrusion layer */}
            <path
                ref={outlineLogoRef}
                className="j-side"
                d="M118 98 L320 98 L354 132 L270 132 L270 363 C270 452 204 486 132 462 C82 445 52 405 53 348 L92 381 C96 413 119 438 154 438 C197 438 230 414 230 358 L230 132 L152 132 Z"
            />

            {/* Side sketch/hatching lines */}
            <g className="j-hatching">
                <path 
                    ref={outlineLogoRef}
                    d="M305 116 L340 151" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M287 133 L345 191" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M285 170 L345 230" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M285 210 L345 270" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M284 250 L342 308" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M283 290 L335 342" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M278 335 L319 376" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M96 366 L143 414"    
                />
                <path 
                    ref={outlineLogoRef}
                    d="M82 342 L150 459" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M130 132 L166 168" 
                />
            </g>

            {/* Front filled face */}
            <path
                ref={outlineLogoRef}
                className="j-front-fill"
                d="M88 68 L290 68 L290 112 L206 112 L206 337 C206 397 173 430 124 430 C72 430 39 394 39 343 L39 320 L91 320 L91 340 C91 367 103 384 127 384 C150 384 161 367 161 337 L161 112 L88 112 Z"
            />

            {/* Main outline path for SVG draw animation */}
            <path
                ref={outlineLogoRef}
                className="j-draw-outline"
                pathLength="1000"
                d="M88 68 L290 68 L290 112 L206 112 L206 337 C206 397 173 430 124 430 C72 430 39 394 39 343 L39 320 L91 320 L91 340 C91 367 103 384 127 384 C150 384 161 367 161 337 L161 112 L88 112 Z"
            />

            {/* Inner highlight outline */}
            <path
                ref={outlineLogoRef}
                className="j-inner-highlight"
                d="M104 86 L272 86 L272 96 L188 96 L188 337 C188 382 164 410 125 410 C86 410 61 384 59 344"
            />

            {/* Secondary sketch outline */}
            <path
                ref={outlineLogoRef}
                className="j-sketch-line"
                d="M96 78 L282 77 M202 111 C199 160 201 250 199 337 C198 388 169 420 124 419 C78 418 49 386 49 336"
            />

            {/* Front face sketch hatching */}
            <g className="j-face-hatching">
                <path 
                    ref={outlineLogoRef}
                    d="M112 86 L137 112" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M145 86 L171 112" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M178 86 L204 112" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M211 86 L237 112" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M244 86 L270 112" 
                />

                <path 
                    ref={outlineLogoRef}
                    d="M177 145 L205 173" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M177 185 L205 213" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M177 225 L205 253" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M177 265 L205 293" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M174 310 L205 341" 
                />

                <path 
                    ref={outlineLogoRef}
                    d="M61 329 L94 362" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M58 361 L116 419" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M87 397 L117 427" 
                />
            </g>

            {/* Small technical sketch ticks */}
            <g className="j-guide-marks">
                <path 
                    ref={outlineLogoRef}
                    d="M82 60 L94 76" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M94 60 L82 76" 
                />

                <path 
                    ref={outlineLogoRef}
                    d="M284 60 L296 76" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M296 60 L284 76" 
                />

                <path 
                    ref={outlineLogoRef}
                    d="M37 313 L48 326" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M49 313 L37 326" 
                />

                <path 
                    ref={outlineLogoRef}
                    d="M118 424 L132 438" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M132 424 L118 438" 
                />

                <path 
                    ref={outlineLogoRef}
                    d="M204 105 L214 118" 
                />
                <path 
                    ref={outlineLogoRef}
                    d="M215 105 L203 118" 
                />
            </g>
            </svg>
        </div>
    )
};

export default Logo