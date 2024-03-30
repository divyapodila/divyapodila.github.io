import LogoTitle from '../../assets/images/logo_sub.png';
import {Link} from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const jobArray = ['I`','m', ' ', 'a', ' ','W','e','b',' ','D','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])
    return (
        <> 
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <div>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span></div>
                    <img src={LogoTitle} alt="developer" />
                    <div>
                    <AnimatedLetters letterClass= {letterClass}
                    strArray={jobArray}
                    idx={15} /> </div>
                    <br />    
                </h1>
                <h2>Frontend Developer / Javascript Developer / Salesforce Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}
export default Home;