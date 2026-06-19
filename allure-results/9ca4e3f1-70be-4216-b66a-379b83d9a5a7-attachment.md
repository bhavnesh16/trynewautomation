# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> End to End Tests >> sample event booking test
- Location: tests\e2e.spec.ts:44:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('p:has-text("Name must be at least 2 chars")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('p:has-text("Name must be at least 2 chars")')

```

# Page snapshot

```yaml
- alert [ref=e2]
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { click, Fill, ExpectVisible } from '../utill/ui';
  3  | export class eventpage 
  4  | {
  5  |   readonly page: Page;
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  | }
  9  | async navigatetoevent ()
  10 | {
  11 |  // Navigate to events page using URL
  12 |  await this.page.goto('https://eventhub.rahulshettyacademy.com/events', { timeout: 30000 });
  13 |  //await click(this.page, 'a:has-text("Events")');
  14 | }
  15 | async searchevent()
  16 | {
  17 |   await Fill(this.page,'input[placeholder="Search events, venues…"]','Dilli Diwali Mela');
  18 |   await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  19 |   await ExpectVisible(this.page,'div a h3', 30000);
  20 |   await click(this.page,'button:has-text("Clear filters")');
  21 |   await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  22 | }
  23 | 
  24 | async openeventpage()
  25 | {
  26 |     // Click on the event link - "Dilli Diwali Mela"
  27 |     await click(this.page, 'a:has-text("Dilli Diwali Mela")');
  28 |     await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  29 | }
  30 | 
  31 | async validatetheclientsideerror()
  32 | {
  33 |     // Click on the "Book Now" button without filling the form
  34 |     await click(this.page, 'button:has-text("+")');
  35 |     await click(this.page, 'button:has-text("Confirm Booking")');
  36 |     await this.page.waitForLoadState('networkidle', { timeout: 60000 });
> 37 |     await expect(this.page.locator('p:has-text("Name must be at least 2 chars")')).toBeVisible();
     |                                                                                    ^ Error: expect(locator).toBeVisible() failed
  38 |     await expect(this.page.locator('p:has-text("Enter a valid email")')).toBeVisible();
  39 |     await expect(this.page.locator('p:has-text("Enter a valid 10-digit phone")')).toBeVisible();
  40 |     
  41 |     console.log('✓ Client-side validation errors are visible');
  42 | }
  43 | async formfill(Name: string , Email: string,Phone: string)
  44 | {
  45 |        // Fill the booking form fields using IDs
  46 |        await Fill(this.page, '#customerName', Name);
  47 |        await Fill(this.page, '#customer-email', Email);
  48 |        await Fill(this.page, '#phone', Phone);
  49 |        await click(this.page, 'button:has-text("Confirm Booking")');
  50 |        await ExpectVisible(this.page, 'text=Booking Confirmed', 30000);
  51 |        //await this.page.waitForTimeout(10000); // Wait for the confirmation message to be visible
  52 | }
  53 | }
```