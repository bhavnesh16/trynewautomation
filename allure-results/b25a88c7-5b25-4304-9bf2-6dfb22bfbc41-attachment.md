# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> cancel the booking
- Location: tests\e2e.spec.ts:56:5

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://eventhub.rahulshettyacademy.com/bookings
Call log:
  - navigating to "https://eventhub.rahulshettyacademy.com/bookings", waiting until "domcontentloaded"

```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://eventhub.rahulshettyacademy.com/login", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | import { click, Fill, ExpectVisible } from '../utill/ui';
  3  | 
  4  | export class loginpage {
  5  |   readonly page: Page;
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  |   }
  9  |   async goto(url: string ) {
  10 |     try {
  11 |       console.log('Initial navigation...' + url);
  12 |       await this.page.goto(url, { 
  13 |         waitUntil: 'load',
  14 |         timeout: 2000000 
  15 |       });
  16 |       await this.page.waitForTimeout(50000);
  17 |     } catch (error) {
  18 |       console.log('Initial navigation failed, retrying with networkidle...');
> 19 |       await this.page.goto(url, { 
     |                       ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  20 |         waitUntil: 'domcontentloaded',
  21 |         timeout: 200000 
  22 |       });
  23 |     }
  24 |   }
  25 |   
  26 |   async fillCredentials(username: string, password: string) 
  27 |   {
  28 |     await Fill(this.page, '#email', username);
  29 |     await Fill(this.page, '#password', password);
  30 |    // await click(this.page, '#login');
  31 |   }
  32 |    async submit() {
  33 |     await click(this.page, 'button:has-text("Sign In")');
  34 |     await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  35 |   }
  36 | 
  37 |   async logoutbutton()
  38 |   {
  39 |      await click(this.page,'button:has-text("Logout")');
  40 |   }
  41 |   // async login(email: string, password: string)
  42 |   // {
  43 |   //  await this.goto();
  44 |   //   await this.fillCredentials(email, password);
  45 |   //   await this.submit();
  46 | 
  47 |   // }
  48 | 
  49 |   
  50 | 
  51 | }
```