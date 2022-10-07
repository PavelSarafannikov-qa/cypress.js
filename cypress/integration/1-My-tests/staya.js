
describe('Тестирование staya', function () {
    
    it('Позитивный кейс авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('nuu.vot@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('@blya@BLYA@42');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__aside--link').click();
        cy.get('.box__button_ok').click();
        })

    it('Негативный кейс авторизации с неправильным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('nuu.vot@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('@blya@BLYA42');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        })

})
