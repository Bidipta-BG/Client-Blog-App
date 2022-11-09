import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Register =  () => {

    useEffect(() => { document.title = 'Register' }, [])

    const [title, setTitle] = useState("")
    const [fname,setFirstName] = useState("")
    const [lname,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    let navigate = useNavigate()

    const submit = async ()=>{
        let data = { fname, lname, title ,email,password }
        // console.log(data)
        fetch("http://localhost:4000/authors",{
            method:'post',
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
                        setFirstName("")
                        setLastName("")
                        setEmail("")
                        setPassword("")
                        navigate("/login")
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
      <div className="row">
        
          <div className="w-50 mx-auto mt-5">
              <h1>Register to Create Blog</h1>
            <form onSubmit={submitAction}>
                <div>
                      <label for="exampleFormControlTextarea1" class="form-label">Choose a Title</label>
                      <select value={title} onChange={(e)=>setTitle(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                          <option value="Select">Select....</option>
                          <option value="Mr">Mr</option>
                          <option value="Miss">Miss</option>
                          <option value="Mrs">Mrs</option>
                      </select>
                </div>
              <div className="mt-4">
                  <label className="form-label">First Name</label>
                  <input className="form-control" type="text" placeholder="Enter First Name"
                  value={fname} onChange={(e)=>setFirstName(e.target.value)} />
              </div>
              <div className="mt-4">
                  <label className="form-label">Last Name</label>
                  <input className="form-control" type="text" placeholder="Enter Last Name" 
                  value={lname} onChange={(e)=>setLastName(e.target.value)}/>
              </div>
              <div className="mt-4">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                  value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="mt-4">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" 
                  value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="mt-4">
                  <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
        </div>
         
        </div>
  )
}

export default Register