"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase.js";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Home() {
  const [data, setData] = useState({
    ds18b20_temp: [],
    dht22_temp: [],
    dht22_humi: [],
    fan_status: [],
    timestamps: [],
  });

  const [darkMode, setDarkMode] = useState(false);

  // Fetch sensor data
  const fetchData = async () => {
    try {
      const { data: sensorData, error } = await supabase
        .from("esp32")
        .select("ds18b20_temp, dht22_temp, dht22_humi, fan_status, created_at")
        .order("created_at", { ascending: false });

      if (error) throw error;

      if (sensorData.length) {
        setData({
          ds18b20_temp: sensorData.map((item) => item.ds18b20_temp),
          dht22_temp: sensorData.map((item) => item.dht22_temp),
          dht22_humi: sensorData.map((item) => item.dht22_humi),
          fan_status: sensorData.map((item) => item.fan_status),
          timestamps: sensorData.map((item) => item.created_at),
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Dark/Light mode styles for chart
  const chartData = {
    labels: data.timestamps.map((ts) => new Date(ts).toLocaleString()),
    datasets: [
      {
        label: "DHT22 Temperature",
        data: data.dht22_temp,
        fill: false,
        borderColor: darkMode ? "#00f5d4" : "blue",
        tension: 0.2,
      },
      {
        label: "DS18B20 Temperature",
        data: data.ds18b20_temp,
        fill: false,
        borderColor: darkMode ? "#ff006e" : "red",
        tension: 0.2,
      },
      {
        label: "DHT22 Humidity",
        data: data.dht22_humi,
        fill: false,
        borderColor: darkMode ? "#f1fa8c" : "green",
        tension: 0.2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: darkMode ? "#f8f8f2" : "#000", // Chart text color
        },
      },
      tooltip: {
        backgroundColor: darkMode ? "#282a36" : "#fff", // Chart tooltip background
        titleColor: darkMode ? "#f8f8f2" : "#000",
        bodyColor: darkMode ? "#f8f8f2" : "#000",
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? "#f8f8f2" : "#000", // Chart axis tick color
        },
        grid: {
          color: darkMode ? "#44475a" : "#ccc", // Grid line color
        },
      },
      y: {
        ticks: {
          color: darkMode ? "#f8f8f2" : "#000",
        },
        grid: {
          color: darkMode ? "#44475a" : "#ccc",
        },
      },
    },
  };

  // Download CSV function
  const downloadCSV = () => {
    const csvRows = [];
    const headers = ["Timestamp", "DHT22 Temperature", "DHT22 Humidity", "DS18B20 Temperature", "Fan Status"];
    csvRows.push(headers.join(","));

    data.timestamps.forEach((timestamp, index) => {
      const row = [
        new Date(timestamp).toLocaleString(),
        data.dht22_temp[index],
        data.dht22_humi[index],
        data.ds18b20_temp[index],
        data.fan_status[index],
      ];
      csvRows.push(row.join(","));
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "sensor_data.csv");
    a.click();
  };

  // Toggle between Dark and Light Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Load chatbot scripts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    const configScript = document.createElement("script");
    configScript.src = "https://mediafiles.botpress.cloud/abf73d59-de68-4f12-993a-aafd25b94f9a/webchat/v2.1/config.js";
    configScript.async = true;
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen flex flex-col`}>
      <div className={`p-8 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} flex flex-col items-center w-full`}>
        <header className="w-full mb-8 text-center">
          <h1 className="text-3xl font-bold">Monitoring StandBy</h1>
          <button
            onClick={toggleDarkMode}
            className={`mt-4 px-4 py-2 rounded transition-colors duration-300 
              ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-blue-500 text-white hover:bg-blue-600"}`}
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* DHT22 Card */}
          <div className={`shadow-md rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="text-xl font-semibold">DHT22 Sensor</h2>
            <div className="mt-4">
              <p>
                Temperature: <span className="font-bold">{data.dht22_temp[0] ?? "Loading..."}°C</span>
              </p>
              <p>
                Humidity: <span className="font-bold">{data.dht22_humi[0] ?? "Loading..."}</span>
              </p>
            </div>
          </div>

          {/* Fan Status Card */}
          <div className={`shadow-md rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="text-xl font-semibold">Fan Status</h2>
            <div className="mt-4">
              <p>
                Status:
                <span
                  className={`font-bold ${data.fan_status[0] === "ON" ? "text-green-500" : "text-red-500"}`}
                >
                  {data.fan_status[0] ?? "Loading..."}
                </span>
              </p>
            </div>
          </div>

          {/* DS18B20 Card */}
          <div className={`shadow-md rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="text-xl font-semibold">DS18B20 Sensor</h2>
            <div className="mt-4">
              <p>
                Temperature: <span className="font-bold">{data.ds18b20_temp[0] ?? "Loading..."}°C</span>
              </p>
            </div>
          </div>
        </main>

        {/* Chart Section */}
        <div className="w-full max-w-6xl mt-8">
          <h2 className="text-2xl font-semibold mb-4">Temperature and Humidity Chart</h2>
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Data Table Section */}
        <div className="w-full max-w-6xl mt-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">Sensor Data Table</h2>
          <table className={`min-w-full border ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"}`}>
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Timestamp</th>
                <th className="py-2 px-4 border-b">DHT22 Temperature</th>
                <th className="py-2 px-4 border-b">DHT22 Humidity</th>
                <th className="py-2 px-4 border-b">DS18B20 Temperature</th>
                <th className="py-2 px-4 border-b">Fan Status</th>
              </tr>
            </thead>
            <tbody>
              {data.timestamps.map((timestamp, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{new Date(timestamp).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{data.dht22_temp[index]}</td>
                  <td className="py-2 px-4 border-b">{data.dht22_humi[index]}</td>
                  <td className="py-2 px-4 border-b">{data.ds18b20_temp[index]}</td>
                  <td className="py-2 px-4 border-b">{data.fan_status[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <button
            onClick={downloadCSV}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded shadow-md transform transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
            <i className="fas fa-download mr-2 animate-bounce"></i>
            <span className="font-semibold">Download CSV</span>
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-auto w-full text-center py-9">
          <p className="text-gray-600 dark:text-gray-400">© 2024 Sadam Al Rasyid</p>
        </footer>
      </div>

      {/* Chatbot HTML */}
      <div>
        <link href="https://webchat-styler-css.botpress.app/prod/5bbb7ec8-23c3-4066-92b7-d13df5be0e4e/v43046/style.css" rel="stylesheet" />
        <style src="https://webchat-styler-css.botpress.app/prod/5bbb7ec8-23c3-4066-92b7-d13df5be0e4e/v66673/style.css" />
      </div>
    </div>
  );
}
