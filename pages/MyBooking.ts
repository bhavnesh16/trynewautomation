import { Page } from '@playwright/test';
import { click, Fill, ExpectVisible } from '../utill/ui';


export class MyBooking {
  readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigatetomybooking()
    {
        try {
            console.log('Navigating to My Bookings page...');
            await this.page.goto('https://eventhub.rahulshettyacademy.com/bookings', { 
                waitUntil: 'domcontentloaded',
                timeout: 30000 
            });
            console.log('Successfully navigated to:', this.page.url());
            await this.page.waitForLoadState('networkidle', { timeout: 60000 });
        } catch (error) {
            console.error('Navigation to My Bookings failed:', error instanceof Error ? error.message : String(error));
            throw error;
        }
    }

    async cancelbooking()
    {
        await click(this.page, 'button:has-text("Cancel Booking")');
        await this.page.waitForTimeout(2000); //
        await click(this.page,'button:has-text("Yes, cancel it")')// it for the cancellation to process
        await ExpectVisible(this.page, 'text=Booking cancelled successfully', 30000);
    }
    async cancelallbookings()
    {
        try {
            await this.page.screenshot({ path: 'test-results/before-cancel-all.png' });
            
            console.log('Looking for "Clear all bookings" button...');
            const clearAllButton = this.page.locator('button:has-text("Clear all bookings")');
            
            if (await clearAllButton.count() === 0) {
                throw new Error('Could not find "Clear all bookings" button');
            }
            
            console.log('✓ Found "Clear all bookings" button');
            
            // Set up dialog handler before clicking
            let dialogHandled = false;
            this.page.once('dialog', async (dialog) => {
                console.log('Dialog appeared:', dialog.message());
                await dialog.accept();
                dialogHandled = true;
            });
            
            // Click the button
            await clearAllButton.click({ timeout: 5000 });
            console.log('✓ Button clicked');
            
            // Wait briefly for dialog to appear
            await this.page.waitForTimeout(1000);
            if (dialogHandled) {
                console.log('✓ Dialog accepted');
            }
            
            // Wait for the page to update after cancellation
            await this.page.waitForTimeout(2000);
            
            // Verify success
            const successMessage = this.page.locator('text=No bookings yet');
            await successMessage.waitFor({ timeout: 15000 });
            
            await this.page.screenshot({ path: 'test-results/after-clear-all-bookings.png' });
            console.log('✓ Success! All bookings cleared. "No bookings yet" message confirmed.');
            
        } catch (error) {
            console.error('Error during cancelallbookings:', error instanceof Error ? error.message : String(error));
            await this.page.screenshot({ path: 'test-results/error-cancel-all.png' });
            throw error;
        }
    }
}
