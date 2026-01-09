import { MdOutlineDeleteForever } from 'react-icons/md';
import SectionTitle from '../../../Components/SectionTitle';
import useProducts from '../../../hooks/useProducts';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from 'sweetalert2';
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { LuShirt } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [products, refetch] = useProducts();
    const axiosSecure = useAxiosSecure();
    
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
                <div className="overflow-x-auto border border-base-content/5 bg-base-100 h-auto mx-auto">
                    <h2 className='uppercase font-bold pt-3 pl-5'>total items:{products.length}</h2>
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
                                       <Link to={`/dashboard/updateitems/${product._id}`}>
                                        <button className="btn rounded-full bg-red-600 text-white  w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] p-0 hover:bg-red-600 hover:text-white"><FaRegPenToSquare className='text-base sm:text-xl' /></button>
                                       </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteProduct(product)} className="btn rounded-full bg-red-600 text-white  w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] p-0 hover:bg-red-600 hover:text-white"><MdOutlineDeleteForever className='text-xl sm:text-2xl' /></button>
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