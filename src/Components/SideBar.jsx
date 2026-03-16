import { useUi } from "../UiContext/uiContext";
function SideBar() {
  const { state: uiState, dispatch: uiDispatch } = useUi();
  return (
    <div
      className={`fixed flex justify-center left-0 top-[56px] h-full bg-amber-50 shadow-md w-1/5 z-30 shadow-amber-950 p-2 transform transition-transform duration-1000 ease-in-out ${uiState.isSideBar ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex flex-row p-2 justify-center bg-fuchsia-300 w-full relative ">
        <div className=" p-2 flex flex-col h-full w-full bg-violet-400">
          <h2>action container</h2>
          <hr />
          <div className="flex bg-amber-50/20 p-2">ao</div>
          <div className="flex bg-amber-50/20 p-2">ao</div>
          <div className="flex bg-amber-50/20 p-2">ao</div>
          <div className="flex bg-amber-50/20 p-2">ao</div>
        </div>
        <button
          className="btn-exit absolute top-1 right-1"
          onClick={() => uiDispatch({ type: "closeSideBar" })}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default SideBar;
