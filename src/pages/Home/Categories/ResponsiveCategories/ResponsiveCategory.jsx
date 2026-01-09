import { useParams,Link} from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ResponsiveCategory = () => {
  const {id}=useParams()
  console.log(id)
  const axiosPublic = useAxiosPublic();

   const { data: categories = [],isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async() => {
      const res =await axiosPublic.get("/categories");
      return res.data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  const selectedCategory=categories.find(cat=>cat._id===id);
  console.log(selectedCategory)
  return (
    <section className="py-20">
      <div className=" container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-sm p-10 h-auto w-fit mx-auto bg-gray-100 rounded">
          {
            selectedCategory.sub_categories.map((category,index)=>(
              <Link
              to={`/categories/${category?.sub_category?.category_id}`}
                key={index}
                className="py-2.5 px-5 text-center cursor-pointer rounded bg-white shadow-md"
              >
                  <span className="text-sm text-black capitalize category-name">
                    {category?.sub_category?.sub_name}
                  </span>
              </Link>
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default ResponsiveCategory;
