import React, { useEffect, useState } from 'react';
import supabase from '../components/SupabaseClient';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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

const CombinedDashboard: React.FC = () => {
  const [dataEsp32_1, setDataEsp32_1] = useState<SensorDataEsp32_1[]>([]);
  const [dataEsp32_2, setDataEsp32_2] = useState<SensorDataEsp32_2[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      // Fetch data for ESP32_1
      const { data: esp32_1_data, error: esp32_1_error } = await supabase
        .from('esp32_1')
        .select('*')
        .order('created_at', { ascending: true });

      if (esp32_1_error) throw esp32_1_error;

      setDataEsp32_1(esp32_1_data as SensorDataEsp32_1[]);

      // Fetch data for ESP32_2
      const { data: esp32_2_data, error: esp32_2_error } = await supabase
        .from('esp32_2')
        .select('*')
        .order('created_at', { ascending: true });

      if (esp32_2_error) throw esp32_2_error;

      setDataEsp32_2(esp32_2_data as SensorDataEsp32_2[]);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error fetching data:', err.message);
        setError(err.message);
      } else {
        console.error('Unexpected error:', err);
        setError('Unexpected error occurred.');
      }
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Set interval to fetch data every 1 second (1000 ms)
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const latestDataEsp32_1 = dataEsp32_1.length > 0 ? dataEsp32_1[dataEsp32_1.length - 1] : null;
  const latestDataEsp32_2 = dataEsp32_2.length > 0 ? dataEsp32_2[dataEsp32_2.length - 1] : null;

  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="flex flex-col min-h-screen">
  <div className="container mx-auto px-4 py-8">
    {latestDataEsp32_1 && latestDataEsp32_2 && (
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">DS18B20 Temp1</h3>
            <p className="text-3xl font-bold text-blue-500">{latestDataEsp32_1.ds18b20_temp1}°C</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">DS18B20 Temp2</h3>
            <p className="text-3xl font-bold text-blue-500">{latestDataEsp32_1.ds18b20_temp2}°C</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">DS18B20 Temp3</h3>
            <p className="text-3xl font-bold text-blue-500">{latestDataEsp32_1.ds18b20_temp3}°C</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">DS18B20 Temp4</h3>
            <p className="text-3xl font-bold text-blue-500">{latestDataEsp32_1.ds18b20_temp4}°C</p>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">DHT22 Temp</h3>
            <p className="text-3xl font-bold text-red-500">{latestDataEsp32_1.dht22_temp}°C</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">DHT22 Humidity</h3>
            <p className="text-3xl font-bold text-green-500">{latestDataEsp32_1.dht22_humi}%</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">Fan Status</h3>
            <p className="text-3xl font-bold text-orange-500">{latestDataEsp32_1.fan_status}</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">Flow Rate</h3>
            <p className="text-3xl font-bold text-purple-500">{latestDataEsp32_1.flow_rate}</p>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">Sound Detected</h3>
            <p className="text-3xl font-bold text-yellow-500">{latestDataEsp32_1.sound_detected}</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">Sound Level</h3>
            <p className="text-3xl font-bold text-blue-500">{latestDataEsp32_2.sound_level} dB</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">Light Lux</h3>
            <p className="text-3xl font-bold text-green-500">{latestDataEsp32_2.light_lux}</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">MQ135 PPM</h3>
            <p className="text-3xl font-bold text-purple-500">{latestDataEsp32_2.mq135_ppm}</p>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">Temperature</h3>
            <p className="text-3xl font-bold text-red-500">{latestDataEsp32_2.temperature}°C</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">Relay Status</h3>
            <p className="text-3xl font-bold text-orange-500">{latestDataEsp32_2.relay_status}</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">BPM</h3>
            <p className="text-3xl font-bold text-blue-500">{latestDataEsp32_2.bpm}</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-lg font-medium">SpO2</h3>
            <p className="text-3xl font-bold text-green-500">{latestDataEsp32_2.spo2}%</p>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

  

  );
};

export default CombinedDashboard;
