const StateMachine = require('./src/stateMachine');

const workflow = new StateMachine({
  initial: 'idle',
  transitions: [
    { on: 'start', from: 'idle', to: 'processing' },
    { on: 'success', from: 'processing', to: 'done' }
  ]
});

console.log('Initial:', workflow.state);
console.log('After start:', workflow.transition('start'));
console.log('After success:', workflow.transition('success'));
