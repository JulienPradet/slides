import React, { Component } from "react";

const FIRST = "first";
const LAST = "last";
const INVERT = "invert";
const PLAY = "play";

const BLOCK_SIZE = "2em";
const HEIGHT = "6em";
const WIDTH = "12em";

const first = {
  top: 10,
  left: 20
};
const last = {
  top: 90,
  left: 80
};
const invert = {
  top: last.top - first.top,
  left: last.left - first.left
};

const Element = ({ position, opacity }) => (
  <div
    style={{
      position: "absolute",
      background: "white",
      height: BLOCK_SIZE,
      width: BLOCK_SIZE,
      marginLeft: `calc(${position.left / 100} * (${WIDTH} - ${BLOCK_SIZE}))`,
      marginTop: `calc(${position.top / 100} * (${HEIGHT} - ${BLOCK_SIZE}))`,
      opacity: opacity,
      borderRadius: "0.2em"
    }}
  />
);

const getPosition = step => {
  switch (step) {
    case FIRST:
      return [first];
    case LAST:
      return [last];
    case INVERT:
      return [last, first];
    case PLAY:
      const LENGTH = 5;
      return new Array(LENGTH + 1).fill(null).map((_, index) => ({
        top: last.top - invert.top * index / LENGTH,
        left: last.left - invert.left * index / LENGTH
      }));
    default:
      return [first];
  }
};

const isPlaying = step => {
  return step === PLAY;
};

