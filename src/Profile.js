import React, { useState, useEffect } from 'react'
import Filter from './Filter';
import {useNavigate} from 'react-router-dom'
// import userId from './Login'





function Profile(props){

  let navigate = useNavigate()
  useEffect(() => { document.title = 'Your Blogs' }, [])
  useEffect(() => { getBlogsById() }, [])


  const [data, setData] = useState([])

  async function getBlogsById() {
    let id = await localStorage.getItem("userId")
        id = JSON.parse(id)
    console.log('id= ', id)
    let url = `http://localhost:4000/blogs?authorId=${id}`
    // console.log(url);
    let alldata = await fetch(url)
    alldata = await alldata.json()
    // console.log(alldata)
    if(alldata.status == true){
      // console.log(alldata)
      setData(alldata.data)
    }
    
  }
  const update=(document)=>{
    localStorage.setItem("updateBlogId",JSON.stringify(document._id))
    props.data(document)
    navigate("/update")
  }
  async function deleteBlog(id){
    console.log(id);
    let url = `http://localhost:4000/blogs/${id}`
    await fetch(url, {
      method: 'delete',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json()
        .then((response) => {
          console.log(response);
          if (response.status === true) {
            alert(response.message)
            getBlogsById()
          } else {
            alert(response.message);
          }
        }))
  }

    return(
        <div>
        <div className="container">
          <div className="row">
            {/* <div className="col-2">
              <Filter title="Tags" />
              <Filter title="Category" />
              <Filter title="Sub-Category" />
            </div>
            <div className="col-10"> */}

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
                      <p>-{ele.authorId.fname + ' ' + ele.authorId.lname} <br /><div className="btn btn-outline-success">{ele.category}</div></p>
                      <h5>{ele.title}</h5>
                      <p>{ele.createdAt.slice(0,10)}</p>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{ele.body}</h5>
                      <button onClick={()=>{update(ele)}} type="button" className="btn btn-warning me-3">Update</button>
                      <button onClick={() => { deleteBlog(ele._id) }} type="button" className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
                )
             }
              

            {/* </div> */}
          </div>
        </div>

            
        </div>
    )
}

export default Profile




