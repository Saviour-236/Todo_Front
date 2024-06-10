import { RootState } from "../stateManagement/Store"
import { useSelector } from "react-redux"
import { useEffect,useState } from "react";
function tooltipHandler() {
  const tooltipText = useSelector((state: RootState) => (state.tooltipText.text));
  const tooltipTextPosition = useSelector((state: RootState) => (state.tooltipText.position));
  return (
    <>
      {tooltipText && (
        <div className={`${""} "absolute z-1000 top-[0rem] inline-block px-2 py-2 text-xs font-medium text-white transition-opacity duration-300 bg-gray-700 rounded-lg shadow-sm bg-opacity-[0.7]"`}>
          {tooltipText}
        </div>
      )}
    </>
  )
}

export default tooltipHandler