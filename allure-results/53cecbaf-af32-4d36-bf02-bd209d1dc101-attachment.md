# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Admin manage booking End to End Tests
- Location: tests\e2e.spec.ts:137:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div :has-text("No bookings found")').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('div :has-text("No bookings found")').first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - paragraph [ref=e27]: 1 total bookings
        - combobox [ref=e29] [cursor=pointer]:
          - option "All Statuses" [selected]
          - option "Confirmed"
          - option "Cancelled"
      - table [ref=e32]:
        - rowgroup [ref=e33]:
          - row "Ref Customer Event Qty Total Status Date Actions" [ref=e34]:
            - columnheader "Ref" [ref=e35]
            - columnheader "Customer" [ref=e36]
            - columnheader "Event" [ref=e37]
            - columnheader "Qty" [ref=e38]
            - columnheader "Total" [ref=e39]
            - columnheader "Status" [ref=e40]
            - columnheader "Date" [ref=e41]
            - columnheader "Actions" [ref=e42]
        - rowgroup [ref=e43]:
          - row "D-01M0WY Bhavnesh Kumar bhavnesh16@gmail.com Dilli Diwali Mela 1 $300 confirmed 2 Jun 2026 View Cancel" [ref=e44]:
            - cell "D-01M0WY" [ref=e45]
            - cell "Bhavnesh Kumar bhavnesh16@gmail.com" [ref=e46]:
              - paragraph [ref=e47]: Bhavnesh Kumar
              - paragraph [ref=e48]: bhavnesh16@gmail.com
            - cell "Dilli Diwali Mela" [ref=e49]
            - cell "1" [ref=e50]
            - cell "$300" [ref=e51]
            - cell "confirmed" [ref=e52]:
              - generic [ref=e53]: confirmed
            - cell "2 Jun 2026" [ref=e54]
            - cell "View Cancel" [ref=e55]:
              - generic [ref=e56]:
                - button "View" [active] [ref=e57] [cursor=pointer]
                - button "Cancel" [ref=e58] [cursor=pointer]
  - contentinfo [ref=e59]:
    - generic [ref=e60]:
      - generic [ref=e61]:
        - generic [ref=e62]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e63]
          - paragraph [ref=e64]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e65]:
          - heading "Popular Courses" [level=3] [ref=e66]
          - list [ref=e67]:
            - listitem [ref=e68]:
              - link "Selenium WebDriver with Java" [ref=e69] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e70]:
              - link "Playwright with JavaScript" [ref=e71] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e72]:
              - link "RestAssured API Testing" [ref=e73] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e74]:
              - link "Cypress End-to-End Testing" [ref=e75] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e76]:
              - link "Appium Mobile Testing" [ref=e77] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e78]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e79]
          - paragraph [ref=e80]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e81] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e82]:
          - heading "EventHub Practice App" [level=3] [ref=e83]
          - list [ref=e84]:
            - listitem [ref=e85]:
              - link "Browse Events" [ref=e86] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e87]:
              - link "My Bookings" [ref=e88] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e89]:
              - link "Manage Events" [ref=e90] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e91]:
              - link "API Documentation" [ref=e92] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e93]:
        - paragraph [ref=e94]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e95]:
          - link "rahulshettyacademy.com →" [ref=e96] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e97] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e98]
  - dialog "Booking — D-01M0WY" [ref=e101]:
    - generic [ref=e102]:
      - heading "Booking — D-01M0WY" [level=2] [ref=e103]
      - button "Close" [ref=e104] [cursor=pointer]:
        - img [ref=e105]
    - generic [ref=e108]:
      - generic [ref=e109]:
        - generic [ref=e110]: Reference
        - generic [ref=e111]: D-01M0WY
      - generic [ref=e112]:
        - generic [ref=e113]: Status
        - generic [ref=e115]: confirmed
      - generic [ref=e116]:
        - paragraph [ref=e117]: Event
        - generic [ref=e118]:
          - generic [ref=e119]: Title
          - generic [ref=e120]: Dilli Diwali Mela
        - generic [ref=e121]:
          - generic [ref=e122]: Date
          - generic [ref=e123]: 20 Oct 2026
        - generic [ref=e124]:
          - generic [ref=e125]: City
          - generic [ref=e126]: Delhi
      - generic [ref=e127]:
        - paragraph [ref=e128]: Customer
        - generic [ref=e129]:
          - generic [ref=e130]: Name
          - generic [ref=e131]: Bhavnesh Kumar
        - generic [ref=e132]:
          - generic [ref=e133]: Email
          - generic [ref=e134]: bhavnesh16@gmail.com
        - generic [ref=e135]:
          - generic [ref=e136]: Phone
          - generic [ref=e137]: "+919711892616"
      - generic [ref=e138]:
        - generic [ref=e139]:
          - generic [ref=e140]: Tickets
          - generic [ref=e141]: "1"
        - generic [ref=e142]:
          - generic [ref=e143]: Total
          - generic [ref=e144]: $300
        - generic [ref=e145]:
          - generic [ref=e146]: Booked on
          - generic [ref=e147]: 2 Jun 2026
