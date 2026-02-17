import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Leaderboard.css';

const allTime = [
  { rank: 1, username: "neonblast", wpm: 187, acc: 99.2, country: "🇮🇳", tests: 1243 },
  { rank: 2, username: "shadowkeys", wpm: 179, acc: 98.7, country: "🇧🇷", tests: 892 },
  { rank: 3, username: "ghostfingers", wpm: 172, acc: 97.8, country: "🇯🇵", tests: 654 },
  { rank: 4, username: "pixelrush", wpm: 168, acc: 99.1, country: "🇺🇸", tests: 1456 },
  { rank: 5, username: "gujjutypist", wpm: 165, acc: 98.4, country: "🇮🇳", tests: 987 },
  { rank: 6, username: "velocikey", wpm: 161, acc: 96.9, country: "🇷🇺", tests: 743 },
  { rank: 7, username: "blazetype", wpm: 158, acc: 97.5, country: "🇰🇷", tests: 521 },
  { rank: 8, username: "quantumkeys", wpm: 155, acc: 99.3, country: "🇩🇪", tests: 1102 },
  { rank: 9, username: "thunderstrike", wpm: 152, acc: 95.8, country: "🇦🇺", tests: 634 },
  { rank: 10, username: "silentstorm", wpm: 149, acc: 98.1, country: "🇮🇳", tests: 876 },
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');

  const data = activeTab === 'all' ? allTime : allTime.slice(0, 8); 

  const filtered = data.filter(item =>
    item.username.toLowerCase().includes(search.toLowerCase())
  );

  const top3 = filtered.slice(0, 3);
  const rest = filtered.slice(3);

  return (
    <div className="leaderboard">
      <div className="leaderboard-container">
       
        <div className="lb-header">
          <Link to="/" className="logo">TypeRush</Link>
          <div className="nav">
            <Link to="/test" className="nav-btn">Test</Link>
            <Link to="/leaderboard" className="nav-btn active">Leaderboard</Link>
          </div>
        </div>

        <h1 className="lb-title">
          🌍 GLOBAL <span className="highlight">LEADERBOARD</span>
        </h1>

        
        <div className="tabs">
          {['all', 'week', 'today'].map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'all' ? 'ALL TIME' : tab === 'week' ? 'THIS WEEK' : 'TODAY'}
            </button>
          ))}
        </div>

        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search typists..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

       
        <div className="podium">
          {top3.map((player, i) => (
            <div key={player.rank} className={`podium-card rank-${i + 1}`}>
              <div className="crown">{i === 0 ? '👑' : i === 1 ? '🥈' : '🥉'}</div>
              <div className="flag">{player.country}</div>
              <div className="avatar">@{player.username}</div>
              <div className="podium-wpm">{player.wpm}<span>WPM</span></div>
              <div className="podium-acc">{player.acc}%</div>
            </div>
          ))}
        </div>

        
        <div className="table-container">
          <table className="leader-table">
            <thead>
              <tr>
                <th>RANK</th>
                <th>TYPIST</th>
                <th>WPM</th>
                <th>ACCURACY</th>
                <th>TESTS</th>
                <th>COUNTRY</th>
              </tr>
            </thead>
            <tbody>
              {rest.map(player => (
                <tr key={player.rank}>
                  <td className="rank">#{player.rank}</td>
                  <td className="user">
                    <span className="flag">{player.country}</span>
                    @{player.username}
                  </td>
                  <td className="wpm">{player.wpm}</td>
                  <td className="acc">{player.acc}%</td>
                  <td className="tests">{player.tests}</td>
                  <td className="country">{player.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lb-footer">
          <Link to="/test">
            <button className="primary-btn">TRY TO BEAT THEM →</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;