# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> End to End Tests >> sample event booking test
- Location: tests\e2e.spec.ts:32:9

# Error details

```
ReferenceError: testData is not defined
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
          - generic [ref=e52]:
            - generic [ref=e53]: Password
            - textbox "Password" [ref=e54]:
              - /placeholder: ••••••
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
  2   | //import { test, expect } from '@playwright/test';
  3   | 
  4   | import { readCSV, readJSON } from '../utill/ui';
  5   | import { test, expect } from '../fixtures/baseFixture';
  6   | 
  7   | 
  8   | test.beforeEach(async ({ page ,loginpage}) => {
  9   | const testData = readCSV('./testdata/logindata.csv');
  10  | testData.forEach(async (data) => 
  11  | {
  12  |       test.setTimeout(180000);
  13  |       const testData = readJSON('./testdata/data.json');
  14  |      // const login = new loginpage(page);
  15  |       console.log('Test Data:', testData[0].url); // Debug: Log the test data to verify it's loaded correctly
  16  |       await loginpage.goto(testData[0].url);
  17  |       await page.screenshot({ path: 'test-results/page-debug.png' });
  18  |       const title = await page.title();
  19  |       console.log('Page title:', title);
  20  |       console.log('Page URL:', page.url());
  21  |       await loginpage.fillCredentials(data.email, data.password);
  22  |       await loginpage.submit();
  23  |       await expect(page.getByRole('heading',{name:'Featured Events'})).toBeVisible({ timeout: 30000 });
  24  | })   
  25  | });
  26  | test.afterEach(async ({ page ,loginpage}) => 
  27  | {
  28  |     await loginpage.logoutbutton();
  29  | });
  30  | test.describe('End to End Tests', async () => 
  31  | {  
  32  |     test('sample event booking test', async ({ page ,eventpage,loginpage}) => 
  33  |     {
  34  |         // Debug: List all available links
  35  |         const links = await page.locator('a').all();
  36  |         console.log(`Found ${links.length} links on the page`);
  37  |         
  38  |          // Debug: List all nav elements
  39  |          const navElements = await page.locator('[id*="nav"]').all();
  40  |          console.log(`Found ${navElements.length} nav elements`);
  41  |         for (let i = 0; i < navElements.length; i++) {
  42  |            const id = await navElements[i].getAttribute('id');
  43  |            const text = await navElements[i].textContent();
  44  |            console.log(`Nav ${i}: id="${id}", text="${text}"`);
  45  |          }      
  46  |         //const eventbooking = new eventpage(page);
  47  |         await eventpage.navigatetoevent();
  48  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  49  |         await page.screenshot({ path: 'test-results/step3-after-nav-events.png' });
  50  |         
  51  |         await eventpage.openeventpage();
  52  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  53  |         await page.screenshot({ path: 'test-results/step4-after-open-event.png' });
  54  |         
> 55  |         await eventpage.formfill(testData[0].name, testData[0].email, testData[0].phone);
      |                                  ^ ReferenceError: testData is not defined
  56  |         await page.screenshot({ path: 'test-results/step5-after-form-fill.png' });
  57  |     });
  58  | });
  59  | test('cancel the booking', async ({ page, loginpage, MyBooking}) => 
  60  |     {       //const MyBookingPage = new MyBooking(page);
  61  |         await MyBooking.navigatetomybooking();
  62  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  63  |         await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
  64  |         await MyBooking.cancelbooking();
  65  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  66  |         await page.screenshot({ path: 'test-results/step4-after-cancel-booking.png' });
  67  |     })
  68  |   
  69  |      test('cancel the all booking', async ({ page, loginpage ,MyBooking}) => 
  70  |     {
  71  |        //  const MyBookingPage = new MyBooking(page);
  72  |         await MyBooking.navigatetomybooking();
  73  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  74  |         await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
  75  |         await MyBooking.cancelallbookings();
  76  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  77  |         await page.screenshot({ path: 'test-results/step4-after-all-cancel-booking.png' });
  78  |     })
  79  | 
  80  |       test('Admin End to End Tests', async ({page, loginpage, Createneweventpage}) => {
  81  |    
  82  |         // test.setTimeout(100000); // Increase timeout to 180 seconds
  83  |         // const login = new loginpage(page);
  84  |         // await login.goto();
  85  |         // await page.waitForLoadState('networkidle', { timeout: 60000 });
  86  |         // await page.screenshot({ path: 'test-results/step1-before-login.png' });
  87  |         // await login.fillCredentials('bhavnesh16@gmail.com', 'Test@1234');
  88  |         // await login.submit();
  89  |         // //await page.waitForLoadState('networkidle', { timeout: 60000 });
  90  |         // await page.screenshot({ path: 'test-results/step2-after-login.png' });
  91  |         // //await page.waitForTimeout(50000);
  92  |         // console.log('Current URL after login:', page.url());
  93  |         // const createEvent = new Createneweventpage(page);
  94  |         // await createEvent.navigateaddnewevent();
  95  | 
  96  | 
  97  | 
  98  | 
  99  |         try{
  100 | 
  101 |         //const createEvent =new Createneweventpage(page);
  102 | 
  103 |         await Createneweventpage.navigateaddnewevent();
  104 | 
  105 |     } catch (error) {
  106 | 
  107 |         console.error(
  108 |             'Error in Admin End to End Test:',
  109 |             error
  110 |         );
  111 | 
  112 |         await page.screenshot({
  113 |             path: 'test-results/admin-test-failure.png',
  114 |             fullPage: true
  115 |         });
  116 | 
  117 |         throw error;
  118 |     }
  119 | });
  120 | 
  121 | 
  122 | 
  123 | 
  124 |  test('Admin manage booking End to End Tests', async ({page, loginpage, managebookingpage}) =>
  125 | {
  126 |         try {
  127 |         // Navigate to manage bookings page
  128 |         //const managebooking = new managebookingpage(page, expect);
  129 |         await managebookingpage.navigatemanagerbooking();
  130 | 
  131 |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  132 | 
  133 |         await page.screenshot({
  134 |             path: 'test-results/step3-manage-bookings.png'
  135 |         });
  136 | 
  137 |         console.log('✓ Admin manage booking test completed successfully');
  138 | 
  139 |     } 
  140 |     catch (error) {
  141 | 
  142 |         console.error(
  143 |             'Error in Admin manage booking End to End Test:',
  144 |             error
  145 |         );
  146 | 
  147 |         // await page.screenshot({
  148 |         //     path: 'test-results/admin-manage-booking-failure.png',
  149 |         //     fullPage: true
  150 |         // });
  151 |         throw error;
  152 |     }
  153 | });
  154 | 
  155 | 
```