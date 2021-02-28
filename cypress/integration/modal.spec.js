describe('Modal', () => {
  it('dynamically loads a modal', () => {
    cy.intercept('chunks/modal', (req) => {
      req.reply((res) => {
        res.delay(100);
      });
    }).as('modal');

    cy.visit('/');

    cy.findByRole('button', { name: /load/i }).click();

    cy.findByRole('button', { name: /open modal/i }).should(($el) => {
      expect($el).to.have.attr('disabled');
    });

    cy.wait('@modal');

    cy.findByRole('button', { name: /open modal/i }).should(($el) => {
      expect($el).to.not.have.attr('disabled');
    });
  });
});
