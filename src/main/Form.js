import React, {Fragment} from "react";
import { useForm } from 'react-hook-form';

const error_message = {
    color:"red",
    fontSize:"15px",
}



const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return(
        <div className="form">
          <form>
            <input id="email" {...register('email', { required: true })} />
            {errors.email && <div style={error_message}>メールアドレスの入力は必須項目です。</div>}
          </form>
        </div>
    )
}

export default Form;