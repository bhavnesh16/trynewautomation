import { Page } from '@playwright/test';
import { click, Fill, ExpectVisible,selectDropdownValue, selectDateTime } from '../utill/ui';

export class Createneweventpage {
    readonly page: Page;
    constructor(page: Page) 
    {
        this.page = page;
    }
   async navigateaddnewevent(title: string, description: string, location: string, time: string, seats:string)
   {
       await click(this.page,'a button :has-text("Manage Events")');
       await this.page.waitForTimeout(10000); 
       await Fill(this.page,'#event-title-input',title);
       await Fill(this.page,'#description',description);
       await selectDropdownValue(this.page.locator('#category'), 'Concert');
       await Fill(this.page,'#city','location');
       await selectDateTime(this.page.locator('#event-date-&-time'), time);
       await Fill(this.page,'#price-($)','location');
       await Fill(this.page,'#total-seats',seats);
       await click(this.page,'#add-event-btn');
   }
}