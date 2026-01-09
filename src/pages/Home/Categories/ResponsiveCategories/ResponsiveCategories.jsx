import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ResponsiveCategories = () => {
  const axiosPublic = useAxiosPublic();
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn:async () => {
      const res =await axiosPublic.get("/categories");
      return res.data;
    },
  });
  console.log(categories)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
      {categories.map((category) => (
        <Link
          to={`/category/${category._id}`}
          key={category._id}
          className="py-2.5 cursor-pointer rounded bg-white shadow-sm"
        >
          <div className="flex items-center pl-3 pr-1">
            <span className="rounded-full bg-gray-100 w-8 h-8 md:w-10 md:h-10 relative flex items-center justify-center category-icon-bg">
              <img
                src={category?.category?.img}
                className="w-5 h-5"
                alt={category?.category?.name}
              />
            </span>
            <span className="ml-3 text-sm text-black capitalize items-start category-name">
              {category?.category?.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResponsiveCategories;
