import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import { AiFillEyeInvisible } from 'react-icons/ai';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
const Login = (props) => {
  const {visibility, setVisibility} = props;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();

  const togglePasswordVisibility = () =>{
    setVisibility(!visibility);
  };
  const onSubmit = data => {
    console.log(data);
    axios.post(`http://localhost:8080/checkregistereduser`, {data}).then(response=>{
      //console.log("response inside login: ",response);
      const user = response.data.newUser;
      //console.log("user inside login.jsx: ", user);
      history.push({pathname: "/user", state: {user}});
    }).catch(error=>{
      console.log("error: ", error);
    });
  }
  //
  //history.push("/login");
  return (
    <div className="form-container">
        <form className="form login-form"
        onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Form</h1>
          <div >
            <label>Email: </label>
            <input {...register("email", { required: true })}/>                     
          </div>
          {errors.email && <span className="form-errors">This field is required</span>} 
          <div className="password-wrapper">
            <label>Password: </label>
            <input type={visibility? "text" : "password"}{...register("password", { required: true })}             
            />
            {visibility ? <i className="password-eye" onClick={
             togglePasswordVisibility}>{eye}</i> : <i className="password-eye" onClick={
             togglePasswordVisibility}>{eyeSlash}</i> }                 
          </div>
          {errors.password && <span className="form-errors">This field is required</span>}          
          <div>
            <input className="login-btn" type="submit" value="SUBMIT"/>
          </div>          
        </form>
    </div>
  )
}

export default Login;
