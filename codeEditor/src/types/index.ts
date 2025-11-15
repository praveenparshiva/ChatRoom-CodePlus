import type * as monacoEditor from "monaco-editor";
import type { Monaco } from "@monaco-editor/react";

// -------------------------------------------
// Generic Types
// -------------------------------------------

export interface Theme {
  id: string;
  label: string;
  color: string;
}

export interface Language {
  id: string;
  label: string;
  logoPath: string;
  monacoLanguage: string;
  defaultCode: string;
  pistonRuntime: LanguageRuntime;
}

export interface LanguageRuntime {
  language: string;
  version: string;
}

export interface ExecuteCodeResponse {
  compile?: {
    output: string;
  };
  run?: {
    output: string;
    stderr: string;
  };
}

export interface ExecutionResult {
  code: string;
  output: string;
  error: string | null;
}

// -------------------------------------------
// Editor Store State
// -------------------------------------------

export interface CodeEditorState {
  language: string;
  output: string;
  isRunning: boolean;
  error: string | null;
  theme: string;
  fontSize: number;

  // -------------------------------------------
  // THE FIX: Use correct types
  // -------------------------------------------
  monaco: Monaco | null; // monaco namespace from wrapper
  editor: monacoEditor.editor.IStandaloneCodeEditor | null; // actual editor instance

  executionResult: ExecutionResult | null;

  // -------------------------------------------
  // Functions
  // -------------------------------------------
  setEditor: (editor: monacoEditor.editor.IStandaloneCodeEditor) => void;
  setMonaco: (monacoInstance: Monaco) => void;

  getCode: () => string;
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;
  runCode: () => Promise<void>;
}
