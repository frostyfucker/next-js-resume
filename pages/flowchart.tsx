import type { NextPage } from 'next';
import Head from 'next/head';

const FlowchartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Flowchart — Hiring vs Googling</title>
      </Head>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden p-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Flowchart — Hiring vs Googling</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Below is the exported SVG version of the Mermaid flowchart. You can also view the original Mermaid markup in the README.
          </p>
          <div className="w-full flex justify-center">
            <img src="/flowchart.svg" alt="Hiring vs Googling Flowchart" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </main>
    </>
  );
};

export default FlowchartPage;