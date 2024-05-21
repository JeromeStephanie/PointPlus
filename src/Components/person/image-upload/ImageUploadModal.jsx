import React, { useState } from "react";

const ImageUploadModal = ({ isOpen, onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      setSelectedFile(null);
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content2">
            <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-4"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-[#ffa500] text-white px-4 py-2 rounded"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageUploadModal;
