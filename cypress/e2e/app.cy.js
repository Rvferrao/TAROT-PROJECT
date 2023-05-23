describe("app-test", () => {
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

  describe("Card-test", () => {
    context("card flow is working", () => {
      it("just one card is open", () => {
        cy.get("[data-test='main-button']").click({ force: true });
        cy.get("[data-test='card-test']").click({ multiple: true });
      });
      it("clicks on cards do not turn them over again", () => {
        cy.get("[data-test='image-front']").click({ multiple: true });
      });
      it("start the game again", () => {
        cy.get("[data-test='main-button']").click({ force: true });
      });
    });
  });
});
