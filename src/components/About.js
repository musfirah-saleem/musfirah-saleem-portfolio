export default function About() {
  return (
    <section id="about">
      <div className="sec-head reveal">
        <p className="eyebrow">01 — About</p>
        <h2 className="fallwords">
          <span className="fw" style={{"--d": "0s"}}>Full-stack,</span>{" "}
          <span className="fw" style={{"--d": ".35s"}}><em>end</em></span>{" "}
          <span className="fw" style={{"--d": ".65s"}}><em>to</em></span>{" "}
          <span className="fw" style={{"--d": ".95s"}}><em>end</em></span>
        </h2>
        <div className="divider"></div>
      </div>
      <div className="about-grid">
        <div className="card pink-top reveal">
          <h3>What I do</h3>
          <p>I design and build complete web products — from the database schema to the pixel on screen. My day-to-day is React and Next.js on the front, Node.js and Express APIs in the middle, and MongoDB with Mongoose underneath.</p>
          <p>At Egora I work on a live POS platform used by real merchants, including the X-Pay payment gateway and its webhooks — the kind of code where a bug means someone&apos;s till stops working, so it has to be right.</p>
        </div>
        <div className="card cyan-top reveal d1">
          <h3>Beyond the MERN core</h3>
          <p>I&apos;ve shipped blockchain/Web3 frontends for a UK company, AI chatbot products that talk to customers in Urdu, English and Roman Urdu, and payment flows with both X-Pay and Stripe.</p>
          <div className="chips">
            <span className="chip">POS Systems</span>
            <span className="chip c">E-commerce</span>
            <span className="chip">AI Chatbots</span>
            <span className="chip c">Web3 Frontend</span>
            <span className="chip">Payment Webhooks</span>
            <span className="chip c">CRM Platforms</span>
          </div>
          <p style={{marginTop: "14px"}}>BS Information Technology — University of Education, Vehari (2019–2023).</p>
        </div>
      </div>
    </section>
  );
}
