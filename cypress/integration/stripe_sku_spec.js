describe('Loads products', function() {
    it('successfully loads skus from sstripe', function() {
      cy.visit("/")
      cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActionArea-root > .MuiCardContent-root > .d-flex > .MuiTypography-root').contains("3 Day Tour")
    })
  })