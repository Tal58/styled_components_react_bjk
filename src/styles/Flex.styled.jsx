import styled from 'styled-components';

const Flex = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 0 3% ;
gap: 2rem;
@media (max-width: ${({theme})=>theme.responsive}) {
   flex-direction: column;
   text-align: center;
}

`;

export default Flex;
