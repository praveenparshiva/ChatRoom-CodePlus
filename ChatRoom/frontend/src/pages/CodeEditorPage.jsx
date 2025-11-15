const CodeEditorPage = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] overflow-hidden">
      <iframe
        src="http://localhost:3000"
        title="Code Editor"
        className="w-full h-full rounded-md border border-base-300"
      />
    </div>
  );
};

export default CodeEditorPage;
