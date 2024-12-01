import { test} from '@playwright/test';

//Hook & Flow Control
   test.beforeEach(async({page})=>{
      await page.goto('http://localhost:4200/')
   })

   test.describe.skip('test suite 1',()=>{
      test.beforeEach(async({page})=>{
         await page.getByRole('link', { name: 'Charts', exact: true }).click();
      })
      
      test("practice test Forms Layout",async({page})=>{
         await page.getByText('Echarts').click()
      })
   })

   test.describe('test suite 2',()=>{

      test.beforeEach(async({page})=>{
         await page.getByRole('link', { name: 'Forms', exact: true }).click();
      })

      test('practice test Forms Layout1',async({page})=>{
         await page.getByText('Form Layouts').click()
      })

      test('practice test date picker1',async({page})=>{
         await page.getByText('Datepicker').click()
      })
   })