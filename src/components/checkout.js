import React from "react"
import Button from '@material-ui/core/Button';

import ShoppingCart from '@material-ui/icons/ShoppingCart';

const Checkout = class extends React.Component {
  constructor(props) {
    super(props);

}
  componentDidMount() {
    this.stripe = window.Stripe(process.env.GATSBY_STRIPE_P_KEY)
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    //console.log(`UZ Initializing Stripe with key #{process.env.GATSBY_STRIPE_P_KEY}`)
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: this.props.sku, quantity: 1 }],
      successUrl: `https://twofishtravel.com/success/`,
      cancelUrl: `https://twofishtravel.com`
    })

    if (error) {
      console.warn("UZ Error:", error)
    }
  }

  render() {
   
    return (
  
       <Button size="large" color="primary" onClick={event => this.redirectToCheckout(event)}>
       <ShoppingCart />
       </Button>
    )
  }
}

export default Checkout