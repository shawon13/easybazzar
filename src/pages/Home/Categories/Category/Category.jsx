import "./Category.css";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Subcategory from "../Subcategory/Subcategory";
const Category = ({ category }) => {
  const { name, img } = category.category;
  return (
    <>
      <li className="flex items-center justify-between py-1.5 text-gray-400	cursor-pointer category-li hover:text-black ">
        <div className="flex items-center">
          <span className="rounded-full bg-gray-100 w-6 h-6 relative items-center justify-center flex">
            <img src={img} className="w-4 h-4" alt="" />
          </span>
          <span className="ml-3 text-sm category-title transition-all">
            {name}
          </span>
        </div>
        <span className="category-icon transition-all">
          <ChevronRightIcon className="h-4 w-4 " />
        </span>

        {/* sub category */}
        <ul
          style={{ zIndex: 2 }}
          className="bg-white shadow-sm h-full w-full rounded-md py-1.5 px-3 absolute top-0 subcategory-ul left-[280px] lg:left-[220px] xl:left-[280px] 2xl:left-[345px]"
        >
          {category.sub_categories.map((subcategory) => (
            <Subcategory
              key={subcategory.id}
              subcategory={subcategory}
            ></Subcategory>
          ))}
        </ul>
      </li>
    </>
  );
};

export default Category;
