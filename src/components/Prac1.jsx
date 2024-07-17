import stock from "../assets/stock.png";
import outstock from "../assets/stockout.png";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const Prac1 = () => {
  const stockTrue = PRODUCTS.filter((fruit) => fruit.stocked);
  const stockFalse = PRODUCTS.filter((fruit) => !fruit.stocked);
  return (
    <>
      <p className="text-center text-2xl text-white mt-14 underline">
        Stock List
      </p>
      <div className=" mt-5  justify-center">
        <div className="flex flex-wrap justify-center w-full ">
        <div className="w-5/6 border rounded-xl border-neutral-400">
          <div className="border-b-2 border-neutral-700 p-5">
            <div className="text-center text-white text-xl pb-4 mb-5">
              <b>
                Products <span className="text-green-600">In Stock</span> :
              </b>
            </div>
            <h2 className="text-green-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5">
              {stockTrue.map((trueItems, index) => (
                <div key={index} className="flex justify-center w-full">
                  <ul className="w-full">
                    <div className="border rounded-xl p-5 border-neutral-700 backdrop-blur-3xl">
                      <li>
                        <div className="bg-blend-normal p-2">
                          <img
                            src={stock}
                            height={40}
                            className="border rounded-xl p-1 border-neutral-700 mb-4"
                            width={40}
                            alt="stock"
                          />{" "}
                          Name : {trueItems.name}
                        </div>
                        <div className="bg-blend-normal p-2">
                          Price : {trueItems.price}
                        </div>
                        <div className="bg-blend-normal p-2">
                          Category : {trueItems.category}
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              ))}
            </h2>
          </div>
          <div className="p-5">
            <div className="mb-10 text-center text-xl text-white">
              <b>
                Products <span className="text-red-600">Out of Stock</span> :
              </b>
            </div>
            <h2 className="text-red-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {stockFalse.map((trueItems, index) => (
                <div key={index}>
                  <ul className="w-full">
                    <div className=" border rounded-xl p-5 border-neutral-700">
                      <li>
                        <div className="bg-blend-normal p-2 w-48">
                          <img
                            src={outstock}
                            height={40}
                            className="border rounded-xl p-1 border-neutral-700 mb-4"
                            width={40}
                            alt="stock"
                          />{" "}
                          Name : {trueItems.name}
                        </div>
                        <div className="bg-blend-normal p-2">
                          Price : {trueItems.price}
                        </div>
                        <div className="bg-blend-normal p-2">
                          Category : {trueItems.category}
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              ))}
            </h2>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Prac1;
