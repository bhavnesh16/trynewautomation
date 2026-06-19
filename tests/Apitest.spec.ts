import{test,expect} from '@playwright/test';
import { request } from 'playwright-chromium';

test('login user',async({request})=>{

    const response =await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login', 
        {
            data:
            {
                "email": "student@example.com",
                "password": "secret123"
            }
        }
    );
      expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
})


test('register user',async({request})=>
{

     const randomemail='student${Math.floor(Math.random() * 1000)}@example.com';
     console.log('Generated random email:', randomemail);

     const response =await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/register', 
        {
            
             data:
            {
                "email": randomemail,
                "password": "secret123"
            }
        });
        expect(response.status()).toBe(201);
       const responseBody = await response.json();
       console.log(responseBody);
});


test('Get user details', async ({ request }) => {

  const response = await request.get(
    'https://api.eventhub.rahulshettyacademy.com/api/auth/me'
  );

  expect(response.status()).toBe(401);

  const body = await response.json();

  console.log(body);
});



test('Update user', async ({ request }) => 
{
     const response = await request.put(
    'https://reqres.in/api/users/2',
    {
        data:{
        name: 'John',
        job: 'Senior QA Engineer'
        }
    });

    
});