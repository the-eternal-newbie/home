import { Keyframes, keyframes } from 'styled-components';

export const getAnimation = (animation: string | undefined): Keyframes | undefined | string => {
    switch (animation) {
        case 'fdInBtm':
            return fdInBtm;
        case 'fdInLft':
            return fdInLft;
        case 'fdInRgt':
            break;
        case 'gwLft':
            return gwLft;
        default:
            return 'none';
    }
};

export const rollout = keyframes`
    0% { transform: translateY(-100px); }
    100% { transform: translateY(0); }
`;

export const fadeBlink = keyframes``;

export const fdInBtm = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to { opacity: 1 }
`;

export const fdInLft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to { opacity: 1 }
`;

export const gwLft = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`;
