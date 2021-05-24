import React from 'react';
import axios from 'axios';
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
        return (
            <div id="wrapper">
                <div id="drum-machine" >
                    <div id="display" >holi</div>
                    <div id="drums-container" >

                    </div>
                    {
                        this.state.sounds.map(el => <div id={el.code} name={el.id} key={el.id} onClick={handleClick} className="drum-pad" >{el.key}
                            <audio id={el.key} className="clip" src={el.url}></audio>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

