import React, { FC } from "react"
import { Link } from "gatsby";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"
//
import Layout from 'components/Layout';
import SEO from 'components/SEO';

interface Props {
    path: any,
    pageContext: any
}

const PLP: FC<Props> = ({ path, pageContext }) => {
    const { countryName, propertyType, plpData, CountryCodes, buyObject } = pageContext

    return (
        <Layout>
            <SEO title="CBRE Properties" />
            <Header1>{plpData && plpData.length} Properties</Header1>
            <Container>
                <div id="plpContainer">
                    <PropertyCardContainer>
                        {plpData && plpData[0] && plpData.map((listing: any, index: any) => {
                            const list = listing.listing;
                            const actualAddress = listing.address;
                            const postalAddresses = 'Common.PostalAddresses';
                            let local;
                            let postalAddress: any = {}
                            if (actualAddress[postalAddresses] && actualAddress[postalAddresses][0]) {
                                postalAddress = actualAddress[postalAddresses][0]
                                local = postalAddress['Common.Locallity'] || actualAddress['Common.Locallity'] || null;
                            }

                            const url = path.split('/');
                            let thePath = path;
                            if (local) {
                                local = local.replace(/\s+/g, '-').toLowerCase();
                                url.splice(url.length - 1, 0, local)
                                thePath = url.join('/')
                            }

                            const description = list['Common.LongDescription'] && list['Common.LongDescription'][0] && list['Common.LongDescription'][0]['Common.Text'];



                            return (
                                <Link key={index + listing.key} to={thePath + '/' + listing.key}>
                                    <PropertyCard className="propertyCard" key={index + listing.key + ' propertyCard'}>
                                        {listing.image &&
                                            <img src={'https://www.cbre.us' + listing.image} loading="lazy" />
                                        }
                                        <PropertyDetails>
                                            <h3>{postalAddress['Common.Line1']} {postalAddress['Common.Line3'] && postalAddress['Common.Line3']}</h3>
                                            <p>{description && description.substring(0, 250)}</p>
                                        </PropertyDetails>
                                    </PropertyCard>
                                </Link>
                            )
                        })}
                    </PropertyCardContainer>
                    <Sidebar>
                        <ul>
                            <li>
                                Sidebar properties
                            </li>
                        </ul>
                    </Sidebar>
                </div>
                {/* <div id="map">
                <Map
                    coordinateArray={coordinateArray}
                />
            </div> */}
            </Container>
        </Layout>
    )
};

export default PLP;

const Sidebar = styled.div`
    width:25%;
    margin-left:5%;
    margin-top:25px;
`

const PropertyCard = styled.div`
    margin: 30px 0;
    width:936px;
    height:250px;
    border: 1px solid #CAD1D3;
    display:flex;
    img {
        max-width:208px;
        height:100%;
        float:left;
    }
`;

const PropertyDetails = styled.div`
    display:block;
    float:left;
    padding: 0 15px;
    h3, p {
        color: #333;
        text-decoration:none;
    }
    h3 {
        text-transform: capitalize;
    }
`;

const Container = styled.div`
    font-familty: sans-serif;
    display: flex;
    justify-content: space-between;
    width:90%;
    margin: 0 auto;
    #plpContainer {
        width:100%;
        display:flex;
    }
    #map  {
        width:50%;
        position:sticky;
        top:121px;
        max-height:calc(100vh - 120px)
    }
`;

const PropertyCardContainer = styled.div`
    width:75%;
    > a {
        width:100%;
        float:left;
        height:250px;
        margin-bottom:45px;
    }
`;

const Header1 = styled.h1`
    font-size: 24px;
    color: #333;
    width:90%;
    display:block;
    margin: 0 auto;
    margin-top:30px;
`;



    // const Codes = CountryCodes.buckets.map(country => {
    //     return country.key.substring(0, 2);
    // })

    // filter down coords that aren't within country
    // const listings = plpData.filter(listing => {
    //     const countryCode = listing.address['Common.Country'].toLowerCase();
    //     console.log(countryCode)
    //     if (Codes.includes(countryCode) || countryName.toLowerCase() === countryCode){
    //         return false;
    //     }

    //     return true;
    // }).map(function(listing) { return listing });

    // This was used to convert the coordinates into a data model compatible with google maps
    // const coordinateArray = plpData.map((listing: any, index: any) => {
    //     let coord = listing.coords;
    //     coord.lng = coord.lon;
    //     delete coord.lon;
    //     return coord;
    // });


    // reduce coordinateArray to only include coords which are within the country