import React, { useState } from "react";
import axios from "axios";

const ResumeParser = () => {
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleParse = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/parse-resume`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // const formatted = JSON.stringify(res.data, null, 2);
      setJsonData(res.data);
      console.log(typeof res.data)
    } catch (error) {
      console.error("Error parsing resume:", error);
      setJsonData("Error parsing resume.");
    }
  };

const [loading, setLoading] = useState(false);
const [view,setview] = useState(true)

return (
    <div className="w-6xl p-4 border rounded-md shadow-sm space-y-4 mt-6">
        <h2 className="text-lg font-semibold text-center">Resume Parser</h2>

        <input
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="w-full p-4 border-2 cursor-pointer"
            
        />

        <button
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
            onClick={async () => {
                setLoading(true);
                await handleParse();
                setLoading(false);
            }}
            disabled={loading}
        >
            {loading ? "Parsing..." : "Parse"}
        </button>

        {loading && (
            <div className="flex justify-center items-center mt-4">
                <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-600 mr-2"></span>
                <span>Parsing resume...</span>
            </div>
        )}

        {jsonData && !loading && (
          <div>
            <div className="flex">
            <button className="p-2 rounded-sm cursor-pointer mr-3 bg-blue-300  hover:bg-blue-400" onClick={()=> setview(true)}>Preview</button>
            <button className="p-2 rounded-sm cursor-pointer  bg-blue-300 hover:bg-blue-400" onClick={()=> setview(false)}>Code</button>
            </div>
            {view ? (<div
                className="mt-4 border rounded p-2 bg-white text-sm h-96 overflow-y-scroll"
                dangerouslySetInnerHTML={{ __html: jsonData }}
              />):
              <div className="mt-4 border rounded p-2 bg-white text-sm h-96 overflow-y-scroll">
                <pre>{jsonData}</pre></div>}
            </div>
        )}
    </div>
);
};

export default ResumeParser;
