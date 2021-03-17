import React from "react"
import { Link } from "gatsby";
import Logo from '../../assets/images/png/CBREGL-LOGO.png';
import styled from "styled-components";

export default (props) => (
    <Container>
        <Header>
            <Link to="/"  >
                <img src={Logo} alt="CBRE Global Listings" />
            </Link>
        </Header>
        <SubNav>
            {((typeof window !== 'undefined') && window.location.pathname !== '/') &&
                <BackButton onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    typeof history !== 'undefined' && history.go(-1)
                }}>Back</BackButton>
            }
            {/* <h5>
                {props.page}
            </h5> */}
        </SubNav>
    </Container>
)

export default Header;

const Container = styled.div`
    border-bottom: 1px solid #ccc;
    position:sticky;
    top:0;
    background:#fff;
    z-index:2;
`;

const Header = styled.div`
    font-family: sans-serif;
    max-width:90%;
    margin:0 auto;
    align-items: center;
    justify-items: center;
    display: flex;
    min-height:80px;
`;

const SubNav = styled.div`
    background:#006a4d;
    width:100%;
    min-height:40px;
    align-items: center;
    display: flex;
    h5 {
        text-transform:capitalize;
        color:#fff;
        font-family:sans-serif;
        margin:0;
        margin-left:5%;
    }
`;

const BackButton = styled.div`
    color:#fff;
    margin-left:5%;
    cursor:pointer;
`;