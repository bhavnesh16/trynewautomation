# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Admin manage booking End to End Tests
- Location: tests\e2e.spec.ts:137:6

# Error details

```
TypeError: Cannot read properties of undefined (reading 'close')
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "bhavnesh16@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - generic [ref=e25]:
          - heading "Manage Bookings" [level=1] [ref=e26]
          - paragraph [ref=e27]: 0 total bookings
        - combobox [ref=e29] [cursor=pointer]:
          - option "All Statuses" [selected]
          - option "Confirmed"
          - option "Cancelled"
      - generic [ref=e31]:
        - img [ref=e33]
        - heading "No bookings found" [level=3] [ref=e35]
        - paragraph [ref=e36]: There are no bookings matching your filters.
  - contentinfo [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e39]:
        - generic [ref=e40]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e41]
          - paragraph [ref=e42]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e43]:
          - heading "Popular Courses" [level=3] [ref=e44]
          - list [ref=e45]:
            - listitem [ref=e46]:
              - link "Selenium WebDriver with Java" [ref=e47] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e48]:
              - link "Playwright with JavaScript" [ref=e49] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e50]:
              - link "RestAssured API Testing" [ref=e51] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e52]:
              - link "Cypress End-to-End Testing" [ref=e53] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e54]:
              - link "Appium Mobile Testing" [ref=e55] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e56]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e57]
          - paragraph [ref=e58]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e59] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e60]:
          - heading "EventHub Practice App" [level=3] [ref=e61]
          - list [ref=e62]:
            - listitem [ref=e63]:
              - link "Browse Events" [ref=e64] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e65]:
              - link "My Bookings" [ref=e66] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e67]:
              - link "Manage Events" [ref=e68] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e69]:
              - link "API Documentation" [ref=e70] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e71]:
        - paragraph [ref=e72]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e73]:
          - link "rahulshettyacademy.com →" [ref=e74] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e75] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e76]
```

# Test source

```ts
  1   | import { Page,Expect } from '@playwright/test';
  2   | import { click, Fill, ExpectVisible,selectDropdownValue, selectDateTime } from '../utill/ui';
  3   | 
  4   | export class managebookingpage {
  5   |     readonly page: Page;
  6   |     readonly expect: Expect;
  7   |     constructor(page: Page, expect: Expect) 
  8   |     {
  9   |         this.page = page;
  10  |         this.expect = expect;
  11  |     }
  12  | 
  13  |     async navigatemanagerbooking()
  14  |     {
  15  |            try {
  16  |         console.log('Starting navigation to admin events...');
  17  |         console.log('Current URL before navigation:', this.page.url());
  18  |         
  19  |         await this.page.goto(
  20  |   'https://eventhub.rahulshettyacademy.com/admin/bookings',
  21  |   {
  22  |     waitUntil: 'domcontentloaded',
  23  |     timeout: 60000
  24  |   }
  25  | );
  26  | 
  27  | 
  28  |         console.log('Navigation successful, URL:', this.page.url());
  29  |         await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  30  |         
  31  |       } catch (error) {
  32  |         console.error('Navigation failed:', (error as Error).message);
  33  |         console.log('Current URL on error:', this.page.url());
  34  |         throw error;
  35  |       }
  36  |    
  37  |          
  38  |     const actualValues = await this.page
  39  |     .locator('div select option')
  40  |     .allTextContents();
  41  | 
  42  | console.log(actualValues);
  43  | 
  44  | this.expect(actualValues).toEqual([
  45  |     'All Statuses',
  46  |     'Confirmed',
  47  |     'Cancelled',
  48  | ]);
  49  | const noBookingsMessage = this.page.locator('text=No bookings found');
  50  | if (await noBookingsMessage.isVisible())
  51  | {
  52  |     console.log('✓ No bookings found message is visible');
> 53  |     await this.page.close();
      |                   ^ TypeError: Cannot read properties of undefined (reading 'close')
  54  | }
  55  |  else 
  56  | {
  57  |     console.log('Booking exists. Cancelling it...');
  58  |     await click(this.page, 'role=button|View');
  59  |     await click(this.page, 'button[aria-label="Close"]');
  60  |     await click(this.page, 'role=button|Cancel');
  61  |     await click(this.page, '#confirm-dialog-yes');
  62  |     await ExpectVisible( this.page,'text=No bookings found');
  63  | }
  64  | 
  65  | // const isVisible = await ExpectVisible(
  66  | //     this.page,
  67  | //     'text=No bookings found'
  68  | // );
  69  | 
  70  | // if (isVisible===true) {
  71  | //     console.log(
  72  | //         'No bookings found'
  73  | //     );
  74  | // }
  75  | 
  76  | 
  77  | //  try {
  78  | 
  79  | //       await ExpectVisible(
  80  | //  this.page,
  81  | //      'text=No bookings found'
  82  | //       );
  83  | 
  84  | //       console.log(
  85  | //           '✓ "No bookings found" message is visible'
  86  | //       );
  87  | 
  88  | //     }
  89  | 
  90  |    
  91  | //     catch (error) {
  92  | //       console.error('Error:', (error as Error).message);
  93  | //       console.log('Current URL on error:', this.page.url());
  94  | //       throw error;
  95  | //     }
  96  | // try{
  97  | // await this.page.waitForTimeout(10000); 
  98  | // await click(this.page,'role=button|View');
  99  | // await this.page.waitForTimeout(10000); 
  100 | // await click(this.page,'button[aria-label="Close"]');
  101 | // await this.page.waitForTimeout(10000); 
  102 | // await click(this.page,'role=button|Cancel');
  103 | // await this.page.waitForTimeout(10000); 
  104 | // await click(this.page,'#confirm-dialog-yes');
  105 | // await this.page.waitForTimeout(10000); 
  106 | // await ExpectVisible(this.page,'div :has-text("No bookings found")');
  107 | // await this.page.waitForTimeout(10000); 
  108 | //      }
  109 | //      catch (error) {
  110 | //         console.error(
  111 | //         'Error:',
  112 | //         (error as Error).message
  113 | //       );
  114 | 
  115 | //       throw error;
  116 | //      }
  117 | // await this.page.waitForTimeout(10000); 
  118 | // await click(this.page,'role=button|View');
  119 | // await this.page.waitForTimeout(10000); 
  120 | // await click(this.page,'button[aria-label="Close"]');
  121 | // await this.page.waitForTimeout(10000); 
  122 | // await click(this.page,'role=button|Cancel');
  123 | // await this.page.waitForTimeout(10000); 
  124 | // await click(this.page,'#confirm-dialog-yes');
  125 | // await this.page.waitForTimeout(10000); 
  126 | // await ExpectVisible(this.page,'div :has-text("No bookings found")');
  127 | // await this.page.waitForTimeout(10000); 
  128 | }
  129 | }
```