import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

        const [letterClass, setLetterClass] = useState('text-animate')
    console.log(letterClass);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
    }, [])


    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious IT professional with a diverse background in technology, full stack web development, military communications, network administration, and manufacturing.
                        My path into IT has given me a practical, hands-on approach to problem solving, troubleshooting, and learning new systems quickly. 
                    </p>
                    <p>
                        I enjoy building on my IT skills by troubleshooting and repairing computers for myself or family, honing my coding languages, and building small web applications.
                    </p>
                    <p>
                        I am also a multi-instrumental musician. I play saxophone, guitar, piano/keyboard, drums, and bass.
                    </p>
                    <p>
                        Feel free to visit my LinkedIn and Github pages to see my resume and projects! The links are on the bottom left corner of the page.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="line-scale" active />
        </>
    )
}


export default About