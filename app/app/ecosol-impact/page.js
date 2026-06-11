'use client'

export default function EcosolImpact() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; }
        main { background: #fff; color: #111; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          border-bottom: 1px solid #eee;
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo {
          width: min(310px, 48vw);
          height: auto;
          display: block;
        }

        nav {
          display: flex;
          gap: 25px;
          font-size: 18px;
          font-weight: bold;
        }

        nav a { color: #111; text-decoration: none; }
        section { padding: 100px 60px; }
        .light { background: #f7f7f7; }

        .kicker {
          margin: 0 0 14px;
          color: #00a8e8;
          font-size: 15px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .title {
          text-align: center;
          font-size: 42px;
          margin-bottom: 20px;
        }

        .subtitle {
          text-align: center;
          max-width: 850px;
          margin: 0 auto 60px;
          color: #555;
          font-size: 19px;
          line-height: 1.7;
        }

        .button {
          display: inline-block;
          margin-top: 30px;
          padding: 18px 35px;
          background: #00a8e8;
          color: #fff;
          text-decoration: none;
          border-radius: 12px;
          font-weight: bold;
          font-size: 18px;
        }

        .impact-hero {
          min-height: 720px;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 46px;
          align-items: center;
          background-image: linear-gradient(rgba(3,21,43,0.72), rgba(3,21,43,0.64)), url('/panneaux-sol-finis.png');
          background-size: cover;
          background-position: center;
          color: #fff;
        }

        .impact-hero h1 {
          max-width: 860px;
          margin: 0 0 22px;
          font-size: 60px;
          line-height: 1.08;
        }

        .impact-hero p {
          max-width: 760px;
          color: #edf7fb;
          font-size: 21px;
          line-height: 1.7;

          
