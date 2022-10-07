describe('Тестирование добавления товаров в корзину wildberries.ru', function () {
    it('Дохожу до корзины в wildberries', function () {
        cy.visit('https://www.wildberries.ru/');
        cy.get('#searchInput').click();
        cy.get('#searchInput').type('macbook').type('{enter}');
        cy.wait(2000);
        cy.get('#c119531698').click();
        cy.wait(3000);
        cy.scrollTo(0, 1200);
        cy.get('.product-line__btn-group > .btn-main').click();
        cy.get('.product-line__btn-group > .btn-base').click();
        cy.contains('Заказать');
    })
})