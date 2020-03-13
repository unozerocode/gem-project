
import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby'
import Fab from '@material-ui/core/Fab';
import ArrowBack from '@material-ui/icons/ArrowBack';


const stylesStripe = makeStyles(theme => ({

  stripeStyle: {
    backgroundColor: '#f7f8f9',
  },
  stripeElement: {
    height: '40px',
    padding: '10px 12px',
    color: '#32325d',
    backgroundColor: 'white',
    border: '1px solid transparent',
    borderRadius: '4px',
    boxShadow: '0 1px 3px 0 #e6ebf1',
    transition: 'box-shadow 150ms ease',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '&::placeholder': {
      color: '#aab7c4'
    },
    '&:focus': { boxShadow: '0 0px 3px  #93CEFF', outline: `none` },
  },
  stripeButton: {
    display: 'inline-block',
    height: '40px',
    width: '100%',
    marginTop: '40px',
    fontSize: '15px',
    fontWeight: '600',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    backgroundColor: '#32325d',
    border: 'none',
    '&:focus': { boxShadow: '0 1px 3px 0 #cfd7df', outline: `none` },
    '&:hover': { backgroundColor: '#32327d', outline: `none` },
  }

}));
const SecondPage = () => {
  const classes = stylesStripe();


  return (
    <Layout>
      <SEO title="Data form" />

      <Container component="section" maxWidth={false} className={`section-50 section-md-top-70 ${classes.stripeStyle}`}>

        <Container component="div" maxWidth="md">
          <div className="pb-3"><Link to="/" style={{ textDecoration: `none` }}>
            <Fab color="primary" aria-label="add">
              <ArrowBack />
            </Fab>
          </Link></div>
          <Box p={2} display="block" justifyContent="center">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input type="email" className={`form-control ${classes.stripeElement}`} id="inputEmail4" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Password</label>
                  <input type="password" className={`form-control ${classes.stripeElement}`} id="inputPassword4" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className={`form-control ${classes.stripeElement}`} id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className={`form-control ${classes.stripeElement}`} id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" className={`form-control ${classes.stripeElement}`} id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>

                  <select id="inputState" className={`form-control ${classes.stripeElement}`}>
                    <option defaultValue value="Choose...">Choose...</option>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" className={`form-control ${classes.stripeElement}`} id="inputZip" />
                </div>
              </div>
              <div className="d-flex">
                <div className="custom-control custom-checkbox my-1 mr-sm-2 col-sm-6 col-lg-4">
                  <input type="checkbox" className="custom-control-input" id="customControlInline1" />
                  <label className="custom-control-label" htmlFor="customControlInline1">Remember</label>
                </div>
                <div className="custom-control custom-checkbox my-1 mr-sm-2  col-sm-6 col-lg-4">
                  <input type="checkbox" className="custom-control-input" id="customControlInline2" />
                  <label className="custom-control-label" htmlFor="customControlInline2">Referece </label>
                </div>
                <div className="custom-control custom-checkbox my-1 mr-sm-2 col-sm-6 col-lg-6">
                  <input type="checkbox" className="custom-control-input" id="customControlInline3" />
                  <label className="custom-control-label" htmlFor="customControlInline3">Remember</label>
                </div>
                <div className="custom-control custom-checkbox my-1 mr-sm-2 col-sm-6 col-lg-4">
                  <input type="checkbox" className="custom-control-input" id="customControlInline4" />
                  <label className="custom-control-label" htmlFor="customControlInline4">Referece </label>
                </div>
              </div>
              <button type="submit" className={`btn btn-primary ${classes.stripeButton}`}>Sign in</button>
            </form>
          </Box>
        </Container>
      </Container>
    </Layout>
  )

}

export default SecondPage