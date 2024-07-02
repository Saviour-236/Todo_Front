import { RootState } from "../stateManagement/Store"
import { useSelector } from "react-redux"
function tooltipHandler() {
  const tooltipText = useSelector((state: RootState) => (state.tooltipText.text));
  //const tooltipTextPosition = useSelector((state: RootState) => (state.tooltipText.position));
  return (
    <>
      {tooltipText && (
        <div className={`${""} " absolute z-1000 top-[0rem] inline-block px-2 py-2 text-xs text-white bg-black rounded-lg shadow-md bg-opacity-[0.7] "`}>
          {tooltipText}
        </div>
      )}
    </>
  )
}

export default tooltipHandler