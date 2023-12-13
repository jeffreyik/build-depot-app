const Invoice = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-screen-xl mx-auto my-10 text-dark-50 font-Inter text-sm">
      <div className="flex py-10 px-3 border-y-8 border-orange-clr-200  items-top justify-between">
        <div className="flex flex-col gap-3 w-[40%] md:gap-5">
          <h1 className="font-calSans text-orange-clr-full text-lg font-semibold md:text-[45px] lg:text-xl">
            BuildDepot
          </h1>
          <p className="truncate">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="text-right">
          <h1 className="text-lg mb-4 md:text-[45px] font-calSans">INVOICE</h1>
          <p>#INV-12910289</p>
        </div>
      </div>
      <div className="py-7 px-3 font-medium border-b-8 border-orange-clr-200">
        <div className="my-10 flex items center justify-between">
          <aside className="flex flex-col gap-2">
            <p className="text-gray-200">ISSUED ON</p>
            <p className="">23, jan 2023</p>
          </aside>
          <aside className="flex flex-col gap-2 text-right w-[60%]">
            <p className="text-gray-200">ISSUED TO</p>
            <h3 className="text-dark-50 font-semibold text-base md:text-lg">
              Mama Ekene LTD
            </h3>
            <p className="text-gray-200 truncate">
              3891 Ranchview Dr. Richardson, California 62639
            </p>
          </aside>
        </div>

        <table className="mt-10 w-full font-calSans font-semibold lg:mt-20">
          <thead className="bg-orange-clr-50">
            <tr>
              <th className="w-2/4 px-4 py-2 text-left text-gray-700">
                Item name
              </th>
              <th className="text-center font-medium text-gray-700 ">
                Unit cost
              </th>
              <th className="py-2 text-center font-medium text-gray-700 ">
                Quantity
              </th>
              <th className="py-2 text-center font-medium text-gray-700">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="h-[40vh] bg-red-500"></tbody>
          <tbody>
            <tr>
              <td className="px-8">Delivery cost</td>
            </tr>
          </tbody>
        </table>
      </div>
      <form className="w-full py-5 px-3">
        <h3 className="font-calSans font-semibold text-sm md:text-lg">
          Choose Payment Method
        </h3>
        <div className="mt-4 flex justify-between items-center border-[1px] px-[18px] py-[13px] shadow-md">
          <div className="flex flex-col gap-1 ">
            <h3 className="font-semibold text-sm md:text-[18px]">
              Pay with Debit/Credit Card, Bank transfer or USSD
            </h3>
            <p>You will be redirected to our secure checkout page</p>
          </div>
          <input type="radio" className="w-5 h-5 rounded-full" />
        </div>
        <div className="mt-4 flex justify-between items-center border-[1px] px-[18px] py-[13px] shadow-md">
          <div className="flex flex-col gap-1 ">
            <h3 className="font-semibold text-sm md:text-[18px]">
              Pay on credit
            </h3>
            <p>You will be redirected to our external credit checkout page</p>
          </div>
          <input type="radio" className="w-5 h-5 rounded-full" />
        </div>
        <div className="flex justify-end items-end mt-10">
          <button
            className="py-[10px] px-5 bg-orange-clr-full text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Check out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Invoice;
