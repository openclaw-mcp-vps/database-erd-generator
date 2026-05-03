export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Visualization
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Auto-generate ERDs from<br />
          <span className="text-[#58a6ff]">any database schema</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Paste a connection string, get a clean interactive Entity-Relationship Diagram in seconds.
          Export as PNG, PDF, or SVG. No manual drawing required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Access — $22/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['PostgreSQL', 'MySQL', 'SQLite', 'SQL Server', 'PNG / PDF / SVG export', 'Auto-detect FK relationships'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Connect', desc: 'Paste your database connection string. We support Postgres, MySQL, SQLite, and SQL Server.' },
            { step: '02', title: 'Analyze', desc: 'We introspect your schema — tables, columns, types, primary keys, and foreign key relationships.' },
            { step: '03', title: 'Export', desc: 'Download your ERD as PNG, PDF, or SVG. Share with your team or embed in docs.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-xs font-bold tracking-widest mb-2">{step}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-8">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-4">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$22</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited database connections',
              'Auto-detect all relationships',
              'Export PNG, PDF, SVG',
              'PostgreSQL, MySQL, SQLite, SQL Server',
              'Shareable diagram links',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Now — $22/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is my database connection string stored?',
              a: 'Connection strings are used only during the schema introspection request and are never persisted to disk or logged.',
            },
            {
              q: 'Which databases are supported?',
              a: 'PostgreSQL, MySQL, SQLite, and Microsoft SQL Server are fully supported. More adapters are on the roadmap.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of the billing period.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} ERD Generator. All rights reserved.
      </footer>
    </main>
  )
}
