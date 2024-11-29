import React, { useEffect, useState } from 'react';
import supabase from '../components/SupabaseClient';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SensorDataEsp32_1 {
  created_at: string;
  ds18b20_temp1: number;
  ds18b20_temp2: number;
  ds18b20_temp3: number;
  ds18b20_temp4: number;
  dht22_temp: number;
}

interface SensorDataEsp32_2 {
  created_at: string;
  temperature: number;
}

const CombinedDashboard: React.FC = () => {
  const [dataEsp32_1, setDataEsp32_1] = useState<SensorDataEsp32_1[]>([]);
  const [dataEsp32_2, setDataEsp32_2] = useState<SensorDataEsp32_2[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: esp32_1_data, error: esp32_1_error } = await supabase
          .from('esp32_1')
          .select('*')
          .order('created_at', { ascending: true });

        if (esp32_1_error) throw esp32_1_error;

        setDataEsp32_1(esp32_1_data as SensorDataEsp32_1[]);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  // Chart for DS18B20 Temperatures
  const chartDataDS18B20 = {
    labels: dataEsp32_1.map(item => item.created_at),
    datasets: [
      {
        label: 'DS18B20 Temp1 (°C)',
        data: dataEsp32_1.map(item => item.ds18b20_temp1),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'DS18B20 Temp2 (°C)',
        data: dataEsp32_1.map(item => item.ds18b20_temp2),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'DS18B20 Temp3 (°C)',
        data: dataEsp32_1.map(item => item.ds18b20_temp3),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'DS18B20 Temp4 (°C)',
        data: dataEsp32_1.map(item => item.ds18b20_temp4),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };
  const chartDataTempDHT = {
    labels: dataEsp32_1.map(item => item.created_at),
    datasets: [
      {
        label: 'DHT22 Temp (°C)',
        data: dataEsp32_1.map(item => item.dht22_temp),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
      {
        label: 'Temperature (°C)',
        data: dataEsp32_2.map(item => item.temperature),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg mb-8">
            <h3 className="text-xl font-medium mb-4">DS18B20 Temperatures</h3>
            <Bar data={chartDataDS18B20} />
          </div>

  
          <div className="bg-gray-100 border border-gray-300 p-4 text-center rounded-lg">
            <h3 className="text-xl font-medium mb-4">DHT22 & Temperature</h3>
            <Bar data={chartDataTempDHT} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedDashboard;
