import React, { useState } from 'react'
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  useEffect(() => { document.title = 'Login' }, [])

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let navigate = useNavigate()

    const  submitButton = async ()=>
    {
        // console.log(email,password);
        let result = await fetch("http://localhost:4000/loginUser",{
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type' : 'application/json'
          }
        })
          .then(res => res.json()
            .then((response) => {
              // console.log(response);
              if (response.status === true) {
              // console.log(response.id)
                // props.setData(response.id)
              localStorage.setItem("userId",JSON.stringify(response.id))
                navigate("/")

              } else {
                alert(response.message)
              }
            }))
        // result = await result.json()
        // console.log(result);
        // if(result.data){
        //   console.log(result.data);
          
          
        // }

    }

  function submitAction(e) {
    e.preventDefault()
    // props.setIsLogin(true)
  }


  return (
      <div className="row">
        
          <div className="w-50 mx-auto mt-5">
              <h1>Login</h1>
                <form onSubmit={submitAction}>
                  <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}/>
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button onClick={submitButton} type="submit" className="btn btn-primary">Submit</button>
              </form>
           </div>

    </div>
  )
}

export default Login