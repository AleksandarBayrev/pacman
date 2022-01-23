import { ArrowKeys } from './ArrowKeys';

export type PacmanKeyboardMovementEvent = React.KeyboardEvent<HTMLImageElement> & {
    key: ArrowKeys;
}