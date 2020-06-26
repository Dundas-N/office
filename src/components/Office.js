import React, { Component } from 'react';
import '../App.scss';
import { Link } from "react-router-dom";
import { OfficeConsumer } from '../context';


export default class Office extends Component {
    render() {
        const {id, title, img, price} = this.props.office;
        return (
            <div className='office'>
                <div className='card'>
                <OfficeConsumer>
                    {(value) => (
                        <div className='img-container' onClick={()=> value.handleDetail(id)
                             }>
                        <Link to="/details" >
                            <img className='office-pic' src={img} alt='office'></img>
                        </Link>
                        </div>
                    )}
                    
                </OfficeConsumer>
                <div className='card-footer'>
                    <p className='office-title'>{title}</p>
                    <h5 className='price'>${price}</h5>
                </div>
               </div>
            </div>
        )
    }
}
