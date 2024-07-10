import React from 'react'

const Table = (props) => {
  return (
    <div className='tablediv'>
     <table class="table">
  <thead className='head'>
    <tr>
      <th scope="col">Project Name</th>
      <th scope="col">Created Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
   {props?.filteredData?.map((item,i)=>
   <tr key={item.id}>
    <td>{item.projectName}</td>
    <td>{item.createdDate}</td>
    <td>{item.status}</td>
    <td><button type="button" class="btn btn-primary">Run</button></td>
   </tr>
)}
  </tbody>
</table>

    </div>
  )
}

export default Table
