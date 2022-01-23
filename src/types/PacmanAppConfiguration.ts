import { RotationClass } from './RotationClass';

export type PacmanAppConfiguration = {
    initialX: number;
    initialY: number;
    initialSpeed: number;
    initialRotationClass: RotationClass;
    initialMouthState: boolean;
    mouthUpdateInterval: number;
}