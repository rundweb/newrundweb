import customer from "../assets/customer (1).svg";
import customer2 from "../assets/customer (2).svg";
import customer3 from "../assets/customer (3).svg";
import customer4 from "../assets/customer (4).svg";
import customer5 from "../assets/customer (5).svg";
import customer6 from "../assets/customer (6).svg";
function Customer() {
  const imgCustomer = [
    {
      id: 1,
      name: customer,
    },
    {
      id: 2,
      name: customer2,
    },
    {
      id: 3,
      name: customer3,
    },
    {
      id: 4,
      name: customer4,
    },
    {
      id: 5,
      name: customer5,
    },
    {
      id: 6,
      name: customer6,
    },
  ];
  return (
    <div  className="flex flex-col items-center justify-center text-center gap-7 py-5 px-5 max-w-7xl m-auto">
      <div>
        <h1 className="font-normal text-emerald-800">
          160,000+ customers in over 120 countries grow their businesses with
          Neuros
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {imgCustomer.map((item) => (
          <div key={item.id} className="flex items-center justify-center">
            <img src={item.name} alt="" className="w-56" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customer;
