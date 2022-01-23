import React from 'react';
import { RotationClass } from '../../../types';
import pacmanHead from './pacman-head.png';
import './Pacman.css';

type PacmanProps = {
    X: number;
    Y: number;
    rotationClass: RotationClass;
}

export class Pacman extends React.Component<PacmanProps> {
    render(): React.ReactNode {
        return (
            <div className={`pacman-container`}>
                <img id='pacman-head'
                    className={`${this.props.rotationClass}`}
                    src={pacmanHead}
                    style={{
                        position: 'absolute',
                        top: this.props.Y,
                        left: this.props.X
                    }}
                    alt={'pacman-head'} />
            </div>
        )
    }
}