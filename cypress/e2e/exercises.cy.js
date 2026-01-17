describe('Bài tập Thực hành', () => {

    it.skip('Bài tập 1: Selectors - Tìm "Selector Bảo mật"', () => {
        cy.visit('/section-1-basics/index.html')
        // TODO: Viết lệnh để tìm nút có data-cy="submit-button"
        // và xác minh nó có văn bản "Selector Bảo mật"
    })

    it.skip('Bài tập 2: Hành động - Điền biểu mẫu', () => {
        cy.visit('/section-2-actions/index.html')
        // TODO: 
        // 1. Nhập tên của bạn vào trường tên
        // 2. Chọn "Nam" hoặc "Nữ"
        // 3. Chọn "Anh (UK)" từ danh sách quốc gia
        // 4. Đánh dấu vào ô đồng ý điều khoản
        // 5. Nhấn nút gửi
        // 6. Khẳng định rằng thông báo thành công hiển thị
    })

    it.skip('Bài tập 3: Khẳng định - Xác minh trạng thái', () => {
        cy.visit('/section-3-assertions/index.html')
        // TODO:
        // 1. Xác minh rằng "Nút đang tắt" thực sự bị tắt
        // 2. Xác minh rằng danh sách trái cây có đúng 3 mục
    })


    it('Bài tập 4: Real world example', () => {
        cy.visit('https://example.cypress.io/')

        cy.get('#utilities:first').should('have.text', 'Commands');
    })

    it('Bài tập 5: Real world example', () => {
        cy.visit('https://example.cypress.io/')

        cy.get('#utilities:first>h2').should('have.text', 'Commands');
    })
})
