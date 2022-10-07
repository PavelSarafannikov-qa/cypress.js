describe('Тестирование поиска вакансий на hh.ru', function () {

    it('Поиск по тексту "qa" выводит вакансии для тестировщиков', function () {
        cy.visit('https://kazan.hh.ru/');
        cy.get('.bloko-input-text_scale-large').type('qa').type('{enter}');
        cy.get(':nth-child(6) > .novafilters-group-wrapper > .novafilters-group__items > .novafilters-list > .novafilters-list__item > ').click();
        cy.contains('Тестировщик')
    })
})