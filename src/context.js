import React, { Component } from 'react';
import {allOffices, detailOffice} from './data';
const OfficeContext = React.createContext();


class OfficeProvider extends Component {
    state ={
        offices: [],
        detailOffice: detailOffice
    };
    componentDidMount() {
        this.setOffices();
    }
    setOffices = () =>{
        let tempOffices = [];
        allOffices.forEach(item =>{
            const singleItem = {...item};
            tempOffices = [...tempOffices,singleItem];
        })
        this.setState(() =>{
            return {offices:tempOffices}
        })
    }

    getItem = (id) =>{
        const office = this.state.offices.find(item => item.id ===id);
        return office;
    }

    handleDetail = (id) => {
        const office = this.getItem(id);
        this.setState(() =>{
            return {detailOffice:office}
        })
    }

    render() {
        return (
            <OfficeContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail
            }}> 
                {this.props.children}
            </OfficeContext.Provider>
        );
    }
}

const OfficeConsumer = OfficeContext.Consumer;

export {OfficeProvider,OfficeConsumer};