import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();
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
    <div>
        <form className="form"
        onSubmit={handleSubmit(onSubmit)}>
          <div className="block">
            <label>Email: </label>
            <input {...register("email", { required: true })}/>                     
          </div>
          {errors.email && <span>This field is required</span>} 
          <div className="block">
            <label>Password: </label>
            <input {...register("password", { required: true })}
             
            />
            <AiFillEye />           
          </div>
          {errors.password && <span>This field is required</span>}          
          <div>
            <input type="submit"/>
          </div>          
        </form>
    </div>
  )
}

export default Login;
