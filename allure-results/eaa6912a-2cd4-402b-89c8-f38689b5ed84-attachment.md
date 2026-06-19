# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> End to End Tests >> sample event booking test
- Location: tests\e2e.spec.ts:33:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Booking Confirmed').first()
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('text=Booking Confirmed').first()

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
                  - paragraph [ref=e65]: 9999 / 10000 seats
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
                - text: bhavnesh kumar
            - generic [ref=e91]:
              - generic [ref=e92]: Email*
              - textbox "Email*" [ref=e93]:
                - /placeholder: you@email.com
                - text: bhavnesh16@gmail.com
            - generic [ref=e94]:
              - generic [ref=e95]: Phone Number*
              - textbox "Phone Number*" [active] [ref=e96]:
                - /placeholder: +91 98765 43210
              - paragraph [ref=e97]: Enter a valid 10-digit phone
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]: $300 × 1 ticket
                - generic [ref=e101]: $300
              - generic [ref=e102]:
                - generic [ref=e103]: Total
                - generic [ref=e104]: $300
            - button "Confirm Booking" [ref=e105] [cursor=pointer]
  - contentinfo [ref=e106]:
    - generic [ref=e107]:
      - generic [ref=e108]:
        - generic [ref=e109]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e110]
          - paragraph [ref=e111]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e112]:
          - heading "Popular Courses" [level=3] [ref=e113]
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "Selenium WebDriver with Java" [ref=e116] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e117]:
              - link "Playwright with JavaScript" [ref=e118] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e119]:
              - link "RestAssured API Testing" [ref=e120] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e121]:
              - link "Cypress End-to-End Testing" [ref=e122] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e123]:
              - link "Appium Mobile Testing" [ref=e124] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e125]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e126]
          - paragraph [ref=e127]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e128] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e129]:
          - heading "EventHub Practice App" [level=3] [ref=e130]
          - list [ref=e131]:
            - listitem [ref=e132]:
              - link "Browse Events" [ref=e133] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e134]:
              - link "My Bookings" [ref=e135] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e136]:
              - link "Manage Events" [ref=e137] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e138]:
              - link "API Documentation" [ref=e139] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e140]:
        - paragraph [ref=e141]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e142]:
          - link "rahulshettyacademy.com →" [ref=e143] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e144] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e145]
```

# Test source

```ts
  201 |         // getByRole
  202 |         else if (selector.startsWith('role=')) {
  203 | 
  204 |             const roleText =
  205 |                 selector.replace('role=', '');
  206 | 
  207 |             locator = page.getByRole(
  208 |                 roleText as any
  209 |             );
  210 | 
  211 |         }
  212 | 
  213 |         // getByTestId
  214 |         else if (selector.startsWith('testid=')) {
  215 | 
  216 |             locator = page.getByTestId(
  217 |                 selector.replace('testid=', '')
  218 |             );
  219 | 
  220 |         }
  221 | 
  222 |         // getByText
  223 |         else if (selector.startsWith('text=')) {
  224 | 
  225 |             locator = page.getByText(
  226 |                 selector.replace('text=', '')
  227 |             );
  228 | 
  229 |         }
  230 | 
  231 |         // Default CSS/XPath
  232 |         else {
  233 | 
  234 |             locator = page
  235 |                 .locator(selector)
  236 |                 .first();
  237 | 
  238 |         }
  239 | 
  240 |         // Validate element exists
  241 |         if (await locator.count() === 0) {
  242 | 
  243 |             console.log(
  244 |                 `Selector not found: ${selector}`
  245 |             );
  246 | 
  247 |             return;
  248 |         }
  249 | 
  250 |         await locator.waitFor({
  251 |             state: 'visible',
  252 |             timeout
  253 |         });
  254 | 
  255 |         // Fill value
  256 |         await locator.fill(value, {
  257 |             timeout
  258 |         });
  259 | 
  260 |     }
  261 |     catch (e) {
  262 | 
  263 |         console.log(
  264 |             `Fill error for selector "${selector}":`,
  265 |             e instanceof Error
  266 |                 ? e.message
  267 |                 : String(e)
  268 |         );
  269 | 
  270 |         console.log(
  271 |             'Available input elements:',
  272 |             await page.locator(
  273 |                 'input, textarea'
  274 |             ).count()
  275 |         );
  276 | 
  277 |         try {
  278 | 
  279 |             if (locator) {
  280 | 
  281 |                 await locator.fill(value, {
  282 |                     timeout
  283 |                 });
  284 | 
  285 |             }
  286 | 
  287 |         }
  288 |         catch (_) {
  289 | 
  290 |             console.log(
  291 |                 `Retry fill failed for: ${selector}`
  292 |             );
  293 | 
  294 |         }
  295 |     }
  296 | }
  297 | 
  298 | export async function ExpectVisible(page: Page, selectors: string, timeout: number = 10000) {
  299 |     const locator = page.locator(selectors).first();
  300 |     //await locator.waitFor({ state: 'visible', timeout });
> 301 |       await expect(locator).toBeVisible({ timeout });
      |                             ^ Error: expect(locator).toBeVisible() failed
  302 | }
  303 | 
  304 | 
  305 | export async function selectDropdownValue(locator : Locator, value: string): Promise<void>
  306 | {
  307 |   const dropdown = await locator.first();
  308 |   await dropdown.selectOption(value);
  309 | }
  310 | 
  311 | export async function selectDateTime(locator : Locator,dateTime: string) {
  312 | 
  313 |   const datePicker = await locator.first();
  314 | 
  315 |   await datePicker.clear();
  316 |   await datePicker.fill(dateTime);
  317 |   await datePicker.press('Tab');
  318 | }
  319 | 
  320 | export function readCSV(filePath: string): any[] {
  321 |   const fileContent = fs.readFileSync(filePath, 'utf-8');
  322 |   const lines = fileContent.trim().split('\n');
  323 |   const headers = lines[0].split(',').map(h => h.trim());
  324 |   
  325 |   const records = lines.slice(1).map(line => {
  326 |     const values = line.split(',').map(v => v.trim());
  327 |     const record: any = {};
  328 |     headers.forEach((header, index) => {
  329 |       record[header] = values[index];
  330 |     });
  331 |     return record;
  332 |   });
  333 |   
  334 |   return records;
  335 | }
  336 | 
  337 | export function readJSON(filePath: string): any[] {
  338 |   const fileContent = fs.readFileSync(filePath, 'utf-8');
  339 |   return JSON.parse(fileContent);
  340 | }
```