import React, { useState } from 'react';

const TestReportSection: React.FC = () => {
  // State variables for all editable fields
  const [customerOrder, setCustomerOrder] = useState("");
  const [jobOrderNo, setJobOrderNo] = useState("");
  const [executionDate, setExecutionDate] = useState("");
  const [executors, setExecutors] = useState([
    { name: "", date: "" },
    { name: "", date: "" },
    { name: "", date: "" },
  ]);
  const [testConductor, setTestConductor] = useState({ name: "", date: "" });
  const [manager, setManager] = useState({ name: "", date: "" });


  const inputClass = (value: string) =>
    `${value ? "text-red-500" : "text-gray-500"} font-semibold bg-transparent `;


  const handleExecutorChange = (
    index: number,
    field: keyof typeof executors[number], 
    value: string
  ) => {
    const updatedExecutors = [...executors];
    updatedExecutors[index][field] = value;
    setExecutors(updatedExecutors);
  };

  const handleTestConductorChange = (field: string, value: string) => {
    setTestConductor(prev => ({ ...prev, [field]: value }));
  };

  const handleManagerChange = (field: string, value: string) => {
    setManager(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="text-left p-6 max-w-screen-lg mx-auto font-sans space-y-8">
      <h3 className="font-bold text-lg print-dokumen">Unit Under Test Description</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 mt-2">
        <span>Part Name</span>
        <input
          type="text"
          value={customerOrder}
          onChange={(e) => setCustomerOrder(e.target.value)}
          placeholder="Masukan Nama"
          className={`col-span-2 ${inputClass(customerOrder)} ml-2`}
        />

        <span>Part No. / Quantity</span>
        <input
          type="text"
          value={customerOrder}
          onChange={(e) => setCustomerOrder(e.target.value)}
          placeholder="Jumlah Unit"
          className={`col-span-2 ${inputClass(customerOrder)} ml-2`}
        />

        <span>Customer/ Order Given by</span>
        <input
          type="text"
          value={customerOrder}
          onChange={(e) => setCustomerOrder(e.target.value)}
          placeholder="Masukan Vendor"
          className={`col-span-2 ${inputClass(customerOrder)} ml-2`}
        />
      </div>

      {/* Test Purpose and Scope */}
      <h3 className="font-bold text-lg">Test Purpose and Scope</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 mt-2">
        <span>Job Order No.</span>
        <input
          type="text"
          value={jobOrderNo}
          onChange={(e) => setJobOrderNo(e.target.value)}
          placeholder="Masukan No Pesanan"
          className={`col-span-2 ${inputClass(jobOrderNo)} ml-2`}
        />

        <span>Test Subject</span>
        <span className="col-span-2">: SAFETY TEST</span>

        <span>Reference</span>
        <span className="col-span-2">: IEC 60601-2-19: 2009 ed. 2, IEC 60601-1:2005</span>

        <span>Execution Date</span>
        <input
          type="text"
          value={executionDate}
          onChange={(e) => setExecutionDate(e.target.value)}
          placeholder="Masukan Tanggal"
          className={`col-span-2 ${inputClass(executionDate)} ml-2`}
        />
      </div>

      <h3 className="font-bold text-lg print-dokumen">Test Lab. Findings</h3>
      <p>There were no abnormalities after test</p>
      {executors.map((executor, index) => (
        <div key={index} className="border p-3 mb-2 rounded-lg">
          <p className="font-semibold ">Test Executor</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 mt-2">
            <span>Name:</span>
            <input
              type="text"
              value={executor.name}
              onChange={(e) => handleExecutorChange(index, "name", e.target.value)}
              placeholder="Masukan Nama"
              className={`col-span-2 ${inputClass(executor.name)} ml-2`}
            />

            <span>Date:</span>
            <input
              type="text"
              value={executor.date}
              onChange={(e) => handleExecutorChange(index, "date", e.target.value)}
              placeholder="Masukan Tanggal"
              className={`col-span-2 ${inputClass(executor.date)} ml-2`}
            />

            <span>Signature:</span>
            <span className="col-span-2 text-gray-500 italic"></span>
          </div>
        </div>
      ))}


      <h3 className="font-bold text-lg print-dokumen">Conclusion</h3>
      <p>
        The test is in conformity with test criteria in IEC 60601-2-19: 2009 ed. 2 and IEC 60601-1:2005
      </p>
      <div className="border p-3 mb-2 rounded-lg">
        <p className="font-semibold">Test Conductor</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 mt-2">
          <span>Name:</span>
          <input
            type="text"
            value={testConductor.name}
            onChange={(e) => handleTestConductorChange("name", e.target.value)}
            placeholder="Masukan Nama"
            className={`col-span-2 ${inputClass(testConductor.name)} ml-2`}
          />

          <span>Date:</span>
          <input
            type="text"
            value={testConductor.date}
            onChange={(e) => handleTestConductorChange("date", e.target.value)}
            placeholder="Masukan Tanggal"
            className={`col-span-2 ${inputClass(testConductor.date)} ml-2`}
          />

          <span>Signature:</span>
          <span className="col-span-2 text-gray-500 italic"></span>
        </div>
      </div>

      {/* Technical Manager */}
      <h3 className="font-bold text-lg">Technical Manager of Electromedical Laboratory P2SMTP-LIPI</h3>
      <div className="border p-3 mb-2 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 mt-2">
          <span>Name:</span>
          <input
            type="text"
            value={manager.name}
            onChange={(e) => handleManagerChange("name", e.target.value)}
            placeholder="Masukan Nama"
            className={`col-span-2 ${inputClass(manager.name)} ml-2`}
          />

          <span>Date:</span>
          <input
            type="text"
            value={manager.date}
            onChange={(e) => handleManagerChange("date", e.target.value)}
            placeholder="Masukan Tanggal"
            className={`col-span-2 ${inputClass(manager.date)} ml-2`}
          />

          <span>Signature:</span>
          <span className="col-span-2 text-gray-500 italic"></span>
        </div>
      </div>
    </div>
  );
};

export default TestReportSection;
