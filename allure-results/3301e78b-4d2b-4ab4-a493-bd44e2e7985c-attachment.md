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
  - navigating to "https://eventhub.rahulshettyacademy.com/bookings", waiting until "load"

```

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://eventhub.rahulshettyacademy.com/login", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [active]:
  - generic:
    - status "Loading"
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
  16 |     } catch (error) {
  17 |       console.log('Initial navigation failed, retrying with networkidle...');
> 18 |       await this.page.goto(url, { 
     |                       ^ Error: page.goto: Test ended.
  19 |         waitUntil: 'domcontentloaded',
  20 |         timeout: 120000 
  21 |       });
  22 |     }
  23 |   }
  24 |   
  25 |   async fillCredentials(username: string, password: string) 
  26 |   {
  27 |     await Fill(this.page, '#email', username);
  28 |     await Fill(this.page, '#password', password);
  29 |    // await click(this.page, '#login');
  30 |   }
  31 |    async submit() {
  32 |     await click(this.page, 'button:has-text("Sign In")');
  33 |     await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  34 |   }
  35 | 
  36 |   async logoutbutton()
  37 |   {
  38 |      await click(this.page,'button:has-text("Logout")');
  39 |   }
  40 |   // async login(email: string, password: string)
  41 |   // {
  42 |   //  await this.goto();
  43 |   //   await this.fillCredentials(email, password);
  44 |   //   await this.submit();
  45 | 
  46 |   // }
  47 | 
  48 |   
  49 | 
  50 | }
```