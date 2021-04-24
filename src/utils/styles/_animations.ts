import { keyframes } from 'styled-components';

export const rollout = keyframes`
    0% { transform: translateY(-100px); }
    100% { transform: translateY(0); }
`;

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
