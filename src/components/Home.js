import React from "react";
import ItemCard from "./ItemCard";
import data from "../data/data";
const Home = () => {
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {/* {data.productData.map((item,index)=>{
                    return(
                        <ItemCard 
                        thumb= {item.thumb}
                        title={item.title}
                        desc={item.desc} 
                        price={item.price}
                        item={item}
                        key={index} />
                    )
                })} */}
          {data.productData.map((item) => {
            return <ItemCard item={item} key={item.title} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
