import "./FlashSales.css";
import FlashSaleCard from "./FlashSaleCard/FlashSaleCard";
import useProducts from "../../../hooks/useProducts";
import { useEffect, useState } from "react";

const FlashSales = () => {
  const [products] = useProducts();

  const [startSales, setStartSales] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("flashSalesStartIndex"));
    setStartSales(saved);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (startSales + 24) % products.length;
      setStartSales(nextIndex);
      localStorage.setItem("flashSalesStartIndex", JSON.stringify(nextIndex));
    }, 12 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [startSales, products]);
  const sales = products.slice(startSales, startSales + 24);

  return (
    <div>
      <div className="flash-sale-banner bg-center bg-no-repeat bg-cover h-[155px] sm:h-[175px] md:h-[210px] lg:h-[275px] xl:h-[340px] 2xl:h-[410px]"></div>
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <h2 className="text-xl sm:text-4xl capitalize mb-2.5">flash sales</h2>
          <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 products-grid">
            {sales.map((flashsale) => (
              <FlashSaleCard
                key={flashsale.id}
                flashsale={flashsale}
              ></FlashSaleCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlashSales;
