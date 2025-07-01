import { FC, ReactNode } from "react";
export declare const KEY_CODES: {
    ENTER: number;
    SPACE: number;
    DOWN_ARROW: number;
    ESC: number;
    UP_ARROW: number;
};
interface SelectOptionProps {
    value: string;
    label: string;
}
interface RenderOptionProps {
    isSelected: boolean;
    options: SelectOptionProps;
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
}
interface SelectProps {
    optionHandler?: (option: SelectOptionProps, optionIndex: number) => void;
    options?: SelectOptionProps[];
    label?: string;
    renderOption?: (props: RenderOptionProps) => ReactNode;
}
declare const Select: FC<SelectProps>;
export default Select;
