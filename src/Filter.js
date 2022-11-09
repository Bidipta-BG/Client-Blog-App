import React from 'react'

const Filter = (props) => {
  return (
    <div className='mt-3'>
          <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                  </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                      <label className="form-check-label" for="flexCheckChecked">
                          Checked checkbox
                      </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                      Checked checkbox
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                      Checked checkbox
                  </label>
              </div>
          </div>
    </div>
  )
}

export default Filter