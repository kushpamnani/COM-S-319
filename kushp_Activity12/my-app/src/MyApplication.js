import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Payment({ setDataF, setViewer }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data); // Log the data for verification
    setDataF(data); // Update state with form data
    setViewer(1); // Change view to summary
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name Input */}
        <div className="form-group">
          <input 
            {...register("fullName", { required: true })} 
            placeholder="Full Name" 
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} 
          />
          {errors.fullName && <p className="text-danger">Full Name is required.</p>}
        </div>

        {/* Email Input */}
        <div className="form-group">
          <input 
            {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })} 
            placeholder="Email" 
            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        {/* Credit Card Input */}
        <div className="form-group">
          <input 
            {...register("creditCard", { required: "Credit Card is required" })} 
            placeholder="Credit Card" 
            className={`form-control ${errors.creditCard ? 'is-invalid' : ''}`} 
          />
          {errors.creditCard && <p className="text-danger">{errors.creditCard.message}</p>}
        </div>

        {/* Address Input */}
        <div className="form-group">
          <input 
            {...register("address", { required: "Address is required" })} 
            placeholder="Address" 
            className={`form-control ${errors.address ? 'is-invalid' : ''}`} 
          />
          {errors.address && <p className="text-danger">{errors.address.message}</p>}
        </div>

        {/* Additional Address Input */}
        <div className="form-group">
          <input 
            {...register("address2")} 
            placeholder="Address 2" 
            className="form-control" 
          />
        </div>

        {/* City Input */}
        <div className="form-group">
          <input 
            {...register("city", { required: "City is required" })} 
            placeholder="City" 
            className={`form-control ${errors.city ? 'is-invalid' : ''}`} 
          />
          {errors.city && <p className="text-danger">{errors.city.message}</p>}
        </div>

        {/* State Input */}
        <div className="form-group">
          <input 
            {...register("state", { required: "State is required" })} 
            placeholder="State" 
            className={`form-control ${errors.state ? 'is-invalid' : ''}`} 
          />
          {errors.state && <p className="text-danger">{errors.state.message}</p>}
        </div>

        {/* ZIP Code Input */}
        <div className="form-group">
          <input 
            {...register("zip", { required: "Zip is required" })} 
            placeholder="Zip" 
            className={`form-control ${errors.zip ? 'is-invalid' : ''}`} 
          />
          {errors.zip && <p className="text-danger">{errors.zip.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

function Summary({ dataF, setViewer }) {
    return (
      <div className="container mt-5">
        <h1>Summary of payment:</h1>
        <p> <strong> {dataF.fullName} </strong></p>
        <p>{dataF.email}</p>
        <p>{dataF.creditCard}</p>
        <p>{dataF.address}</p>
        <p> {dataF.address2}</p>
        <p> {dataF.city}</p>
        <p>{dataF.state}</p>
        <p> {dataF.zip}</p>
        <button onClick={() => setViewer(0)} className="btn btn-primary">Edit</button>
      </div>
    );
  }
  
  

function MyApplication() {
  const [dataF, setDataF] = useState({});
  const [viewer, setViewer] = useState(0); // 0 for Payment, 1 for Summary

  return (
    <div>
      {viewer === 0 ? <Payment setDataF={setDataF} setViewer={setViewer} /> : <Summary dataF={dataF} setViewer={setViewer} />}
    </div>
  )
  }

  export default MyApplication;

