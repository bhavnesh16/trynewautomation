# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Apitest.spec.ts >> register user
- Location: tests\Apitest.spec.ts:21:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 400
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | import { request } from 'playwright-chromium';
  3  | 
  4  | test('login user',async({request})=>{
  5  | 
  6  |     const response =await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login', 
  7  |         {
  8  |             data:
  9  |             {
  10 |                 "email": "student@example.com",
  11 |                 "password": "secret123"
  12 |             }
  13 |         }
  14 |     );
  15 |       expect(response.status()).toBe(200);
  16 |   const responseBody = await response.json();
  17 |   console.log(responseBody);
  18 | })
  19 | 
  20 | 
  21 | test('register user',async({request})=>
  22 | {
  23 | 
  24 |      const randomemail='student${Math.floor(Math.random() * 1000)}@example.com';
  25 | 
  26 |      const response =await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/register', 
  27 |         {
  28 |  
  29 |              data:
  30 |             {
  31 |                 "email": randomemail,
  32 |                 "password": "secret123"
  33 |             }
  34 |         });
> 35 |         expect(response.status()).toBe(201);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  36 |        const responseBody = await response.json();
  37 |        console.log(responseBody);
  38 | });
  39 | 
  40 | 
  41 | test('Get user details', async ({ request }) => {
  42 | 
  43 |   const response = await request.get(
  44 |     'https://api.eventhub.rahulshettyacademy.com/api/auth/me'
  45 |   );
  46 | 
  47 |   expect(response.status()).toBe(401);
  48 | 
  49 |   const body = await response.json();
  50 | 
  51 |   console.log(body);
  52 | });
  53 | 
  54 | 
  55 | 
  56 | test('Update user', async ({ request }) => 
  57 | {
  58 |      const response = await request.put(
  59 |     'https://reqres.in/api/users/2',
  60 |     {
  61 |         data:{
  62 |         name: 'John',
  63 |         job: 'Senior QA Engineer'
  64 |         }
  65 |     });
  66 | 
  67 |     
  68 | });
```