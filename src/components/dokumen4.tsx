import React, { useState } from 'react';

const ReportSection: React.FC = () => {
  const [model, setModel] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [testStartDate, setTestStartDate] = useState("");
  const [testEndDate, setTestEndDate] = useState("");
  const [staff, setStaff] = useState([
    { name: "", nip: "" },
    { name: "", nip: "" },
    { name: "", nip: "" },
    { name: "", nip: "" },
    { name: "", nip: "" },
    { name: "", nip: "" },
    { name: "", nip: "" },
    { name: "", nip: "" },
    { name: "", nip: "" },
    { name: "", nip: "" },
  ]);


  const inputClass = (value: string) =>
    `${value ? "text-red-500" : "text-gray-500"} font-semibold bg-transparent  mx-1`;


  const handleNameChange = (index: number, newName: string) => {
    setStaff(prevStaff => {
      const updatedStaff = [...prevStaff];
      updatedStaff[index].name = newName;
      return updatedStaff;
    });
  };

  const handleNipChange = (index: number, newNip: string) => {
    setStaff(prevStaff => {
      const updatedStaff = [...prevStaff];
      updatedStaff[index].nip = newNip;
      return updatedStaff;
    });
  };

  return (
    <div className="text-left p-6 max-w-screen-lg mx-auto font-sans space-y-8">
     
      <div>
        <h2 className="font-bold">I.1. <span className="font-semibold">Introduction</span></h2>
        <p>
          This document presents the Test Report of <strong>Infant Incubator</strong> Model: 
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Masukan Model"
            className={inputClass(model)}
          />
          as requested by 
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Masukan Nama Vendor"
            className={inputClass(company)}
          />, 
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Masukan Alamat"
            className={inputClass(address)}
          /> 
          on 
          <input
            type="text"
            value={requestDate}
            onChange={(e) => setRequestDate(e.target.value)}
            placeholder="Masukan Tanggal"
            className={inputClass(requestDate)}
          />
          to the Testing Technology Laboratory of PRTPS - BRIN in Kawasan PUSPIPTEK Gd. 417, Setu, Tangerang Selatan 15314, Banten - Indonesia.
        </p>

        <p>Scopes of safety test for Infant Incubator are:</p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>General Requirement</li>
          <li>ME EQUIPMENT identification, marking and documents</li>
          <li>HAZARDOUS SITUATIONS and fault conditions</li>
          <li>PROGRAMMABLE ELECTRICAL MEDICAL SYSTEMS (PEMS)</li>
          <li>CONSTRUCTION of ME EQUIPMENT</li>
        </ul>

        <p>
          The purpose of this testing was to demonstrate the safety of the above mentioned appliance according to test criteria for qualification and in conformity with the standard document, IEC 60601-2-19 : 2009 ed. 2 Particular requirement for safety of baby incubators in conjunction with IEC 60601-1:2005 Medical Electrical Equipment General Requirement for Safety.
        </p>

        <p>
          The tests were carried out from 
          <input
            type="text"
            value={testStartDate}
            onChange={(e) => setTestStartDate(e.target.value)}
            placeholder="Masukan Tanggal"
            className={inputClass(testStartDate)}
          /> 
          to 
          <input
            type="text"
            value={testEndDate}
            onChange={(e) => setTestEndDate(e.target.value)}
            placeholder="Masukan Tanggal"
            className={inputClass(testEndDate)}
          />.
        </p>

        <p>
          The test report consists of General Part, Technical Part, and Appendix. In the General Part, introduction and administrative information are described. The Technical Part is divided into 5 sections. This part contains details of the test report.
        </p>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Section A describes unit under test (UUT) specification</li>
          <li>Section B describes equipment used for the test</li>
        </ul>
      </div>

     
      <div>
        <h2 className="font-bold print-dokumen ">I.2. <span className="font-semibold">PRTPS - BRIN staff involved in the test</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
          {staff.map((member, index) => (
            <div key={index} className="flex items-center">
            
              <input
                type="text"
                value={member.name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                placeholder="Masukan Nama"
                className={`${inputClass(member.name)} w-full sm:w-auto`}
              />
             
              <span className="mx-2">NIP :</span>
             
              <input
                type="text"
                value={member.nip}
                onChange={(e) => handleNipChange(index, e.target.value)}
                placeholder="Masukan NIP"
                className={`${inputClass(member.nip)} w-full sm:w-auto`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
