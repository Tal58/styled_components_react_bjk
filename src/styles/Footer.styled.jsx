import styled from 'styled-components';

export const CoveredDiv = styled.div`
padding: 5%;
justify-content: center;
background-color: #858080;


`



export const FooterImg = styled.div`
padding: 3%;
text-align: center;
img{
padding: 0%;
margin: 0%;
@media (max-width: ${({theme})=>theme.responsive}) {
width: 85%;
}
}
`
export const FooterDiv = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
@media (max-width: ${({theme})=>theme.responsive}) {
 flex-direction: column;
 text-align: center;
}

`

export const Link = styled.a`
cursor: pointer;
&:hover{
    transform: scale(110%);
    color: red;
}`

export const ComboLink = styled.div`
display: flex;
flex-direction: column;
`

export const Icons = styled.div`
display: flex;
@media (max-width: ${({theme})=>theme.responsive}) {
justify-content: center;
}
p{
    border: 2px solid black;
    border-radius: 50%;
    padding: 10% 6% 6% 6%;
    margin: 5%;
    font-size: 1rem;
    &:hover{
    transform: scale(110%);
    color: red;
    border: 2px solid red;
}
}`


export const Logo2 = styled.img`
width: 300px;
padding: 2rem;
:hover{
    transform: scale(110%);
}
`