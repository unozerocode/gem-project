import React from 'react'
import SkuCard from '../components/Products/SkuCard'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
const conatinerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '1rem 0 1rem 0',
}
const styGrid = {
    flexWrap: 'wrap',
    padding: '1rem',
}
const stripe_url = 'https://api.stripe.com'

const Skius = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingP: false,
            loadingS:false,
            error: false,
            fetchedData: [],
            fetchedMetadata:[]
        }
    }

    componentDidMount() {
        this.getProducts();
     
    }


    getProducts() {
        fetch(stripe_url + "/v1/skus", {
            method: "GET",
            headers: {
                'Host': 'api.stripe.com',
                'Accept': '*/*',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
                'Authorization': `Bearer ${process.env.GATSBY_STRIPE_S_KEY}`
            }
        }).then(response => {
            return response.json()
        }).then(json => {

            this.setState({
                fetchedData: json.data,
            })
            if (json.data == undefined) {
                console.error("No data returned by Stripe API, check keys");
            }
            console.log("UZ getProducts /skus: " + JSON.stringify(json.data));
            if (this.state.fetchedData.length > 0) {
                try {
                  this.setState({ loadingS: true });
                } catch (e) {
                  console.log("UZ exception getProducts /skus: " + e)
                }
            }
            return json;
        }).catch ((err) => {
            console.log("UZ getProducts Exception: " + err)
        })

        fetch(stripe_url + "/v1/products", {
            method: "GET",
            headers: {
                'Host': 'api.stripe.com',
                'Accept': '*/*',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
                'Authorization': `Bearer ${process.env.GATSBY_STRIPE_S_KEY}`
            }
        }).then(response => {
            return response.json()
        }).then(json => {

            this.setState({
                fetchedMetadata: json.data,
            })
             console.log("UZ getProducts /produts : " + JSON.stringify(json.data));
             if (this.state.fetchedMetadata.length > 0) {
                try {
                  this.setState({ loadingP: true });
                } catch (e) {
                  console.log("UZ setstate exception: " + e)
                }
            }
            return json;
        }).catch ((err) => {
            console.log("UZ getProducts Exception: " + err)
        })

    }

    createSkeleton = () => {
        let table = []


        for (let i = 0; i < 3; i++) {
            table.push(<Grid item key={i} xs={12} sm={6} md={4} style={styGrid}>
                <Box pt={0.5}>
                    <Skeleton variant="text"  />
                    <Skeleton variant="circle" width={40} height={40} />
                    <Skeleton variant="rect" height={100} />
                </Box>
            </Grid>)
        }
        return table
    }
    
    render() {
        const props = this.props;
        const { fetchedData,fetchedMetadata } = this.state


        const getDescription = (idProd) => {

            return fetchedMetadata.find(prod => (prod.id == idProd))

        }
        return (
           <Grid style={conatinerStyles}>
                {(this.state.loadingS && this.state.loadingP) ? (
                    fetchedData.map(sku =>
                        <Grid item key={sku.id} xs={12} sm={6} md={4} style={styGrid}>
                            
                            <SkuCard {...props} sku={sku} product={getDescription(sku.product)}/>

                        </Grid>
                    )

                ) : (
                        this.createSkeleton()
                    )}
            </Grid> 

        )
    }
}

export default Skius