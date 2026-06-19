# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Admin manage booking End to End Tests
- Location: tests\e2e.spec.ts:137:6

# Error details

```
Error: page.screenshot: Target page, context or browser has been closed
```

# Test source

```ts
  46  |         const testData = readJSON('./testdata/data.json');
  47  |         // Debug: List all available links
  48  |         const links = await page.locator('a').all();
  49  |         console.log(`Found ${links.length} links on the page`);
  50  |         
  51  |          // Debug: List all nav elements
  52  |          const navElements = await page.locator('[id*="nav"]').all();
  53  |          console.log(`Found ${navElements.length} nav elements`);
  54  |         for (let i = 0; i < navElements.length; i++) {
  55  |            const id = await navElements[i].getAttribute('id');
  56  |            const text = await navElements[i].textContent();
  57  |            console.log(`Nav ${i}: id="${id}", text="${text}"`);
  58  |          }      
  59  |         //const eventbooking = new eventpage(page);
  60  |         await eventpage.navigatetoevent();
  61  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  62  |         await page.screenshot({ path: 'test-results/step3-after-nav-events.png' });
  63  |         
  64  |         await eventpage.openeventpage();
  65  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  66  |         await page.screenshot({ path: 'test-results/step4-after-open-event.png' });
  67  |         
  68  |         await eventpage.formfill(testData[0].name, testData[0].email, testData[0].phone);
  69  |         await page.screenshot({ path: 'test-results/step5-after-form-fill.png' });
  70  |     });
  71  | });
  72  | test('cancel the booking', async ({ page, loginpage, MyBooking}) => 
  73  |     {       //const MyBookingPage = new MyBooking(page);
  74  |         await MyBooking.navigatetomybooking();
  75  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  76  |         await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
  77  |         await MyBooking.cancelbooking();
  78  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  79  |         await page.screenshot({ path: 'test-results/step4-after-cancel-booking.png' });
  80  |     })
  81  |   
  82  |      test('cancel the all booking', async ({ page, loginpage ,MyBooking}) => 
  83  |     {
  84  |        //  const MyBookingPage = new MyBooking(page);
  85  |         await MyBooking.navigatetomybooking();
  86  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  87  |         await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
  88  |         await MyBooking.cancelallbookings();
  89  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  90  |         await page.screenshot({ path: 'test-results/step4-after-all-cancel-booking.png' });
  91  |     })
  92  | 
  93  |       test('Admin End to End Tests', async ({page, loginpage, Createneweventpage}) => {
  94  |    
  95  |         // test.setTimeout(100000); // Increase timeout to 180 seconds
  96  |         // const login = new loginpage(page);
  97  |         // await login.goto();
  98  |         // await page.waitForLoadState('networkidle', { timeout: 60000 });
  99  |         // await page.screenshot({ path: 'test-results/step1-before-login.png' });
  100 |         // await login.fillCredentials('bhavnesh16@gmail.com', 'Test@1234');
  101 |         // await login.submit();
  102 |         // //await page.waitForLoadState('networkidle', { timeout: 60000 });
  103 |         // await page.screenshot({ path: 'test-results/step2-after-login.png' });
  104 |         // //await page.waitForTimeout(50000);
  105 |         // console.log('Current URL after login:', page.url());
  106 |         // const createEvent = new Createneweventpage(page);
  107 |         // await createEvent.navigateaddnewevent();
  108 | 
  109 | 
  110 | 
  111 | 
  112 |         try{
  113 | 
  114 |         //const createEvent =new Createneweventpage(page);
  115 | 
  116 |         await Createneweventpage.navigateaddnewevent();
  117 | 
  118 |     } catch (error) {
  119 | 
  120 |         console.error(
  121 |             'Error in Admin End to End Test:',
  122 |             error
  123 |         );
  124 | 
  125 |         await page.screenshot({
  126 |             path: 'test-results/admin-test-failure.png',
  127 |             fullPage: true
  128 |         });
  129 | 
  130 |         throw error;
  131 |     }
  132 | });
  133 | 
  134 | 
  135 | 
  136 | 
  137 |  test('Admin manage booking End to End Tests', async ({page, loginpage, managebookingpage}) =>
  138 | {
  139 |         try {
  140 |         // Navigate to manage bookings page
  141 |         //const managebooking = new managebookingpage(page, expect);
  142 |         await managebookingpage.navigatemanagerbooking();
  143 | 
  144 |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  145 | 
> 146 |         await page.screenshot({
      |                    ^ Error: page.screenshot: Target page, context or browser has been closed
  147 |             path: 'test-results/step3-manage-bookings.png'
  148 |         });
  149 | 
  150 |         console.log('✓ Admin manage booking test completed successfully');
  151 | 
  152 |     } 
  153 |     catch (error) {
  154 | 
  155 |         console.error(
  156 |             'Error in Admin manage booking End to End Test:',
  157 |             error
  158 |         );
  159 | 
  160 |         // await page.screenshot({
  161 |         //     path: 'test-results/admin-manage-booking-failure.png',
  162 |         //     fullPage: true
  163 |         // });
  164 |         throw error;
  165 |     }
  166 | });
  167 | 
  168 | 
  169 | 
```