```

# Test source

```ts
  214 |         // getByRole
  215 |         else if (selector.startsWith('role=')) {
  216 | 
  217 |             const roleText =
  218 |                 selector.replace('role=', '');
  219 | 
  220 |             locator = page.getByRole(
  221 |                 roleText as any
  222 |             );
  223 | 
  224 |         }
  225 | 
  226 |         // getByTestId
  227 |         else if (selector.startsWith('testid=')) {
  228 | 
  229 |             locator = page.getByTestId(
  230 |                 selector.replace('testid=', '')
  231 |             );
  232 | 
  233 |         }
  234 | 
  235 |         // getByText
  236 |         else if (selector.startsWith('text=')) {
  237 | 
  238 |             locator = page.getByText(
  239 |                 selector.replace('text=', '')
  240 |             );
  241 | 
  242 |         }
  243 | 
  244 |         // Default CSS/XPath
  245 |         else {
  246 | 
  247 |             locator = page
  248 |                 .locator(selector)
  249 |                 .first();
  250 | 
  251 |         }
  252 | 
  253 |         // Validate element exists
  254 |         if (await locator.count() === 0) {
  255 | 
  256 |             console.log(
  257 |                 `Selector not found: ${selector}`
  258 |             );
  259 | 
  260 |             return;
  261 |         }
  262 | 
  263 |         await locator.waitFor({
  264 |             state: 'visible',
  265 |             timeout
  266 |         });
  267 | 
  268 |         // Fill value
  269 |         await locator.fill(value, {
  270 |             timeout
  271 |         });
  272 | 
  273 |     }
  274 |     catch (e) {
  275 | 
  276 |         console.log(
  277 |             `Fill error for selector "${selector}":`,
  278 |             e instanceof Error
  279 |                 ? e.message
  280 |                 : String(e)
  281 |         );
  282 | 
  283 |         console.log(
  284 |             'Available input elements:',
  285 |             await page.locator(
  286 |                 'input, textarea'
  287 |             ).count()
  288 |         );
  289 | 
  290 |         try {
  291 | 
  292 |             if (locator) {
  293 | 
  294 |                 await locator.fill(value, {
  295 |                     timeout
  296 |                 });
  297 | 
  298 |             }
  299 | 
  300 |         }
  301 |         catch (_) {
  302 | 
  303 |             console.log(
  304 |                 `Retry fill failed for: ${selector}`
  305 |             );
  306 | 
  307 |         }
  308 |     }
  309 | }
  310 | 
  311 | export async function ExpectVisible(page: Page, selectors: string, timeout: number = 10000) {
  312 |     const locator = page.locator(selectors).first();
  313 |     //await locator.waitFor({ state: 'visible', timeout });
> 314 |       await expect(locator).toBeVisible({ timeout });
      |                             ^ Error: expect(locator).toBeVisible() failed
  315 | }
  316 | 
  317 | 
  318 | export async function selectDropdownValue(locator : Locator, value: string): Promise<void>
  319 | {
  320 |   const dropdown = await locator.first();
  321 |   await dropdown.selectOption(value);
  322 | }
  323 | 
  324 | export async function selectDateTime(locator : Locator,dateTime: string) {
  325 | 
  326 |   const datePicker = await locator.first();
  327 | 
  328 |   await datePicker.clear();
  329 |   await datePicker.fill(dateTime);
  330 |   await datePicker.press('Tab');
  331 | }
  332 | 
  333 | export function readCSV(filePath: string): any[] {
  334 |   const fileContent = fs.readFileSync(filePath, 'utf-8');
  335 |   const lines = fileContent.trim().split('\n');
  336 |   const headers = lines[0].split(',').map(h => h.trim());
  337 |   
  338 |   const records = lines.slice(1).map(line => {
  339 |     const values = line.split(',').map(v => v.trim());
  340 |     const record: any = {};
  341 |     headers.forEach((header, index) => {
  342 |       record[header] = values[index];
  343 |     });
  344 |     return record;
  345 |   });
  346 |   
  347 |   return records;
  348 | }
  349 | 
  350 | export function readJSON(filePath: string): any[] {
  351 |   const fileContent = fs.readFileSync(filePath, 'utf-8');
  352 |   return JSON.parse(fileContent);
  353 | }
```