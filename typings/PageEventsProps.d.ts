/**
 * This file was generated from PageEvents.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface PageEventsProps<Style> {
    name: string;
    style: Style[];
    onWillFocus?: ActionValue;
    onDidFocus?: ActionValue;
    onWillBlur?: ActionValue;
    onDidBlur?: ActionValue;
}

export interface PageEventsPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    onWillFocus: {} | null;
    onDidFocus: {} | null;
    onWillBlur: {} | null;
    onDidBlur: {} | null;
}
