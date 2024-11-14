import React, { useState } from 'react';

interface ReportProps {
  produk?: string;
  brand?: string;
  model?: string;
  sampleNo?: string;
}

const Dokumen2: React.FC<ReportProps> = ({ produk, brand, model, sampleNo }) => {
  const placeholderProduk = "Masukan Nama Produk";
  const placeholderBrand = "Masukan Nama Brand";
  const placeholderModel = "Masukan Model";
  const placeholderSampleNo = "Masukan Sample";

  const [inputProduk, setInputProduk] = useState(produk || "");
  const [inputBrand, setInputBrand] = useState(brand || "");
  const [inputModel, setInputModel] = useState(model || "");
  const [inputSampleNo, setInputSampleNo] = useState(sampleNo || "");

  return (
    <div className="text-center font-sans p-5">
      <h1 className="tracking-widest text-2xl font-bold">TEST REPORT</h1>
      <h2 className="text-xl mt-2">
        <strong>
            <input
                type="text"
                value={inputProduk}
                onChange={(e) => setInputProduk(e.target.value)}
                placeholder={placeholderProduk}
                className="text-red-500 bg-transparent text-center "
            /></strong>
      </h2>
      <div className="text-lg leading-loose mt-4">
        <p>
          <strong>MERK: </strong>
          <input
            type="text"
            value={inputBrand}
            onChange={(e) => setInputBrand(e.target.value)}
            placeholder={placeholderBrand}
            className="text-red-500 bg-transparent text-center "
          />
        </p>
        <p>
          <strong>MODEL: </strong>
          <input
            type="text"
            value={inputModel}
            onChange={(e) => setInputModel(e.target.value)}
            placeholder={placeholderModel}
            className="text-red-500 bg-transparent text-center "
          />
        </p>
        <p>
          <strong>SAMPLE NO.: </strong>
          <input
            type="text"
            value={inputSampleNo}
            onChange={(e) => setInputSampleNo(e.target.value)}
            placeholder={placeholderSampleNo}
            className="text-red-500 bg-transparent text-center "
          />
        </p>
      </div>
    </div>
  );
};

export default Dokumen2;
