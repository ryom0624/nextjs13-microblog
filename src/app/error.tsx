"use client";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-red-100 broder-l-4 text-red-700 mt-4 rounded shadow-md max-w-md mx-auto p-2">
      <h3 className="font-bold mb-2">エラーが発生しました。</h3>
      <button className="rounded bg-red-600 text-white py-2 px-4 transition duration-200 hover:bg-red-200">もう一度試す</button>
    </div>
  );
};

export default Error;
