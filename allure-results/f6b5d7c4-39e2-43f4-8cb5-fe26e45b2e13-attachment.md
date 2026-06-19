# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> cancel the all booking
- Location: tests\e2e.spec.ts:91:10

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=All bookings cancelled successfully')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=All bookings cancelled successfully')

```

# Page snapshot

```yaml
- alert [ref=e2]
```

# Test source

```ts
  1   | import { readCSV, readJSON } from '../utill/ui';
  2   | import { test, expect } from '../fixtures/baseFixture';
  3   | 
  4   | test.beforeEach(async ({ page ,loginpage}) => {
  5   |   test.setTimeout(200000);
  6   |   try {
  7   |     const csvData = readCSV('./testdata/logindata.csv');
  8   |     const jsonData = readJSON('./testdata/data.json');
  9   |     
  10  |     if (csvData.length === 0) {
  11  |       throw new Error('No login data found in CSV');
  12  |     }
  13  |     
  14  |     const data = csvData[0]; // Use first record from CSV
  15  |     console.log('Test Data URL:', jsonData[0].url);
  16  |     
  17  |     // Navigate to login page
  18  |     await loginpage.goto(jsonData[0].url);
  19  |     await page.screenshot({ path: 'test-results/page-debug.png' });
  20  |     
  21  |     const title = await page.title();
  22  |     console.log('Page title:', title);
  23  |     console.log('Page URL:', page.url());
  24  |     
  25  |     // Perform login
  26  |     await loginpage.fillCredentials(data.email, data.password);
  27  |     await loginpage.submit();
  28  |     
  29  |     // Wait for login to complete
  30  |     await expect(page.getByRole('heading', { name: 'Featured Events' })).toBeVisible({ timeout: 30000 });
  31  |     console.log('✓ Login completed successfully');
  32  |   } catch (error) {
  33  |     console.error('beforeEach setup failed:', error instanceof Error ? error.message : String(error));
  34  |     await page.screenshot({ path: 'test-results/beforeEach-error.png' });
  35  |     throw error;
  36  |   }
  37  | });
  38  | test.afterEach(async ({ page ,loginpage}) => 
  39  | {
  40  |     await loginpage.logoutbutton();
  41  | });
  42  | test.describe('End to End Tests', async () => 
  43  | {  
  44  |     test('sample event booking test', async ({ page ,eventpage,loginpage}) => 
  45  |     {
  46  |         const testData = readJSON('./testdata/data.json');
  47  |         // Debug: List all available links
  48  |         const links = await page.locator('a').all();
  49  |         console.log(`Found ${links.length} links on the page`);
  50  |         
  51  |          // Debug: List all nav elements
  52  |         const navElements = await page.locator('[id*="nav"]').all();
  53  |         console.log(`Found ${navElements.length} nav elements`);
  54  |         for (let i = 0; i < navElements.length; i++) {
  55  |         const id = await navElements[i].getAttribute('id');
  56  |         const text = await navElements[i].textContent();
  57  |         console.log(`Nav ${i}: id="${id}", text="${text}"`);
  58  |          }      
  59  |         //const eventbooking = new eventpage(page);
  60  |         await eventpage.navigatetoevent();
  61  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  62  |         await page.screenshot({ path: 'test-results/step3-after-nav-events.png' });
  63  | 
  64  |         await eventpage.searchevent();
  65  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  66  |         await page.screenshot({ path: 'test-results/step4-after-search-event.png' });
  67  |         
  68  |         await eventpage.openeventpage();
  69  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  70  |         await page.screenshot({ path: 'test-results/step5-after-open-event.png' });
  71  | 
  72  |         await eventpage.validatetheclientsideerror();
  73  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  74  |         await page.screenshot({ path: 'test-results/step6-validatetheclientsideerror.png' });
  75  | 
  76  |         await eventpage.formfill(testData[0].name, testData[0].email, testData[0].phone);
  77  |         await page.screenshot({ path: 'test-results/step7-after-form-fill.png' });
  78  |     });
  79  | });
  80  | test('cancel the booking', async ({ page, loginpage, MyBooking}) => 
  81  |     {       //const MyBookingPage = new MyBooking(page);
  82  |         await MyBooking.navigatetomybooking();
  83  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  84  |         await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
  85  |         await MyBooking.cancelbooking();
  86  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  87  |         await page.screenshot({ path: 'test-results/step4-after-cancel-booking.png' });
  88  |        
  89  |     })
  90  |   
  91  |      test('cancel the all booking', async ({ page, loginpage ,MyBooking}) => 
  92  |     {
  93  |        //  const MyBookingPage = new MyBooking(page);
  94  |         await MyBooking.navigatetomybooking();
  95  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  96  |         await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
  97  |         await MyBooking.cancelallbookings();
  98  |         await page.waitForLoadState('networkidle', { timeout: 60000 });
  99  |         await page.screenshot({ path: 'test-results/step4-after-all-cancel-booking.png' });
> 100 |         await expect(page.locator('text=All bookings cancelled successfully')).toBeVisible();
      |                                                                                ^ Error: expect(locator).toBeVisible() failed
  101 |     })
  102 | 
  103 |       test('Admin End to End Tests', async ({page, loginpage, Createneweventpage}) => {
  104 |         try
  105 |         {
  106 | 
  107 |         //const createEvent =new Createneweventpage(page);
  108 | 
  109 |         await Createneweventpage.navigateaddnewevent();
  110 | 
  111 |     } 
  112 |     catch (error) 
  113 |     {
  114 | 
  115 |         console.error(
  116 |             'Error in Admin End to End Test:',
  117 |             error
  118 |         );
  119 | 
  120 |         await page.screenshot({
  121 |             path: 'test-results/admin-test-failure.png',
  122 |             fullPage: true
  123 |         });
  124 | 
  125 |         throw error;
  126 |     }
  127 | });
  128 |  test('Admin manage booking End to End Tests', async ({page, loginpage, managebookingpage}) =>
  129 | {
  130 |         try {
  131 |         await managebookingpage.navigatemanagerbooking();
  132 |         await page.waitForLoadState('networkidle', { timeout: 60000 });
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
  153 | }
  154 | );
  155 | 
  156 | 
  157 | 
```