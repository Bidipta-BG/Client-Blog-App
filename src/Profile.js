import React, { useState, useEffect } from 'react'
import Filter from './Filter';
// import userId from './Login'
let id = localStorage.getItem("userId")
id = JSON.parse(id)




function Profile(props){
  // let id = localStorage.getItem("user")
  useEffect(() => { document.title = 'Your Blogs' }, [])

  useEffect(() => { getBlogsById() }, [])

  const [data, setData] = useState([])

  let id = props.transferData
  async function getBlogsById() {
    console.log('id= ', id)
    // console.log('first= ' + props.transferData)
    let url = `http://localhost:4000/blogsById?authorId=${id}`
    
    console.log(url);
    let alldata = await fetch(url)
    alldata = await alldata.json()
    console.log(alldata)
    if(alldata.status == true){
      console.log(alldata)
      setData(alldata.data)
    }
    
  }

    return(
        <div>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Filter title="Tags" />
              <Filter title="Category" />
              <Filter title="Sub-Category" />
            </div>
            <div className="col-10">

            {data.length == 0 ? 
            
                <div className='mt-4'>
                  <div className="card text-center">
                    <div className="d-flex justify-content-center card-header">
                      <h5>No Data Available. Please Login or Create a blog</h5>
                    </div>
                  </div>
                </div>
            : 
              data.map(ele => 
                <div className='mt-4'>
                  <div className="card text-center">
                    <div className="d-flex justify-content-between card-header">
                      <p>-{ele.authorId.fname + ' ' + ele.authorId.lname} <br /><div className='bg-secondary bg-gradient'>{ele.category}</div></p>
                      <h5>{ele.title}</h5>
                      <p>{ele.createdAt.slice(0,10)}</p>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{ele.body}</h5>
                      <button type="button" className="btn btn-warning me-3">Update</button>
                      <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
                )
             }
              

            </div>
          </div>
        </div>

            
        </div>
    )
}

export default Profile




