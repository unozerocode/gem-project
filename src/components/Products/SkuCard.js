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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Checkout from "../checkout"
import CardActionArea from '@material-ui/core/CardActionArea';


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
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
    }

    handleClickOpen() {
        this.setState({ open: !this.state.open });
    };
    render() {
        const sku = this.props.sku
        const prod = this.props.product

        return (

            <Card style={{ maxWidth: `345` }} className="shadow rounded">

                <CardActionArea onClick={this.handleClickOpen}>

                    <CardMedia
                        style={{ height: `0`, paddingTop: `56.25%` }}
                        image={sku.image}
                        title={sku.attributes.name}
                    />
                    <CardContent>
                        <div className="d-flex justify-content-start ">
                            <Typography gutterBottom variant="h5" component="h2" >
                                {sku.attributes.name}
                            </Typography>

                        </div>
                        <Typography variant="body2" color="textSecondary" component="p" className="text-justify block-with-text">
                            {prod.metadata.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="d-flex justify-content-around">


                    <Typography variant="body2" color="textSecondary" component="p" >
                        <li>5 dias</li>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" >
                        {formatPrice(sku.price, sku.currency)}
                    </Typography>
                    <Checkout sku={sku.id}/>
                </CardActions>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClickOpen}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{sku.attributes.name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {prod.metadata.description}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                       
                        <Button onClick={this.handleClickOpen} color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>

        )
    }
}

export default SkuCard