import React, { Component } from 'react';
import { CounterButton } from '../CounterButton/CounterButton';
import { connect } from 'react-redux';
import './Counter.css';
import styled from 'styled-components';
import Price from '../Price/Price';

class Counter extends Component {
  state = { count:0, price:0, minusButtonStyle:"disableButton" };

  add = () => {
    this.props.dispatch({ type: 'ADD' });
  };

  sub = () => {
    if (this.props.count >0){
      this.props.dispatch({ type: 'SUBTRACT' });
    }
  };

  render() {
    return(
      <CounterContainer>
      <Wrapper>
        <CounterButton className={this.props.minusButtonStyle} onClick={this.sub} name="-"/>
        <span>{this.props.count}</span>
        <CounterButton className="Button" onClick={this.add} name="+"/>
      </Wrapper>
      <Price name={`Adicionar R$${this.props.price},00`}/>
    </CounterContainer>
    )
  }

}

function mapStateToProps(state) {
  return {
    count:state.count,
    price:state.price,
    minusButtonStyle:state.minusButtonStyle
  };
};

export default connect(mapStateToProps)(Counter);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 3px solid rgb(192,192,192);
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: auto;
  margin-right: 10px;
`
const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: auto;
`
