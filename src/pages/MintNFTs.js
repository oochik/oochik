import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { mintV2 } from "@metaplex-foundation/mpl-candy-machine";
import {
  createMintWithAssociatedToken,
  setComputeUnitLimit,
} from "@metaplex-foundation/mpl-essentials";
import { transactionBuilder, generateSigner } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import {
  fetchCandyMachine,
  fetchCandyGuard,
} from "@metaplex-foundation/mpl-candy-machine";
import { publicKey } from "@metaplex-foundation/umi";





export const MintNFTs = ({ }) => {

  const wallet = useWallet();
  const [nft, setNft] = useState(null);
  const [disableMint, setDisableMint] = useState(false);
  const [candyMachine, setCandyMachine] = useState(undefined)
  const [candyGuard, setCandyGuard] = useState(undefined)
  let walletBalance;
  useEffect(() => {
    const init = async () => {
      setCandyMachine(await fetchCandyMachine(umi, candyMachinePublicKey))
    }
    init()
  }, [])
  useEffect(() => {
    if (!candyMachine) return
    console.log(candyMachine)
    const init = async () => {
      setCandyGuard(await fetchCandyGuard(umi, candyMachine.mintAuthority))
    }
    init()

  }, [candyMachine])
  const umi = createUmi("https://api.devnet.solana.com").use(mplCandyMachine());
  const candyMachinePublicKey = publicKey(process.env.REACT_APP_CANDY_MACHINE_ID);
  const collectionNFTPublicKey = publicKey(process.env.REACT_APP_COLLECTION_MINT_ADDRESS);
  let metaplex = candyMachine;


  const addListener = async () => {
    // add a listener to monitor changes to the candy guard
    metaplex.connection.onAccountChange(candyMachine.candyGuard.address,
      () => checkEligibility()
    );

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


    // enough items available?
    // if (
    //   candyMachine.itemsMinted.toString(10) -
    //   candyMachine.itemsAvailable.toString(10) >
    //   0
    // ) {
    //   console.error("not enough items available");
    //   setDisableMint(true);
    //   return;
    // }


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
    const nftMint = generateSigner(umi);
    console.log(collectionNFTPublicKey.publicKey)
    // await transactionBuilder()
    //   .add(setComputeUnitLimit(umi, { units: 800_000 }))
    //   .add(
    //     mintV2(umi, {
    //       candyMachine: candyMachine.publicKey,
    //       nftMint,
    //       collectionMint: collectionNFTPublicKey.publicKey,
    //       // collectionUpdateAuthority: collectionNFTPublicKey.metadata.updateAuthority,
    //     })
    //   )
    //   .sendAndConfirm(umi);

    // setNft(nft);
  };

  return (
    <div>
      <div>
        <div>
          <h1>NFT Mint Address</h1>
          <div>
            <input
              type="text"
              value={nft ? nft.mint.address.toBase58() : ""}
              readOnly
            />
            <button onClick={onClick} disabled={disableMint}>
              mint NFT
            </button>
          </div>
          {nft && (
            <div>
              <h1>{nft.name}</h1>
              <img
                src={nft?.json?.image || "/fallbackImage.jpg"}
                alt="The downloaded illustration of the provided NFT address."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};