function Wrapper({ children }) {
  return (
    <div className="p-5 bg-blue-300 flex flex-col gap-5 h-[100dvh] min-h-fit text-white">
      {children}
    </div>
  );
}

export default Wrapper;
