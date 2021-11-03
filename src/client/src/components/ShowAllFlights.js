import React from 'react'
import JsonData from './data.json'






 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.from}</td>
                    <td>{info.to}</td>
                    <td>{info.FlightDate}</td>
                    <td>{info.Cabin}</td>
                    <td>{info.seatsAvailable}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>from</th>
                    <th>to</th>
                    <th>FlightDate</th>
                    <th>Cabin</th>
                    <th>seatsAvailable</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;