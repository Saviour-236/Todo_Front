// Home.tsx
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModeReducer } from "../stateManagement/theme";
import { AppDispatch, RootState } from "../stateManagement/Store";
import ToolTip from "../utils/tooltipComponet"
import { changeTooltipTextStateReducer } from "../stateManagement/tooltipText";
const Header: React.FC = () => {
    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null)
    const dispatch = useDispatch<AppDispatch>();
    const modeBit = useSelector((state: RootState) => state.themeMode);

    const modeHandler = () => {
        dispatch(toggleModeReducer(!modeBit));
    };

    const MouseEnterHandler = (text: string) => {
        const tooltipComponet= {
            text,
            position:{
                x:0,
                y:0,
            }
        }
        timeoutId.current = setTimeout(() => (
            dispatch(changeTooltipTextStateReducer(tooltipComponet))
        ), 1000)
    }

    const MouseLeaveHandler = () => {
        if (timeoutId.current) clearTimeout(timeoutId.current)
        dispatch(changeTooltipTextStateReducer(""))
    }

    const mouseMoveHandler = (text: string) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
            timeoutId.current = setTimeout(() => (
                dispatch(changeTooltipTextStateReducer(text))
            ), 1000)
        }
    }

    return (
        <>
            <nav className="flex justify-between">
                <div>logo</div>
                <div>
                    <button
                        id="themeToggleButton"
                        onClick={modeHandler}
                        onMouseEnter={() => (MouseEnterHandler("Theme Mode"))}
                        onMouseLeave={MouseLeaveHandler}
                        onMouseMove={() => mouseMoveHandler("Theme Mode")}
                        type="button"
                        className={`"text-white ${modeBit ? 'bg-[#152038] hover:bg-[#202b47]' : 'bg-[#c3dddd] hover:bg-blue-300 '}  focus:outline-none   font-medium rounded-lg text-sm px-3 py-2.5    "`}
                    >
                        <img
                            src={`${modeBit ? "lightThemeIcon.png" : "darkThemeIcon.png"}`}
                            className="h-[1rem]"
                        />
                        <ToolTip />
                    </button>
                </div>
                <div>avtar</div>
            </nav>
        </>
    );
};

export default Header;
