import React, { useEffect, useState } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

const Stopwatch = () => {
  const [isActive, setiIsActive] = useState(false);
  const [ispaused, setisPaused] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && ispaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, ispaused]);

  const handleStart = () => {
    setiIsActive(true);
    setisPaused(false);
  };

  const handlePaused = () => {
    setisPaused(!ispaused);
  };

  const handleReset = () => {
    setiIsActive(false);
    setTime(0);
  };

  return (
    <Container>
      <Row>
        <h1>Stopwatch</h1>
      </Row>
      {console.log("time", time)}

      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <p>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}</p>
          <p>:</p>
          <p>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}</p>
          <p>:</p>
          <p>{("0" + (Math.floor(time / 10) % 100)).slice(-2)}</p>
        </Col>
      </Row>

      {isActive ? (
        <Row>
          {ispaused ? (
            <Col>
              <Button onClick={handleStart}>Start</Button>
            </Col>
          ) : (
            <Col>
              <Button onClick={handlePaused}>stop</Button>
            </Col>
          )}
          <Col>
            <Button onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <Button onClick={handleStart}>Start</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Stopwatch;
