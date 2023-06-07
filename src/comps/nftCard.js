import styled from "@emotion/styled/macro";
import giff from '../assets/0.gif'
import { useEffect, useState } from "react";
import { CandyMachineV2, Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { CircularProgress, Typography } from "@mui/material";
import { SPECIAL_WALLET, WALLETS } from "../whitelist";
import axios from "axios";
import { PublicKey } from "@solana/web3.js";
import toast from 'react-hot-toast';

const CANDY_MACHINE_ADDRESS = new PublicKey("BBnpVhS3LjULFz4WoUoVnrztbQ4MbKoCLxXvh7e1EGnV")


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
    display:flex;
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
const NFTCard = () => {
    /* ---------------------------------------------------------------------------------- */
    /* ---------------------------------------------------------------------------------- */
    /* ----------------------- CANDY MACHINE MINTING PROCESS ---------------------------- */
    /* ---------------------------------------------------------------------------------- */
    /* ---------------------------------------------------------------------------------- */
    const [nft, setNft] = useState(null);

    const DesktopCard = styled.div`
    background: #202C22;
    background-image: url(${nft ? nft.json.image : giff});
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
    const { connection } = useConnection();
    const wallet = useWallet();
    const [candyMachine, setCandyMachine] = useState(undefined)
    const [isMinting, setIsMinting] = useState(false)
    const [isInWhiteList, setIsInWhiteList] = useState(false)
    const [whiteListLoading, setWhiteListLoading] = useState(true)
    const [alreadyMinted, setAlreadyMinted] = useState(false)
    const [canMint, setCanMint] = useState(false)
    const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))
    const [noItem, setNoItem] = useState(false)
    const candyMachines = metaplex.candyMachinesV2()

    async function fetchCandyMachine() {
        const fetched = await candyMachines.findByAddress({ address: CANDY_MACHINE_ADDRESS })
        setCandyMachine(fetched)
        setWhiteListLoading(false)
    }

    async function mintOne() {
        try {
            setIsMinting(true);
            const mintOutput = await candyMachines.mint({ candyMachine });
            setIsMinting(false);
            setNft(mintOutput.nft)
            // Fetch the candy machine to update the counts
            await fetchCandyMachine()
        }
        catch (err) {
            toast.error(`${err.message}`)
            setIsMinting(false)
        }
    }
    useEffect(() => {
        if (!candyMachine) return
        if (!wallet) return
        if (!wallet.publicKey) return
        if (isMinting) {
            setCanMint(false)
            return
        }
        if (candyMachine.itemsRemaining.toNumber() <= 0) {
            setNoItem(true)
            return
        }
        setCanMint(true)
    }, [isMinting, candyMachine, wallet])

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
        toast.success('Successfully Minted!');
        setAlreadyMinted(true)
        changeStatus()
    }, [nft])

    const checkAlreadyMinted = async () => {
        try {
            const options = {
                headers: { 'Access-Control-Allow-Origin': '*' }
            };
            const response = await axios.get('https://mint.oochik.com:7889/get_wallets', options);
            console.log(response)
            let _wallets = response.data
            for (var i = 0; i < _wallets.length; i++) {
                if (wallet.publicKey.toBase58() == _wallets[i].wallet_address) {
                    if (_wallets[i].did_mint === "false") {
                        setAlreadyMinted(false)
                        break
                    }
                    else setAlreadyMinted(true)
                }
            }
            fetchCandyMachine()
        }
        catch (err) {
            console.log(err)
        }
    }


    const changeStatus = async () => {
        const options = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        try {
            const response = await axios.get(`https://mint.oochik.com:7889/can_mint/${wallet.publicKey.toBase58()}`, options);
            console.log(response)
        }
        catch (err) {
            console.log(err)
        }
    }
    /* ----------------------------------------------------------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------------------------------------------- */



    return (
        // <div className="col-6 col-sm-4 col-lg-3 d-flex justify-content-center align-items-center" >

        <DesktopCard >
            {/* <OoChikGif /> */}
            <div className="d-flex justify-content-between mb-1">
                {/* <span style={{ color: "white", fontWeight: 500 }}>12 <span style={{ fontWeight: 400 }}>SOL</span></span> */}
            </div>
            {noItem ?
                <MintButton disabled={true}>
                    All NFTs are minted.
                </MintButton>
                :
                <MintButton disabled={!canMint}
                    onClick={!isInWhiteList || alreadyMinted ? undefined : mintOne} >

                    {whiteListLoading ?
                        <>
                            <CircularProgress size="12px" sx={{ mr: 1 }} />
                            <Typography>Loading...</Typography>
                        </>
                        :
                        !isInWhiteList ? "You are not allowed to mint!" :
                            alreadyMinted ? "You have already minted!" :
                                "Mint"
                    }
                </MintButton>
            }

        </DesktopCard>

        // </div>
    );
}

export default NFTCard;
