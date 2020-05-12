const colors = [
    '#68b0f1',
    '#5fc383',
    '#ea86ae',
    '#ffca57',
    '#0395de',
    '#00a388',
    '#dc3522',
];

export const randomColor = () =>
    colors[Math.floor(Math.random() * (colors.length - 1)) + 1];
