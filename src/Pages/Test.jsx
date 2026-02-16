import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Test.css';

const texts = [
  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. Every champion was once a contender who refused to give up.",
  "In the middle of difficulty lies opportunity. The future belongs to those who believe in the beauty of their dreams and work relentlessly to achieve them.",
  "TypeRush is not just a typing test, it's a journey to become unstoppable. Every keystroke brings you closer to typing at the speed of thought."
];

const Test = () => {
  const [time, setTime] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [currentText, setCurrentText] = useState(texts[0]);
  const [startTime, setStartTime] = useState(null);

  const inputRef = useRef(null);

  
  const getRandomText = () => texts[Math.floor(Math.random() * texts.length)];


  const resetTest = (newTime = time) => {
    setTime(newTime);
    setTimeLeft(newTime);
    setUserInput('');
    setIsActive(false);
    setIsFinished(false);
    setStartTime(null);
    setCurrentText(getRandomText());
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  
  const handleInput = (e) => {
    if (isFinished) return;

    const value = e.target.value;
    if (!isActive) {
      setIsActive(true);
      setStartTime(Date.now());
    }
    setUserInput(value);
  };

  
  useEffect(() => {
    let interval;
    if (isActive && !isFinished) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsFinished(true);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, isFinished]);

  
  const calculateWPM = useCallback(() => {
    if (!startTime) return 0;
    const elapsed = (Date.now() - startTime) / 60000;
    if (elapsed <= 0) return 0;

    let correct = 0;
    const minLen = Math.min(userInput.length, currentText.length);
    for (let i = 0; i < minLen; i++) {
      if (userInput[i] === currentText[i]) correct++;
    }
    return Math.floor((correct / 5) / elapsed);
  }, [userInput, currentText, startTime]);

  const calculateAccuracy = useCallback(() => {
    if (userInput.length === 0) return 100;
    let correct = 0;
    const minLen = Math.min(userInput.length, currentText.length);
    for (let i = 0; i < minLen; i++) {
      if (userInput[i] === currentText[i]) correct++;
    }
    return Math.round((correct / userInput.length) * 100);
  }, [userInput, currentText]);

  const currentWPM = calculateWPM();
  const currentAcc = calculateAccuracy();

  
  const renderText = () => {
    return currentText.split('').map((char, i) => {
      let className = 'char';

      if (i < userInput.length) {
        className += userInput[i] === char ? ' correct' : ' incorrect';
      } else if (i === userInput.length) {
        className += ' current';
      }

      return (
        <span key={i} className={className}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });
  };

 
  const extraChars = userInput.slice(currentText.length).split('').map((char, i) => (
    <span key={`extra-${i}`} className="char incorrect extra">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div className="test">
      <div className="test-container">
        {/* Header */}
        <div className="test-header">
          <Link to="/" className="logo">TypeRush</Link>
          
          <div className="modes">
            {[15, 30, 60, 120].map((t) => (
              <button
                key={t}
                className={`mode-btn ${time === t ? 'active' : ''}`}
                onClick={() => resetTest(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <button className="restart-btn" onClick={() => resetTest()}>
            ↻ Restart
          </button>
        </div>

        
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-value">{currentWPM}</span>
            <span className="stat-label">WPM</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{currentAcc}<span className="percent">%</span></span>
            <span className="stat-label">ACCURACY</span>
          </div>
          <div className="stat-item">
            <span className="stat-value time">{timeLeft}</span>
            <span className="stat-label">SECONDS</span>
          </div>
        </div>

     
        <div className="typing-area" onClick={() => inputRef.current?.focus()}>
          <div className="text-display">
            {renderText()}
            {extraChars}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInput}
            className="hidden-input"
            autoFocus
            spellCheck={false}
            disabled={isFinished}
          />
        </div>

     
        {isFinished && (
          <div className="result-overlay">
            <div className="result-card">
              <h2>TEST COMPLETE</h2>
              <div className="final-stats">
                <div className="final-wpm">
                  <span>{currentWPM}</span>
                  <small>WPM</small>
                </div>
                <div className="final-acc">
                  <span>{currentAcc}%</span>
                  <small>ACCURACY</small>
                </div>
              </div>

              <div className="result-buttons">
                <button onClick={() => resetTest()} className="primary-btn">
                  TRY AGAIN
                </button>
                <Link to="/">
                  <button className="secondary-btn">BACK TO HOME</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;