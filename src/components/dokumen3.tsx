import React, { useState } from 'react';

const ReportDetails: React.FC = () => {
  const [docNumber, setDocNumber] = useState("");
  const [dateIssued, setDateIssued] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [testReportNo, setTestReportNo] = useState("");
  const [originator, setOriginator] = useState("");
  const [masterTrf, setMasterTrf] = useState("");

  const [preparedBy, setPreparedBy] = useState("");
  const [checkedBy, setCheckedBy] = useState("");
  const [approvedBy1, setApprovedBy1] = useState("");
  const [approvedBy2, setApprovedBy2] = useState("");

  return (
    <div className="p-4 border border-gray-300 rounded-lg max-w-screen-lg mx-auto">
      {/* Document Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="w-1/2 md:w-auto">Doc. Number</span>
          <input
            type="text"
            value={docNumber}
            onChange={(e) => setDocNumber(e.target.value)}
            placeholder="Masukan No BTP"
            className="text-red-500 font-semibold bg-transparent  w-1/2 md:w-auto"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="w-1/2 md:w-auto">Date of Issued</span>
          <input
            type="text"
            value={dateIssued}
            onChange={(e) => setDateIssued(e.target.value)}
            placeholder="Masukan Tanggal Pengerjaan"
            className="text-red-500 font-semibold bg-transparent  w-1/2 md:w-auto"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="w-1/2 md:w-auto">Total number of pages</span>
          <input
            type="text"
            value={totalPages}
            onChange={(e) => setTotalPages(e.target.value)}
            placeholder="Masukan Total Halaman"
            className="text-red-500 font-semibold bg-transparent  w-1/2 md:w-auto"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="w-1/2 md:w-auto">Test Report Form No</span>
          <input
            type="text"
            value={testReportNo}
            onChange={(e) => setTestReportNo(e.target.value)}
            placeholder="Masukan No Test Report"
            className="text-red-500 font-semibold bg-transparent  w-1/2 md:w-auto"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="w-1/2 md:w-auto">Test Report Form(s) Originator</span>
          <input
            type="text"
            value={originator}
            onChange={(e) => setOriginator(e.target.value)}
            placeholder="Masukan Originator"
            className="text-red-500 font-semibold bg-transparent  w-1/2 md:w-auto"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="w-1/2 md:w-auto">Master TRF</span>
          <input
            type="text"
            value={masterTrf}
            onChange={(e) => setMasterTrf(e.target.value)}
            placeholder="Masukan Master TRF"
            className="text-red-500 font-semibold bg-transparent  w-1/2 md:w-auto"
          />
        </div>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center border-t border-b border-gray-300 py-4">
        <div>
          <p className="font-semibold">Prepared by</p>
          <input
            type="text"
            value={preparedBy}
            onChange={(e) => setPreparedBy(e.target.value)}
            placeholder="Masukan Nama"
            className="text-red-500 font-semibold bg-transparent text-center "
          />
          <p className="text-sm font-bold text-gray-700">
            Date: {new Date().toLocaleString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour12: false,
            })}
          </p>
          <p>Signature:</p>
        </div>
        <div>
          <p className="font-semibold">Checked by</p>
          <input
            type="text"
            value={checkedBy}
            onChange={(e) => setCheckedBy(e.target.value)}
            placeholder="Masukan Nama"
            className="text-red-500 font-semibold bg-transparent text-center "
          />
          <p className="text-sm font-bold text-gray-700">
            Date: {new Date().toLocaleString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour12: false,
            })}
          </p>
          <p>Signature:</p>
        </div>
        <div>
          <p className="font-semibold">Approved by</p>
          <input
            type="text"
            value={approvedBy1}
            onChange={(e) => setApprovedBy1(e.target.value)}
            placeholder="Masukan Nama"
            className="text-red-500 font-semibold bg-transparent text-center "
          />
          <p className="text-sm font-bold text-gray-700">
            Date: {new Date().toLocaleString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour12: false,
            })}
          </p>
          <p>Signature:</p>
        </div>
        <div>
          <p className="font-semibold">Approved by</p>
          <input
            type="text"
            value={approvedBy2}
            onChange={(e) => setApprovedBy2(e.target.value)}
            placeholder="Masukan Nama"
            className="text-red-500 font-semibold bg-transparent text-center "
          />
          <p className="text-sm font-bold text-gray-700">
            Date: {new Date().toLocaleString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour12: false,
            })}
          </p>
          <p className='mb-9'>Signature:</p>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-6 text-sm italic">
        No part of this report may be reproduced or distributed in any form or by any means, 
        except by written permission from <span className="text-red-500">Quality Assurance Manager</span> PRTPS – BRIN.
      </p>


      <div className="text-center font-sans p-6 print-dokumen3" >
        <h1 className="text-xl font-bold mb-4 print-dokumen">CONTENT</h1>
        <div className="text-left text-base font-semibold leading-relaxed space-y-2">
          <p>I. GENERAL PART</p>
          <div className="pl-6">
            <p>I.1. Introduction</p>
            <p>I.2. P2SMTP - LIPI Staff Members Involved in Test</p>
          </div>

          <p>II. TECHNICAL PART</p>
          <div className="pl-6">
            <p>II.1. Safety Test</p>
            <div className="pl-6">
              <p>II.1.1. Test Equipment Used</p>
              <p>II.1.2. Test Program</p>
              <p>II.1.3. Test Result</p>
              <p>II.1.4. Table of Measurement Result</p>
            </div>
          </div>

          <p>III. APPENDIX</p>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
