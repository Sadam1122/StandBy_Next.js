import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import supabase from '../../components/SupabaseClient';
import Header from '../../components/header';
import Dokumen1 from '../../components/dokumen1';
import Dokumen2 from '../../components/dokumen2';
import Dokumen3 from '../../components/dokumen3';
import Dokumen4 from '../../components/dokumen4';
import Dokumen5 from '../../components/dokumen5';
import Dokumen6 from '../../components/dokumen6';
import Dokumen7 from '../../components/dokumen7';
import Dokumen8 from '../../components/dokumen8';

const HomePage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [file, setFile] = useState<File | null>(null); // Menyimpan file yang dipilih

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const printPage = () => {
    console.log("Print button clicked");
    window.print();
  };

  // Fungsi untuk menangani pemilihan file
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  // Fungsi untuk menyimpan file ke Supabase
  const savePageToDatabase = async () => {
    if (!isClient) return;
    
    if (!file) {
      setError('No file selected');
      return;
    }

    try {
      const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
      const fileName = `document-${timestamp}-${file.name}`;
      
      // Upload file ke Supabase
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('documents')
        .upload(fileName, file);

      if (uploadError) throw new Error(`Failed to upload file: ${uploadError.message}`);

      const { data: signedUrlData, error: signedUrlError } = await supabase.storage
        .from('documents')
        .createSignedUrl(uploadData.path, 60 * 60 * 24 * 365 * 10);

      if (signedUrlError) throw new Error(`Failed to create signed URL: ${signedUrlError.message}`);

      const documentUrl = signedUrlData.signedUrl;

      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) throw new Error('User not found or not authenticated');

      const { error: profileError } = await supabase
        .from('profiles')
        .update({ document2_url: documentUrl })
        .eq('id', user.id);

      if (profileError) throw new Error(`Failed to update profile: ${profileError.message}`);

      setMessage('File saved and profile updated successfully!');
      setError('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {message && <div className="text-green-500 mb-4">{message}</div>}

        <button
          onClick={printPage}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-800 text-white font-semibold rounded no-print"
        >
          Cetak Halaman
        </button>

        {/* Tombol untuk membuka input file */}
        <button
          onClick={() => document.getElementById('fileInput')?.click()}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-800 text-white font-semibold rounded no-print mx-3"
        >
          Simpan Ke Database
        </button>

        {/* Input file yang tersembunyi */}
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Tombol untuk menyimpan file yang sudah dipilih */}
        {file && (
          <button
            onClick={savePageToDatabase}
            className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-800 text-white font-semibold rounded no-print mx-3"
          >
            Simpan Dokumen
          </button>
        )}

        <div className="mt-8 mb-10 relative" id="printableArea">
          <Header />
          <Dokumen2 />
          <Dokumen3 />
          <Dokumen4 />
          <Dokumen5 />
          <Dokumen6 />
          <Dokumen7 />
          <Dokumen1 />
          <Dokumen8 />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
