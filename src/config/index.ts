import { PacmanAppConfiguration } from '../types';

export const config: PacmanAppConfiguration = {
    initialX: 0,
    initialY: 0,
    initialRotationClass: 'rotateRight',
    initialSpeed: 10,
    initialMouthState: false,
    initialBoundaries: {
        top: 0,
        left: 0,
        right: window.screen.availWidth,
        bottom: window.screen.availHeight
    },
    mouthUpdateInterval: 250
}