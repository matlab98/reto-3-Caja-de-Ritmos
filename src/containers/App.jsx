import React from 'react';
import axios from 'axios';
import style from '../utils/format.css'
export default class App extends React.Component {
    state = {
        sounds: []
    }

    componentDidMount() {
        axios.get(`https://reto2-ag.herokuapp.com/Dock`)
            .then(res => {
                const sounds = res.data;
                this.setState({ sounds });
            })
    }


    render() {
        const handleClick = (e) => {
            let display = document.getElementById("display");
            e.target.firstElementChild.play();
            display.textContent = e.target.id
        }
        
                const handleKeyUp = (e) => {
                    let button = document.getElementById(`${e.code}`)
                    if (button) {
                        button.firstElementChild.play()
                        let display = document.getElementById("display");
                        display.textContent = button.id
                    }
                }
                document.addEventListener("keyup",handleKeyUp)
        return (
            <div id="wrapper">
                <div id="drum-machine" class="container">
                    <div class="sampler">
                        <div class="strap one"></div>
                        <div class="strap two"></div>
                        <div class="top-plate"></div>
                        <div class="on-button"></div>
                        <div class="detail-strip">
                            <div class="strip-one"></div>
                            <div class="strip-two"></div>
                            <div class="strip-three"></div>
                            <div class="strip-four"></div>
                        </div>
                        <div id="display" class="screen"><span class='screen-info'></span></div>
                        <div id="slider"></div>
                        <div class="bank-one active"></div>
                        <div class="bank-two"></div>
                        <div id="drums-container" class="pad-container">
                            {
                                this.state.sounds.map(el =>
                                    <div id={el.code} name={el.id} key={el.id} onClick={handleClick} className="pad drum-pad" >
                                        {el.key}
                                        <audio id={el.key} className="clip" src={el.url}></audio>
                                    </div>)
                            }
                        </div>
                        <div class="bottom-plate"></div>
                    </div>
                </div></div>

        )
    }
}

