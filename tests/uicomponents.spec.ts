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
});
