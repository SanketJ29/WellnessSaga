import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
// import { shortenAddress } from "../utils/shortenAddress";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Showcase = () => {
  // const { handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div>
      <section class="text-gray-400 body-font bg-gray-900">
        {/* <div class="container px-5 py-24 mx-auto"> */}
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                For secure storage
                <br />
                and management of medical data
              </h1>
              <button
              type="button"
              // onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"></p>
            
          </div>
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mx-auto">
            <Input placeholder="Address To" name="addressTo" type="text"  />
            <Input placeholder="Amount (ETH)" name="amount" type="number" />
            <Input placeholder="Which service you need" name="keyword" type="text" />
            <Input placeholder="Enter Message" name="message" type="text"  />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {/* {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )} */}
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://media.istockphoto.com/id/457344351/photo/nurse-station.jpg?s=612x612&w=0&k=20&c=V_CyyX8pRAXDSKQ7hA9o3IsuNZfhB4GIk4uHSW0qWX4="
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font"></h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Appointment Booking
                </h2>
                <p class="leading-relaxed text-base">
                  Appointment booking helps to ensure that both the customer and
                  the service provider are prepared for the scheduled meeting,
                  reducing wait times and improving overall efficiency.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://www.sriramakrishnahospital.com/wp-content/uploads/2022/04/ICU.jpg"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font"></h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Emergency Room service
                </h2>
                <p class="leading-relaxed text-base">
                  Emergency room services are available 24 hours a day, 7 days a
                  week, and are staffed by trained medical professionals who are
                  able to provide care for a wide range of medical emergencies.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://nandadiagnostics.com/wp-content/uploads/2020/01/xray.jpg"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font"></h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  X-Ray Services
                </h2>
                <p class="leading-relaxed text-base">
                  X-ray imaging is used to diagnose and monitor a wide range of
                  medical conditions, including bone fractures, joint
                  dislocations, pneumonia, and other respiratory diseases.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://i0.wp.com/www.treatathomes.com/wp-content/uploads/2021/12/doctor-visit-at-home-1.png?fit=640%2C372&ssl=1"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font"></h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Short-Term Hospitalisation
                </h2>
                <p class="leading-relaxed text-base">
                  Emergency room services are available 24 hours a day, 7 days a
                  week, and are staffed by trained medical professionals who are
                  able to provide care for a wide range of medical emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
