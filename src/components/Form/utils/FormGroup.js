import React from 'react'

export default function FormGroup ({label, children}) {
    return (
        <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label">{label}</label>
            <div className="col-lg-9 col-xl-6">
                {children}
            </div>
        </div>
    )
}