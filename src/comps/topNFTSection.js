import styled from "@emotion/styled";
import NFTCard from "./nftCard";

const SectionContainer = styled.div`
padding-bottom:30vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media screen and (max-width: 990px) {
    padding:0;
};
`
const Line = styled.div`
width:80%;
height:1px;
background: linear-gradient(91.53deg, rgba(255, 255, 255, 0) 0%,rgba(159, 200, 59, 0.5) 50% ,rgba(255, 255, 255, 0) 100% );   
margin-bottom:60px;
@media screen and (max-width: 990px) {
    margin-bottom:40px;
}    
@media screen and (max-width: 575px) {
    margin-bottom:30px;
}    

`
const Title = styled.h4`
font-weight: 700;
font-size: 28px;
line-height: 69px;
color: #FFFFFF;
 @media screen and (max-width: 575px) {
    font-size: 20px;
}    
`
const CardsWrapper = styled.div`
padding:30px;
width:100%;
overflow-x:scroll;
scrollbar-width: 0px;
display: grid;
// grid-template-columns: 1fr 1fr 1fr 1fr;
// grid-template-rows: 1fr;
grid-auto-flow: column;  
grid-gap: 20px;
grid-auto-columns: 25%; /* play with this to change height of the children, 50% will fill half */
&::-webkit-scrollbar {
    display:none;
}
&::-webkit-scrollbar-thumb {
    display:none;
}
&::-webkit-scrollbar-button{
    display:none;
}
 -ms-overflow-style: none;
 @media screen and (max-width: 990px) {
    // grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 33%; /* play with this to change height of the children, 50% will fill half */
};
 @media screen and (max-width: 575px) {
    // grid-template-columns: 1fr;
    grid-auto-columns: 100%; /* play with this to change height of the children, 50% will fill half */
}    
`



const TopNFTs = () => {
    return (
        <SectionContainer>
            <Title>Top NFT</Title>
            <Line />
            <CardsWrapper>
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
            </CardsWrapper>
        </SectionContainer>
    );
}

export default TopNFTs;