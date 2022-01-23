import { Boundaries } from './Boundaries';
import { RotationClass } from './RotationClass';

export type PacmanAppConfiguration = {
    initialX: number;
    initialY: number;
    initialSpeed: number;
    initialRotationClass: RotationClass;
    initialMouthState: boolean;
    initialBoundaries: Boundaries;
    mouthUpdateInterval: number;
}