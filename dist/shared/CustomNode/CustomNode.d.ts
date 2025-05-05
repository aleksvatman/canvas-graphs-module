declare function CustomNode({ data, }: {
    data: {
        label: string;
        id: string;
        icon?: string;
        bgColor?: string;
    };
}): import("react/jsx-runtime").JSX.Element;
export default CustomNode;
