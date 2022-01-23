import React from 'react';
import './App.css';
import { config } from '../config';
import { PacmanAppRoot } from './PacmanAppRoot';

export class PacmanApp extends React.Component {
  render() {
    return (
      <div className='Pacman'>
        <div className='Pacman-Main-Container'>
          <PacmanAppRoot
            initialX={config.initialX}
            initialY={config.initialY}
            initialRotationClass={config.initialRotationClass}
            initialSpeed={config.initialSpeed}
            boundaries={{
              top: 0,
              left: 0,
              right: window.screen.availWidth,
              bottom: window.screen.availHeight
            }}
            initialMouthState={config.initialMouthState}
            mouthUpdateInterval={config.mouthUpdateInterval} />
        </div>
      </div>
    );
  }
}
