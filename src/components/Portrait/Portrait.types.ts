export interface IPortrait {
    size: 'small' | 'medium' | 'large';
    variation: 'circle' | 'square' | 'rounded';
    filter: 'greyscale' | 'normal';
    url?: string;
}
