import { useSelector } from "react-redux";
import { RootState } from "../stateManagement/Store";

const themeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const modeBit = useSelector((state: RootState) => state.themeMode);
    return (
        <div className={`${modeBit ? " bg-[#000614] text-[#ebedf2] " : "bg-[#e8e8e8] bg-opacity-[0.5] "} `}>
            {children}
        </div>
    )
}

export default themeProvider