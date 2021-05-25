import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
class tecla extends React.Component  {

    constructor() {
        super();
        this.state = {
            id: "",
            code: "",
            key: "",
            url: ""
        };
        document.addEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        let key = document.getElementById((`${e.key}`).toUpperCase())
        if (key) {
            key.firstElementChild.play()
            let display = document.getElementById("display");
            display.textContent = key.getAttribute("name")
        }
    }
    render() {
        const { sound } = this.props;
        const handleClick = (e) => {
            console.log()
            let display = document.getElementById("display");
            e.target.firstElementChild.play();
console.log()
            
            display.textContent = e.target.getAttribute("name");
        }
        return (
            <>
                {
                    sound.map((item) => {
                        return (
                            
                            <div id={item.key}
                                name={item.id}
                                key={item.id}
                                onClick={handleClick}
                                className="pad drum-pad">{item.key}
                                <audio id={item.key} className="clip" src={item.url}></audio>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
export default tecla;

/*
dar cédula 1233909119
clave de windows emailAddresses*/