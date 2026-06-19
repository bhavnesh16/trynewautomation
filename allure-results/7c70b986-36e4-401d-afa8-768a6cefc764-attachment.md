# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> End to End Tests >> Admin manage booking End to End Tests
- Location: tests\e2e.spec.ts:191:6

# Error details

```
Error: page.waitForTimeout: Test ended.
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
  15 |          await click(this.page,'a button :has-text("Manage Bookings")');
> 16 |          await this.page.waitForTimeout(10000); 
     |                          ^ Error: page.waitForTimeout: Test ended.
  17 |          
  18 |     const actualValues = await this.page
  19 |     .locator('div select option')
  20 |     .allTextContents();
  21 | 
  22 | console.log(actualValues);
  23 | 
  24 | this.expect(actualValues).toEqual([
  25 |     'All Statuses',
  26 |     'confirmed',
  27 |     'cancelled',
  28 | ]);
  29 | await click(this.page,'div button>:nth-child(4)');
  30 | await this.page.waitForTimeout(10000); 
  31 | await click(this.page,'div button>:nth-child(6)');
  32 | await this.page.waitForTimeout(10000); 
  33 | await click(this.page,'div button>:nth-child(5)');
  34 | await this.page.waitForTimeout(10000); 
  35 | await click(this.page,'div button>:nth-child(8)');
  36 | await this.page.waitForTimeout(10000); 
  37 | await ExpectVisible(this.page,'div :has-text("No bookings found")');
  38 | await this.page.waitForTimeout(10000); 
  39 | }
  40 | }
```