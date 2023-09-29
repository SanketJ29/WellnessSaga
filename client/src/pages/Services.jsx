import React from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';

const Services = () => {
    return (
        <div>
            <Navbar/>
        <section class="text-gray-400 body-font bg-gray-900 min-h-screen">
            <div class="container px-5 py-6 mx-auto">
            <div>
            <h1 class="text-4xl font-medium title-font mb-12 text-cyan-400 text-center font-mono">SERVICES
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-2">
              <div class="bg-cyan-400 bg-opacity-20 p-5 rounded-lg">
                <img
                  class="h-60 rounded w-full object-cover object-center mb-6"
                  src="https://media.istockphoto.com/id/457344351/photo/nurse-station.jpg?s=612x612&w=0&k=20&c=V_CyyX8pRAXDSKQ7hA9o3IsuNZfhB4GIk4uHSW0qWX4="
                  alt="content"
                />
                <h2 class="text-2xl text-cyan-400 font-medium title-font mb-3 font-mono">
                  Appointment Booking
                </h2>
                <p class="leading-relaxed text-base text-lg text-gray-300 font-mono">
                  Appointment booking helps to ensure that both the customer and the service provider are prepared for the scheduled meeting, reducing wait times and improving overall efficiency.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-2">
              <div class="bg-cyan-400 bg-opacity-20 p-5 rounded-lg">
                <img
                  class="h-60 rounded w-full object-cover object-center mb-6"
                  src="https://www.linkpicture.com/q/LPic650d5873b8939849857030.jpg"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font"></h3>
                <h2 class="text-2xl text-cyan-400 font-medium title-font mb-3 font-mono">
                  Emergency Room service
                </h2>
                <p class="leading-relaxed text-base text-lg text-gray-300 font-mono">
                  Emergency room services are available 24/7, and are staffed by trained medical professionals who are able to provide care for a wide range of medical emergencies.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-2">
              <div class="bg-cyan-400 bg-opacity-20 p-5 rounded-lg text-gray-300">
                <img
                  class="h-60 rounded w-full object-cover object-center mb-6"
                  src="https://nandadiagnostics.com/wp-content/uploads/2020/01/xray.jpg"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font"></h3>
                <h2 class="text-2xl text-cyan-400 font-medium title-font mb-3 font-mono">
                  X-Ray Services
                </h2>
                <p class="leading-relaxed text-base text-lg text-gray-300 font-mono">
                  X-ray imaging is used to diagnose and monitor a wide range of medical conditions, including bone fractures, joint dislocations, pneumonia, and other respiratory diseases.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-2">
              <div class="bg-cyan-400 bg-opacity-20 p-5 rounded-lg">
                <img
                  class="h-60 rounded w-full object-cover object-center mb-6"
                  src="https://i0.wp.com/www.treatathomes.com/wp-content/uploads/2021/12/doctor-visit-at-home-1.png?fit=640%2C372&ssl=1"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font"></h3>
                <h2 class="text-2xl text-cyan-400 font-medium title-font mb-3 font-mono ">
                  Short-Term Hospitalisation
                </h2>
                <p class="leading-relaxed text-base text-lg text-gray-300 font-mono">
                  Short-term hospitalization is available 24/7, with a team of skilled healthcare professionals ready to provide comprehensive care for various medical needs.
                </p>
              </div>
            </div>
          </div>
        </div>    
        </section>
        
        <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 mx-auto">
            <h1 class="text-4xl font-medium title-font mb-10 text-cyan-400 text-center font-mono">AVAIL SERVICES</h1>
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mx-auto mb-20">
            <Input placeholder="Address To" name="addressTo" type="text"  />
            <Input placeholder="Amount (ETH)" name="amount" type="number" />
            <Input placeholder="Which service you need" name="keyword" type="text" />
            <Input placeholder="Enter Message" name="message" type="text"  />
            <div className="mt-2">
              <button className="bg-cyan-900 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline active:bg-cyan-800 font-mono text-2xl">
                SEND
              </button>
            </div>
          </div>
          </div>
        </div>
        </section>
    </div>
    );
};

export default Services;