export interface ISelectFilter {
    id: string;
    value?: string;
    label?: string;
    placeholder?: string;
    items: SelectFilterItem[];
}

type SelectFilterItem = {
    id: number;
    name: string;
};

export interface IInput {
    id: string;
    label: string;
    type?: "text" | "number" | "password" | "email";
    mask?: string;
    value?: string;
    setValue?: (value: string) => void;
    onBlur?: (value: string) => void;
    maxLength?: number;
    icon?: any;
    onClickIcon?: () => void;
    error?: boolean;
}
