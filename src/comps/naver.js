import styled from "@emotion/styled";

const Bar = styled.div`
height: 400px;
width:80px;
right:0;
top:40%;
position:fixed;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
// background: rgb(159,200,59);
background: radial-gradient(circle, rgba(159,200,59,0) 0%, rgba(159,200,59,0.09) 0%, rgba(159,200,59,0.09) 100%);
border-bottom-left-radius:48px;
border-top-left-radius:48px;
border-left:1px solid;
border-color:#9FC83B;
padding:30px;
background-blend-mode: overlay;
mix-blend-mode: screen;

`


const Naver = () => {
    return (<Bar className="d-none d-lg-flex">

    </Bar>);
}

export default Naver;