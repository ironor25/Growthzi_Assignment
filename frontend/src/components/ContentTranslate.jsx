import React, { useState } from "react";
import axios from "axios";

const ContentTranslator = () => {
  const [text, setText] = useState("");
  const [destLang, setDestLang] = useState("hi");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    if (!text.trim()) return;
    console.log(import.meta.env.VITE_BACKEND_URL)
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/translate`, {
        content: text,
        dest_lang: destLang,
      });

      setTranslatedText(res.data.translated_content || "Translation failed");
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Error translating text.");
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-md mx-auto p-2 border rounded-md shadow-sm space-y-4 mt-6">
      <h2 className="text-lg font-semibold text-center">Content Translator</h2>

      <textarea
        rows="4"
        placeholder="Enter text to translate"
        className="w-full border rounded p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="w-full border p-2 rounded"
        value={destLang}
        onChange={(e) => setDestLang(e.target.value)}
      >
        <option value="hi">Hindi</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh-cn">Chinese</option>
        <option value="ja">Japanese</option>
        <option value="ar">Arabic</option>
      </select>

      <button
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        onClick={async () => {
          setLoading(true);
          await handleTranslate();
          setLoading(false);
        }}
        disabled={loading}
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      {loading && (
        <div className="flex justify-center items-center mt-4">
                <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-600 mr-2"></span>
                <span>Translating Content...</span>
            </div>
      )}

      {translatedText && !loading && (
        <div className="mt-4 p-3 bg-gray-100 border rounded whitespace-pre-wrap text-sm h-80 overflow-y-scroll">
          {translatedText}
        </div>
      )}
    </div>
  );
};

export default ContentTranslator;
