import Prac1 from "./components/Prac1";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="fixed z-[-2] top-0 w-screen h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="container mx-auto">
          <Prac1 />
        </div>
      </div>
    </>
  );
};

export default App;
