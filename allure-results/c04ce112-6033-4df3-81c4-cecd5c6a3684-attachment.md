# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> End to End Tests >> sample login tests - testuser@gmail.com
- Location: tests\e2e.spec.ts:15:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Featured Events' })
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByRole('heading', { name: 'Featured Events' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - generic [ref=e6]: RSA
          - generic [ref=e7]: Rahul Shetty Academy
        - generic [ref=e8]:
          - generic [ref=e13]: eventhub.app
          - img "EventHub app preview" [ref=e14]
        - list [ref=e16]:
          - listitem [ref=e17]:
            - generic [ref=e18]: ⚡
            - generic [ref=e19]: Live REST APIs — test real endpoints, not mocks
          - listitem [ref=e20]:
            - generic [ref=e21]: 🔒
            - generic [ref=e22]: Isolated sandbox — your data, your tests, no conflicts
          - listitem [ref=e23]:
            - generic [ref=e24]: 🎫
            - generic [ref=e25]: Auth, CRUD, bookings — flows you'll face on the job
          - listitem [ref=e26]:
            - generic [ref=e27]: 🤖
            - generic [ref=e28]: Built for Selenium, Playwright, RestAssured & more
      - generic [ref=e30]:
        - paragraph [ref=e31]: 50,000+
        - paragraph [ref=e32]: QA engineers trained worldwide
    - generic [ref=e34]:
      - generic [ref=e35]:
        - 'heading "The #1 QA Practice Hub for Automation Engineers" [level=2] [ref=e36]':
          - text: "The #1 QA Practice Hub"
          - text: for Automation Engineers
        - paragraph [ref=e37]: EventHub is a production-grade practice app designed so you can sharpen your testing skills on real-world scenarios — before your next interview or project.
      - link "API Documentation (Swagger)" [ref=e38] [cursor=pointer]:
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - img [ref=e39]
        - text: API Documentation (Swagger)
      - generic [ref=e41]:
        - generic [ref=e42]:
          - img [ref=e44]
          - heading "Sign in to EventHub" [level=1] [ref=e46]
          - paragraph [ref=e47]: Enter your credentials to continue
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: Email
            - textbox "Email" [ref=e51]:
              - /placeholder: you@email.com
              - text: testuser@gmail.com
          - generic [ref=e52]:
            - generic [ref=e53]: Password
            - textbox "Password" [ref=e54]:
              - /placeholder: ••••••
              - text: Password@123
          - button "Sign In" [ref=e55] [cursor=pointer]
        - paragraph [ref=e56]:
          - text: Don't have an account?
          - link "Register" [ref=e57] [cursor=pointer]:
            - /url: /register
      - paragraph [ref=e58]:
        - text: A practice environment by
        - link "RahulShettyAcademy.com" [ref=e59] [cursor=pointer]:
          - /url: https://rahulshettyacademy.com
        - text: — used by QA engineers worldwide to master automation testing.
  - alert [ref=e60]
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '@playwright/test';
  3   | import { loginpage,} from '../pages/loginpage';
  4   | import { eventpage } from '../pages/eventpage';
  5   | import { MyBooking } from '../pages/MyBooking';
  6   | import { Createneweventpage } from '../pages/Createneweventpage';
  7   | import { managebookingpage } from '../pages/managebooking';
  8   | import { readCSV } from '../utill/ui';
  9   | 
  10  | 
  11  | test.describe('End to End Tests', async () => {
  12  |   const testData = readCSV('./testdata/login-credentials.csv');
  13  |   
  14  |   testData.forEach((data) => {
  15  |     test(`sample login tests - ${data.email}`, async ({ page }) => {
  16  |       test.setTimeout(180000);
  17  |       const login = new loginpage(page);
  18  |       await login.goto();
  19  |       await page.waitForLoadState('networkidle', { timeout: 60000 });
  20  |       await page.screenshot({ path: 'test-results/page-debug.png' });
  21  |       const title = await page.title();
  22  |       console.log('Page title:', title);
  23  |       console.log('Page URL:', page.url());
  24  |       
  25  |       await login.fillCredentials(data.email, data.password);
  26  |       await login.submit();
> 27  |       await expect(page.getByRole('heading',{name:'Featured Events'})).toBeVisible({ timeout: 30000 });
      |                                                                        ^ Error: expect(locator).toBeVisible() failed
  28  |       await login.logoutbutton();
  29  |     });
  30  |   });
  31  |     test('sample event booking test', async ({ page }) => 
  32  |     {
  33  |         test.setTimeout(180000); // Increase timeout to 180 seconds
  34  |         const login = new loginpage(page);
  35  |         await login.goto();
  36  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  37  |         await page.screenshot({ path: 'test-results/step1-before-login.png' });
  38  |         
  39  |         await login.fillCredentials('bhavnesh16@gmail.com', 'Test@1234');
  40  |         await login.submit();
  41  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  42  |         await page.screenshot({ path: 'test-results/step2-after-login.png' });
  43  |         
  44  |         // Debug: List all available links
  45  |         const links = await page.locator('a').all();
  46  |         console.log(`Found ${links.length} links on the page`);
  47  |         
  48  |          // Debug: List all nav elements
  49  |          const navElements = await page.locator('[id*="nav"]').all();
  50  |          console.log(`Found ${navElements.length} nav elements`);
  51  |         for (let i = 0; i < navElements.length; i++) {
  52  |            const id = await navElements[i].getAttribute('id');
  53  |            const text = await navElements[i].textContent();
  54  |            console.log(`Nav ${i}: id="${id}", text="${text}"`);
  55  |          }      
  56  |         const eventbooking = new eventpage(page);
  57  |         await eventbooking.navigatetoevent();
  58  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  59  |         await page.screenshot({ path: 'test-results/step3-after-nav-events.png' });
  60  |         
  61  |         await eventbooking.openeventpage();
  62  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  63  |         await page.screenshot({ path: 'test-results/step4-after-open-event.png' });
  64  |         
  65  |         await eventbooking.formfill('Bhavnesh Kumar', 'bhavnesh16@gmail.com', '1234567890');
  66  |         await page.screenshot({ path: 'test-results/step5-after-form-fill.png' });
  67  |     });
  68  | 
  69  | 
  70  | 
  71  |  test('cancel the booking', async ({ page }) => 
  72  |     {
  73  |         test.setTimeout(180000); // Increase timeout to 180 seconds
  74  |         const login = new loginpage(page);
  75  |         await login.goto();
  76  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  77  |         await page.screenshot({ path: 'test-results/step1-before-login.png' });
  78  |         
  79  |         await login.fillCredentials('bhavnesh16@gmail.com', 'Test@1234');
  80  |         await login.submit();
  81  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  82  |         await page.screenshot({ path: 'test-results/step2-after-login.png' });
  83  |         const MyBookingPage = new MyBooking(page);
  84  |         await MyBookingPage.navigatetomybooking();
  85  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  86  |         await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
  87  |         await MyBookingPage.cancelbooking();
  88  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  89  |         await page.screenshot({ path: 'test-results/step4-after-cancel-booking.png' });
  90  |     })
  91  | 
  92  | 
  93  |      test('cancel the all booking', async ({ page }) => 
  94  |     {
  95  |         test.setTimeout(180000); // Increase timeout to 180 seconds
  96  |         const login = new loginpage(page);
  97  |         await login.goto();
  98  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  99  |         await page.screenshot({ path: 'test-results/step1-before-login.png' });
  100 |         await login.fillCredentials('bhavnesh16@gmail.com', 'Test@1234');
  101 |         await login.submit();
  102 |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  103 |         await page.screenshot({ path: 'test-results/step2-after-login.png' });
  104 |         const MyBookingPage = new MyBooking(page);
  105 |         await MyBookingPage.navigatetomybooking();
  106 |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  107 |         await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
  108 |         await MyBookingPage.cancelallbookings();
  109 |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  110 |         await page.screenshot({ path: 'test-results/step4-after-all-cancel-booking.png' });
  111 |     })
  112 | 
  113 | 
  114 |     test('Admin End to End Tests', async ({page}) => {
  115 |    
  116 |         // test.setTimeout(100000); // Increase timeout to 180 seconds
  117 |         // const login = new loginpage(page);
  118 |         // await login.goto();
  119 |         // await page.waitForLoadState('networkidle', { timeout: 60000 });
  120 |         // await page.screenshot({ path: 'test-results/step1-before-login.png' });
  121 |         // await login.fillCredentials('bhavnesh16@gmail.com', 'Test@1234');
  122 |         // await login.submit();
  123 |         // //await page.waitForLoadState('networkidle', { timeout: 60000 });
  124 |         // await page.screenshot({ path: 'test-results/step2-after-login.png' });
  125 |         // //await page.waitForTimeout(50000);
  126 |         // console.log('Current URL after login:', page.url());
  127 |         // const createEvent = new Createneweventpage(page);
```