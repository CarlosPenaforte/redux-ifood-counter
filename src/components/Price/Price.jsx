import styled from "styled-components";

export default function Price(props) {

  const {name, onClick} = props;

  return (
    <Button onClick={onClick}>{name}</Button>
  )
}

const Button = styled.button`
  background-color: red;
  color: white;
  text-align: center;
  font-weight: 700;
  border: none;
  height: 36px;
  border-radius: 4px;
`
