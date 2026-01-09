import { useForm } from "react-hook-form";                                                  
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { LuShirt } from "react-icons/lu";
import Swal from "sweetalert2";
import { useState } from "react";
import useCategories from "../../../hooks/useCategories"
import SectionTitle from "../../../Components/SectionTitle"
const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const [isLoading, setLoading] = useState()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic();

   const [categories]=useCategories()
    //category
    const categoriesId = categories.flatMap(main =>
        main.sub_categories.map(sub => ({
            id: sub?.sub_category?.id,
            name: sub?.sub_category?.sub_name,
            category_id: sub?.sub_category?.category_id,
        }))
    );

    const {
        register,
        reset,
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        setLoading(true)
        const imageData = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log('with image', res.data)
        if (res.data.success) {
            const productItem = {
                product_id: data.product_id,
                name: data.name,
                image: res.data?.data?.dispaly_url,
                original_price: data.original_price,
                current_price: data.current_price,
                discount: data.discount,
                rating: data.rating,
                star: data.star,
                category_id: data.category_id,
                quantity: data.quantity
            }
            const productItemRes = await axiosSecure.post('/product/additem', productItem)
            console.log(productItemRes.data)
            if (productItemRes.data.insertedId) {
                reset();
                setLoading(false)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added to the product`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }

    }
    return (
        <section className='py-6'>
            <div className="container px-4 mx-auto">
                <SectionTitle heading={"what's new?"} subHeading={'add an item??'}></SectionTitle>
                <div className="overflow-x-auto border border-base-content/5 bg-base-100 p-7 h-auto mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-base">Product name*</legend>
                            <input {...register('name', { required: true })} type="text" className="input w-full" placeholder="product name" />
                        </fieldset>
                        <div className="sm:flex gap-3">
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend text-base">Product id*</legend>
                                <input {...register('product_id', { required: true })} type="text" className="input w-full" placeholder="product_id" />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend text-base">Product original price*</legend>
                                <input {...register('original_price', { required: true })} type="number" className="input w-full" placeholder="original_price" />
                            </fieldset>
                        </div>
                        <div className="sm:flex gap-3">
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend text-base">Product current price*</legend>
                                <input {...register('current_price', { required: true })} type="number" className="input w-full" placeholder="current_price" />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend text-base">Product discount*</legend>
                                <input {...register('discount', { required: true })} type="text" className="input w-full" placeholder="-discount%" />
                            </fieldset>
                        </div>
                        <div className="sm:flex gap-3">
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend text-base">Product rating*</legend>
                                <input {...register('rating', { required: true })} type="text" className="input w-full" placeholder="rating" />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend text-base">Product star*</legend>
                                <input {...register('star', { required: true })} type="text" className="input w-full" placeholder="star" />
                            </fieldset>
                        </div>
                        <div className="sm:flex gap-3">
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend text-base">Product quantity*</legend>
                                <input {...register('quantity', { required: true })} type="number" className="input w-full" value={1} placeholder="quantity" />
                            </fieldset>

                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend text-base">Product category*</legend>
                                <select {...register("category_id", { required: true })} defaultValue="default" className="select w-full">
                                    <option disabled value={'default'}>Select a category</option>
                                    {
                                        categoriesId.map(category => (
                                            < option key={category.id} value={category.category_id} >
                                                {category.category_id}
                                            </option>
                                        ))
                                    }
                                </select>
                            </fieldset>
                        </div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-base">Product image*</legend>
                            <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-72" />
                        </fieldset>

                        {
                            isLoading ? <button className="px-8 py-2.5 mt-4 cursor-pointer text-white bg-black flex items-center">Add Item <span className="loading loading-spinner loading-sm ms-1.5"></span></button> : <button className="px-8 py-2.5 mt-4 cursor-pointer text-white bg-black flex items-center">Add Item <LuShirt className="ms-1.5" /></button>
                        }
                    </form>
                </div>
            </div >
        </section >
    );
};

export default AddItems;