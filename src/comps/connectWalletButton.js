const ConnectButton = () => {
    return (
        <button style={{ fontSize: '20px', color: '#9FC83B', textDecoration: "none" }}>
            <div className="d-flex align-items-center">
                Connect Wallet
                <ArrowButton className="ms-2">
                    <ArrowRight2 size="18px" />
                </ArrowButton>
            </div>
        </button>
    );
}

export default ConnectButton;