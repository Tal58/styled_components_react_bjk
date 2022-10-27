import styled, {css} from 'styled-components';

export const Images = styled.img`
width: 100%;
`
export const ContainerDiv = styled.div`
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
padding: 2%;
margin: 5% 20%;
display: flex;
:hover{
    transform: scale(110%);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

@media (max-width: ${({theme})=>theme.responsive}) {
   flex-direction: column-reverse;
   justify-content: center;
   margin: 5% 5%;
}

${({bool})=> bool %2 && css`
flex-direction: row-reverse ` };
`;



export const SubDiv = styled.div`
margin: 2% 5%;
padding: 0%;
width: 45%;
img{
    height: 30vh;
    width: 50%;
    margin: 3% 25%;
}
@media (max-width: ${({theme})=>theme.responsive}) {
 width: 100%;
 margin: auto;
 text-align: center;

}

`