import React, { useEffect, useState } from 'react';
import supabase from '../components/SupabaseClient';

interface SensorDataEsp32_1 {
  created_at: string;
  ds18b20_temp1: number;
  ds18b20_temp2: number;
  ds18b20_temp3: number;
  ds18b20_temp4: number;
  dht22_temp: number;
  dht22_humi: number;
  fan_status: string;
  flow_rate: number;
  sound_detected: string;
}

interface SensorDataEsp32_2 {
  created_at: string;
  sound_level: number;
  light_lux: number;
  mq135_ppm: number;
  temperature: number;
  relay_status: string;
  bpm: number;
  spo2: number;
}

const Pagination: React.FC = () => {
  const [data, setData] = useState<(SensorDataEsp32_1 | SensorDataEsp32_2)[]>([]);
  const [activeSource, setActiveSource] = useState<'esp32_1' | 'esp32_2'>('esp32_1');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: esp32_1Data, error: esp32_1Error } = await supabase
          .from('esp32_1')
          .select('*')
          .order('created_at', { ascending: true });

        if (esp32_1Error) throw esp32_1Error;

        const { data: esp32_2Data, error: esp32_2Error } = await supabase
          .from('esp32_2')
          .select('*')
          .order('created_at', { ascending: true });

        if (esp32_2Error) throw esp32_2Error;

        setData(activeSource === 'esp32_1' ? esp32_1Data : esp32_2Data);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching data:', error.message);
          setError('Failed to fetch data: ' + error.message);
        } else {
          console.error('Unexpected error:', error);
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeSource]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const convertToCSV = (jsonData: (SensorDataEsp32_1 | SensorDataEsp32_2)[]) => {
    const headers =
      activeSource === 'esp32_1'
        ? [
            'Created at',
            'DS18B20 Temp1 (°C)',
            'DS18B20 Temp2 (°C)',
            'DS18B20 Temp3 (°C)',
            'DS18B20 Temp4 (°C)',
            'DHT22 Temp (°C)',
            'DHT22 Humidity (%)',
            'Fan Status',
            'Sound Detected',
            'Flow Rate',
          ]
        : [
            'Created at',
            'Sound Level',
            'Light Lux',
            'MQ135 PPM',
            'Temperature (°C)',
            'Relay Status',
            'BPM',
            'SPO2',
          ];

    const csvRows = [headers.join(',')];

    jsonData.forEach((item) => {
      const row =
        'sound_detected' in item
          ? [
              item.created_at,
              item.ds18b20_temp1,
              item.ds18b20_temp2,
              item.ds18b20_temp3,
              item.ds18b20_temp4,
              item.dht22_temp,
              item.dht22_humi,
              item.fan_status,
              item.sound_detected,
              item.flow_rate,
            ]
          : [
              item.created_at,
              item.sound_level,
              item.light_lux,
              item.mq135_ppm,
              item.temperature,
              item.relay_status,
              item.bpm,
              item.spo2,
            ];
      csvRows.push(row.join(','));
    });

    return csvRows.join('\n');
  };

  const downloadCSV = () => {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'sensor_data.csv');
    a.click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="flex space-x-4 mb-4">
            <button
              className={`bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded ${activeSource === 'esp32_1' ? 'font-bold' : ''}`}
              onClick={() => setActiveSource('esp32_1')}
            >
              Source A
            </button>
            <button
              className={`bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded ${activeSource === 'esp32_2' ? 'font-bold' : ''}`}
              onClick={() => setActiveSource('esp32_2')}
            >
              Source B
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Data Table with Pagination</h3>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={downloadCSV}>
              Download CSV
            </button>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    {activeSource === 'esp32_1' ? (
                      <>
                        <th className="px-6 py-3">Created at</th>
                        <th className="px-6 py-3">DS18B20 Temp1</th>
                        <th className="px-6 py-3">DS18B20 Temp2</th>
                        <th className="px-6 py-3">DS18B20 Temp3</th>
                        <th className="px-6 py-3">DS18B20 Temp4</th>
                        <th className="px-6 py-3">DHT22 Temp</th>
                        <th className="px-6 py-3">DHT22 Humidity</th>
                        <th className="px-6 py-3">Fan Status</th>
                        <th className="px-6 py-3">Sound Detected</th>
                        <th className="px-6 py-3">Flow Rate</th>
                      </>
                    ) : (
                      <>
                        <th className="px-6 py-3">Created at</th>
                        <th className="px-6 py-3">Sound Level</th>
                        <th className="px-6 py-3">Light Lux</th>
                        <th className="px-6 py-3">MQ135 PPM</th>
                        <th className="px-6 py-3">Temperature</th>
                        <th className="px-6 py-3">Relay Status</th>
                        <th className="px-6 py-3">BPM</th>
                        <th className="px-6 py-3">SPO2</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedData.map((item, index) => (
                    <tr key={index}>
                      {('sound_detected' in item) ? (
                        <>
                          <td className="px-6 py-4">{item.created_at}</td>
                          <td className="px-6 py-4">{item.ds18b20_temp1}°C</td>
                          <td className="px-6 py-4">{item.ds18b20_temp2}°C</td>
                          <td className="px-6 py-4">{item.ds18b20_temp3}°C</td>
                          <td className="px-6 py-4">{item.ds18b20_temp4}°C</td>
                          <td className="px-6 py-4">{item.dht22_temp}°C</td>
                          <td className="px-6 py-4">{item.dht22_humi}%</td>
                          <td className="px-6 py-4">{item.fan_status}</td>
                          <td className="px-6 py-4">{item.sound_detected}</td>
                          <td className="px-6 py-4">{item.flow_rate}</td>
                        </>
                      ) : (
                        <>
                          <td className="px-6 py-4">{item.created_at}</td>
                          <td className="px-6 py-4">{item.sound_level}</td>
                          <td className="px-6 py-4">{item.light_lux}</td>
                          <td className="px-6 py-4">{item.mq135_ppm}</td>
                          <td className="px-6 py-4">{item.temperature}</td>
                          <td className="px-6 py-4">{item.relay_status}</td>
                          <td className="px-6 py-4">{item.bpm}</td>
                          <td className="px-6 py-4">{item.spo2}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-red-500 hover:bg-red-800 text-white rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-red-500 hover:bg-red-800 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
