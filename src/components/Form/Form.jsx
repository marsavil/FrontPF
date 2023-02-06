import {appendErrors, useForm} from "react-hook-form";
import { priceValidator } from "../validators/validators";
import { Link } from "react-router-dom";

const Form = () => {
    const { register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return <div>
        <h2>Form</h2>
        <Link to="/home">
        <button className="backButton">Back</button>
      </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Brand</label>
                <input type= "text" {...register('brand', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.brand?.type === 'required' && <p>Brand required</p>}
                {errors.brand?.type === 'maxLength' && <p>Brand must have less than 10 Characters</p>}
            </div>
            <div>
                <label>Model</label>
                <input type= "text" {...register('model', {
                    required: true,
                    maxLength: 10
                })} />
            </div>
            <div>
                <label>Price</label>
                <input type= "text"  {...register('price', {
                    validate: priceValidator
                })} />
                 {errors.price && <p>Price must be more than 5.000 and less than 1.200.000 </p>}
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div> 
}

export default Form;