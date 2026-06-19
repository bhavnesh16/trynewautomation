import { Page,Expect } from '@playwright/test';
import { click, Fill, ExpectVisible,selectDropdownValue, selectDateTime } from '../utill/ui';

export class managebookingpage {
    readonly page: Page;
    readonly expect: Expect;
    constructor(page: Page, expect: Expect) 
    {
        this.page = page;
        this.expect = expect;
    }

    async navigatemanagerbooking()
    {
           try {
        console.log('Starting navigation to admin events...');
        console.log('Current URL before navigation:', this.page.url());
        
        await this.page.goto(
  'https://eventhub.rahulshettyacademy.com/admin/bookings',
  {
    waitUntil: 'domcontentloaded',
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
   
         
    const actualValues = await this.page
    .locator('div select option')
    .allTextContents();

console.log(actualValues);

this.expect(actualValues).toEqual([
    'All Statuses',
    'Confirmed',
    'Cancelled',
]);
const noBookingsMessage = this.page.locator('text=No bookings found');
if (await noBookingsMessage.isVisible())
{
    console.log('✓ No bookings found message is visible');
    //await this.page.close();
}
 else 
{
    console.log('Booking exists. Cancelling it...');
    await click(this.page, 'role=button|View');
    await click(this.page, 'button[aria-label="Close"]');
    await click(this.page, 'role=button|Cancel');
    await click(this.page, '#confirm-dialog-yes');
    await ExpectVisible( this.page,'text=No bookings found');
}

// const isVisible = await ExpectVisible(
//     this.page,
//     'text=No bookings found'
// );

// if (isVisible===true) {
//     console.log(
//         'No bookings found'
//     );
// }


//  try {

//       await ExpectVisible(
//  this.page,
//      'text=No bookings found'
//       );

//       console.log(
//           '✓ "No bookings found" message is visible'
//       );

//     }

   
//     catch (error) {
//       console.error('Error:', (error as Error).message);
//       console.log('Current URL on error:', this.page.url());
//       throw error;
//     }
// try{
// await this.page.waitForTimeout(10000); 
// await click(this.page,'role=button|View');
// await this.page.waitForTimeout(10000); 
// await click(this.page,'button[aria-label="Close"]');
// await this.page.waitForTimeout(10000); 
// await click(this.page,'role=button|Cancel');
// await this.page.waitForTimeout(10000); 
// await click(this.page,'#confirm-dialog-yes');
// await this.page.waitForTimeout(10000); 
// await ExpectVisible(this.page,'div :has-text("No bookings found")');
// await this.page.waitForTimeout(10000); 
//      }
//      catch (error) {
//         console.error(
//         'Error:',
//         (error as Error).message
//       );

//       throw error;
//      }
// await this.page.waitForTimeout(10000); 
// await click(this.page,'role=button|View');
// await this.page.waitForTimeout(10000); 
// await click(this.page,'button[aria-label="Close"]');
// await this.page.waitForTimeout(10000); 
// await click(this.page,'role=button|Cancel');
// await this.page.waitForTimeout(10000); 
// await click(this.page,'#confirm-dialog-yes');
// await this.page.waitForTimeout(10000); 
// await ExpectVisible(this.page,'div :has-text("No bookings found")');
// await this.page.waitForTimeout(10000); 
}
}