import React from 'react';
import thedreamsound from './../../src/dreamsound.mp3';

const DreamSound = () => {
  return (
    <div>
      <audio src={thedreamsound} type="audio/mp3" controls />
    </div>
  );
}

export default DreamSound;
