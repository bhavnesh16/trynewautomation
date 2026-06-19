# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> End to End Tests >> sample event booking test
- Location: tests\e2e.spec.ts:44:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('p:has-text("Enter a valid 10-digit phone")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('p:has-text("Enter a valid 10-digit phone")')

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
      - navigation [ref=e24]:
        - link "Events" [ref=e25] [cursor=pointer]:
          - /url: /events
        - generic [ref=e26]: /
        - generic [ref=e27]: Dilli Diwali Mela
      - generic [ref=e28]:
        - generic [ref=e29]:
          - img "Dilli Diwali Mela" [ref=e31]
          - generic [ref=e32]:
            - generic [ref=e33]:
              - generic [ref=e34]: Festival
              - generic [ref=e35]: Featured
            - heading "Dilli Diwali Mela" [level=1] [ref=e36]
            - generic [ref=e37]:
              - img [ref=e38]
              - text: This is a featured event — always available for practice
            - generic [ref=e40]:
              - generic [ref=e41]:
                - generic [ref=e42]: 📅
                - generic [ref=e43]:
                  - paragraph [ref=e44]: Date
                  - paragraph [ref=e45]: Tuesday, 20 October
              - generic [ref=e46]:
                - generic [ref=e47]: 🕐
                - generic [ref=e48]:
                  - paragraph [ref=e49]: Time
                  - paragraph [ref=e50]: 10:30 pm
              - generic [ref=e51]:
                - generic [ref=e52]: 📍
                - generic [ref=e53]:
                  - paragraph [ref=e54]: Venue
                  - paragraph [ref=e55]: Pragati Maidan Exhibition Grounds
              - generic [ref=e56]:
                - generic [ref=e57]: 🌆
                - generic [ref=e58]:
                  - paragraph [ref=e59]: City
                  - paragraph [ref=e60]: Delhi
              - generic [ref=e61]:
                - generic [ref=e62]: 🎫
                - generic [ref=e63]:
                  - paragraph [ref=e64]: Available
                  - paragraph [ref=e65]: 10000 / 10000 seats
              - generic [ref=e66]:
                - generic [ref=e67]: 💰
                - generic [ref=e68]:
                  - paragraph [ref=e69]: Price per ticket
                  - paragraph [ref=e70]: $300
            - generic [ref=e71]:
              - heading "About this event" [level=2] [ref=e72]
              - paragraph [ref=e73]: Celebrate the Festival of Lights at the grandest Diwali Mela in North India. Enjoy 200+ stalls of artisanal crafts, street food, folk performances, fireworks, and cultural showcases spanning three vibrant evenings.
        - generic [ref=e75]:
          - generic [ref=e76]:
            - heading "Book Tickets" [level=2] [ref=e77]
            - generic [ref=e78]: $300
          - paragraph [ref=e79]: per ticket
          - generic [ref=e80]:
            - generic [ref=e81]:
              - generic [ref=e82]: Tickets
              - generic [ref=e83]:
                - button "−" [disabled] [ref=e84]
                - generic [ref=e85]: "1"
                - button "+" [ref=e86] [cursor=pointer]
                - generic [ref=e87]: (max 10)
            - generic [ref=e88]:
              - generic [ref=e89]: Full Name*
              - textbox "Full Name*" [ref=e90]:
                - /placeholder: Your full name
            - generic [ref=e91]:
              - generic [ref=e92]: Email*
              - textbox "Email*" [ref=e93]:
                - /placeholder: you@email.com
            - generic [ref=e94]:
              - generic [ref=e95]: Phone Number*
              - textbox "Phone Number*" [ref=e96]:
                - /placeholder: +91 98765 43210
            - generic [ref=e97]:
              - generic [ref=e98]:
                - generic [ref=e99]: $300 × 1 ticket
                - generic [ref=e100]: $300
              - generic [ref=e101]:
                - generic [ref=e102]: Total
                - generic [ref=e103]: $300
            - button "Confirm Booking" [ref=e104] [cursor=pointer]
  - contentinfo [ref=e105]:
    - generic [ref=e106]:
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e109]
          - paragraph [ref=e110]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e111]:
          - heading "Popular Courses" [level=3] [ref=e112]
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Selenium WebDriver with Java" [ref=e115] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e116]:
              - link "Playwright with JavaScript" [ref=e117] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e118]:
              - link "RestAssured API Testing" [ref=e119] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e120]:
              - link "Cypress End-to-End Testing" [ref=e121] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e122]:
              - link "Appium Mobile Testing" [ref=e123] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e124]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e125]
          - paragraph [ref=e126]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e127] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e128]:
          - heading "EventHub Practice App" [level=3] [ref=e129]
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Browse Events" [ref=e132] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e133]:
              - link "My Bookings" [ref=e134] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e135]:
              - link "Manage Events" [ref=e136] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e137]:
              - link "API Documentation" [ref=e138] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e139]:
        - paragraph [ref=e140]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e141]:
          - link "rahulshettyacademy.com →" [ref=e142] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e143] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e144]
```

# Test source

```ts
  1  | import { Page,expect } from '@playwright/test';
  2  | import { click, Fill, ExpectVisible } from '../utill/ui';
  3  | 
  4  | export class eventpage 
  5  | {
  6  |   readonly page: Page;
  7  |   constructor(page: Page) {
  8  |     this.page = page;
  9  | }
  10 | 
  11 | async navigatetoevent ()
  12 | {
  13 |  // Navigate to events page using URL
  14 |  await this.page.goto('https://eventhub.rahulshettyacademy.com/events', { timeout: 30000 });
  15 |  //await click(this.page, 'a:has-text("Events")');
  16 | }
  17 | async openeventpage()
  18 | {
  19 |     // Click on the event link - "Dilli Diwali Mela"
  20 |     await click(this.page, 'a:has-text("Dilli Diwali Mela")');
  21 | }
  22 | 
  23 | async validatetheclientsideerror()
  24 | {
  25 |     // Click on the "Book Now" button without filling the form
  26 |     await click(this.page, 'button:has-text("Confirm Booking")');
> 27 |     await expect(this.page.locator('p:has-text("Enter a valid 10-digit phone")')).toBeVisible();
     |                                                                                   ^ Error: expect(locator).toBeVisible() failed
  28 |     await expect(this.page.locator('p:has-text("Name must be at least 2 characters")')).toBeVisible();
  29 |     await expect(this.page.locator('p:has-text("Enter a valid email")')).toBeVisible();
  30 |     console.log('✓ Client-side validation errors are visible');
  31 | }
  32 | async formfill(Name: string , Email: string,Phone: string)
  33 | {
  34 |        // Fill the booking form fields using IDs
  35 |        await Fill(this.page, '#customerName', Name);
  36 |        await Fill(this.page, '#customer-email', Email);
  37 |        await Fill(this.page, '#phone', Phone);
  38 |        await click(this.page, 'button:has-text("Confirm Booking")');
  39 |        await ExpectVisible(this.page, 'text=Booking Confirmed', 30000);
  40 |        //await this.page.waitForTimeout(10000); // Wait for the confirmation message to be visible
  41 | 
  42 | }
  43 | }
```