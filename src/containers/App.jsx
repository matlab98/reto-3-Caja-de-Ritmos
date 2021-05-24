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
            document.addEventListener("keydown", this.handleKeyDown);
    }
    
    handleKeyDown = (e) => {
        let key = document.getElementById((`${e.key}`).toUpperCase())
        if(key){ 
          key.firstElementChild.play()
          let display = document.getElementById("display");
          display.textContent = key.id
        }  
    }

    render() {
        const handleClick = (e) => {
            let display = document.getElementById("display");
            e.target.firstElementChild.play();
            display.textContent = e.target.id
        }


        return (
            <div id="wrapper">
                <div id="drum-machine" className="container">
                    <div className="sampler">
                        <div className="strap one"></div>
                        <div className="strap two"></div>
                        <div className="top-plate"></div>
                        <div className="on-button"></div>
                        <div className="detail-strip">
                            <div className="strip-one"></div>
                            <div className="strip-two"></div>
                            <div className="strip-three"></div>
                            <div className="strip-four"></div>
                        </div>
                        <div id="display" className="screen"><span className='screen-info'></span></div>
                        <div id="slider"></div>
                        <div className="bank-one active"></div>
                        <div className="bank-two"></div>
                        <div id="drums-container" >

                        </div>
                        <div className="pad-container">
                            {
                                this.state.sounds.map(el => <div id={el.key} name={el.id} key={el.id} onClick={handleClick} className="pad drum-pad" >
                                    {el.key}
                                    <audio id={el.key} className="clip" src={el.url}></audio>
                                </div>)
                            }
                        </div>
                        <div className="bottom-plate"></div>
                    </div>
                </div></div>

        )
    }
}

