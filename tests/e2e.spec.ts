import { readCSV, readJSON } from '../utill/ui';
import { test, expect } from '../fixtures/baseFixture';

test.beforeEach(async ({ page ,loginpage}) => {
  test.setTimeout(200000);
  try {
    const csvData = readCSV('./testdata/logindata.csv');
    const jsonData = readJSON('./testdata/data.json');
    
    if (csvData.length === 0) {
      throw new Error('No login data found in CSV');
    }
    
    const data = csvData[0]; // Use first record from CSV
    console.log('Test Data URL:', jsonData[0].url);
    
    // Navigate to login page
    await loginpage.goto(jsonData[0].url);
    await page.screenshot({ path: 'test-results/page-debug.png' });
    
    const title = await page.title();
    console.log('Page title:', title);
    console.log('Page URL:', page.url());
    
    // Perform login
    await loginpage.fillCredentials(data.email, data.password);
    await loginpage.submit();
    
    // Wait for login to complete
    await expect(page.getByRole('heading', { name: 'Featured Events' })).toBeVisible({ timeout: 30000 });
    console.log('✓ Login completed successfully');
  } catch (error) {
    console.error('beforeEach setup failed:', error instanceof Error ? error.message : String(error));
    await page.screenshot({ path: 'test-results/beforeEach-error.png' });
    throw error;
  }
});
test.afterEach(async ({ page ,loginpage}) => 
{
    await loginpage.logoutbutton();
});
test.describe('End to End Tests', async () => 
{  
    test('sample event booking test', async ({ page ,eventpage,loginpage}) => 
    {
        const testData = readJSON('./testdata/data.json');
        // Debug: List all available links
        const links = await page.locator('a').all();
        console.log(`Found ${links.length} links on the page`);
        
         // Debug: List all nav elements
        const navElements = await page.locator('[id*="nav"]').all();
        console.log(`Found ${navElements.length} nav elements`);
        for (let i = 0; i < navElements.length; i++) {
        const id = await navElements[i].getAttribute('id');
        const text = await navElements[i].textContent();
        console.log(`Nav ${i}: id="${id}", text="${text}"`);
         }      
        //const eventbooking = new eventpage(page);
        await eventpage.navigatetoevent();
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.screenshot({ path: 'test-results/step3-after-nav-events.png' });

        await eventpage.searchevent();
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.screenshot({ path: 'test-results/step4-after-search-event.png' });
        
        await eventpage.openeventpage();
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.screenshot({ path: 'test-results/step5-after-open-event.png' });

        await eventpage.validatetheclientsideerror();
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.screenshot({ path: 'test-results/step6-validatetheclientsideerror.png' });

        await eventpage.formfill(testData[0].name, testData[0].email, testData[0].phone);
        await page.screenshot({ path: 'test-results/step7-after-form-fill.png' });
    });
});
test('cancel the booking', async ({ page, loginpage, MyBooking}) => 
    {       //const MyBookingPage = new MyBooking(page);
        await MyBooking.navigatetomybooking();
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
        await MyBooking.cancelbooking();
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.screenshot({ path: 'test-results/step4-after-cancel-booking.png' });
       
    })
  
     test('cancel the all booking', async ({ page, loginpage ,MyBooking}) => 
    {
       //  const MyBookingPage = new MyBooking(page);
        await MyBooking.navigatetomybooking();
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.screenshot({ path: 'test-results/step3-after-nav-mybooking.png' });
        await MyBooking.cancelallbookings();
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.screenshot({ path: 'test-results/step4-after-all-cancel-booking.png' });
        await expect(page.locator('text=All bookings cancelled successfully')).toBeVisible();
    })

      test('Admin End to End Tests', async ({page, loginpage, Createneweventpage}) => {
        try
        {

        //const createEvent =new Createneweventpage(page);

        await Createneweventpage.navigateaddnewevent();

    } 
    catch (error) 
    {

        console.error(
            'Error in Admin End to End Test:',
            error
        );

        await page.screenshot({
            path: 'test-results/admin-test-failure.png',
            fullPage: true
        });

        throw error;
    }
});
 test('Admin manage booking End to End Tests', async ({page, loginpage, managebookingpage}) =>
{
        try {
        await managebookingpage.navigatemanagerbooking();
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.screenshot({
            path: 'test-results/step3-manage-bookings.png'
        });

        console.log('✓ Admin manage booking test completed successfully');

    } 
    catch (error) {

        console.error(
            'Error in Admin manage booking End to End Test:',
            error
        );

        // await page.screenshot({
        //     path: 'test-results/admin-manage-booking-failure.png',
        //     fullPage: true
        // });
        throw error;
    }
}
);


