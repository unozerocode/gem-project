
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Cart from '../components/Cart'
import Skus from '../components/Products/Skus'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
const AdvancedExamplePage = () => (
  <Layout>
    <SEO title="Advanced Example" />

    <Container component="section" maxWidth={false} className="section-80 section-md-top-70 bg-white">
      <Container component="div" maxWidth="lg">
        <Box p={2} display="block" justifyContent="center">
          <h1>This is the advanced example</h1>
          <h2>With multiple variants and easy cart functionality</h2>
          <Cart>
            <Skus />
          </Cart>

          <Link to="/" style={{ textDecoration: `none` }}>
            <Button variant="contained" >
              <span className="material-icons">arrow_back</span>
              Go back to the easy example
       </Button>
          </Link>
        </Box>
      </Container>
    </Container>
  </Layout>
)

export default AdvancedExamplePage