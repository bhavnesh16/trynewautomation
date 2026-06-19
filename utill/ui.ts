import { Page, Locator,expect } from '@playwright/test';
import { selectors } from 'playwright-chromium';
import fs from 'fs';

// export async function click(page: Page, selectors: string, timeout= 10000) {
//     try {
//         const locator = page.locator(selectors).first();
//         if (await locator.count() === 0) {
//             console.log(`Selector not found: ${locator}`);
//             return; // don't throw, element might not exist
//         }
//         await locator.click({ timeout, force: true });
//     }
//     catch (e) {
//         console.log(`safeClick error for selector "${selectors}":`, e instanceof Error ? e.message : String(e));
//         try {
//             const locator = page.locator(selectors).first();
//             await locator.click({ timeout, force: true });
//         }
//         catch (_) {
//             // Silent fail - element might not exist or page might be closed
//         }
//     }
// }




export async function click(
    page: Page,
    selector: string | Locator,
    timeout = 10000
) 
{

    let locator: Locator | undefined;

    try {

        // If already locator
        if (typeof selector !== 'string') {

            locator = selector;

        }

        // Support getByLabel
        else if (selector.startsWith('label=')) {

            locator = page.getByLabel(
                selector.replace('label=', '')
            );

        }

        // Support getByRole
        else if (selector.startsWith('role=')) {

            const roleText =
                selector.replace('role=', '');

                const parts =
        roleText.split('|');

    const role =
        parts[0];

    const name =
        parts[1];

            locator = page.getByRole(
        role as any,
        name
            ? { name: name.trim() }
            : {}

        )}

        // Support getByTestId
        else if (selector.startsWith('testid=')) {

            locator = page.getByTestId(
                selector.replace('testid=', '')
            );

        }

        // Support getByText
        else if (selector.startsWith('text=')) {

            locator = page.getByText(
                selector.replace('text=', '')
            );

        }

        // Default CSS/XPath locator
        else {

            locator = page.locator(selector).first();

        }

        // Validate element exists
        if (await locator.count() === 0) {

            console.log(
                `Selector not found: ${selector}`
            );

            return;
        }

        await locator.waitFor({
            state: 'visible',
            timeout
        });

        await locator.click({
            timeout,
            force: true
        });

    }
    catch (e) {

        console.log(
            `Click error for selector "${selector}":`,
            e instanceof Error
                ? e.message
                : String(e)
        );

        try {

            if (locator) {

                await locator.click({
                    timeout,
                    force: true
                });

            }

        }
        catch (_) {

            console.log(
                `Retry click failed for: ${selector}`
            );
        }
    }
}

// export async function Fill(page: Page, selector: string | Locator, value: string, timeout = 100000) {
//   const locator = typeof selector === 'string' ? page.locator(selector).first() : selector as Locator;
//   try {
//     await locator.waitFor({ state: 'visible', timeout: 60000 });
//     await locator.fill(value, { timeout });
//   } catch (e) {
//     console.log(`Fill error for selector "${selector}":`, e instanceof Error ? e.message : String(e));
//     console.log('Available input elements:', await page.locator('input, textarea').count());
    
//     // Debug: Get all input ids and names
//     const inputs = await page.locator('input, textarea').all();
//     for (let i = 0; i < inputs.length; i++) {
//       const id = await inputs[i].getAttribute('id');
//       const name = await inputs[i].getAttribute('name');
//       const type = await inputs[i].getAttribute('type');
//       console.log(`Input ${i}: id="${id}", name="${name}", type="${type}"`);
//     }
//     throw e;
//   }
// }


// export async function ExpectVisible(page: Page, selectors: String, timeout: 10000)
// {
//     const locator = page.locator(selectors).first();
//     await page.waitForEvent(()=> { 
//         const el = document.querySelector(selectors);
//     return el && el.getBoundingClientRect().height > 0;
//     }, { timeout });
// }


export async function Fill(
    page: Page,
    selector: string | Locator,
    value: string,
    timeout = 100000
)
{

    let locator: Locator | undefined;

    try {

        // Direct locator
        if (typeof selector !== 'string') {

            locator = selector;

        }

        // getByLabel
        else if (selector.startsWith('label=')) {

            locator = page.getByLabel(
                selector.replace('label=', '')
            );

        }

        // getByRole
        else if (selector.startsWith('role=')) {

            const roleText =
                selector.replace('role=', '');

            locator = page.getByRole(
                roleText as any
            );

        }

        // getByTestId
        else if (selector.startsWith('testid=')) {

            locator = page.getByTestId(
                selector.replace('testid=', '')
            );

        }

        // getByText
        else if (selector.startsWith('text=')) {

            locator = page.getByText(
                selector.replace('text=', '')
            );

        }

        // Default CSS/XPath
        else {

            locator = page
                .locator(selector)
                .first();

        }

        // Validate element exists
        if (await locator.count() === 0) {

            console.log(
                `Selector not found: ${selector}`
            );

            return;
        }

        await locator.waitFor({
            state: 'visible',
            timeout
        });

        // Fill value
        await locator.fill(value, {
            timeout
        });

    }
    catch (e) {

        console.log(
            `Fill error for selector "${selector}":`,
            e instanceof Error
                ? e.message
                : String(e)
        );

        console.log(
            'Available input elements:',
            await page.locator(
                'input, textarea'
            ).count()
        );

        try {

            if (locator) {

                await locator.fill(value, {
                    timeout
                });

            }

        }
        catch (_) {

            console.log(
                `Retry fill failed for: ${selector}`
            );

        }
    }
}

export async function ExpectVisible(page: Page, selectors: string, timeout: number = 10000) {
    const locator = page.locator(selectors).first();
    //await locator.waitFor({ state: 'visible', timeout });
    await expect(locator).toBeVisible({ timeout });
}


export async function selectDropdownValue(locator : Locator, value: string): Promise<void>
{
  const dropdown = await locator.first();
  await dropdown.selectOption(value);
}

export async function selectDateTime(locator : Locator,dateTime: string) {

  const datePicker = await locator.first();

  await datePicker.clear();
  await datePicker.fill(dateTime);
  await datePicker.press('Tab');
}

export function readCSV(filePath: string): any[] {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  const records = lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const record: any = {};
    headers.forEach((header, index) => {
      record[header] = values[index];
    });
    return record;
  });
  
  return records;
}

export function readJSON(filePath: string): any[] {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}