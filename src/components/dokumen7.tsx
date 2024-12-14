import React from 'react';

const TestEquipmentSection: React.FC = () => {
  return (
    <div className="text-left p-6 max-w-screen-lg mx-auto font-sans space-y-6">
      {/* Section II.1.1 - Test Equipment Used */}
      <h3 className="font-bold text-lg">II.1.1. Test Equipment Used</h3>
      <div className="overflow-x-auto">
  <table className="min-w-full border-collapse border border-gray-400">
    <thead>
      <tr>
        <th className="border border-gray-400 p-2 text-sm md:text-base whitespace-nowrap">
          Test Item(1)
        </th>
        <th className="border border-gray-400 p-2 text-sm md:text-base whitespace-nowrap">
          Test Equipment(2)
        </th>
        <th className="border border-gray-400 p-2 text-sm md:text-base whitespace-nowrap">
          Specification(3)
        </th>
        <th className="border border-gray-400 p-2 text-sm md:text-base whitespace-nowrap">
          Qty
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-400 p-2 text-sm md:text-base">
          Conditions for application to ME Equipment or ME Systems
        </td>
        <td className="border border-gray-400 p-2 text-sm md:text-base">Hybrid Recorder</td>
        <td className="border border-gray-400 p-2 text-sm md:text-base">-50 °C – 200 °C</td>
        <td className="border border-gray-400 p-2 text-sm md:text-base">1</td>
      </tr>
      <tr>
        <td className="border border-gray-400 p-2"></td>
        <td className="border border-gray-400 p-2 text-sm md:text-base">Thermocouple</td>
        <td className="border border-gray-400 p-2 text-sm md:text-base">0 to 200 °C</td>
        <td className="border border-gray-400 p-2 text-sm md:text-base">1</td>
      </tr>
      <tr>
        <td className="border border-gray-400 p-2"></td>
        <td className="border border-gray-400 p-2 text-sm md:text-base">AC Power Source</td>
        <td className="border border-gray-400 p-2 text-sm md:text-base">Max. 15 kVA</td>
        <td className="border border-gray-400 p-2 text-sm md:text-base">1</td>
      </tr>
    </tbody>
  </table>
</div>


    
      <h3 className="font-bold text-lg print-dokumen">II.1.2. Test Program</h3>
      <p>
        The Test Program is in accordance with the following document:
        <br />
        <em>
          IEC 60601-2-19: 2009 ed. 2 Particular requirement for safety of baby incubators in conjunction with IEC 60601-1:2005 Medical Electrical Equipment General Requirement for Safety
        </em>
      </p>
      <p>
        The test was conducted at room temperature: (21.1–23.7)°C, Humidity: (64.7–84.9) %
      </p>

      {/* Section II.1.3 - Test Result */}
      <h3 className="font-bold text-lg">II.1.3. Test Result</h3>
      <p>
        The test result of each test case is described in the table below. The possible test case verdicts:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>test case does not apply to the test object : <strong>N/A (Not Applicable)</strong></li>
        <li>test object does meet the requirement : <strong>P (Pass)</strong></li>
        <li>test object does not meet the requirement : <strong>F (Fail)</strong></li>
        <li>test case does not conduct to the test object : <strong>N/C (Not Conducted)</strong></li>
      </ul>
    </div>
  );
};

export default TestEquipmentSection;
