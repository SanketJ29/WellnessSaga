import React from 'react';
import Input from '../components/Input';
import { useState } from 'react';
import Navbar from '../components/Navbar';
// import { Web3Storage } from 'web3.storage';

function DataUploadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadInfo, setUploadInfo] = useState(null);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI1M0Q3NmM0Yjg1RDIzQjYwMDMwNzNFNDAxMDc1NzkxNWJFOTc1OTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg1MDg1NDY2NjYsIm5hbWUiOiJTYW5rZXRfd2ViMyJ9.WsuJ3oCu2S1BlllSFEqdfH7ihebReY8MN2aGRH7yw_A'

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const bytesToKB = (bytes) => {
    return (bytes / 1024).toFixed(2);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const url = 'https://api.web3.storage/upload';

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
      const responseData = await response.json();
      const ipfsLink = `https://ipfs.io/ipfs/${responseData.cid}`;
      const fileSize = bytesToKB(file.size);
      const uploadDate = new Date();
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      const formattedDate = uploadDate.toLocaleDateString('en-GB', options);
      const uploadTime = new Date().toLocaleTimeString();
      const uploadDetails = {
        cid: responseData.cid,
        size: fileSize,
        date: formattedDate,
        time: uploadTime,
        link: ipfsLink,
      };
      setUploadInfo(uploadDetails);
    } else {
      console.error('Failed to upload form data');
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false);
  }
  
  };
  return (
    <div>
    <Navbar/>
    <section class="body-font bg-gray-900 min-h-screen">
    <div class="container px-5 py-1 mx-auto ">
    <h1 className="text-cyan-400 text-3xl font-medium mb-5 text-center font-mono">UPLOAD YOUR DOCUMENTS</h1>

          <form >
      <div className="p-4 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mx-auto">
        <Input placeholder="Enter Name" name="name" type="text" className="text-white-600 text-black font-mono " value={name} onChange={(event) => setName(event.target.value)} />
        <Input placeholder="Enter Email" name="email" type="email" className="text-white-600 text-black" value={email} onChange={(event) => setEmail(event.target.value)} />
        <div className="mt-2">
          <label className="block text-black font-bold mb-1 font-mono text-xl" htmlFor="file">
            Upload File: 
          </label>
          <input className="shadow appearance-none border border-black rounded w-full py-1 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline font-mono text-lg" id="file" type="file" onChange={handleFileChange} />
        </div>
        <div className="mt-2">
          <button className="bg-cyan-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-cyan-800 font-mono text-xl" onClick={handleSubmit}>
            Upload
          </button>
        </div>
      </div>
    </form>
    <div class="mt-12">
    {loading ? (
    <p className="text-cyan-400 text-3xl font-mono font-bold flex flex-col items-center justify-center">Loading...</p>
  ) : (
    uploadInfo && (
        <div className="mt-4 text-white flex flex-col sm:flex-col items-center justify-center">
          <h2 className="text-3xl font-medium mb-4 text-cyan-300 font-mono">UPLOAD DETAILS</h2>
          <div className="bg-cyan-800 p-4 rounded-lg shadow-lg mx-auto ">
          <table className="table-fixed border-collapse w-full flex-col flex items-center justify-center">
            <tbody>
              <tr>
                <td className="w-1/4 py-2 text-lg">Content Identifier (CID):</td>
                <td className="w-3/4 py-2 text-center text-lg">{uploadInfo.cid}</td>
              </tr>
              <tr>
                <td className="w-1/4 py-2 text-lg">File Size:</td>
                <td className="w-3/4 py-2 text-center text-lg">{uploadInfo.size} KB</td>
              </tr>
              <tr>
                <td className="w-1/4 py-2 text-lg">Date of Upload:</td>
                <td className="w-3/4 py-2 text-center text-lg">{uploadInfo.date}</td>
              </tr>
              <tr>
                <td className="w-1/4 py-2 text-lg">Time of Upload:</td>
                <td className="w-3/4 py-2 text-center text-lg">{uploadInfo.time}</td>
              </tr>
              <tr>
                <td className="w-1/4 py-2 text-lg">IPFS link:</td>
                <td className="w-3/4 py-2 text-center text-lg">
                  <a href={uploadInfo.link} target="_blank" rel="noopener noreferrer" className="underline hover:underline hover:text-cyan-500">
                    {uploadInfo.link}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
    )
      )}
      </div>
</div>
</section>
</div>
 );
}

export default DataUploadForm;
