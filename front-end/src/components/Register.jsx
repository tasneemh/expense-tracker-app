import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

  const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required()
});

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
const Register = (props) => {
  const { visibility, setVisibility, errorMsg, setErrorMsg} = props;

  const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
  
  const history = useHistory();
  
  const togglePasswordVisibility = () =>{
    setVisibility(!visibility);
  };

  const onSubmit = (data) =>{
    console.log("data: ", data);
    axios.post("http://localhost:8080/savenewuser", {data}).then(response =>{     
      console.log("response inside register.jsx in axios: ", response); 
      //user already registered
      if (response.data.message){
        setErrorMsg(response.data.message);
      } else{
      //if user is not registered
        const user = response.data.newUser;
      //console.log("user inside register: ", user);
        history.push({
        pathname: `/user`,
        state: {user}
        });
      }      
    }).catch(error=>{
      console.log("error inside register: ",error);
    });
  }
  return (
    <div className="form-container">
      <form className="form register-form"
      onSubmit={handleSubmit(onSubmit)}>
      <h1>Register Form</h1>
      <div>
        <label>First Name: </label>
        <input {...register("firstName", { required: true, maxLength: 20 })}/>
      </div>
        <p className="form-errors">{errors.firstName?.message} </p>
      <div>
        <label>Last Name: </label>
        <input {...register("lastName", { required: true, maxLength: 20 })}/>
      </div>
        <p className="form-errors">{errors.lastName?.message} </p>
      <div>
        <label>Email: </label>
        <input {...register("email", { required: true, maxLength: 20 })}/>
      </div>
        <p className="form-errors">{errors.email?.message} </p>
        <p className="form-errors">{errorMsg}</p>
        <div className="password-wrapper">
        <label>Password: </label>
        <input type={visibility? "text" : "password"} {...register("password", { required: true, minLength: 5, pattern: /^[A-Za-z]+$/i })}/>
        {visibility ? <i className="password-eye" onClick={togglePasswordVisibility}>{eye}</i> : <i className="password-eye" onClick={
        togglePasswordVisibility}>{eyeSlash}</i> } 
        </div> 
        <p className="form-errors">{errors.password?.message} </p>
      <div>
        <input type="submit" value="SUBMIT" className="login-btn"/>
      </div>
      </form>
    </div>
  )
}

export default Register;
