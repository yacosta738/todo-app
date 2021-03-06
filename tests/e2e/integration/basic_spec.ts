// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
    it('Shows correct text', () => {
        cy.visit('/')

        cy.contains('h1', '#todo')
    })
})

describe('Todos', () => {
    it('Add a todo', () => {
        cy.visit('/')

        cy.get('input[name=todo]').type('Buy milk')
        cy.get('button[type=submit]').click()

        cy.contains('li', 'Buy milk')
    })

    it('Check a todo', () => {
        cy.visit('/')

        cy.get('input[name=todo]').type('Buy beer')
        cy.get('button[type=submit]').click()

        cy.contains('li', 'Buy beer')

        // Select the checkbox with label "Buy beer"
        cy.get('input[type=checkbox]').check()

        // Check that the todo is checked
        cy.get('input[type=checkbox]').should('be.checked')
    })
})

describe('Completed Tab', () => {
    it('Shows completed todos', () => {
        cy.visit('/')

        cy.get('input[name=todo]').type('Buy milk')
        cy.get('button[type=submit]').click()

        cy.get('input[name=todo]').type('Buy beer')
        cy.get('button[type=submit]').click()

        cy.get('input[type=checkbox]').check()

        cy.contains('li', 'Completed').click()

        // the ul with id 'all-todos' should have 1 elements
        cy.get('ul#all-todos').should('have.length', 1)
    })
})

