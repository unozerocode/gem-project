import React from "react"
import Button from '@material-ui/core/Button';


const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe(process.env.stripe_p_key)
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_GgeLeWOYKm3wya", quantity: 1 }],
      successUrl: `https://${process.env.gatsby_api_url}/page-2/`,
      cancelUrl: `https://${process.env.gatsby_api_url}`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
  
       <Button variant="contained" color="primary" onClick={event => this.redirectToCheckout(event)}>
       Buy Tour
       <span className="material-icons">shopping_cart</span>
       </Button>
    )
  }
}

export default Checkout