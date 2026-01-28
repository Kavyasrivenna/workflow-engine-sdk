class StateMachine {
  constructor({ initial, transitions }) {
    this.state = initial;
    this.transitions = transitions;
  }

  transition(event) {
    const rule = this.transitions.find(
      t => t.from === this.state && t.on === event
    );

    if (!rule) {
      throw new Error(`Invalid transition from ${this.state} on ${event}`);
    }

    this.state = rule.to;
    return this.state;
  }
}

module.exports = StateMachine;
