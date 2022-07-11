import React, {useEffect, useState} from 'react';

import { Login } from "./login";

import './app.css';

function App() {

    const [music, setMusic] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect((): void => {
        fetch('https://api.spotify.com/tracks/{id}')
            .then((result) => result.json())
            .then((data) => console.log(data));
    })

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
                <section className='center'>{}</section>
                <section className='musicPlayer'>Music - Player</section>
            </div>
        </>

    );
}

export default App;
