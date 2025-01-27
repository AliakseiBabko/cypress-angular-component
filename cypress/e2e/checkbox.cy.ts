describe('Checkbox Component in Storybook', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=example-checkbox--default');
  });

  it('should display the checkbox with the correct label', () => {
    cy.get('mat-checkbox').should('contain.text', 'I agree');
  });

  it('should toggle the checkbox state when clicked', () => {
    cy.get('mat-checkbox').click();
    cy.get('mat-checkbox input').should('be.checked');
  });
});