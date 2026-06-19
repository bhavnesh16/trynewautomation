# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> End to End Tests >> sample login tests - bhavnesh16@gmail.com
- Location: tests\e2e.spec.ts:15:9

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://eventhub.rahulshettyacademy.com/login
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
  11 |       await this.page.goto(url, { 
  12 |         waitUntil: 'load',
  13 |         timeout: 1200000 
  14 |       });
  15 |     } catch (error) {
  16 |       console.log('Initial navigation failed, retrying with networkidle...');
> 17 |       await this.page.goto(url, { 
     |                       ^ Error: page.goto: net::ERR_ABORTED at https://eventhub.rahulshettyacademy.com/login
  18 |         waitUntil: 'domcontentloaded',
  19 |         timeout: 120000 
  20 |       });
  21 |     }
  22 |   }
  23 |   
  24 |   async fillCredentials(username: string, password: string) 
  25 |   {
  26 |     await Fill(this.page, '#email', username);
  27 |     await Fill(this.page, '#password', password);
  28 |    // await click(this.page, '#login');
  29 |   }
  30 |    async submit() {
  31 |     await click(this.page, 'button:has-text("Sign In")');
  32 |     await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  33 |   }
  34 | 
  35 |   async logoutbutton()
  36 |   {
  37 |      await click(this.page,'button:has-text("Logout")');
  38 |   }
  39 |   // async login(email: string, password: string)
  40 |   // {
  41 |   //  await this.goto();
  42 |   //   await this.fillCredentials(email, password);
  43 |   //   await this.submit();
  44 | 
  45 |   // }
  46 | 
  47 |   
  48 | 
  49 | }
```