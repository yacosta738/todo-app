// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('Shows correct text', () => {
    cy.visit('/')

    cy.contains('h1', '#todo')
  })
})

describe('Add todo', () => {
  it('Adds a todo', () => {
    cy.visit('/')

    cy.get('input[name=todo]').type('Buy milk')
    cy.get('button[type=submit]').click()

    cy.contains('li', 'Buy milk')
  })
})
