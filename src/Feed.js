import React, { useState, useEffect } from 'react'
import Filter from './Filter';

function Feed(){

    useEffect(() => { document.title = 'Blog App' }, [])
    useEffect(() => { getBlogs() }, [])

    let [blogs, setBlog] = useState([])
    
    async function getBlogs(){
        let alldata = await fetch("http://localhost:4000/blogs")
        alldata = await alldata.json()  
        setBlog(alldata.data)
    }

    return(

        
            <div className="container">
              <div className="row">
                  <div className="col-2">
                      <Filter  title="Tags"/>
                      <Filter title = "Category"/>
                      <Filter title="Sub-Category" />
                  </div>

                {console.log(blogs)}
                    <div className="col-10">

                    {blogs.map(ele => 
                        <div className='mt-4'>
                            <div className="card text-center">


                                <div className="d-flex justify-content-between card-header">
                                    <p>{ele.authorId.fname + ' ' + ele.authorId.lname} <br /><div className="btn btn-outline-info me-3">{ele.category}</div></p>
                                    <h5>{ele.title} </h5>
                                    <p>{ele.publishedAt.slice(0,10)}</p>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{ele.body}</h5>

                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                
                
                  
              </div>
          </div>


        
    )
}

export default Feed
