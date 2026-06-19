# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> End to End Tests >> sample event booking test
- Location: tests\e2e.spec.ts:33:9

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://eventhub.rahulshettyacademy.com/login
Call log:
  - navigating to "https://eventhub.rahulshettyacademy.com/login", waiting until "load"

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
> 10 |     await this.page.goto(url,{ timeout: 100000 });
     |                     ^ Error: page.goto: net::ERR_ABORTED at https://eventhub.rahulshettyacademy.com/login
  11 |   }
  12 |   
  13 |   async fillCredentials(username: string, password: string) 
  14 |   {
  15 |     await Fill(this.page, '#email', username);
  16 |     await Fill(this.page, '#password', password);
  17 |    // await click(this.page, '#login');
  18 |   }
  19 |    async submit() {
  20 |     await click(this.page, 'button:has-text("Sign In")');
  21 |     await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  22 |   }
  23 | 
  24 |   async logoutbutton()
  25 |   {
  26 |      await click(this.page,'button:has-text("Logout")');
  27 |   }
  28 |   async login(email: string, password: string)
  29 |   {
  30 |     await this.goto();
  31 |     await this.fillCredentials(email, password);
  32 |     await this.submit();
  33 | 
  34 |   }
  35 | 
  36 |   
  37 | 
  38 | }
```