import React, { useState } from 'react';

const DeviceDetailsSection: React.FC = () => {
  const [partName, setPartName] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [rating, setRating] = useState("");
  const [installationUse, setInstallationUse] = useState("");
  const [supplyConnection, setSupplyConnection] = useState("");
  const [protectionClass, setProtectionClass] = useState("");
  const [protectionDegree, setProtectionDegree] = useState("");
  const [accessories, setAccessories] = useState("");
  const [markingPlateImage, setMarkingPlateImage] = useState<string | null>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMarkingPlateImage(imageUrl);
    }
  };


  const inputClass = (value: string) =>
    `${value ? "text-red-500" : "text-gray-500"} font-semibold bg-transparent `;

  return (
    <div className="text-left p-6 max-w-screen-lg mx-auto font-sans space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
        <div className="flex justify-between">
          <span>Part Name</span>
          <input
            type="text"
            value={partName}
            onChange={(e) => setPartName(e.target.value)}
            placeholder="Masukan Produk"
            className={`${inputClass(partName)} ml-2`}
          />
        </div>
        <div className="flex justify-between">
          <span>Mark / Model</span>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Masukan Model"
            className={`${inputClass(model)} ml-2`}
          />
        </div>
        <div className="flex justify-between">
          <span>Type / Serial No. / Quantity</span>
          <input
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            placeholder="Masukan No Serial"
            className={`${inputClass(serialNumber)} ml-2`}
          />
        </div>
        <div className="flex justify-between">
          <span>Rating</span>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Masukan Rating"
            className={`${inputClass(rating)} ml-2`}
          />
        </div>
        <div className="flex justify-between">
          <span>Classification of installation and use</span>
          <input
            type="text"
            value={installationUse}
            onChange={(e) => setInstallationUse(e.target.value)}
            placeholder="Masukan Device"
            className={`${inputClass(installationUse)} ml-2`}
          />
        </div>
        <div className="flex justify-between">
          <span>Supply connection</span>
          <input
            type="text"
            value={supplyConnection}
            onChange={(e) => setSupplyConnection(e.target.value)}
            placeholder="Masukan Suplly Connection"
            className={`${inputClass(supplyConnection)} ml-2`}
          />
        </div>
        <div className="flex justify-between">
          <span>Class of protection against electrical shock</span>
          <input
            type="text"
            value={protectionClass}
            onChange={(e) => setProtectionClass(e.target.value)}
            placeholder="Masukan Class"
            className={`${inputClass(protectionClass)} ml-2`}
          />
        </div>
        <div className="flex justify-between">
          <span>Degree of protection against liquid</span>
          <input
            type="text"
            value={protectionDegree}
            onChange={(e) => setProtectionDegree(e.target.value)}
            placeholder="Masukan Tingkat Cairan"
            className={`${inputClass(protectionDegree)} ml-2`}
          />
        </div>
        <div className="flex justify-between">
          <span>Accessories and detachable parts included in the evaluation</span>
          <input
            type="text"
            value={accessories}
            onChange={(e) => setAccessories(e.target.value)}
            placeholder="Masukan Sensor"
            className={`${inputClass(accessories)} ml-2`}
          />
        </div>
      </div>

      {/* Image upload for Marking Plate */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Copy Of Marking Plate:</h3>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
        {markingPlateImage && (
          <div className="border p-2">
            <img src={markingPlateImage} alt="Marking Plate" className="max-w-full h-auto" />
          </div>
        )}
      </div>

      {/* Summary of Testing */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Summary of testing:</h3>
        <p>
          The test is in regard to the standards (the IEC 60601-2-19: 2009 ed. 2 and the IEC 60601-1:2005, Clause 4, 7, 13, 14, 15)
        </p>
      </div>
    </div>
  );
};

export default DeviceDetailsSection;
