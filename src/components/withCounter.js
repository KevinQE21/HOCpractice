import React, { Component } from 'react';

//Normalmente la funcion se llama igual que el file
//Y el componente que le llega se le llama WrappedComponente
const withCounter =  WrappedComponent => {
    //El nombre de la clase va ser el mismo que la funcion 
    //Solo que en formato Pascal => (UnoDos HolaMundo las primeras letras Mayus)
    class WithComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                count: 0,
            }
        }

        incrementCount = () => {
            this.setState(prevState =>{
                return(
                    {count: prevState.count + 1}
                );
            });
        }

        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return WithComponent;
}

export default withCounter;       