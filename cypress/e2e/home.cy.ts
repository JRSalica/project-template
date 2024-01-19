describe("home spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/home");
    cy.get("h1").should("have.text", "Home");
  });
});
