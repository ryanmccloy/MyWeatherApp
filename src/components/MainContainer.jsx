function MainContainer({ children }) {
  return (
    <main className="bg-white/10 z-10 p-5 border shadow-md flex-1 rounded-lg flex flex-col justify-between">
      {children}
    </main>
  );
}

export default MainContainer;
