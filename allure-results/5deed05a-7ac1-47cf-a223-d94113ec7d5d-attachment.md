# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> cancel the booking
- Location: tests\e2e.spec.ts:56:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Booking cancelled successfully').first()
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('text=Booking cancelled successfully').first()

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
      - generic [ref=e26]:
        - heading "Discover & Book Amazing Events" [level=1] [ref=e27]:
          - text: Discover & Book
          - text: Amazing Events
        - paragraph [ref=e28]: From tech conferences to live concerts, sports events to cultural festivals — find experiences that inspire you.
        - generic [ref=e29]:
          - link "Browse Events →" [ref=e30] [cursor=pointer]:
            - /url: /events
            - generic [ref=e31]: Browse Events →
          - link "My Bookings" [ref=e32] [cursor=pointer]:
            - /url: /bookings
            - button "My Bookings" [ref=e33]
      - generic [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]:
            - heading "Featured Events" [level=2] [ref=e37]
            - paragraph [ref=e38]: Hand-picked upcoming events just for you
          - link "View all →" [ref=e39] [cursor=pointer]:
            - /url: /events
        - generic [ref=e40]:
          - article [ref=e41]:
            - generic [ref=e42]:
              - img "Dilli Diwali Mela" [ref=e43]
              - generic [ref=e45]: Festival
              - generic [ref=e46]: Featured
            - generic [ref=e47]:
              - link "Dilli Diwali Mela" [ref=e48] [cursor=pointer]:
                - /url: /events/3
                - heading "Dilli Diwali Mela" [level=3] [ref=e49]
              - generic [ref=e50]:
                - generic [ref=e51]:
                  - img [ref=e52]
                  - generic [ref=e54]: Tue, 20 Oct
                - generic [ref=e55]:
                  - img [ref=e56]
                  - generic [ref=e58]: Pragati Maidan Exhibition Grounds, Delhi
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - paragraph [ref=e61]: $300
                  - generic [ref=e62]: 9999 seats available
                - link "Book Now" [ref=e63] [cursor=pointer]:
                  - /url: /events/3
          - article [ref=e64]:
            - generic [ref=e65]:
              - img "Hollywood Monsoon Night — Los Angeles" [ref=e66]
              - generic [ref=e68]: Concert
              - generic [ref=e69]: Featured
            - generic [ref=e70]:
              - link "Hollywood Monsoon Night — Los Angeles" [ref=e71] [cursor=pointer]:
                - /url: /events/2
                - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e72]
              - generic [ref=e73]:
                - generic [ref=e74]:
                  - img [ref=e75]
                  - generic [ref=e77]: Sun, 12 Jul
                - generic [ref=e78]:
                  - img [ref=e79]
                  - generic [ref=e81]: Dome, NSCI SVP Stadium, Worli, Los Angeles
              - generic [ref=e82]:
                - generic [ref=e83]:
                  - paragraph [ref=e84]: $2,500
                  - generic [ref=e85]: 3000 seats available
                - link "Book Now" [ref=e86] [cursor=pointer]:
                  - /url: /events/2
          - article [ref=e87]:
            - generic [ref=e88]:
              - img "World Tech Summit" [ref=e89]
              - generic [ref=e91]: Conference
              - generic [ref=e92]: Featured
            - generic [ref=e93]:
              - link "World Tech Summit" [ref=e94] [cursor=pointer]:
                - /url: /events/1
                - heading "World Tech Summit" [level=3] [ref=e95]
              - generic [ref=e96]:
                - generic [ref=e97]:
                  - img [ref=e98]
                  - generic [ref=e100]: Sat, 18 Apr
                - generic [ref=e101]:
                  - img [ref=e102]
                  - generic [ref=e104]: Hyderabad, Hitech city, Hyderabad
              - generic [ref=e105]:
                - generic [ref=e106]:
                  - paragraph [ref=e107]: $1,500
                  - generic [ref=e108]: 500 seats available
                - link "Book Now" [ref=e109] [cursor=pointer]:
                  - /url: /events/1
          - article [ref=e110]:
            - generic [ref=e111]:
              - img [ref=e113]
              - generic [ref=e116]: Conference
            - generic [ref=e117]:
              - link "test eventsss" [ref=e118] [cursor=pointer]:
                - /url: /events/38423
                - heading "test eventsss" [level=3] [ref=e119]
              - generic [ref=e120]:
                - generic [ref=e121]:
                  - img [ref=e122]
                  - generic [ref=e124]: Sat, 30 May
                - generic [ref=e125]:
                  - img [ref=e126]
                  - generic [ref=e128]: town park, Faridabad
              - generic [ref=e129]:
                - generic [ref=e130]:
                  - paragraph [ref=e131]: $23
                  - generic [ref=e132]: 5000 seats available
                - link "Book Now" [ref=e133] [cursor=pointer]:
                  - /url: /events/38423
      - generic [ref=e135]:
        - heading "Ready to experience something new?" [level=2] [ref=e136]
        - paragraph [ref=e137]: Browse thousands of events across India. Book tickets in seconds.
        - link "Explore All Events" [ref=e138] [cursor=pointer]:
          - /url: /events
          - button "Explore All Events" [ref=e139]
  - contentinfo [ref=e140]:
    - generic [ref=e141]:
      - generic [ref=e142]:
        - generic [ref=e143]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e144]
          - paragraph [ref=e145]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e146]:
          - heading "Popular Courses" [level=3] [ref=e147]
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "Selenium WebDriver with Java" [ref=e150] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e151]:
              - link "Playwright with JavaScript" [ref=e152] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e153]:
              - link "RestAssured API Testing" [ref=e154] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e155]:
              - link "Cypress End-to-End Testing" [ref=e156] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e157]:
              - link "Appium Mobile Testing" [ref=e158] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e159]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e160]
          - paragraph [ref=e161]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e162] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e163]:
          - heading "EventHub Practice App" [level=3] [ref=e164]
          - list [ref=e165]:
            - listitem [ref=e166]:
              - link "Browse Events" [ref=e167] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e168]:
              - link "My Bookings" [ref=e169] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e170]:
              - link "Manage Events" [ref=e171] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e172]:
              - link "API Documentation" [ref=e173] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e174]:
        - paragraph [ref=e175]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e176]:
          - link "rahulshettyacademy.com →" [ref=e177] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e178] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e179]
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