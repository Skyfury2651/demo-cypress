describe('Phần 3: Khẳng định (Assertions)', () => {
    beforeEach(() => {
        cy.visit('/section-3-assertions/index.html')
    })

    it('nên xác minh được trạng thái và thuộc tính của thành phần', () => {
        // Hiển thị
        cy.get('#visible-text').should('be.visible')
        cy.get('#hidden-text').should('not.be.visible')

        // Bật/Tắt (Enabled/Disabled)
        cy.get('#enabled-btn').should('be.enabled')
        cy.get('#disabled-btn').should('be.disabled')

        // Xác minh thuộc tính
        cy.get('#link')
            .should('have.attr', 'href', 'https://cypress.io')
            .and('have.text', 'Liên kết Cypress')

        // Danh sách mục
        cy.get('#fruit-list li').should('have.length', 3)
        cy.get('#fruit-list li').first().should('have.text', 'Táo (Apple)')
    })
})
