import './App.css';
import Counter from '../Counter/Counter';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <h1>Ifood</h1>
      <Counter />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
`

export default App;
