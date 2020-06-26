import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { OfficeConsumer } from '../context';


export default class Details extends Component {
    render() {
        return (
            <OfficeConsumer>
            {value => {
                const {title, img, price, size, info} = value.detailOffice;
                return (
                    <div className='details-container'>     
                
                    {/* office detail info*/ }
                    <div className='info-row'>
                        {/* office image*/ }
                        <div className='info-left'>
                            <img src={img} alt='office' />
                        </div>
                        {/* detail text*/ }
                        <div className='info-right'>
                            <h2>{title}</h2>
                            <h4>Price: ${price} </h4>
                            <p className='size'><span>Size: </span> {size}</p>
                            <p> <span>Office description: </span> {info}</p>
                            
                            {/* datail buttons*/ }
                            <div className='detail-btns'>
                            <Link to='/offices'>
                                <button className='btn back'>
                                    back to offices
                                </button>
                            </Link>
                            <Link to='/default'>
                                <button className='btn book'>
                                    book
                                </button>
                            </Link>
                            </div>
                         </div>
                    </div> 
                    </div>      
                )
            }}
               
            </OfficeConsumer>
        )
    }
}