const Schema = ({ step, opacity }) => {
  const positionList = getPosition(step);
  return (
    <div
      style={{
        position: "relative",
        height: HEIGHT,
        width: WIDTH,
        margin: "0 auto 1em"
      }}
    >
      {positionList.map((position, index) => (
        <Element
          key={index}
          position={position}
          opacity={1 - index / positionList.length * 0.9}
        />
      ))}
    </div>
  );
};

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      launch: true
    };
    this.restart = this.restart.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  restart() {
    this.setState({
      launch: true
    });
  }

  onKeyDown(event) {
    if (event.key === "Enter") {
      this.restart();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
    requestAnimationFrame(() => {
      this.setState({ launch: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.launch !== prevState.launch) {
      requestAnimationFrame(() => {
        this.setState({ launch: false });
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    return (
      <div
        className="container"
        style={{
          position: "relative",
          height: HEIGHT,
          width: WIDTH,
          margin: "0 auto 1em"
        }}
        onClick={this.restart}
      >
        <style>{`
          .static {
            margin-left: calc(${first.left / 100} * (${WIDTH} - ${BLOCK_SIZE}));
            margin-top: calc(${first.top / 100} * (${HEIGHT} - ${BLOCK_SIZE}));
          }
          .animate {
            margin-left: calc(${last.left / 100} * (${WIDTH} - ${BLOCK_SIZE}));
            margin-top: calc(${last.top / 100} * (${HEIGHT} - ${BLOCK_SIZE}));
            transition: margin 1s ease-in-out;
          }
        `}</style>
        <div
          className={this.state.launch ? "static" : "animate"}
          style={{
            position: "absolute",
            background: "white",
            height: BLOCK_SIZE,
            width: BLOCK_SIZE,
            borderRadius: "0.2em"
          }}
        />
      </div>
    );
  }
}

const displayPosition = ({ top, left }, split = false) =>
  [split ? null : "{", `top: ${top},`, `left: ${left}`, split ? null : "}"]
    .filter(e => Boolean(e))
    .join(split ? "\n" : " ");

class FlipExplanation extends Component {
  constructor() {
    super();
    this.state = this.step();
    this.goToStep = this.goToStep.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseWheel = this.onMouseWheel.bind(this);
  }

  step(step) {
    switch (step) {
      case 1:
        return {
          step: 1,
          animation: false,
          position: FIRST,
          explanation: (
            <div><strong>FIRST :</strong> On récupère la position</div>
          )
        };
      case 2:
        return {
          step: 2,
          animation: false,
          position: FIRST,
          explanation: (
            <div>
              <div><strong>FIRST :</strong> On récupère la position</div>
              <div style={{ color: "#ffffff", marginTop: "0.6em" }}>
                <code>{displayPosition(first)}</code>
              </div>
            </div>
          )
        };
      case 3:
        return {
          step: 3,
          animation: false,
          position: LAST,
          explanation: (
            <div><strong>LAST :</strong> On met à jour l'élément</div>
          )
        };
      case 4:
        return {
          step: 4,
          animation: false,
          position: LAST,
          explanation: (
            <div>
              <div><strong>LAST :</strong> On met à jour l'élément</div>
              <div style={{ color: "#ffffff", marginTop: "0.6em" }}>
                <code>{displayPosition(last)}</code>
              </div>
            </div>
          )
        };
      case 5:
        return {
          step: 5,
          animation: false,
          position: INVERT,
          explanation: (
            <div>
              <div><strong>INVERT :</strong> On calcule la différence</div>
            </div>
          )
        };
      case 6:
        return {
          step: 6,
          animation: false,
          position: INVERT,
          explanation: (
            <div>
              <div><strong>INVERT :</strong> On calcule la différence</div>
              <div style={{ color: "#777777", marginTop: "0.6em" }}>
                <code>
                  {displayPosition({
                    top: `${first.top} - ${last.top}`,
                    left: `${first.left} - ${last.left}`
                  })}
                </code>
              </div>
              <div style={{ color: "#ffffff" }}>
                = <code>{displayPosition(invert)}</code>
              </div>
            </div>
          )
        };
      case 7:
        return {
          step: 7,
          animation: false,
          position: FIRST,
          explanation: (
            <div>
              <div><strong>INVERT :</strong> On l'applique à l'élément</div>
              <div style={{ color: "#777777", marginTop: "0.6em" }}>
                <code>
                  {displayPosition({
                    top: `${last.top} - ${invert.top}`,
                    left: `${last.left} - ${invert.left}`
                  })}
                </code>
              </div>
              <div style={{ color: "#ffffff" }}>
                = <code>
                  {displayPosition({
                    top: last.top - invert.top,
                    left: last.left - invert.left
                  })}
                </code>
              </div>
            </div>
          )
        };
      case 8:
        return {
          step: 8,
          animation: false,
          position: PLAY,
          explanation: (
            <div>
              <div>
                <strong>PLAY :</strong> On diminue petit à petit la différence
              </div>
              <div
                style={{
                  color: "#ffffff",
                  textAlign: "left",
                  maxWidth: "18em",
                  margin: "0 auto"
                }}
              >
                <pre>
                  <code>
                    {displayPosition(
                      {
                        top: `${last.top} - ${invert.top} * (1 - progress)`,
                        left: `${last.left} - ${invert.left} * (1 - progress)`
                      },
                      true
                    )}
                  </code>
                </pre>
              </div>
            </div>
          )
        };
      case 9:
      case 10:
        return {
          step: 9,
          animation: true,
          explanation: (
            <div>
              <div>
                <strong>PLAY :</strong> On diminue petit à petit la différence
              </div>
              <div
                style={{
                  color: "#ffffff",
                  textAlign: "left",
                  maxWidth: "18em",
                  margin: "0 auto"
                }}
              >
                <pre>
                  <code>
                    {displayPosition(
                      {
                        top: `${last.top} - ${invert.top} * (1 - progress)`,
                        left: `${last.left} - ${invert.left} * (1 - progress)`
                      },
                      true
                    )}
                  </code>
                </pre>
              </div>
            </div>
          )
        };
      default:
        return {
          step: 0,
          animation: true,
          explanation: (
            <div>
              <div>Quel est le principe&nbsp;?</div>
              <div style={{ fontSize: "2em" }}><strong>↓</strong></div>
            </div>
          )
        };
    }
  }

  goToStep(step) {
    this.setState(this.step(step));
  }
  next() {
    this.setState(({ step }) => this.step(step + 1));
  }
  prev() {
    this.setState(({ step }) => this.step(step - 1));
  }

  onKeyDown(event) {
    if (event.code === "ArrowDown") {
      this.next();
    } else if (event.code === "ArrowUp") {
      this.prev();
    }
  }

  onMouseWheel(event) {
    if (event.deltaY > 0) {
      this.next();
    } else if (event.deltaY < 0) {
      this.prev();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown, false);
    window.addEventListener("mousewheel", this.onMouseWheel, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("mousewheel", this.onMouseWheel);
  }

  render() {
    return (
      <div>
        {this.state.animation
          ? <Animation />
          : <Schema step={this.state.position} />}
        {this.state.explanation}
      </div>
    );
  }
}

export default FlipExplanation;
