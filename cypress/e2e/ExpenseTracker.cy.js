/// <reference types="cypress" />

describe("Expense Tracker ", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.get("input[placeholder='Expense description']").type(
            "test expense 1"
        );
        cy.get("input[placeholder='Amount']").type("1000");
        cy.get("select").select("mortgage").should("have.value", "mortgage");

        cy.get("button").contains("Add Expense").click();
    });

    it("should display the different components ", () => {
        cy.contains("Expense tracker");
        cy.get('[data-testid="add-expense"]').should("exist");
        cy.get('[data-testid="filter-expense"]').should("exist");
        cy.get('[data-testid="list-expense"]').should("exist");
        cy.get('[data-testid="breakdown-expense"]').should("exist");
    });

    it("should add an expense ", () => {
        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").first().should("have.text", "mortgage");
            });
        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").eq(1).should("have.text", "£1000");
            });
        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").last().should("have.text", "test expense 1");
            });
        cy.get("ul li").should("have.length", 2);
    });

    it("should delete an expense ", () => {
        cy.get("ul li").should("have.length", 2);
        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("button").contains("Delete").should("have.length", 1);
                cy.get("button").contains("Delete").click();
            });
        cy.get("ul li").should("have.length", 1);
    });

    it("should edit an expense ", () => {
        cy.get("ul li").should("have.length", 2);
        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("button").contains("Edit").should("have.length", 1);
            });
        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("button").contains("Edit").click();
            });

        cy.get(".modal-body #expenseDesc").last().type("Edited");
        cy.get(".modal-body #expenseAmount").last().type("1");
        cy.get(".modal-body select")
            .last()
            .select("food")
            .should("have.value", "food");
        cy.get("button.btn.btn-primary")
            .last()
            .should("have.text", "Save Changes")
            .click();

        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").first().should("have.text", "food");
                cy.get("p").eq(1).should("have.text", "£1");
                cy.get("p").last().should("have.text", "Edited");
            });
    });

    it("should filter the expense by time ", () => {
        cy.get("ul li").should("have.length", 2);

        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").first().should("have.text", "mortgage");
            });
        cy.get("ul li")
            .first()
            .within(() => {
                cy.get("p").first().should("have.text", "initial");
            });

        cy.get('[data-testid="filter-expense"]').within(() => {
            cy.get("button").first().contains("Time").click();
        });

        cy.get("ul li")
            .first()
            .within(() => {
                cy.get("p").first().should("have.text", "mortgage");
            });
        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").first().should("have.text", "initial");
            });
    });

    it("should filter the expense by amount ", () => {
        cy.get("ul li").should("have.length", 2);

        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").first().should("have.text", "mortgage");
            });
        cy.get("ul li")
            .first()
            .within(() => {
                cy.get("p").first().should("have.text", "initial");
            });

        cy.get('[data-testid="filter-expense"]').within(() => {
            cy.get("button").eq(1).contains("Amount").click();
        });

        cy.get("ul li")
            .first()
            .within(() => {
                cy.get("p").first().should("have.text", "mortgage");
            });
        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").first().should("have.text", "initial");
            });
    });

    it("should filter the expense by type ", () => {
        cy.get("ul li").should("have.length", 2);

        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").first().should("have.text", "mortgage");
            });
        cy.get("ul li")
            .first()
            .within(() => {
                cy.get("p").first().should("have.text", "initial");
            });

        cy.get('[data-testid="filter-expense"]').within(() => {
            cy.get("button").last().contains("Type").click();
        });

        cy.get("ul li")
            .first()
            .within(() => {
                cy.get("p").first().should("have.text", "mortgage");
            });
        cy.get("ul li")
            .last()
            .within(() => {
                cy.get("p").first().should("have.text", "initial");
            });
    });
});
