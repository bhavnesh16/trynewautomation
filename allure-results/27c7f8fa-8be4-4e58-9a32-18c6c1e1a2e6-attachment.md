# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> End to End Tests >> Admin manage booking End to End Tests
- Location: tests\e2e.spec.ts:191:6

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://eventhub.rahulshettyacademy.com/admin/bookings", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { Page,Expect } from '@playwright/test';
  2  | import { click, Fill, ExpectVisible,selectDropdownValue, selectDateTime } from '../utill/ui';
  3  | 
  4  | export class managebookingpage {
  5  |     readonly page: Page;
  6  |     readonly expect: Expect;
  7  |     constructor(page: Page, expect: Expect) 
  8  |     {
  9  |         this.page = page;
  10 |         this.expect = expect;
  11 |     }
  12 | 
  13 |     async navigatemanagerbooking()
  14 |     {
  15 |            try {
  16 |         console.log('Starting navigation to admin events...');
  17 |         console.log('Current URL before navigation:', this.page.url());
  18 |         
> 19 |         await this.page.goto(
     |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  20 |   'https://eventhub.rahulshettyacademy.com/admin/bookings',
  21 |   {
  22 |     waitUntil: 'domcontentloaded',
  23 |     timeout: 60000
  24 |   }
  25 | );
  26 |         console.log('Navigation successful, URL:', this.page.url());
  27 |         await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  28 |         
  29 |       } catch (error) {
  30 |         console.error('Navigation failed:', (error as Error).message);
  31 |         console.log('Current URL on error:', this.page.url());
  32 |         throw error;
  33 |       }
  34 |    
  35 |          
  36 |     const actualValues = await this.page
  37 |     .locator('div select option')
  38 |     .allTextContents();
  39 | 
  40 | console.log(actualValues);
  41 | 
  42 | this.expect(actualValues).toEqual([
  43 |     'All Statuses',
  44 |     'confirmed',
  45 |     'cancelled',
  46 | ]);
  47 | await click(this.page,'div button>:nth-child(4)');
  48 | await this.page.waitForTimeout(10000); 
  49 | await click(this.page,'div button>:nth-child(6)');
  50 | await this.page.waitForTimeout(10000); 
  51 | await click(this.page,'div button>:nth-child(5)');
  52 | await this.page.waitForTimeout(10000); 
  53 | await click(this.page,'div button>:nth-child(8)');
  54 | await this.page.waitForTimeout(10000); 
  55 | await ExpectVisible(this.page,'div :has-text("No bookings found")');
  56 | await this.page.waitForTimeout(10000); 
  57 | }
  58 | }
```