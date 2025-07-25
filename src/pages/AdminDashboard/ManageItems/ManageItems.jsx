import { MdOutlineDeleteForever } from 'react-icons/md';
import SectionTitle from '../../../Components/SectionTitle';
import useProducts from '../../../hooks/useProducts';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from 'sweetalert2';
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { LuShirt } from 'react-icons/lu';


const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const ManageItems = () => {
    const [products, refetch] = useProducts();
    const [isLoading, setLoading] = useState();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const [singleProduct, setSingleProduct] = useState(null)

    const handleEdit = async (product) => {
        const res = await axiosPublic.get(`/product/${product._id}`);
        console.log(res.data)
        setSingleProduct(res.data);
        document.getElementById('my_modal_5').showModal();
    }


    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/categories')
            return res.data;
        }
    })
    //category
    const categoriesId = categories.flatMap(main =>
        main.sub_categories.map(sub => ({
            id: sub?.sub_category?.id,
            name: sub?.sub_category?.sub_name,
            category_id: sub?.sub_category?.category_id,
        }))
    );
    // update form
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)
        const imageData = {image:data?.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data.success) {
            const updateItem = {
                product_id: data.product_id,
                name: data.name,
                image: res.data.data.dispaly_uri,
                original_price: data.original_price,
                current_price: data.current_price,
                discount: data.discount,
                rating: data.rating,
                star: data.star,
                category_id: data.category_id,
                quantity: data.quantity
            }
            const updateItemRes = await axiosSecure.patch(`/product/update/${data.product_id}`, updateItem)
           console.log(updateItemRes.data)
            if (updateItemRes.data.modifiedCount > 0) {
                refetch()
                setLoading(false)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the product`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }

    //handle delete
    const handleDeleteProduct = (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/product/delete/${product._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${product.name} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <section className='py-6'>
            <div className="container px-4 mx-auto">
                <SectionTitle heading={"manage all items"} subHeading={'hurry up!'}></SectionTitle>
                <div className="overflow-x-auto border border-base-content/5 bg-base-100 p-7 h-auto w-[900px] mx-auto">
                    <h2 className='uppercase font-bold'>total items:{products.length}</h2>
                    {/* item update form start*/}
                    <dialog id="my_modal_5" className="modal modal-middle ">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h2 className='uppercase text-3xl text-center'>update item</h2>
                            <div className="modal-action block px-12">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-base">Product name*</legend>
                                        <input defaultValue={singleProduct?.name} {...register('name', { required: true })} type="text" className="input w-full" placeholder="product name" />
                                    </fieldset>
                                    <div className="flex gap-3">
                                        <fieldset className="fieldset w-full">
                                            <legend className="fieldset-legend text-base">Product id*</legend>
                                            <input defaultValue={singleProduct?.product_id} {...register('product_id', { required: true })} type="text" className="input w-full" placeholder="product_id" />
                                        </fieldset>
                                        <fieldset className="fieldset w-full">
                                            <legend className="fieldset-legend text-base">Product original price*</legend>
                                            <input defaultValue={singleProduct?.original_price} {...register('original_price', { required: true })} type="number" className="input w-full" placeholder="original_price" />
                                        </fieldset>
                                    </div>
                                    <div className="flex gap-3">
                                        <fieldset className="fieldset w-full">
                                            <legend className="fieldset-legend text-base">Product current price*</legend>
                                            <input defaultValue={singleProduct?.current_price} {...register('current_price', { required: true })} type="number" className="input w-full" placeholder="current_price" />
                                        </fieldset>
                                        <fieldset className="fieldset w-full">
                                            <legend className="fieldset-legend text-base">Product discount*</legend>
                                            <input defaultValue={singleProduct?.discount} {...register('discount', { required: true })} type="text" className="input w-full" placeholder="-discount%" />
                                        </fieldset>
                                    </div>
                                    <div className="flex gap-3">
                                        <fieldset className="fieldset w-full">
                                            <legend className="fieldset-legend text-base">Product rating*</legend>
                                            <input defaultValue={singleProduct?.rating} {...register('rating', { required: true })} type="text" className="input w-full" placeholder="rating" />
                                        </fieldset>
                                        <fieldset className="fieldset w-full">
                                            <legend className="fieldset-legend text-base">Product star*</legend>
                                            <input defaultValue={singleProduct?.star} {...register('star', { required: true })} type="text" className="input w-full" placeholder="star" />
                                        </fieldset>
                                    </div>
                                    <div className="flex gap-3">
                                        <fieldset className="fieldset w-full">
                                            <legend className="fieldset-legend text-base">Product quantity*</legend>
                                            <input defaultValue={singleProduct?.quantity} {...register('quantity', { required: true })} type="number" className="input w-full" value={1} placeholder="quantity" />
                                        </fieldset>

                                        <fieldset className="fieldset w-full">
                                            <legend className="fieldset-legend text-base">Product category*</legend>
                                            <select defaultValue={singleProduct?.category_id} {...register("category_id", { required: true })} className="select w-full">
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
                                        isLoading ? <button className="px-8 py-2.5 mt-4 cursor-pointer text-white bg-black flex items-center">Update Item <span className="loading loading-spinner loading-sm ms-1.5"></span></button> : <button className="px-8 py-2.5 mt-4 cursor-pointer text-white bg-black flex items-center">Update Item <LuShirt className="ms-1.5" /></button>
                                    }
                                </form>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    {/* item update form end*/}


                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className='uppercase'>item image</th>
                                <th className='uppercase'>item Name</th>
                                <th className='uppercase'>category</th>
                                <th className='uppercase'>price</th>
                                <th className='uppercase'>action</th>
                                <th className='uppercase'>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <tr key={product._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td><img className='w-16 h-16' src={product.image} alt="" /></td>
                                    <td>{product.name}</td>
                                    <td>{product.category_id}</td>
                                    <td className='flex items-center h-24'><TbCurrencyTaka /> <span>{product.current_price}</span></td>
                                    <th>
                                        <button onClick={() => handleEdit(product)} className="btn rounded-full bg-red-600 text-white w-[50px] h-[50px] p-0 hover:bg-red-600 hover:text-white"><FaRegPenToSquare className='text-xl' /></button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteProduct(product)} className="btn rounded-full bg-red-600 text-white w-[50px] h-[50px] p-0 hover:bg-red-600 hover:text-white"><MdOutlineDeleteForever className='text-2xl' /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </section >
    );
};

export default ManageItems;