import { Page, expect } from '@playwright/test';
import { click, Fill, ExpectVisible } from '../utill/ui';
export class eventpage 
{
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
}
async navigatetoevent ()
{
 // Navigate to events page using URL
 await this.page.goto('https://eventhub.rahulshettyacademy.com/events', { timeout: 30000 });
 //await click(this.page, 'a:has-text("Events")');
}
async searchevent()
{
  await Fill(this.page,'input[placeholder="Search events, venues…"]','Dilli Diwali Mela');
  await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  await ExpectVisible(this.page,'div a h3', 30000);
  await click(this.page,'button:has-text("Clear filters")');
  await this.page.waitForLoadState('networkidle', { timeout: 60000 });
}

async openeventpage()
{
    // Click on the event link - "Dilli Diwali Mela"
    await click(this.page, 'a:has-text("Dilli Diwali Mela")');
    await this.page.waitForLoadState('networkidle', { timeout: 60000 });
}

async validatetheclientsideerror()
{
    // Click on the "Book Now" button without filling the form
    await click(this.page, 'button:has-text("+")');
    await click(this.page, 'button:has-text("Confirm Booking")');
    await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    await expect(this.page.locator('p:has-text("Name must be at least 2 chars")')).toBeVisible();
    await expect(this.page.locator('p:has-text("Enter a valid email")')).toBeVisible();
    await expect(this.page.locator('p:has-text("Enter a valid 10-digit phone")')).toBeVisible();
    
    console.log('✓ Client-side validation errors are visible');
}
async formfill(Name: string , Email: string,Phone: string)
{
       // Fill the booking form fields using IDs
       await Fill(this.page, '#customerName', Name);
       await Fill(this.page, '#customer-email', Email);
       await Fill(this.page, '#phone', Phone);
       await click(this.page, 'button:has-text("Confirm Booking")');
       await ExpectVisible(this.page, 'text=Booking Confirmed', 30000);
       //await this.page.waitForTimeout(10000); // Wait for the confirmation message to be visible
}
}