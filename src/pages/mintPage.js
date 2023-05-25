import styled from "@emotion/styled";
import NFTCard from "../comps/nftCard";

const MintingCardsWrapper = styled.div`
padding:30px;
height:100vh;
overflow-y:scroll;
scrollbar-width: 0px;
display: grid;
grid-template-columns: auto auto auto auto;
grid-gap: 20px;
grid-column-gap: 20px;
grid-row-gap: 70px;
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
    grid-template-columns: auto auto auto;
    grid-row-gap: 40px;
};
 @media screen and (max-width: 575px) {
    grid-template-columns: auto auto;
    grid-row-gap: 20px;

}    
`
const Title = styled.h4`
margin-left:30px;
font-weight: 700;
font-size: 28px;
line-height: 69px;
color: #FFFFFF;
 @media screen and (max-width: 575px) {
    font-size: 20px;
}    

`

const MintPage = () => {
    return (
        <div>
            <Title>All NFT</Title>
            <MintingCardsWrapper>
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
            </MintingCardsWrapper>
        </div>

    );
}

export default MintPage;