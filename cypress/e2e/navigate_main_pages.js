describe("navigation", () => {
  it("should work correctly", () => {
    cy.visit("/");
    cy.getByText(/about/i).click();
    cy.contains("about me");
    cy.getByText(/blog/i).click();
    cy.contains("my blog");
    cy.getByText(/contact/i).click();
    cy.contains("contact me");
    cy.getByText(/home/i).click();
    cy.contains("homepage");
  });
});
