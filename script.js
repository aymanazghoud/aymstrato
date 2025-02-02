/* ================ BASE STYLES ================ */
:root {
  --primary-dark: #0a0a0a;
  --secondary-dark: #1a1a1a;
  --neon-blue: #0F82FF;
  --neon-purple: #9A4DFF;
  --neon-pink: #FF00FF;
  --text-primary: rgba(245, 245, 245, 0.95);
  --success-green: #00FF00;
  --error-red: #FF0000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--primary-dark);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  line-height: 1.6;
}

/* ================ TYPOGRAPHY ================ */
h1 {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
}

h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

p {
  color: #B0B0B0;
  font-size: 1.1rem;
}

/* ================ NAVIGATION ================ */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: rgba(10, 10, 10, 0.9);
}

.logo-gradient {
  background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple), var(--neon-pink));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
  font-size: 2rem;
  animation: gradientShift 5s infinite;
  text-shadow: 0 0 15px rgba(15, 130, 255, 0.3);
}

/* ================ LIVE MARKET TICKER ================ */
.live-ticker {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-family: 'Courier New', monospace;
}

.currency-pair {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 5px;
  transition: all 0.3s;
}

.currency-pair:hover {
  background: rgba(15, 130, 255, 0.1);
}

/* ================ HERO SECTION ================ */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.live-pulse {
  display: inline-block;
  animation: pulse 1.5s infinite;
  color: var(--success-green);
  font-size: 1.2rem;
  vertical-align: middle;
  margin-left: 1rem;
}

.animated-chart {
  border: 2px solid var(--neon-blue);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(15, 130, 255, 0.3);
  margin-top: 2rem;
}

/* ================ STRATEGY CARDS ================ */
.strategy-section {
  padding: 5rem 5%;
}

.strategy-card {
  background: var(--secondary-dark);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.strategy-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(15, 130, 255, 0.2);
}

.strategy-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, var(--neon-blue), transparent);
  animation: rotate 4s linear infinite;
}

.strategy-card:hover::before {
  animation: rotate 2s linear infinite;
}

/* ================ RISK MANAGEMENT ================ */
.risk-metric {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.metric-box {
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid var(--neon-blue);
}

.metric-value {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* ================ ANIMATIONS ================ */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes particleMove {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(100vw); opacity: 0; }
}

/* ================ PARTICLES ================ */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--neon-blue);
  border-radius: 50%;
  animation: particleMove 20s linear infinite;
}

/* ================ WALLET MODAL ================ */
.wallet-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: none;
  place-items: center;
  backdrop-filter: blur(10px);
}

.wallet-option {
  background: var(--secondary-dark);
  padding: 1.5rem;
  margin: 1rem 0;
  width: 300px;
  border-radius: 10px;
  border: 2px solid var(--neon-blue);
  cursor: pointer;
  transition: all 0.3s;
}

.wallet-option:hover {
  background: rgba(15, 130, 255, 0.1);
}

/* ================ RESPONSIVE DESIGN ================ */
@media (max-width: 1200px) {
  h1 {
    font-size: 3rem;
  }
  
  .hero {
    margin-top: 60px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .live-ticker {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .strategy-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }
  
  .metric-value {
    font-size: 1.8rem;
  }
  
  .currency-pair {
    font-size: 0.9rem;
  }
}
