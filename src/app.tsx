import React, {useEffect, useState} from 'react';

import { Login } from "./login";

import './app.css';

const CLIENT_ID = '7b5052f778d34edd807357713ca896e7';

function App() {

    const [music, setMusic] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect((): void => {
        fetch('https://api.soundcloud.com/')
            .then((result) => result.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error.message))
    }, []);

    return (
        <>
            <h1>Musify</h1>
            <Login/>
            <div className='app'>
                <section className='left'>
                    <ul className='musicList'>
                        <li>
                            <a href='/hello'>Home</a>
                        </li>
                        <li>
                            <a href='/hello'>Search</a>
                        </li>
                        <li>
                            <a href='/hello'>My Library</a>
                        </li>
                        <li>
                            <a href='/hello'>Like Songs</a>
                        </li>
                    </ul>
                </section>
                <section className='center'>{music}</section>
                <section className='musicPlayer'>Music - Player</section>
            </div>
        </>

    );
}

export default App;
