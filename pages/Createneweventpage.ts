import { Page } from '@playwright/test';
import { click, Fill, ExpectVisible,selectDropdownValue, selectDateTime } from '../utill/ui';

export class Createneweventpage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // async navigateaddnewevent(title: string, description: string, location: string, time: string, seats:string)
    
    async navigateaddnewevent()
    {
       //await this.page.waitForTimeout(50000);
    //    await this.page.locator('div button').nth(0).click();
    //    await this.page.waitForTimeout(1000);
    //    await click(this.page,'div button :has-text("Manage Events")');
       //await this.page.goto('https://eventhub.rahulshettyacademy.com/admin/events');

      try {
        console.log('Starting navigation to admin events...');
        console.log('Current URL before navigation:', this.page.url());
        
        await this.page.goto(
  'https://eventhub.rahulshettyacademy.com/admin/events',
  {
    waitUntil: 'networkidle',
    timeout: 60000
  }
);
        console.log('Navigation successful, URL:', this.page.url());
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
        
      } catch (error) {
        console.error('Navigation failed:', (error as Error).message);
        console.log('Current URL on error:', this.page.url());
        throw error;
      }
      
       //await this.page.waitForTimeout(10000); 
       await Fill(this.page,'#event-title-input','Test Event');
       await Fill(this.page,'div textarea','This is a test event created for automation testing purposes.');
       await this.page.locator('div select').selectOption('Concert');
       await Fill(this.page,'#city','Test City');
       await Fill(this.page,'#venue','Test Venue');
       await Fill(this.page,'input[type="datetime-local"]','2026-12-25T10:30');
       await Fill(this.page,'[id="price-($)"]','10');
       await Fill(this.page,'#total-seats','100');
       await click(this.page,'.text-sm rounded-lg gap-2');
    //     await click(this.page,'a button :has-text("Add New Event")');
    //      await this.page.waitForTimeout(10000); 
    //     await Fill(this.page,'#event-title-input',title);
    //     await Fill(this.page,'#description',description);
    //     await selectDropdownValue(this.page.locator('#category'), 'Concert');
    //     await Fill(this.page,'#city','location');
    //     await selectDateTime(this.page.locator('#event-date-&-time'), time);
    //     await Fill(this.page,'#price-($)','location');
    //     await Fill(this.page,'#total-seats',seats);
    //     await click(this.page,'#add-event-btn');
 }
}