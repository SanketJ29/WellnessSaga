import React from 'react';
import Input from '../components/Input';
import { useState } from 'react';
import { Web3Storage } from 'web3.storage';

function DataUploadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI1M0Q3NmM0Yjg1RDIzQjYwMDMwNzNFNDAxMDc1NzkxNWJFOTc1OTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg1MDg1NDY2NjYsIm5hbWUiOiJTYW5rZXRfd2ViMyJ9.WsuJ3oCu2S1BlllSFEqdfH7ihebReY8MN2aGRH7yw_A'

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('email', email);
    // formData.append('file', file);

    // You can replace the URL with your own server endpoint
    try {
      const url = 'https://api.web3.storage/upload';

    // const storage = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI1M0Q3NmM0Yjg1RDIzQjYwMDMwNzNFNDAxMDc1NzkxNWJFOTc1OTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg1MDg1NDY2NjYsIm5hbWUiOiJTYW5rZXRfd2ViMyJ9.WsuJ3oCu2S1BlllSFEqdfH7ihebReY8MN2aGRH7yw_A' });
    // const files = await storage.put([file]);
    // const cid = files;
    // console.log(cid)

    // formData.append('cid', cid);

    const response = await fetch(url, {
      method: 'POST',
      body: file,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    

    if (response.ok) {
      console.log('Form data uploaded successfully');
      console.log(response)
    } else {
      console.error('Failed to upload form data');
    }
  } catch (error) {
    console.log(error)
  }
  
  };
  return (
    <section class="text-gray-400 body-font bg-gray-900 h-screen">
    <div class="container px-5 py-24 mx-auto">

          <form >
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mx-auto">
        <Input placeholder="Enter Name" name="name" type="text" className="text-white-600" value={name} onChange={(event) => setName(event.target.value)} />
        <Input placeholder="Enter Email" name="email" type="email" className="text-white-600" value={email} onChange={(event) => setEmail(event.target.value)} />
        <div className="mt-4">
          <label className="block text-white-700 font-bold mb-2" htmlFor="file">
            Upload File
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" id="file" type="file" onChange={handleFileChange} />
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
            Upload
          </button>
        </div>
      </div>
    </form>
</div>
</section>
 );
}

export default DataUploadForm;
