import Content from '../data';
import { ContainerDiv, Images, SubDiv } from '../styles/Container.styled';


function Container() {
  return (
    <div>{
        Content.map((item,key)=>{
            return(
                <ContainerDiv key={item.id} bool= {item.id}>
                    <SubDiv> <Images src={`./images/${item.image}`}/></SubDiv>
                    <SubDiv>
                    <h2 key= {key}>{item.title}</h2>
                    <p>{item.body}</p>
                    </SubDiv>                   
                  
                </ContainerDiv>
            )
        })
        
        }</div>
  )
}

export default Container