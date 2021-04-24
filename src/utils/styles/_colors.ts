export const LightenDarkenColor = (col: string, amt: number): string => {
    let usePound = false;

    if (col[0] == '#') {
        col = col.slice(1);
        usePound = true;
    }

    const num = parseInt(col, 16);

    let r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export const colors = {
    white1: '#F3F3F3',
    white2: '#E3E3E3',
    grey1: '#D2D5D2',
    grey2: '#A7AAA7',
    grey3: '#7D807D',
    grey4: '#525552',
    greyblack: '#282B28',
    black: '#000000',
    yellow1: '#FFF0AB',
    yellow2: '#FFE156',
    yellow3: '#BFA941',
    yellow4: '#80712B',
    yellow5: '#403816',
    red1: '#FFBEB6',
    red2: '#FF9D92',
    red3: '#FF3B25',
    red4: '#AA2719',
    red5: '#55140C',
    pink1: '#F4BFDB',
    pink2: '#C399AF',
    pink3: '#927383',
    pink4: '#624C58',
    pink5: '#31262C',
    green1: '#87ac6e',
    purple1: '#9961A9',
    blue1: '#60ADEC',
};
