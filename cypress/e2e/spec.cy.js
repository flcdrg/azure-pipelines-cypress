describe("David Blog", () => {
  it("Navigates to Speaking section", () => {
    cy.visit("https://david.gardiner.net.au");
    cy.contains("Speaking").click();
    cy.url().should("include", "/speaking");
  });

  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Oh dear", () => {
    cy.screenshot();
    expect(true).to.equal(false);
  });
});
