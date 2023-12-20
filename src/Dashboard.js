import {useEffect,useState} from 'react';
//import PieChart from './PieChart';
const Dashboard = () => {
   
   const[record,setRecord] = useState([])
   const getData = () =>
   {
       fetch('https://fake-store-api.mock.beeceptor.com/api/products')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
   useEffect(() => {
      getData();
   },)
    
    return (
    <div class="col main pt-5 mt-3">        
        <p class="lead d-none d-sm-block">Made 2 Automate</p>
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        {/* <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div> */}
                        <h6 class="text-uppercase">Total Order</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        {/* <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div> */}
                        <h6 class="text-uppercase">New Stocks</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        {/* <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div> */}
                        <h6 class="text-uppercase">Dead Stock</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        {/* <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div> */}
                        <h6 class="text-uppercase">Total Leads</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="row ">
            <div class="col-lg-8 col-md-9 col-sm-14">
              <h5 class="mt-3 mb-3 text-secondary">
               Recent Orders
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Product Id</th>
                                <th>Label</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Discount</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.product_id}</td>
                                <td>{output.name}</td>
                                <td>{output.price}</td>
                                <td>{output.category}</td>
                                <td>{output.discount}%</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <hr/>
    </div>
    )
}
export default Dashboard