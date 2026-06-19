import { Page } from '@playwright/test';
import { click, Fill, ExpectVisible } from '../utill/ui';

export class loginpage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async goto(url: string ) {
    try {
      console.log('Initial navigation...' + url);
      await this.page.goto(url, { 
        waitUntil: 'load',
        timeout: 2000000 
      });
      await this.page.waitForTimeout(50000);
    } catch (error) {
      console.log('Initial navigation failed, retrying with networkidle...');
      await this.page.goto(url, { 
        waitUntil: 'domcontentloaded',
        timeout: 200000 
      });
    }
  }
  
  async fillCredentials(username: string, password: string) 
  {
    await Fill(this.page, '#email', username);
    await Fill(this.page, '#password', password);
   // await click(this.page, '#login');
  }
   async submit() {
    await click(this.page, 'button:has-text("Sign In")');
    await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  }

  async logoutbutton()
  {
     await click(this.page,'button:has-text("Logout")');
  }
  // async login(email: string, password: string)
  // {
  //  await this.goto();
  //   await this.fillCredentials(email, password);
  //   await this.submit();

  // }

  

}