import { Page,test,expect } from '@playwright/test';
//import { test } from '../fixtures/baseFixture';

test('checking the asearch flow',async({page})=>
{

    test.setTimeout(200000);
    try
    {
       await page.goto('https://www.amazon.in/ref=nav_logo');
       //await page.waitForLoadState('networkidle',{timeout:120000});
       await page.waitForTimeout(10000);
       await page.screenshot({path:'test-results/step1-amazon-homepage.png'});
       await page.locator('nav-flyout-button nav-icon nav-arrow').nth(1).hover();;
       //await page.getByLabel('twotabsearchtextbox').click
       //await expect(page.locator('text=Deals for you')).toBeVisible(); //page.getByLabel('Deals for you')
       await page.getByPlaceholder('Search Amazon.in').fill('4k tv 43 inch');
       await expect(page.locator('.left-pane-results-container')).toBeVisible();

    }
    catch(error)
    {
        console.error(
            'Error in checking the search flow:',
            error
        );
    }
})
