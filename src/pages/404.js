import styled from "@emotion/styled";

const NotFoundContainer = styled.div`
height:100vh;
display:flex;
align-items:center;
justify-content:center;
color:#9FC83B;
font-size:32px;
`
const NotFound = () => {
    return (
        <NotFoundContainer>
            Page Not found
        </NotFoundContainer>
    );
}

export default NotFound;