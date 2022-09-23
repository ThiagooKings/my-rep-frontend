import styled, {css} from 'styled-components'

interface ButtonProps {
  active: boolean;
}


export const Container = styled.div`
display: flex;
flex-direction: column;

align-items: center;

`;

export const Title = styled.h1`
 color: var(--blue200);
 
 margin-top: 4rem;
 margin-bottom: 4rem;

`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;

export const Button = styled.button<ButtonProps>`
display: flex;

justify-content: center;
align-items: center;

height: 2.5rem;
width: 6.875rem;

border: 0;
border-radius: 1.25rem;

cursor: pointer;

font-weight: 500;
font-size: 1.25rem;

margin-left: 0.5rem;
margin-right: 0.5rem;

${props => props.active ? 
css`background: var(--blue100);
    color: var(--white);

` : css`background: var(--blue000);
        color: var(--blue100) 
`};

`;
