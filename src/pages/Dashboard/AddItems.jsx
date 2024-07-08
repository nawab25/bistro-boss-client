import { useForm } from "react-hook-form"
import SectionTitle from "../../components/SectionTitle";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <div>
                <SectionTitle heading="Add an item" subHeading="Whats's new"></SectionTitle>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Recipe Name</label>
                <input className="input input-bordered w-full"
                    {...register("name", { required: true })} />
                <div className="flex gap-6 w-full my-5">
                    <div className="w-1/2">
                        <label>Category</label>
                        <select defaultValue='default' {...register("category", { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value='default'>Select a category</option>
                            <option value='salad'>Salad</option>
                            <option value='pizza'>Pizza</option>
                            <option value='soup'>Soup</option>
                            <option value='dessert'>Dessert</option>
                            <option value='drinks'>Drinks</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label>Price</label>
                        <input className="input input-bordered w-full"
                            {...register("price", { required: true })} />
                    </div>
                </div>
                <div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea
                            {...register("description", { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe details"></textarea>
                    </label>
                </div>

                <input
                    type="file"
                    className="file-input w-full max-w-xs mt-6"
                    {...register("image", { required: true })} /> <br />

                <input type="submit" value='Add Item' className="btn btn-secondary mt-8" />
            </form>
        </div>
    );
};

export default AddItems;