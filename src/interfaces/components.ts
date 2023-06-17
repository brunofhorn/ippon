import { ReactNode } from "react";

import { IUnits } from "./response";

export interface IBadge extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    type?: "default" | "dark" | "danger" | "success" | "warning" | "info";
}

export interface IButton extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    type?: "button" | "submit" | "reset";
    variant?: "normal" | "outline";
    color?: "primary" | "secondary" | "danger" | "default";
    icon?: JSX.Element | React.ReactNode;
    iconHover?: JSX.Element | React.ReactNode;
    handleClick?: () => void;
    disabled?: boolean;
}

export interface IHint {
    text?: string;
    color?: "danger" | "info" | "success" | "warning" | "default";
}

export interface IModal extends React.PropsWithChildren {
    isOpen?: boolean;
    title?: string;
    buttons?: JSX.Element[] | ReactNode[];
}

export interface IEmptyPage extends React.HTMLAttributes<HTMLDivElement> {
    image: React.ReactNode | JSX.Element;
    title: string;
    description: string;
    buttons?: IButton[];
}

export interface IUnitList extends React.HTMLAttributes<HTMLDivElement> {
    // units?: IUnits[];
    units?: IUnit[];
}

export interface IUnit {
    id?: number;
    avatar?: string;
    unitName?: string;
    responsibleName?: string;
    zipCode?: string;
    address?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    phone?: string;
    email?: string;
}

export interface IUnitPage extends React.HTMLAttributes<HTMLDivElement> {
    unit: IUnit;
}
