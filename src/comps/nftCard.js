import styled from "@emotion/styled/macro";
import giff from '../assets/0.gif'


const OoChikGif = styled.div`
    background-image: url(${giff});
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
    height:290px;
    width:190px;
    @media screen and (max-width: 990px) {
        height:200px;
        width:100px;
    }    
`
const MintButton = styled.button`
    // background: linear-gradient(91.53deg, #507757 3.73%, #222F25 97.53%)  padding-box,linear-gradient(90deg,rgba(159, 200, 59, 1) 0%,rgba(159, 200, 59, 0) 100%)  border-box;
    background: linear-gradient(91.53deg, #507757 3.73%, #222F25 97.53%);
    // border: 1px solid transparent;
    border: 1px solid rgba(159, 200, 59, 0.5);
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    transition:500ms ease;
    border-radius: 31.2151px;
    width: 100%;
    height: 40px;
    color:white;
    font-weight:500;
    font-size:14px;
    display:none;
    justify-content:center;
    align-items:center;
    &:hover {
        background: linear-gradient(91.53deg, #598460 49.35%, #222F25 97.53%);   
    };
    &:active {
        background: linear-gradient(91.53deg, #507757 3.73%, #222F25 45.26%, #324A38 91.64%);
    }
    @media screen and (max-width: 990px) {
        display:flex;
    }    

`

const DesktopCard = styled.div`
    background: #202C22;
    background-image: url(${giff});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    border-radius:48px;
    // width: 325px;
    height: 400px;
    // height:100%;
    box-shadow: 0px 6.1784px 13px rgba(0, 0, 0, 0.25);
    display:flex;
    flex-direction:column;
    justify-content:end;
    padding:20px;
    @media screen and (max-width: 990px) {
        padding:15px;
        // width: 240px;
        height: 300px;
        border-radius: 16px;
    }    
    @media screen and (max-width: 575px) {
        // width: 170px;
        height: 200px;
    }    
    &:hover{
        box-shadow: 0px 6px 17px rgba(187, 224, 96, 0.25);
        ${MintButton}{
            display:flex;
        }
    }


`

const NFTCard = () => {
    return (
        // <div className="col-6 col-sm-4 col-lg-3 d-flex justify-content-center align-items-center" >
        <DesktopCard >
            {/* <OoChikGif /> */}
            <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "white", fontWeight: 500 }}>#12543</span>
                <span style={{ color: "white", fontWeight: 500 }}>12 <span style={{ fontWeight: 400 }}>ETH</span></span>
            </div>
            <MintButton>Mint</MintButton>
        </DesktopCard>
        // </div>
    );
}

export default NFTCard;