import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LuShirt } from "react-icons/lu";
import { useState,useEffect } from "react";
import SectionTitle from '../../../Components/SectionTitle';
import useCategories from "../../../hooks/useCategories";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [isLoading, setLoading] = useState();
  const [categories] = useCategories();
  //category
  const categoriesId = categories.flatMap((main) =>
    main.sub_categories.map((sub) => ({
      id: sub?.sub_category?.id,
      name: sub?.sub_category?.sub_name,
      category_id: sub?.sub_category?.category_id,
    }))
  );
  const product = useLoaderData();
  const {
    _id,
    name,
    product_id,
    original_price,
    current_price,
    discount,
    rating,
    star,
    quantity,
    category_id,
    image:existingImage
  } = product;
  console.log(product)


    const [previewImage, setPreviewImage] = useState(existingImage);
    const [productData,setProductData]=useState(product)
    const { register, reset,watch, handleSubmit } = useForm({
    defaultValues:{
       _id,
    name,
    product_id,
    original_price,
    current_price,
    discount,
    rating,
    star,
    quantity,
    category_id,
    image:null
    }
  });

const [hasSetDefaults, setHasSetDefaults] = useState(false);

useEffect(() => {
  if (categoriesId.length > 0 && !hasSetDefaults) {
    reset({
      _id,
      name,
      product_id,
      original_price,
      current_price,
      discount,
      rating,
      star,
      quantity,
      category_id,
      image: null
    });
    setHasSetDefaults(true);
  }
}, [categoriesId, hasSetDefaults, reset]);


  const watchedValues = watch();
  const [isChanged, setIsChanged] = useState(false);

  useEffect(()=>{

     const formChanged =
      watchedValues.name !== productData.name ||
      watchedValues.product_id !== productData.product_id ||
      parseFloat(watchedValues.original_price) !== productData.original_price ||
      parseFloat(watchedValues.current_price) !== productData.current_price ||
      watchedValues.discount !== productData.discount ||
      watchedValues.rating !== productData.rating ||
      watchedValues.star !== productData.star ||
      parseInt(watchedValues.quantity) !== productData.quantity ||
      watchedValues.category_id !== productData.category_id ||
      (watchedValues.image && watchedValues.image[0]);

    setIsChanged(formChanged);
  },[watchedValues, productData])


  const onSubmit = async (data) => {
    setLoading(true);

    let imageUrl = existingImage;
        if (data.image && data.image[0]) {
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                imageUrl = res.data.data.display_url;
            }
        }

      const updateItems = {
        product_id: data.product_id,
        name: data.name,
        image: imageUrl,
        original_price:parseFloat( data.original_price),
        current_price: parseFloat(data.current_price),
        discount: data.discount,
        rating: data.rating,
        star: data.star,
        category_id: data.category_id,
        quantity:parseInt( data.quantity),
      };
      const updateItemsRes = await axiosSecure.patch(
        `/product/update/${_id}`,
        updateItems
      );

      setLoading(false);
      if (updateItemsRes.data.modifiedCount > 0) {
        setProductData(updateItems);
        reset({...updateItems,image:null});
        setTimeout(() => setIsResetting(false), 0)
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is updated to the product`,
          showConfirmButton: false,
          timer: 1500,
        });
        setPreviewImage(imageUrl);
        setIsChanged(false);
        
      }
  };

  return (
    <section className="py-6">
      <div className="container px-4 mx-auto">
        <SectionTitle heading={"Update items"} subHeading={'hurry up!'}></SectionTitle>
        <div className="overflow-x-auto border border-base-content/5 bg-base-100 p-7 h-auto mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-base">
                Product name*
              </legend>
              <input
                defaultValue={name}
                {...register("name", { required: true })}
                type="text"
                className="input w-full"
                placeholder="product name"
              />
            </fieldset>
            <div className="sm:flex gap-3">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-base">
                  Product id*
                </legend>
                <input
                  defaultValue={product_id}
                  {...register("product_id", { required: true })}
                  type="text"
                  className="input w-full"
                  placeholder="product_id"
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-base">
                  Product original price*
                </legend>
                <input
                  defaultValue={original_price}
                  {...register("original_price", { required: true })}
                  type="number"
                  className="input w-full"
                  placeholder="original_price"
                />
              </fieldset>
            </div>
            <div className="sm:flex gap-3">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-base">
                  Product current price*
                </legend>
                <input
                  defaultValue={current_price}
                  {...register("current_price", { required: true })}
                  type="number"
                  className="input w-full"
                  placeholder="current_price"
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-base">
                  Product discount*
                </legend>
                <input
                  defaultValue={discount}
                  {...register("discount", { required: true })}
                  type="text"
                  className="input w-full"
                  placeholder="-discount%"
                />
              </fieldset>
            </div>
            <div className="sm:flex gap-3">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-base">
                  Product rating*
                </legend>
                <input
                  defaultValue={rating}
                  {...register("rating", { required: true })}
                  type="text"
                  className="input w-full"
                  placeholder="rating"
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-base">
                  Product star*
                </legend>
                <input
                  defaultValue={star}
                  {...register("star", { required: true })}
                  type="text"
                  className="input w-full"
                  placeholder="star"
                />
              </fieldset>
            </div>
            <div className="sm:flex gap-3">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-base">
                  Product quantity*
                </legend>
                <input
                  defaultValue={quantity}
                  {...register("quantity", { required: true })}
                  type="number"
                  className="input w-full"
                  value={1}
                  placeholder="quantity"
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-base">
                  Product category*
                </legend>
                <select
                  {...register("category_id", { required: true })}
                  className="select w-full"
                >
                  <option disabled value="">
                    Select a category
                  </option>
                  {categoriesId.map((category) => (
                    <option key={category.id} value={category.category_id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-base">
                Product image*
              </legend>
            </fieldset>
              <div className="my-3">
                            {previewImage && (
                                <div className="mb-3">
                                    <img src={previewImage} alt="Preview" className="w-40 h-40 object-cover rounded-lg shadow-md" />
                                </div>
                            )}
                             <input
                {...register("image")}
                type="file"
                className="file-input w-full max-w-72"
              />
              </div>
           <button
              disabled={!isChanged || isLoading }
              type="submit"
              className={`px-8 py-2.5 mt-4  text-white bg-black flex items-center ${isChanged?"cursor-pointer":"cursor-not-allow opacity-25 disabled"}`}
            >
                  {isLoading ? 
                    <>
                      Update Item
                      <span className="loading loading-spinner loading-sm ms-1.5"></span>
                    </>
                  : 
                    <>
                      Update Item <LuShirt className="ms-1.5" />
                    </>
                  }
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateItems;
