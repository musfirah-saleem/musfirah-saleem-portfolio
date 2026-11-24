export default function Architecture() {
  return (
    <section id="architecture">
      <div className="sec-head reveal">
        <p className="eyebrow">02 · How I Build</p>
        <h2 className="fallwords">
          <span className="fw" style={{"--d": "0s"}}>The</span>{" "}
          <span className="fw" style={{"--d": ".45s"}}>MERN</span>{" "}
          <span className="fw" style={{"--d": ".9s"}}><em className="cyan">architecture</em></span>
        </h2>
        <p>Every product I build follows the same clean three-tier shape: a fast client, a well-organised API layer, and data that stays consistent.</p>
        <div className="divider"></div>
      </div>
      <div className="arch">
        <div className="arch-tier reveal">
          <span className="tier-tag">Tier 01 · Client</span>
          <h3>Frontend</h3>
          <ul>
            <li>React &amp; Next.js apps</li>
            <li>Redux state management</li>
            <li>Tailwind CSS &amp; Material UI</li>
            <li>Responsive, animated UIs</li>
          </ul>
        </div>
        <div className="arch-arrow"><span className="flow-dot"></span>→</div>
        <div className="arch-tier reveal d1">
          <span className="tier-tag">Tier 02 · API</span>
          <h3>Backend</h3>
          <ul>
            <li>Node.js &amp; Express REST APIs</li>
            <li>JWT auth &amp; rate limiting</li>
            <li>Payment webhooks (X-Pay, Stripe)</li>
            <li>AI / LLM service integrations</li>
          </ul>
        </div>
        <div className="arch-arrow"><span className="flow-dot"></span>→</div>
        <div className="arch-tier reveal d2">
          <span className="tier-tag">Tier 03 · Data</span>
          <h3>Database</h3>
          <ul>
            <li>MongoDB with Mongoose</li>
            <li>Schema design &amp; indexing</li>
            <li>Aggregation pipelines</li>
            <li>Dockerised deployments</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
