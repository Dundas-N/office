import React, { Component } from 'react';
import Office from './Office';
// import Details from './Details';
import { OfficeConsumer } from '../context';

export default class OfficeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper-officelist">
                <div className="container-officelist">
                    <h1 className='text-title'> OUR OFFICES</h1>

                    <div className="row" >
                        <OfficeConsumer>
                            {value => {
                                return value.offices.map( office => {
                                    return <Office key= {office.id} office={office} />;  
                                      
                                });
                                
                            }}
                                
                        </OfficeConsumer>
                    </div>
                </div>
                </div>
            </React.Fragment>
            // <div>
            //     <Office />
            //     <Details />
            // </div>
        );
    }
}
