import React, { useState } from 'react';

const TestReport: React.FC = () => {
  // State variables for editable text fields
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [model, setModel] = useState("");
  const [figure1Description, setFigure1Description] = useState("");
  const [figure2Description, setFigure2Description] = useState("");
  
  // State for image uploads
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const inputClass = (value: string) => `${value ? "text-red-500" : "text-gray-500"} font-semibold bg-transparent focus:outline-none text-center`;

  return (
    <div className="text-center p-6 max-w-screen-md mx-auto font-sans space-y-6">
      {/* Title Section */}
      <h1 className="text-3xl font-bold tracking-widest">TEST REPORT</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukan Unit"
          className={`${inputClass(title)} w-full text-center`}
        />
      </div>
      <div>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Masukan Nama"
          className={`${inputClass(author)} w-full text-center`}
        />
      </div>
      <div>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Masukan Model"
          className={`${inputClass(model)} w-full text-center`}
        />
      </div>

      {/* Appendix Section */}
      <h2 className="text-2xl font-bold mt-8">III. APPENDIX</h2>
      <p className="font-semibold">PHOTOGRAPH OF UNIT UNDER TEST</p>

      {/* Image Upload and Display for Figure 1 */}
      <div className="mt-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, setImage1)}
          className="mb-2"
        />
        {image1 && (
          <div className="border p-2 mt-2">
            <img
              src={URL.createObjectURL(image1)}
              alt="Figure 1"
              className="mx-auto max-w-full h-auto"
            />
            <div className="text-left mt-2">
              <span className="font-bold">Figure 1:</span>
              <input
                type="text"
                value={figure1Description}
                onChange={(e) => setFigure1Description(e.target.value)}
                placeholder="Masukan Deskripsi"
                className={`${inputClass(figure1Description)} w-full text-center mt-1`}
              />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, setImage2)}
          className="mb-2"
        />
        {image2 && (
          <div className="border p-2 mt-2">
            <img
              src={URL.createObjectURL(image2)}
              alt="Figure 2"
              className="mx-auto max-w-full h-auto"
            />
            <div className="text-left mt-2">
              <span className="font-bold">Figure 2:</span>
              <input
                type="text"
                value={figure2Description}
                onChange={(e) => setFigure2Description(e.target.value)}
                placeholder="Masukan Deskripsi"
                className={`${inputClass(figure2Description)} w-full text-center mt-1`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestReport;
