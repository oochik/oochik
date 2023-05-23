import styled from "@emotion/styled";

const RedButton = styled.button`
    background-color:#8A0000;
    border:none;
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    box-shadow: inset 0px 0px 18px rgba(0, 0, 0, 0.5);
    border-radius: 48px;
    // width: 561px;
    height: 65px;
    color:white;
    font-weight:600;
    font-size:20px;
    &:hover {
        background: #AA0808;
    };
    &:active {
        background: #700000;
    }
`


const GoToButton = () => {
    return (
        <RedButton>
            Go To Mint Page
        </RedButton>
    );
}

export default GoToButton;