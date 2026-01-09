import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link, useLocation, useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { CiSearch } from "react-icons/ci";

const SearchProduct = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!query) return;
    setLoading(true);
    axiosPublic.get(`/searchproducts?search=${query}`)
      .then(res => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))

  }, [query, axiosPublic])

  if (loading) {
    return (
      <div className="text-center py-6">
        <p className="animate-pulse text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">
        Search Results for: {query}
      </h2>

      <div className="grid grid-cols-5 gap-4">
        {products.length > 0 ? (
          products.map((p) => (
            <Link to={`/product/${p.name}`} className='hover:shadow-lg bg-white transition-all'>
              <img className='w-full h-48' src={p.image} alt="" />
              <div className='p-2'>
                <h4 className='text-black'>{p.name.slice(0, 35)}...</h4>
                <div style={{ marginLeft: '-5px' }} className='flex items-center'>
                  <TbCurrencyTaka style={{ marginRight: "-2px" }} className='orangeColor text-2xl' />
                  <p className='orangeColor text-lg font-normal'>{p.current_price}</p>
                </div>
                <div className='flex items-center'>
                  <div className='flex items-center mr-1 line-through'>
                    <TbCurrencyTaka style={{ marginRight: "-2px" }} className='text-gray-500 text-lg' />
                    <p className='text-gray-500 text-sm'>{p.original_price}</p>
                  </div>
                  <span className='text-black'>{p.discount}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-6 text-center p-6">
            <h6 className="text-2xl font-normal capitalize">Search no result</h6>
            <p className="text-gray-600 mt-2.5">
              We're sorry. We cannot find any matches for your search term.
            </p>
            <CiSearch className="mx-auto text-8xl text-gray-500 mt-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;