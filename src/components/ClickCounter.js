import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component{
    render(){
        const { count, incrementCount } = this.props;  
        return <button onClick={incrementCount}>Clicked {count} times</button>
    }
}

export default withCounter(ClickCounter);
//El export se hace un wrapp de la clase, esto permite que se puedan usar
//Las funciones que se encuentran dentro del HOC en esta clase