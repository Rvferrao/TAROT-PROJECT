describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.request(
      "GET",
      "https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json"
    );
  });

  it("the h1 contains the correct text", () => {
    cy.get("[data-test='tarot-text']").contains("TAROT GAME").click();
  });

  it("the button is working correctly", () => {
    cy.get("[data-test='main-button']").click({ force: true });
  });
});
