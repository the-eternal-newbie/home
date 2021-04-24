export interface IButton {
    type: 'primary' | 'secondary' | 'circle';
    text?: string;
    onClick?: (props?: unknown) => unknown;
    to?: string;
    style?: React.CSSProperties;
    navigation?: boolean;
}
