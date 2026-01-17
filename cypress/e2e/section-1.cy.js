describe('Phần 1: Selectors & Cơ bản', () => {
    beforeEach(() => {
        // Truy cập trang phần 1
        cy.visit('/section-1-basics/index.html')
    })

    it('nên tìm được các thành phần bằng các selector khác nhau', () => {
        // Theo ID
        cy.get('#main-title').should('contain', 'Tìm theo ID')

        // Theo Class
        cy.get('.btn-primary').should('have.text', 'Nút với Class')

        // Theo Attribute
        cy.get('[name="username"]').should('have.attr', 'placeholder', 'Nhập tên đăng nhập')

        // Theo Data Attribute (Best Practice)
        cy.get('[data-cy="submit-button"]').should('exist')

        // Theo Nội dung văn bản
        cy.contains('Tìm đoạn văn').should('be.visible')
    })
})
