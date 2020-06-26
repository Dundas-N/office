import React, { Component } from 'react';
import '../App.scss';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="home" >
                <div className='homeContainer'>
                    <div className='contentLeft'>
                            <h1 className='title'>office space <span>rental</span></h1>

                            <p>
                                Fin Offices provides more than 200 office spaces around the country. 
                                Book a meeting room or office space for your team in 5 min.
                            </p>
                            <Link to='/offices'>
                                <button className='btn home'>
                                    BOOK NOW
                                </button>
                            </Link>
                            
                        </div>
                        <div className='contentRight'></div>
                </div> 
            </div>
        )
    }
}
