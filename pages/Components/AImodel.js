import React from 'react'

const AImodel = () => {
  let model = [{'jun':[12,19]},{'jul' :[24,13]},{'augp':19},{'auga':12},{'sepp':15}, {'sepa':17}]
  return (
    <div>
        <h1 className='pt-32 text-center'>Predictive model /hard coded becuse there is no data , must be rendered by loopin as table 1</h1>
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Month
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Predicted
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Actual
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jun</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                16
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                14
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jul</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                36
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                33
              </td>
            </tr>


            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aug</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                18
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                16
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sep</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                17
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                14
              </td>
            </tr>


            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>
  )
}

export default AImodel