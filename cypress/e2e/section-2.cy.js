describe('Phần 2: Hành động & Tương tác', () => {
    beforeEach(() => {
        cy.visit('/section-2-actions/index.html')
    })

    it('nên tương tác được với các thành phần biểu mẫu khác nhau', () => {
        // Nhập văn bản
        cy.get('#name').type('Antigravity').should('have.value', 'Antigravity')

        // Nút Radio
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

        // Danh sách thả xuống (Dropdown)
        cy.get('#country').select('Việt Nam').should('have.value', 'vn')

        // Ô đánh dấu (Checkbox)
        cy.get('#terms').check().should('be.checked')

        // Nhấn chuột (Click)
        cy.get('#submit-btn').click()

        // Kiểm tra kết quả
        cy.get('#success').should('be.visible').and('contain', 'thành công')
    })
})
