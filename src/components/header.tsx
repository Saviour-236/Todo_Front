// Home.tsx
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModeReducer } from "../stateManagement/themeFeature";
import { AppDispatch, RootState } from "../stateManagement/Store";
import { initializeTooltipReducer, removeTooltipTextReducer } from "../stateManagement/tooltipTextFeature";

const Header: React.FC = () => {
    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const modeBit = useSelector((state: RootState) => state.themeMode);

    const modeHandler = () => {
        dispatch(toggleModeReducer(!modeBit));
    };

    const MouseEnterHandler = (text: string) => {
        const tooltipComponet = {
            text,
            position: {
                x: 0,
                y: 0,
            },
        };
        timeoutId.current = setTimeout(() => {
            dispatch(initializeTooltipReducer(tooltipComponet));
        }, 1000);
    };

    const MouseLeaveHandler = () => {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        dispatch(removeTooltipTextReducer(""));
    };

    const mouseMoveHandler = (text: string) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            const tooltipComponet = {
                text,
                position: {
                    x: 0,
                    y: 0,
                },
            };
            timeoutId.current = setTimeout(() => {
                dispatch(initializeTooltipReducer(tooltipComponet));
            }, 1000);
        }
    };

    return (
        <>
            <nav className="block w-full max-w-screen-xl px-4 py-3 mx-auto shadow-md rounded-xl bg-gradient-to-tr from-blue-gray-900 to-blue-gray-800">
                <div className="flex flex-wrap items-center justify-between gap-y-4">
                    <img src="logo.png" className=" p-[0.5rem] rounded-full shadow-sm shadow-white " />
                    <div className="flex gap-1 ml-auto md:mr-4">
                        <button
                            id="themeToggleButton"
                            className={` ${modeBit ? 'bg-[#152038] hover:bg-[#202b47]' : 'bg-[#c3dddd] hover:bg-blue-300 '}  focus:outline-none font-medium rounded-full text-sm relative h-10 max-h-[40px] w-10 max-w-[40px] select-none  text-center align-middle text-xs font-medium uppercase transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                            type="button"
                            onClick={modeHandler}
                            onMouseEnter={() => MouseEnterHandler("Theme Mode")}
                            onMouseLeave={MouseLeaveHandler}
                            onMouseMove={() => mouseMoveHandler("Theme Mode")}
                        >
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <img
                                    src={`${modeBit ? "lightThemeIcon.png" : "darkThemeIcon.png"}`}
                                    className="h-[1rem]"
                                />
                            </span>
                        </button>
                        <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle text-xs font-medium uppercase transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center justify-center"
                            type="button"
                        >
                            <span>
                                <img src="profilePic.png " className="h-[2rem] w-[2rem]"></img>
                            </span>

                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
