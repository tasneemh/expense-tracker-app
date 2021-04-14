import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';

  const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required()
});
const Register = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});

  const history = useHistory();
 
  const onSubmit = (data) =>{
    console.log("data: ", data);
    axios.post("http://localhost:8080/savenewuser", {data}).then(response =>{      
      const user = response.data.newUser;
      //console.log("user inside register: ", user);
      history.push({
        pathname: `/user`,
        state: {user}
      });
    }).catch(error=>{
      console.log("error inside register: ",error);
    });
  }
  return (
    <div>
      <form className="form"
      onSubmit={handleSubmit(onSubmit)}>
        <label>First Name: </label>
        <input {...register("firstName", { required: true, maxLength: 20 })}/>
        <p>{errors.firstName?.message} </p>
        <label>Last Name: </label>
        <input {...register("lastName", { required: true, maxLength: 20 })}/>
        <p>{errors.lastName?.message} </p>
        <label>Email: </label>
        <input {...register("email", { required: true, maxLength: 20 })}/>
        <p>{errors.email?.message} </p>
        <label>Password: </label>
        <input {...register("password", { required: true, minLength: 5, pattern: /^[A-Za-z]+$/i })}/>
        <AiFillEye />
        <p>{errors.password?.message} </p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Register;
