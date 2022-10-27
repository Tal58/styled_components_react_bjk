import styled from 'styled-components';

const StyledHeader = styled.header`
background-color: ${({theme})=>theme.colors.header};
padding: 0 10%;

`;
export default StyledHeader;

export const HeaderContext = styled.div`
width:50%;
@media (max-width: ${({theme})=>theme.responsive}) {
    width: 100%;
}`
export const Logo = styled.img`
width: 300px;
padding: 2rem;
`
export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 3% ;
@media (max-width: ${({theme})=>theme.responsive}) {
    flex-direction: column;
}
`
export const Image = styled(Logo)`

@media (max-width: ${({theme})=>theme.responsive}) {
   margin: 2rem 0;
}

`



export const Buttons = styled.div`

    @media (max-width: ${({theme})=>theme.responsive}) {
text-align: center;
}
`
