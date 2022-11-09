import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UpdateBlog = (props) => {
    
    useEffect(() => { document.title = 'Write Blogs' }, [])

    const [title,setTitle] = useState(props.data.title)
    const [body,setBody] = useState(props.data.body)
    const [tags,setTags] = useState(props.data.tags)
    const [subcategory,setSubcategory] = useState(props.data.subcategory)
    let navigate = useNavigate()


    const submit = async ()=>{
        let data = {title,body,tags,subcategory}
        console.log(data);
        let id = await localStorage.getItem("updateBlogId")
            id = JSON.parse(id)
        console.log(props.data);
        console.log("blog id is",id);
        let url = `http://localhost:4000/blogs/${id}`
         await fetch(url,{
            method:'put',
            body:JSON.stringify(data),
            headers:{
                'Content-type' : 'application/json'
            }  
        })
        .then(res => res.json()
        .then((response) => {
            console.log(response);
            if (response.status === true) {
                console.log(response)
                alert(response.message)
                setTitle("")
                setSubcategory("")
                setTags("")
                setBody("")
                navigate("/profile")
            } else {
                console.log(response.message)
                alert(response.message);
            }
        }))
// result = await result.json()
// console.log(result);
}
function submitAction(x){
    x.preventDefault()   
}


  return (
    <div>
          <div className="row">

              <div className="w-50 mx-auto mt-3">
                  <h1>Update Blog</h1>
                  <form onSubmit={submitAction}>
                      <div className="mt-4">
                          <label className="form-label">Title</label>
                          <input className="form-control" type="text" placeholder="Title of the blog" 
                          value={title} onChange={(e)=>setTitle(e.target.value)}/>
                      </div>
                      <div className="mt-3">
                          <label for="exampleFormControlTextarea1" className="form-label">Body</label>
                          <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3"
                          value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                      </div>
                      <div className="mt-4">
                          <label className="form-label">Tags</label>
                          <input className="form-control" type="text" placeholder="Enter tags seperated by comma" 
                          value={tags} onChange={(e)=>setTags(e.target.value)}/>
                      </div>
                      <div className="mt-4">
                          <label className="form-label">Subcategory</label>
                          <input className="form-control" type="text" placeholder="Enter keywords of your blog"
                          value={subcategory} onChange={(e)=>setSubcategory(e.target.value)} />
                      </div>
                      <div className="mt-4">
                          <button onClick={submit} type="submit" className="btn btn-primary">Update Blog</button>
                      </div>
                  </form>
              </div>

          </div>
    </div>
  )
  }
export default UpdateBlog