describe('a11y checkes', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
    cy.wait(500);
  });
  it('has no detectable a11y violations on load', () => {
    cy.checkA11y();
  });
});
