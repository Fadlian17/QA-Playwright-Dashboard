import { test, expect } from '@playwright/test';

// UI components test

// Hook & Flow Control
test.beforeEach(async ({ page }) => {
    // Increase the timeout for this hook
    test.setTimeout(60000); // Set timeout to 60 seconds

    // Navigate to the base URL before each test
    await page.goto('http://localhost:4200/');
});

test.describe('Form Layout Page', () => {
    test.beforeEach(async ({ page }) => {
        // Increase the timeout for this hook
        test.setTimeout(60000); // Set timeout to 60 seconds

        // Navigate to the 'Form Layouts' page before each test in this describe block
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
    });

    test('input fields', async ({ page }) => {
        // Locate the email input field within the 'Using The Grid' card
        const usingTheGridEmailInput = page.locator('nb-card', { hasText: 'Using The Grid' }).getByRole('textbox', { name: 'Email' });

        // Fill the email input field with a test email
        await usingTheGridEmailInput.fill('test@playwright.com');
        await usingTheGridEmailInput.clear(); // Clear the input field
        await usingTheGridEmailInput.type('test2@playwright.com', { delay: 500 }); // Type with delay

        // Generic assertion
        const inputValue = await usingTheGridEmailInput.inputValue();
        expect(inputValue).toEqual('test2@playwright.com');

        // Locator assertion
        await expect(usingTheGridEmailInput).toHaveValue('test2@playwright.com');
    });


    test('radio buttons options', async ({ page }) => {
        // Locate the 'Using The Grid' form card
        const usingTheGridForm = page.locator('nb-card', { hasText: 'Using The Grid' });
    
        // Check 'Option 1' radio button and verify its status
        const option1Radio = usingTheGridForm.getByRole('radio', { name: 'Option 1' });
        await option1Radio.check({ force: true });
        await expect(option1Radio).toBeChecked(); // Assert that 'Option 1' is checked
    
        // Check 'Option 2' radio button and verify the status of both options
        const option2Radio = usingTheGridForm.getByRole('radio', { name: 'Option 2' });
        await option2Radio.check({ force: true });
        await expect(option1Radio).not.toBeChecked(); // Assert that 'Option 1' is not checked
        await expect(option2Radio).toBeChecked(); // Assert that 'Option 2' is checked
    });
});
