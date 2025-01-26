import { AppComponent } from '../../src/app/app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { mount } from 'cypress/angular';

describe('Checkbox State Tests', () => {
  beforeEach(() => {
    mount(AppComponent, {
      imports: [MatCheckboxModule],
    });
  });

  it('should display the correct label text', () => {
    cy.get('mat-checkbox').should('contain.text', 'I agree');
  });

  it('should be unchecked by default', () => {
    cy.get('mat-checkbox input').should('not.be.checked');
  });

  it('should toggle state when clicked', () => {
    cy.get('mat-checkbox').click();
    cy.get('mat-checkbox input').should('be.checked');

    cy.get('mat-checkbox').click();
    cy.get('mat-checkbox input').should('not.be.checked');
  });

  it('should toggle state after two clicks and return to unchecked', () => {
    cy.get('mat-checkbox').click().click();
    cy.get('mat-checkbox input').should('not.be.checked');
  });
});