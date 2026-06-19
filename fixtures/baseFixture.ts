import { test as base } from '@playwright/test';
import { loginpage } from '../pages/loginpage';
import {eventpage} from '../pages/eventpage';
import { MyBooking } from '../pages/MyBooking';
import { Createneweventpage } from '../pages/Createneweventpage';
import { managebookingpage } from '../pages/managebooking';
import { readCSV, readJSON } from '../utill/ui';
type MyFixtures = {loginpage: loginpage; eventpage: eventpage; MyBooking: MyBooking; Createneweventpage: Createneweventpage; managebookingpage: managebookingpage};
export const test = base.extend<MyFixtures>
(
    {
    loginpage: async ({ page }, use) => 
    {
        const login = new loginpage(page);
        await use(login);
    },
    eventpage: async ({ page }, use) => {
        const event = new eventpage(page);
        await use(event);
    },
    MyBooking: async ({ page }, use) => {
        const mybooking = new MyBooking(page);
        await use(mybooking);
    },
    Createneweventpage: async ({ page }, use) => {
        const createnewevent = new Createneweventpage(page);
        await use(createnewevent);
    },
     managebookingpage: async ({ page }, use) => {
         const managebooking = new managebookingpage(page, test.expect);
         await use(managebooking);
     }

});
export { expect } from '@playwright/test';