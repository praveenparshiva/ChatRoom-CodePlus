import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, Code2, FileCode, Palette, TerminalSquare } from "lucide-react";

export default function CodeEditor() {
  const [html, setHtml] = useState(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Project</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>⚠️ Your code isn’t saved permanently — navigating away will clear your editor.</h1>
    <script src="script.js"></script>
  </body>
</html>`);

  const [css, setCss] = useState(`h1 {
  color: #000000;
  text-align: center;
}`);

  const [js, setJs] = useState(`console.log('JavaScript Loaded ✅');
document.body.insertAdjacentHTML('beforeend', '<p style="text-align:center;">JS Executed</p>');`);

  const [srcDoc, setSrcDoc] = useState("");

  const runCode = () => {
    // Emulate linking CSS & JS into the HTML structure
    const htmlWithLinks = html
      .replace("</head>", `<style>${css}</style></head>`)
      .replace("</body>", `<script>${js}</script></body>`);

    setSrcDoc(htmlWithLinks);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-gray-200">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-3 bg-[#161b22] border-b border-gray-700 shadow-lg">
        <div className="flex items-center gap-2 text-[#58a6ff]">
          <Code2 size={22} />
          <h1 className="font-semibold text-lg tracking-wide">
            Online Code Runner
          </h1>
        </div>
        <button
          onClick={runCode}
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-md text-white font-medium hover:scale-105 transition-transform"
        >
          <Play size={18} /> Run
        </button>
      </header>

      {/* Editor Grid */}
      <section className="grid grid-cols-3 gap-2 p-2 h-1/2 min-h-[320px] bg-[#0d1117] overflow-hidden">
        {/* HTML Editor */}
        <div className="flex flex-col rounded-lg overflow-hidden border border-gray-800">
          <div className="flex items-center gap-2 bg-[#1c2128] px-3 py-1.5 text-sm font-medium text-[#e34c26] border-b border-gray-700">
            <FileCode size={16} /> HTML
          </div>
          <Editor
            height="100%"
            language="html"
            theme="vs-dark"
            value={html}
            onChange={(v) => setHtml(v || "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              fontFamily: "Fira Code, monospace",
            }}
          />
        </div>

        {/* CSS Editor */}
        <div className="flex flex-col rounded-lg overflow-hidden border border-gray-800">
          <div className="flex items-center gap-2 bg-[#1c2128] px-3 py-1.5 text-sm font-medium text-[#2965f1] border-b border-gray-700">
            <Palette size={16} /> CSS
          </div>
          <Editor
            height="100%"
            language="css"
            theme="vs-dark"
            value={css}
            onChange={(v) => setCss(v || "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              fontFamily: "Fira Code, monospace",
            }}
          />
        </div>

        {/* JS Editor */}
        <div className="flex flex-col rounded-lg overflow-hidden border border-gray-800">
          <div className="flex items-center gap-2 bg-[#1c2128] px-3 py-1.5 text-sm font-medium text-[#f7df1e] border-b border-gray-700">
            <TerminalSquare size={16} /> JavaScript
          </div>
          <Editor
            height="100%"
            language="javascript"
            theme="vs-dark"
            value={js}
            onChange={(v) => setJs(v || "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              fontFamily: "Fira Code, monospace",
            }}
          />
        </div>
      </section>

      {/* Output Terminal */}
      <section className="flex-1 bg-[#0d1117] p-2 border-t border-gray-700">
        <div className="bg-[#161b22] border border-gray-800 rounded-lg h-full overflow-hidden shadow-inner">
          <div className="flex items-center gap-2 bg-[#1c2128] px-3 py-1.5 text-sm text-gray-300 border-b border-gray-700">
            <TerminalSquare size={15} /> Output Terminal
          </div>
          <iframe
            srcDoc={srcDoc}
            title="Output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="bg-white"
          />
        </div>
      </section>
    </div>
  );
}
