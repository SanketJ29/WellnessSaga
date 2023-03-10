import React from 'react';
import Input from '../components/Input';

function DataUploadForm() {
  return (
    <section class="text-gray-400 body-font bg-gray-900 h-screen">
    <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mx-auto">
        <Input placeholder="Enter Name" name="name" type="text" className="text-white-600" />
  <Input placeholder="Enter Email" name="email" type="email" className="text-white-600"/>
  <div className="mt-4">
    <label className="block text-white-700 font-bold mb-2" htmlFor="file">
      Upload File
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" id="file" type="file" />
  </div>
  <div className="mt-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Upload
    </button>
  </div>
    </div>
</div>
</div>
</section>
 );
}

export default DataUploadForm;
