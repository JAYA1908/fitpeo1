import logo from './logo.svg';
import './App.css';
import { SideNav } from './Components/Dashboard/SideNav';
import { Product } from './Components/Product/Product';
import BarChart from './Components/Chart/ChartView';
import { DonutChart } from './Components/Chart/DonutChart';

function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>

        <div className='navOuter'>
          <SideNav />
        </div>
        <div className='containArea'>
          <section style={{display:"flex"}}>
               <h3 style={{fontSize:"25px",fontWeight:"bold",width:"90%"}}>Hello Sarukh 🤝</h3>
               <div> <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option >Choose one</option>
            
            
               </select></div>
          </section>
          <div class="grid grid-cols-4 gap-x-3 gap-y-1" style={{padding:"30px",display:"flex",gap:"20px",justifyContent:"center",flexWrap:"wrap" }}>
            <div style={{}} class=" p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800  ">
              <div class="flex flex-row items-center justify-between">
                <div style={{width:"90px",height:"90px", background:"#00800075",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class=" stroke-current" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div class="flex flex-col">
                <div class="text-xs font-light text-gray-500 uppercase">Users</div>
                <div class="text-xl font-bold">588</div>
              </div>
                </div>
              </div>
              <div  class=" p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div class="flex flex-row items-center justify-between">
                <div style={{width:"90px",height:"90px", background:"#00800075",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class=" stroke-current" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div class="flex flex-col">
                <div class="text-xs font-light text-gray-500 uppercase">Users</div>
                <div class="text-xl font-bold">588</div>
              </div>
                </div>
              </div>
              <div  class=" p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div class="flex flex-row items-center justify-between">
                <div style={{width:"90px",height:"90px", background:"#00800075",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class=" stroke-current" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div class="flex flex-col">
                <div class="text-xs font-light text-gray-500 uppercase">Users</div>
                <div class="text-xl font-bold">588</div>
              </div>
                </div>
              </div>
              <div  class=" p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div class="flex flex-row items-center justify-between">
                <div style={{width:"90px",height:"90px", background:"#00800075",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class=" stroke-current" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div class="flex flex-col">
                <div class="text-xs font-light text-gray-500 uppercase">Users</div>
                <div class="text-xl font-bold">588</div>
              </div>
                </div>
              </div>
          </div>
          <div className='donat' >
            <div>
              <BarChart />
            </div>
            <div>
              <DonutChart />
            </div>
          </div>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
