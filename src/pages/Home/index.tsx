import { useState } from "react";
import { Button, ButtonContainer, Container, Title } from "./styles";

export function Home():JSX.Element {

  const [activeButton, setActiveButton] = useState('Semanal');

  return (

    <Container>
          <Title> Quadro de tarefas</Title>
          <ButtonContainer>
            <Button onClick={() => setActiveButton('Semanal')} 
                    active={activeButton === 'Semanal' ? true : false}>
                      Semanal
            </Button>
            <Button onClick={() => setActiveButton('Mensal')} 
                    active={activeButton === 'Mensal' ? true : false}>
                      Mensal
            </Button>
          </ButtonContainer>
    </Container>

  );
}