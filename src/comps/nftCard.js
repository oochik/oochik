import styled from "@emotion/styled/macro";
import giff from '../assets/0.gif'
import { useEffect, useState } from "react";
import { useMetaplex } from "../utils/useMetaplex";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { CircularProgress, Typography } from "@mui/material";
import { SPECIAL_WALLET, WALLETS } from "../whitelist";
import axios from "axios";

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
    width: 325px;
    height: 400px;
    // height:100%;
    box-shadow: 0px 6.1784px 13px rgba(0, 0, 0, 0.25);
    display:flex;
    flex-direction:column;
    justify-content:end;
    padding:20px;
    @media screen and (max-width: 990px) {
        padding:15px;
        width: 240px;
        height: 300px;
        border-radius: 16px;
    }    
    @media screen and (max-width: 575px) {
        width: 170px;
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

    /* ---------------------------------------------------------------------------------- */
    /* ---------------------------------------------------------------------------------- */
    /* ----------------------- CANDY MACHINE MINTING PROCESS ---------------------------- */
    /* ---------------------------------------------------------------------------------- */
    /* ---------------------------------------------------------------------------------- */


    const { metaplex } = useMetaplex();
    const wallet = useWallet();

    const [nft, setNft] = useState(null);

    const [disableMint, setDisableMint] = useState(true);
    const [mintedItems, setMintedItems] = useState(true);
    const [remItems, setRemItems] = useState(true);
    const [totalItems, settotalItems] = useState(true);

    const [isInWhiteList, setIsInWhiteList] = useState(false)
    const [whiteListLoading, setWhiteListLoading] = useState(true)
    const [alreadyMinted, setAlreadyMinted] = useState(false)

    useEffect(() => {
        if (!wallet.connected) return
        setWhiteListLoading(true)
        if (wallet.publicKey.toBase58() == SPECIAL_WALLET) {
            setIsInWhiteList(true)
            setAlreadyMinted(false)
            setWhiteListLoading(false)
            return
        }

        let _isAllowed = false
        for (var i = 0; i < WALLETS.length; i++) {
            if (wallet.publicKey.toBase58() == WALLETS[i]) {
                _isAllowed = true
                break;
            }
            else _isAllowed = false
        }
        if (!_isAllowed) {
            setIsInWhiteList(false)
            setWhiteListLoading(false)
            return
        }
        setIsInWhiteList(true)
        checkAlreadyMinted()
    }, [wallet])

    useEffect(() => {
        if (nft == null) return
        setAlreadyMinted(true)
        changeStatus()
    }, [nft])

    const checkAlreadyMinted = async () => {
        const options = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        const response = await axios.get('http://68.183.137.151:2432/get_wallets', options);
        console.log(response)
        let _wallets = response.data
        for (var i = 0; i < _wallets.length; i++) {
            if (wallet.publicKey.toBase58() == _wallets[i].wallet_address) {
                if (_wallets[i].can_mint == false) {
                    setAlreadyMinted(false)
                    break
                }
                else setAlreadyMinted(true)
            }
        }
        setWhiteListLoading(false)
    }
    const candyMachineAddress = new PublicKey(
        process.env.REACT_APP_CANDY_MACHINE_ID
    );
    let candyMachine;
    let walletBalance;

    const addListener = async () => {

        // add a listener to monitor changes to the user's wallet
        metaplex.connection.onAccountChange(metaplex.identity().publicKey,
            () => checkEligibility()
        );

    };

    const checkEligibility = async () => {
        //wallet not connected?
        if (!wallet.connected) {
            setDisableMint(true);
            return;
        }

        // read candy machine state from chain
        candyMachine = await metaplex
            .candyMachines()
            .findByAddress({ address: candyMachineAddress });


        console.log(candyMachine)


        setMintedItems(candyMachine.itemsMinted.toString(10))
        setRemItems(candyMachine.itemsAvailable.toString(10) - candyMachine.itemsMinted.toString(10))
        settotalItems(candyMachine.items.length)


        // enough items available?
        if (
            candyMachine.itemsMinted.toString(10) -
            candyMachine.itemsAvailable.toString(10) >
            0
        ) {
            console.error("not enough items available");
            setDisableMint(true);
            return;
        }

        //good to go! Allow them to mint
        setDisableMint(false);
    };

    // show and do nothing if no wallet is connected
    if (!wallet.connected) {
        return null;
    }

    // if it's the first time we are processing this function with a connected wallet we read the CM data and add Listeners
    if (candyMachine === undefined) {
        (async () => {
            // read candy machine data to get the candy guards address
            await checkEligibility();
            // Add listeners to refresh CM data to reevaluate if minting is allowed after the candy guard updates or startDate is reached
            addListener();
        }
        )();
    }

    const onClick = async () => {
        // Here the actual mint happens. Depending on the guards that you are using you have to run some pre validation beforehand 
        // Read more: https://docs.metaplex.com/programs/candy-machine/minting#minting-with-pre-validation
        if (!candyMachine) return
        if (!candyMachine.authorityAddress) return
        const { nft } = await metaplex.candyMachines().mint({ 
            candyMachine,
            collectionUpdateAuthority: candyMachine.authorityAddress
        },
        );
        setNft(nft);
    };



    const changeStatus = async () => {
        const options = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        const response = await axios.get(`http://68.183.137.151:2432/can_mint/${wallet.publicKey.toBase58()}`, options);
    }
    /* ----------------------------------------------------------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------------------------------------------- */

    return (
        // <div className="col-6 col-sm-4 col-lg-3 d-flex justify-content-center align-items-center" >
        <DesktopCard >
            {/* <OoChikGif /> */}
            <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "white", fontWeight: 500 }}>{mintedItems}/{totalItems} Minted - {remItems} Available</span>
                {/* <span style={{ color: "white", fontWeight: 500 }}>12 <span style={{ fontWeight: 400 }}>SOL</span></span> */}
            </div>
            <MintButton disabled={disableMint}
                onClick={!isInWhiteList || alreadyMinted ? undefined : onClick} >
                {whiteListLoading ?
                    <>
                        <CircularProgress size="12px" sx={{ mr: 1 }} />
                        <Typography>Loading...</Typography>
                    </>
                    :
                    !isInWhiteList ? "You are not allowed to mint!" :
                        alreadyMinted ? "You have already minted!" :
                            "Mint"}
            </MintButton>
        </DesktopCard>
        // </div>
    );
}

export default NFTCard;