import React, { Component } from 'react';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easeQuadOut } from 'd3-ease';

const ArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1px;
`;

const ArrowTrail = styled.div`
  transform: matrix(1, 0, 0, 1, 0, 0);
  height: 34px;
  width: 1px;
  background-color: ${props => props.theme.color.primary};
  opacity: 0.62;
`;

const LeftArrowCap = styled.div`
  transform: rotate(45deg);
`;

const RightArrowCap = styled.div`
  transform: rotate(-45deg);
`;

const ArrowCap = styled.div`
  transform: matrix(1, 0, 0, 1, 0, 0);
  position: absolute;
  bottom: 0;
  width: 1px;
  height: 8px;
  background-color: ${props => props.theme.color.primary};
  opacity: 0.62;
`;

class DropArrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    // Triggers enter animation
    this.interval = setInterval(() => {
      this.setState({
        show: false,
      });
      this.setState({
        show: true,
      });
    }, 2200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        // Weither to render or not (trigger enter/leave)
        show={this.state.show}
        // Starting state
        start={{
          y: 0,
          opacity: 0.62,
        }}
        // How to transform state on enter
        enter={{
          y: [24],
          opacity: [0],
          timing: {
            delay: 800,
            duration: 1200,
            ease: easeQuadOut,
          },
        }}
      >
        {state => (
          <ArrowWrapper
            style={{
              transform: `translate(0px, ${state.y}px)`,
              opacity: state.opacity,
            }}
          >
            <ArrowTrail />
            <LeftArrowCap>
              <ArrowCap />
            </LeftArrowCap>
            <RightArrowCap>
              <ArrowCap />
            </RightArrowCap>
          </ArrowWrapper>
        )}
      </Animate>
    );
  }
}

export default DropArrow;
