import React from 'react';
import axios from 'axios';
import style from '../utils/format.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            sounds: [],
            activeTab: props.activeTab || 1
        };

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
        if (key) {
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

        const changedOne = (e) => {
            let bank = document.getElementsByClassName("bank-one");
            bank.current.classList.remove("active");
        }

        const changedTwo = (e) => {
            let bank = document.getElementsByClassName("bank-two");
            console.log(bank)
            bank.current.classList.remove("active");
        }

        return (
            <div id="wrapper" className="main">


                <div id="drum-machine">
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
                        <div className="screen">
                            <span id="display" className='screen-info'></span></div>
                        <div id="slider"></div>
                        
                        <div id="drums-container" >

                        </div>
                        <div className="pad-container">
                        
                        <Tabs>
                    <TabList>
                        <Tab className=" bank-one">One</Tab>
                        <Tab className=" bank-two">Two</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                        <div className="drum-pad">
                        {
                                this.state.sounds.map(el =>
                                    <div id={el.key}
                                        name={el.id}
                                        key={el.id}
                                        onClick={handleClick}
                                        className="pad drum-pad">{el.key}

                                        <audio id={el.key} className="clip" src={el.url}></audio>
                                    </div>)
                            }</div>
                        </TabPanel>
                        <TabPanel>
                        <div className="drum-pad">
                        {
                                this.state.sounds.map(el =>
                                    <div id={el.key}
                                        name={el.id}
                                        key={el.id}
                                        onClick={handleClick}
                                        className="pad drum-pad">{el.key}

                                        <audio id={el.key} className="clip" src={el.url}></audio>
                                    </div>)
                            }</div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                </div>
                        <div className="bottom-plate"></div>
                    </div>
                </div></div>

        )
    }
}

