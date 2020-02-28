import React from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShoppingCart from '@material-ui/icons/ShoppingCart';


const formatPrice = (amount, currency) => {
    let price = (amount / 100).toFixed(2)
    let numberFormat = new Intl.NumberFormat(['en-US'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
    })
    return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
    state = {
        disabled: false,
        buttonText: 'ADD TO CART',
        paymentMessage: '',
    }

    resetButton() {
        this.setState({ disabled: false, buttonText: 'ADD ME BABY ONE MORE TIME!' })
    }

    addToCart(event, skuId) {
        event.preventDefault()
        this.setState({ disabled: true, buttonText: 'ADDED...' })
        this.props.addToCart(skuId)
        setTimeout(this.resetButton.bind(this), 500)
    }

    render() {
        const sku = this.props.sku

        return (


            <Card style={{ maxWidth: `345` }} className="shadow rounded">
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" style={{ backgroundColor: red[500], }}>
                            R
          </Avatar>
                    }

                    title={sku.attributes.name}
                    subheader={"Price: " + formatPrice(sku.price, sku.currency)}

                />
                <CardMedia
                    style={{ height: `0`, paddingTop: `56.25%` }}
                    image="gatsby-fut.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>

                    <IconButton aria-label="shopping cart">
                        <ShoppingCart />
                    </IconButton>

                </CardActions>

            </Card>
        )
    }
}

export default SkuCard