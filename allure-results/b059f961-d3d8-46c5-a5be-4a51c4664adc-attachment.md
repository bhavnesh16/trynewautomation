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