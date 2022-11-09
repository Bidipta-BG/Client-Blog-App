import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Createblog = () => {

    useEffect(() => { document.title = 'Write Blogs' }, [])

    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [tags,setTags] = useState("")
    const [category,setCategory] = useState("")
    const [subCategory,setSubcategory] = useState("")
    let navigate = useNavigate()

    const submit = async ()=>{
        let result = fetch("http://localhost:4000/blogs",{
            method:'post',
            body:JSON.stringify(title,body,tags,category,subCategory),
            headers:{
                'Content-type' : 'application/json'
            }  
        })
        .then(res => res.json()
        .then((response) => {
            // console.log(response);
            if (response.status === true) {
                console.log(response)
                alert(response.message)
                setTitle("")
                setCategory("")
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
                  <h1>Create Blog</h1>
                  <form onSubmit={submitAction}>
                      <div className="mt-4">
                          <label className="form-label">Title</label>
                          <input className="form-control" type="text" placeholder="Title of the blog" 
                          value={title} onChange={(e)=>setTitle(e.target.value)}/>
                      </div>
                      <div className="mt-3">
                          <label for="exampleFormControlTextarea1" className="form-label">Body</label>
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <div className="mt-4">
                          <label className="form-label">Tags</label>
                          <input className="form-control" type="text" placeholder="Enter tags seperated by comma" 
                          value={tags} onChange={(e)=>setTags(e.target.value)}/>
                      </div>
                      <div className="mt-4">
                          <label for="exampleFormControlTextarea1" className="form-label">Choose a Category</label>
                          <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                          value={category} onChange={(e)=>setCategory(e.target.value)}>
                              <option value="1">Technology</option>
                              <option value="2">Sci-Fi</option>
                              <option value="3">Entertainment</option>
                              <option value="4">Political</option>
                              <option value="5">Social</option>
                              <option value="6">Environment</option>
                              <option value="7">International</option>
                          </select>
                      </div>
                      <div className="mt-4">
                          <label className="form-label">Subcategory</label>
                          <input className="form-control" type="text" placeholder="Enter keywords of your blog"
                          value={subCategory} onChange={(e)=>setSubcategory(e.target.value)} />
                      </div>
                      <div className="mt-4">
                          <button onClick={submit} type="submit" className="btn btn-primary">Create Blog</button>
                      </div>
                  </form>
              </div>

          </div>
    </div>
  )
  }
export default Createblog