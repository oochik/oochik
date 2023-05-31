import styled from "@emotion/styled";
import NFTCard from "../comps/nftCard";
import { useWallet } from "@solana/wallet-adapter-react";
import { Box } from "@mui/material";

const MintingCardsWrapper = styled.div`
padding:30px;
// height:calc(100vh-100px);
height:100vh;
display:flex;
justify-content:center;
// align-items:center;


// the grid display css for showing more than one nft ----->
// overflow-y:scroll;
// scrollbar-width: 0px;
// display: grid;
// grid-template-columns: auto auto auto auto;
// grid-gap: 20px;
// grid-column-gap: 20px;
// grid-row-gap: 70px;
// &::-webkit-scrollbar {
//     display:none;
// }
// &::-webkit-scrollbar-thumb {
//     display:none;
// }
// &::-webkit-scrollbar-button{
//     display:none;
// }
//  -ms-overflow-style: none;
//  @media screen and (max-width: 990px) {
//     grid-template-columns: auto auto auto;
//     grid-row-gap: 40px;
// };
//  @media screen and (max-width: 575px) {
//     grid-template-columns: auto auto;
//     grid-row-gap: 20px
// }    
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
    const wallet = useWallet()
    return (
        <div>
            <Title>Mint One</Title>
            {!wallet.connected ?
                <Box sx={{ height: "calc(100vh - 180px)" }}>
                    <Title>Connect Wallet to continue</Title>
                </Box>
                :
                <MintingCardsWrapper>
                    <NFTCard />
                </MintingCardsWrapper>
            }
        </div>

    );
}

export default MintPage;