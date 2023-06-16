export interface IMenu {
    isOpen: boolean;
    items: IMenuItem[];
}

export interface IMenuItem {
    name: string;
    link: string;
    icon: React.ReactNode | JSX.Element | React.ReactNode[] | JSX.Element[];
    disable?: boolean;
    extra?: boolean;
}
