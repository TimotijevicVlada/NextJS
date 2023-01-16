import { MouseEventHandler } from "react";

export interface BackdropProps {
    children: React.ReactNode;
    close: () => void;
}