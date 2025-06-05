describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})

describe('David Blog', () => {
  it('Navigates to Speaking section', () => {
    cy.visit('https://david.gardiner.net.au')
    cy.contains('Speaking').click()
    cy.url().should('include', '/speaking')
  })
})