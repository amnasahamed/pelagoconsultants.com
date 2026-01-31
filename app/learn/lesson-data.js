import React from 'react';

export const modules = [
    {
        id: 1,
        title: 'Incorporation & Setup',
        description: 'From idea to legal entity',
        color: '#4361ee',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" /><path d="M9 18v.01" /></svg>,
        lessons: [
            { id: 'choosing-structure', title: 'Choosing the Right Structure', duration: '8 min' },
            { id: 'incorporation-process', title: 'The Incorporation Process & Costs', duration: '10 min' },
            { id: 'dipp-recognition', title: 'DIPP Recognition & Startup India', duration: '7 min' },
            { id: 'cofounders', title: 'Co-Founders & Partner Addition', duration: '6 min' },
            { id: 'shop-establishment', title: 'Shop & Establishment Act', duration: '5 min' },
        ],
    },
    {
        id: 2,
        title: 'Financial Basics',
        description: 'Master your startup finances',
        color: '#22c55e',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        lessons: [
            { id: 'unit-economics', title: 'Unit Economics 101', duration: '10 min' },
            { id: 'burn-rate', title: 'Burn Rate & Runway', duration: '8 min' },
            { id: 'cash-flows', title: 'Projecting Cash Flows', duration: '12 min' },
            { id: 'bootstrapping', title: 'Bootstrapping Smartly', duration: '7 min' },
        ],
    },
    {
        id: 3,
        title: 'Compliance & Taxes',
        description: 'Stay on the right side of the law',
        color: '#f59e0b',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
        lessons: [
            { id: 'gst-basics', title: 'GST Basics for Founders', duration: '12 min' },
            { id: 'tds', title: 'TDS (Tax Deducted at Source)', duration: '10 min' },
            { id: 'pf-esi', title: 'PF & ESI Compliance', duration: '8 min' },
            { id: 'roc-filings', title: 'ROC Annual Filings', duration: '9 min' },
        ],
    },
    {
        id: 4,
        title: 'Funding & Equity',
        description: 'Navigate the funding landscape',
        color: '#8b5cf6',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
        lessons: [
            { id: 'funding-landscape', title: 'The Funding Landscape', duration: '10 min' },
            { id: 'investment-instruments', title: 'Investment Instruments', duration: '12 min' },
            { id: 'term-sheet', title: 'Term Sheet Jargon', duration: '15 min' },
        ],
    },
    {
        id: 5,
        title: 'Intellectual Property',
        description: 'Protect what you build',
        color: '#ec4899',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        lessons: [
            { id: 'trademarking', title: 'Trademarking Your Brand', duration: '10 min' },
            { id: 'patents-copyrights', title: 'Patents & Copyrights', duration: '12 min' },
        ],
    },
    {
        id: 6,
        title: 'Hiring & Human Resources',
        description: 'Build your dream team',
        color: '#06b6d4',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        lessons: [
            { id: 'salary-ctc', title: 'Structuring Salary (CTC)', duration: '8 min' },
            { id: 'esops', title: 'ESOPs: The Golden Handcuff', duration: '12 min' },
            { id: 'consultant-employee', title: 'Consultant vs Employee', duration: '7 min' },
        ],
    },
    {
        id: 7,
        title: 'Growth & Marketing',
        description: 'Scale your business',
        color: '#ef4444',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>,
        lessons: [
            { id: 'b2b-sales', title: 'B2B Sales in India', duration: '10 min' },
            { id: 'whatsapp-marketing', title: 'WhatsApp Marketing', duration: '8 min' },
            { id: 'influencer-marketing', title: 'Influencer Marketing on a Budget', duration: '9 min' },
        ],
    },
    {
        id: 8,
        title: 'Exits & Winding Up',
        description: 'Know when and how to exit',
        color: '#64748b',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>,
        lessons: [
            { id: 'strike-off', title: 'Strike Off (FTE)', duration: '10 min' },
        ],
    },
];

export const defaultContent = (title) => ({
    title,
    sections: [
        { id: 'intro', title: 'Introduction', type: 'intro' },
        { id: 'content', title: 'Coming Soon', type: 'main' },
    ],
    content: `
<section id="intro">
<h2>${title}</h2>
<p>This lesson is coming soon! We're creating comprehensive, easy-to-understand content for first-time founders.</p>
</section>
`,
});

export const lessonContent = {
    'choosing-structure': {
        title: 'Choosing the Right Structure',
        sections: [
            { id: 'intro', title: 'The Big Decision', type: 'intro' },
            { id: 'structures', title: 'Business Structures', type: 'main' },
            { id: 'comparison', title: 'Quick Comparison', type: 'main' },
            { id: 'recommendation', title: 'Our Recommendation', type: 'main' },
            { id: 'tips', title: 'Pro Tips', type: 'tip' },
        ],
        content: `
<section id="intro">
<h2>The Big Decision</h2>
<p>One of the first decisions you'll make as a founder is choosing your business structure. This choice impacts everything from taxes to fundraising to personal liability.</p>
<p>Getting this right from the start saves you significant time and money down the road.</p>
</section>

<section id="structures">
<h2>Common Business Structures in India</h2>

<div class="structure-card">
<h3>1. Sole Proprietorship</h3>
<p><strong>Best for:</strong> Freelancers, small service providers</p>
<ul>
<li><span class="pro">✓</span> Easiest to set up, minimal compliance</li>
<li><span class="con">✗</span> Unlimited personal liability</li>
<li><span class="con">✗</span> Can't raise equity funding</li>
</ul>
</div>

<div class="structure-card">
<h3>2. Partnership Firm</h3>
<p><strong>Best for:</strong> Professional services, family businesses</p>
<ul>
<li><span class="pro">✓</span> Simple registration, pass-through taxation</li>
<li><span class="con">✗</span> Unlimited liability</li>
<li><span class="con">✗</span> Difficult to scale</li>
</ul>
</div>

<div class="structure-card">
<h3>3. Limited Liability Partnership (LLP)</h3>
<p><strong>Best for:</strong> Professional services, consulting firms</p>
<ul>
<li><span class="pro">✓</span> Limited liability protection</li>
<li><span class="pro">✓</span> Less compliance than Pvt Ltd</li>
<li><span class="con">✗</span> Can't raise equity easily</li>
</ul>
</div>

<div class="structure-card highlight">
<h3>4. Private Limited Company ⭐</h3>
<p><strong>Best for:</strong> Startups looking to scale, raise funding</p>
<ul>
<li><span class="pro">✓</span> Limited liability protection</li>
<li><span class="pro">✓</span> Can raise VC/Angel funding</li>
<li><span class="pro">✓</span> Higher credibility</li>
<li><span class="con">✗</span> Higher compliance requirements</li>
</ul>
</div>
</section>

<section id="comparison">
<h2>Quick Comparison</h2>
<table>
<tr><th>Factor</th><th>Proprietorship</th><th>Partnership</th><th>LLP</th><th>Pvt Ltd</th></tr>
<tr><td>Liability Protection</td><td>❌</td><td>❌</td><td>✅</td><td>✅</td></tr>
<tr><td>VC/Angel Funding</td><td>❌</td><td>❌</td><td>❌</td><td>✅</td></tr>
<tr><td>Compliance Cost</td><td>Low</td><td>Low</td><td>Medium</td><td>High</td></tr>
<tr><td>Best For</td><td>Solo</td><td>2+ Partners</td><td>Services</td><td>Scalable Startups</td></tr>
</table>
</section>

<section id="recommendation">
<h2>Our Recommendation</h2>
<div class="recommendation-box">
<p><strong>If you're building a startup that might raise funding:</strong><br/>Go with <strong>Private Limited Company</strong>. The extra compliance is worth the flexibility.</p>
</div>
<div class="recommendation-box alt">
<p><strong>If you're a service business with partners:</strong><br/><strong>LLP</strong> offers good protection with lower compliance.</p>
</div>
</section>

<section id="tips">
<h2>Pro Tips</h2>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>You can always convert from one structure to another later, but it's easier to start right.</p>
</div>
</section>
        `,
    },
    'incorporation-process': {
        title: 'The Incorporation Process & Costs',
        sections: [
            { id: 'steps', title: 'Step-by-Step Guide', type: 'main' },
            { id: 'costs', title: 'Estimated Costs', type: 'main' },
            { id: 'timeline', title: 'Expected Timeline', type: 'main' },
            { id: 'tips', title: 'Expert Tips', type: 'tip' },
        ],
        content: `
<section id="steps">
<h2>Step-by-Step Incorporation Guide</h2>
<p>For a Private Limited Company, the process is now streamlined via the SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) portal.</p>
<div class="checklist">
<label><input type="checkbox" /> <strong>Step 1: Obtain DSC</strong> (Digital Signature Certificate) for all proposed directors.</label>
<label><input type="checkbox" /> <strong>Step 2: Reserve Company Name</strong> through the RUN (Reserve Unique Name) service.</label>
<label><input type="checkbox" /> <strong>Step 3: Draft MoA and AoA</strong> (Memorandum and Articles of Association).</label>
<label><input type="checkbox" /> <strong>Step 4: File SPICe+ Form</strong> for Incorporation, DIN, PAN, and TAN.</label>
<label><input type="checkbox" /> <strong>Step 5: Get Certificate of Incorporation</strong> from the ROC.</label>
</div>
</section>

<section id="costs">
<h2>Estimated Costs</h2>
<table>
<tr><th>Item</th><th>Cost (Approx.)</th></tr>
<tr><td>DSC (2 Directors)</td><td>₹2,000 - ₹3,000</td></tr>
<tr><td>Name Approval (RUN)</td><td>₹1,000</td></tr>
<tr><td>Govt. Stamp Duty</td><td>Varies by State (₹2,000 - ₹10,000)</td></tr>
<tr><td>Professional Fees</td><td>₹5,000 - ₹15,000</td></tr>
<tr><td><strong>Total Range</strong></td><td><strong>₹10,000 - ₹30,000</strong></td></tr>
</table>
</section>

<section id="timeline">
<h2>Expected Timeline</h2>
<div class="formula">Typical Duration: 7 to 15 Working Days</div>
<p>The timeline largely depends on how quickly name approval and document verification by the ROC happens.</p>
</section>

<section id="tips">
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Choose at least 2 unique names for reservation to avoid rejection. Avoid generic words like 'Global', 'Solutions', or 'Technologies' as names.</p>
</div>
</section>
        `,
    },
    'dipp-recognition': {
        title: 'DIPP Recognition & Startup India',
        sections: [
            { id: 'benefits', title: 'Key Benefits', type: 'main' },
            { id: 'eligibility', title: 'Eligibility Criteria', type: 'main' },
            { id: 'process', title: 'How to Apply', type: 'main' },
        ],
        content: `
<section id="benefits">
<h2>Benefits of Startup India Recognition</h2>
<div class="alert-box">
<strong>Top Perks:</strong>
<ul>
<li><strong>Income Tax Holiday:</strong> Tax exemption for 3 consecutive years.</li>
<li><strong>Angel Tax Exemption:</strong> Vital for early-stage funding.</li>
<li><strong>Self-Certification:</strong> Easier compliance for labor and environmental laws.</li>
<li><strong>Fast-Track Patents:</strong> 80% rebate in patent filing fees.</li>
</ul>
</div>
</section>

<section id="eligibility">
<h2>Eligibility Criteria</h2>
<div class="checklist">
<label><input type="checkbox" /> Entity must be a Pvt Ltd, LLP, or Partnership.</label>
<label><input type="checkbox" /> Registered for less than 10 years.</label>
<label><input type="checkbox" /> Turnover under ₹100 Crores in any financial year.</label>
<label><input type="checkbox" /> Working towards innovation or improvement of products/services.</label>
</div>
</section>

<section id="process">
<h2>How to Apply</h2>
<p>Register on the <strong>Startup India Hub</strong> and submit the application for DPIIT (formerly DIPP) recognition with a brief write-up on your startup's innovative nature.</p>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Make sure your "innovation statement" clearly highlights how you are solving a problem or making a process better.</p>
</div>
</section>
        `,
    },
    'cofounders': {
        title: 'Co-Founders & Partner Addition',
        sections: [
            { id: 'agreement', title: 'Co-Founder Agreement', type: 'main' },
            { id: 'addition', title: 'Adding a Partner', type: 'main' },
            { id: 'equity', title: 'Equity Vesting', type: 'main' },
        ],
        content: `
<section id="agreement">
<h2>The Co-Founder Agreement</h2>
<p>Don't rely on verbal promises. A co-founder agreement is a legal contract that outlines roles, equity, and what happens if someone leaves.</p>
<div class="alert-box">
<strong>Must-haves:</strong> Equity distribution, IP ownership, decision-making powers, and "shotgun" clauses.
</div>
</section>

<section id="addition">
<h2>Adding a New Partner</h2>
<p>In a Pvt Ltd company, adding a partner involves issuing new shares or transferring existing ones. You'll need a Board Resolution and filing of Form PAS-3 or SH-4.</p>
</section>

<section id="equity">
<h2>Equity Vesting</h2>
<div class="formula">Standard: 4-Year Vesting with a 1-Year Cliff</div>
<p>Vesting ensures partners "earn" their equity over time, protecting the company from early exits.</p>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Co-founder disputes are a top reason startups fail. Spend time on this early.</p>
</div>
</section>
        `,
    },
    'shop-establishment': {
        title: 'Shop & Establishment Act',
        sections: [
            { id: 'what', title: 'What is it?', type: 'main' },
            { id: 'necessity', title: 'Is it Mandatory?', type: 'main' },
            { id: 'rules', title: 'Key Regulations', type: 'main' },
        ],
        content: `
<section id="what">
<h2>The Shop & Establishment License</h2>
<p>Regulated by state governments, this license (commonly called <em>Gumasta</em> in some states) is mandatory for any commercial establishment or shop.</p>
</section>

<section id="necessity">
<h2>Is it Mandatory?</h2>
<p>Yes, for almost any physical office or business premise. It's often the first document banks ask for when opening a Current Account if other registrations aren't ready.</p>
</section>

<section id="rules">
<h2>Key Regulations Covered</h2>
<ul>
<li>Working hours & overtime rules.</li>
<li>Opening and closing times.</li>
<li>Spread-over of work.</li>
<li>Paid leaves and holiday policies.</li>
</ul>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>In many states like Karnataka and Delhi, the process is now fully online and yields an e-certificate within days.</p>
</div>
</section>
        `,
    },
    'unit-economics': {
        title: 'Unit Economics 101',
        sections: [
            { id: 'intro', title: 'Understanding Your Numbers', type: 'intro' },
            { id: 'cac', title: 'Customer Acquisition Cost', type: 'main' },
            { id: 'ltv', title: 'Lifetime Value', type: 'main' },
            { id: 'ratio', title: 'The Golden Ratio', type: 'main' },
            { id: 'tips', title: 'Action Items', type: 'tip' },
        ],
        content: `
<section id="intro">
<h2>Understanding Your Business Math</h2>
<p>Unit economics tells you if your business model actually works. It's the math behind each transaction that determines if you're building a sustainable business or burning money.</p>
</section>

<section id="cac">
<h2>Customer Acquisition Cost (CAC)</h2>
<p><strong>What you spend to get one customer</strong></p>
<div class="formula">CAC = Total Marketing & Sales Cost ÷ Number of New Customers</div>
<div class="example-box">
<strong>Example:</strong>
<ul>
<li>Spent ₹1,00,000 on marketing</li>
<li>Got 100 new customers</li>
<li>CAC = ₹1,000 per customer</li>
</ul>
</div>
</section>

<section id="ltv">
<h2>Lifetime Value (LTV)</h2>
<p><strong>Total revenue from one customer over time</strong></p>
<div class="formula">LTV = Average Revenue per User × Average Customer Lifetime</div>
<div class="example-box">
<strong>Example:</strong>
<ul>
<li>ARPU = ₹500/month</li>
<li>Average lifetime = 24 months</li>
<li>LTV = ₹12,000 (Gross Margin adjusted)</li>
</ul>
</div>
</section>

<section id="ratio">
<h2>The Golden Ratio: LTV/CAC</h2>
<table>
<tr><th>Ratio</th><th>What it means</th></tr>
<tr><td class="bad">< 1:1</td><td>🔴 Losing money on each customer</td></tr>
<tr><td class="warning">1:1 to 3:1</td><td>🟡 Barely profitable, needs work</td></tr>
<tr><td class="good">3:1 to 5:1</td><td>🟢 Healthy, sustainable business</td></tr>
<tr><td class="great">> 5:1</td><td>🔵 Great efficiency, scale faster!</td></tr>
</table>
</section>

<section id="tips">
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>LTV should ideally be calculated based on Contribution Margin, not just Revenue.</p>
</div>
</section>
        `,
    },
    'burn-rate': {
        title: 'Burn Rate & Runway',
        sections: [
            { id: 'definitions', title: 'Key Definitions', type: 'main' },
            { id: 'calculation', title: 'How to Calculate', type: 'main' },
            { id: 'strategies', title: 'Managing Burn', type: 'main' },
        ],
        content: `
<section id="definitions">
<h2>Burn Rate & Runway</h2>
<p><strong>Gross Burn:</strong> Total cash expenses per month.<br/>
<strong>Net Burn:</strong> Difference between expenses and revenue (if revenue < expenses).</p>
<p><strong>Runway:</strong> How many months you have before you run out of cash.</p>
</section>

<section id="calculation">
<h2>Calculating Runway</h2>
<div class="formula">Runway = Cash in Bank ÷ Monthly Net Burn</div>
<div class="example-box">
<strong>Example:</strong>
<ul>
<li>Cash in Bank: ₹50,00,000</li>
<li>Monthly Expenses: ₹10,00,000</li>
<li>Monthly Revenue: ₹5,00,000</li>
<li>Net Burn: ₹5,00,000</li>
<li><strong>Runway: 10 Months</strong></li>
</ul>
</div>
</section>

<section id="strategies">
<h2>Managing Your Burn</h2>
<div class="checklist">
<label><input type="checkbox" /> Automate processes to reduce headcount costs.</label>
<label><input type="checkbox" /> Move to variable costs (freelancers) instead of fixed (full-time).</label>
<label><input type="checkbox" /> Focus on high-margin products/services.</label>
</div>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>A "safe" runway for a seed-stage startup is usually 18-24 months.</p>
</div>
</section>
        `,
    },
    'cash-flows': {
        title: 'Projecting Cash Flows',
        sections: [
            { id: 'importance', title: 'Why Project?', type: 'main' },
            { id: 'method', title: 'Direct vs Indirect', type: 'main' },
            { id: 'template', title: 'Essential Components', type: 'main' },
        ],
        content: `
<section id="importance">
<h2>Cash is King, but Profit is Queen</h2>
<p>Many profitable businesses fail because they run out of cash. Cash flow is about the <em>timing</em> of money in and out.</p>
</section>

<section id="method">
<h2>Methods of Projection</h2>
<ul>
<li><strong>Direct Method:</strong> Listing all actual cash receipts and payments.</li>
<li><strong>Indirect Method:</strong> Starting with Net Profit and adjusting for non-cash items (like depreciation).</li>
</ul>
</section>

<section id="template">
<h2>What to Track</h2>
<div class="checklist">
<label><input type="checkbox" /> Accounts Receivable (Money coming in).</label>
<label><input type="checkbox" /> Accounts Payable (Bills to pay).</label>
<label><input type="checkbox" /> Tax liabilities (GST, TDS payments).</label>
<label><input type="checkbox" /> Seasonal dips in revenue.</label>
</div>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Always keep a 10-15% buffer in your cash flow projections for unexpected expenses.</p>
</div>
</section>
        `,
    },
    'bootstrapping': {
        title: 'Bootstrapping Smartly',
        sections: [
            { id: 'mindset', title: 'The Bootstrapper Mindset', type: 'main' },
            { id: 'tactics', title: 'Frugality Tactics', type: 'main' },
            { id: 'when', title: 'When to Raise?', type: 'main' },
        ],
        content: `
<section id="mindset">
<h2>Building Without VC Money</h2>
<p>Bootstrapping means growing your business using only your own savings and the cash generated from operations.</p>
</section>

<section id="tactics">
<h2>Frugality Tactics</h2>
<div class="checklist">
<label><input type="checkbox" /> <strong>Barter Services:</strong> Trade your software for a marketing agency's help.</label>
<label><input type="checkbox" /> <strong>Remote Work:</strong> Save on expensive office rent in Tier-1 cities.</label>
<label><input type="checkbox" /> <strong>MVP First:</strong> Build only what's necessary to get a paying customer.</label>
</div>
</section>

<section id="when">
<h2>When to Stop Bootstrapping?</h2>
<p>Raise outside capital only when you have found Product-Market Fit (PMF) and need to "pour fuel on the fire" to scale rapidly.</p>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Profitability is the ultimate independence. A bootstrapped, profitable business has the most options.</p>
</div>
</section>
        `,
    },
    'gst-basics': {
        title: 'GST Basics for Founders',
        sections: [
            { id: 'intro', title: 'What is GST?', type: 'intro' },
            { id: 'registration', title: 'When to Register', type: 'main' },
            { id: 'rates', title: 'GST Rates', type: 'main' },
            { id: 'itc', title: 'Input Tax Credit', type: 'main' },
            { id: 'tips', title: 'Pro Tips', type: 'tip' },
        ],
        content: `
<section id="intro">
<h2>GST Demystified</h2>
<p>GST (Goods and Services Tax) is a unified indirect tax that replaced multiple taxes like VAT, Service Tax, Excise, etc. Understanding GST is crucial for every Indian business.</p>
</section>

<section id="registration">
<h2>When Do You Need GST?</h2>
<div class="alert-box">
<strong>Mandatory Registration:</strong>
<ul>
<li>Turnover exceeds ₹40 lakh (₹20 lakh for services)</li>
<li>Selling on e-commerce platforms.</li>
<li>Making inter-state supplies.</li>
</ul>
</div>
</section>

<section id="rates">
<h2>GST Rates</h2>
<table>
<tr><th>Category</th><th>Rate</th></tr>
<tr><td>Essential items</td><td>0-5%</td></tr>
<tr><td>Standard goods/services</td><td>12-18%</td></tr>
<tr><td>Luxury items</td><td>28%</td></tr>
</table>
</section>

<section id="itc">
<h2>Input Tax Credit (ITC)</h2>
<div class="formula">GST Payable = Tax Collected on Sales − Tax Paid on Purchases</div>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Claim Input Tax Credit (ITC) on everything from laptops to office furniture to reduce your tax bill.</p>
</div>
</section>
        `,
    },
    'tds': {
        title: 'TDS (Tax Deducted at Source)',
        sections: [
            { id: 'what', title: 'What is TDS?', type: 'main' },
            { id: 'rates', title: 'Common Rates', type: 'main' },
            { id: 'compliance', title: 'Founders Checklist', type: 'main' },
        ],
        content: `
<section id="what">
<h2>TDS: Tax Deducted at Source</h2>
<p>TDS is a mechanism where the person responsible for making specified payments (like salary, rent, professional fees) deducts a certain percentage of tax before paying the recipient.</p>
</section>

<section id="rates">
<h2>Common TDS Rates</h2>
<table>
<tr><th>Payment Type</th><th>Section</th><th>Rate (Approx)</th></tr>
<tr><td>Salaries</td><td>192</td><td>As per Slab</td></tr>
<tr><td>Professional Fees</td><td>194J</td><td>10% (some 2%)</td></tr>
<tr><td>Contractors</td><td>194C</td><td>1% or 2%</td></tr>
<tr><td>Rent</td><td>194I</td><td>10% (on physical property)</td></tr>
</table>
</section>

<section id="compliance">
<h2>Founder's Compliance Checklist</h2>
<div class="checklist">
<label><input type="checkbox" /> <strong>Obtain TAN:</strong> Mandatory for deducting/paying TDS.</label>
<label><input type="checkbox" /> <strong>Deduct & Deposit:</strong> Deduct monthly, deposit by 7th of next month.</label>
<label><input type="checkbox" /> <strong>Quarterly Filing:</strong> File TDS returns every quarter.</label>
<label><input type="checkbox" /> <strong>Issue Certificates:</strong> Provide Form 16/16A to recipients.</label>
</div>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Late payment of TDS attracts 1.5% interest per month. Don't miss the 7th! </p>
</div>
</section>
        `,
    },
    'pf-esi': {
        title: 'PF & ESI Compliance',
        sections: [
            { id: 'pf', title: 'Provident Fund (EPF)', type: 'main' },
            { id: 'esi', title: 'Employee State Insurance', type: 'main' },
            { id: 'thresholds', title: 'Thresholds', type: 'main' },
        ],
        content: `
<section id="pf">
<h2>Provident Fund (EPF)</h2>
<p>EPF is a retirement benefit scheme. The employer and employee both contribute 12% of the basic salary to the EPFO.</p>
</section>

<section id="esi">
<h2>Employee State Insurance (ESI)</h2>
<p>ESI provides health and social security benefits to employees. It is mandatory for establishments with low-wage employees.</p>
</section>

<section id="thresholds">
<h2>When are they Mandatory?</h2>
<table>
<tr><th>Scheme</th><th>Employee Threshold</th><th>Salary Threshold</th></tr>
<tr><td><strong>EPF</strong></td><td>20+ Employees</td><td>Up to ₹15,000 basic</td></tr>
<tr><td><strong>ESI</strong></td><td>10+ Employees</td><td>Up to ₹21,000 gross</td></tr>
</table>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Even if you have fewer than 20 employees, you can opt for <strong>Voluntary PF Registration</strong> to provide better benefits to your team.</p>
</div>
</section>
        `,
    },
    'roc-filings': {
        title: 'ROC Annual Filings',
        sections: [
            { id: 'what', title: 'Mandatory Filings', type: 'main' },
            { id: 'forms', title: 'Annual Forms', type: 'main' },
            { id: 'penalties', title: 'Penalties for Delay', type: 'main' },
        ],
        content: `
<section id="what">
<h2>ROC Compliance</h2>
<p>Every Private Limited Company must file annual documents with the Registrar of Companies (ROC) to maintain its "Active" status.</p>
</section>

<section id="forms">
<h2>Key Annual Forms</h2>
<ul>
<li><strong>Form AOC-4:</strong> Filing of Financial Statements (Balance Sheet, P&L).</li>
<li><strong>Form MGT-7:</strong> Annual Return (details of shareholders, directors).</li>
<li><strong>Form ADT-1:</strong> Appointment of Statutory Auditor.</li>
</ul>
</section>

<section id="penalties">
<h2>The Cost of Delay</h2>
<div class="alert-box">
<strong>Penalties:</strong> ₹100 per day per form is the standard late fee. This can quickly add up to lakhs if ignored.
</div>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Even if your company had zero business during the year, you <strong>must</strong> file nil returns to avoid massive penalties and director disqualification.</p>
</div>
</section>
        `,
    },
    'funding-landscape': {
        title: 'The Funding Landscape',
        sections: [
            { id: 'stages', title: 'Funding Stages', type: 'main' },
            { id: 'sources', title: 'Sources of Capital', type: 'main' },
            { id: 'metrics', title: 'What Investors Seek', type: 'main' },
        ],
        content: `
<section id="stages">
<h2>The Venture Journey</h2>
<p><strong>Pre-Seed:</strong> Idea/MVP stage. Friends, Family, and Incubators.</p>
<p><strong>Seed:</strong> Early traction. Angels and Seed Funds.</p>
<p><strong>Series A:</strong> Product-Market Fit. Institutional VCs.</p>
</section>

<section id="sources">
<h2>Sources of Capital</h2>
<div class="checklist">
<label><input type="checkbox" /> <strong>Angel Investors:</strong> High-net-worth individuals.</label>
<label><input type="checkbox" /> <strong>Venture Capital:</strong> Professional money managers.</label>
<label><input type="checkbox" /> <strong>Accelerators:</strong> Program-based (Y-Combinator, Antler).</label>
<label><input type="checkbox" /> <strong>Venture Debt:</strong> Non-dilutive capital (Trifecta, Alteria).</label>
</div>
</section>

<section id="metrics">
<h2>What Investors Look For</h2>
<ul>
<li><strong>Team:</strong> Experience, complementarity, and grit.</li>
<li><strong>TAM (Total Addressable Market):</strong> Is the prize big enough?</li>
<li><strong>Traction:</strong> MoM (Month-over-Month) growth in key metrics.</li>
</ul>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Fundraising is a full-time job. Expect it to take 3-6 months from pitch to bank transfer.</p>
</div>
</section>
        `,
    },
    'investment-instruments': {
        title: 'Investment Instruments',
        sections: [
            { id: 'equity', title: 'Equity Shares', type: 'main' },
            { id: 'ccps', title: 'CCPS (The VC Choice)', type: 'main' },
            { id: 'safe', title: 'SAFE / iSAFE Notes', type: 'main' },
        ],
        content: `
<section id="equity">
<h2>Equity Shares</h2>
<p>Standard ownership shares. Most founders start with these. Dividends and voting rights are tied to these shares.</p>
</section>

<section id="ccps">
<h2>CCPS (Compulsory Convertible Preference Shares)</h2>
<p>The standard instrument for VCs in India. They offer preferential rights (like liquidation preference) and convert to equity at a future date or event.</p>
</section>

<section id="safe">
<h2>iSAFE (India Simple Agreement for Future Equity)</h2>
<p>Inspired by YC's SAFE, iSAFE is a convertible note that isn't debt. It's an agreement to issue equity during the next funding round.</p>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Convertible notes (like iSAFE) are faster and cheaper to execute for seed rounds because you don't have to fix a valuation immediately.</p>
</div>
</section>
        `,
    },
    'term-sheet': {
        title: 'Term Sheet Jargon',
        sections: [
            { id: 'valuation', title: 'Valuation Jargon', type: 'main' },
            { id: 'rights', title: 'Veto & Control Rights', type: 'main' },
            { id: 'exit', title: 'Liquidation Preference', type: 'main' },
        ],
        content: `
<section id="valuation">
<h2>Valuation Basics</h2>
<p><strong>Pre-money Valuation:</strong> Value before investment.<br/>
<strong>Post-money Valuation:</strong> Pre-money + Investment amount.</p>
<div class="formula">Founder Dilution % = Investment ÷ Post-money Valuation</div>
</section>

<section id="rights">
<h2>Veto & Control Rights</h2>
<p>Investors often ask for "Affirmative Voting Rights." This means certain decisions (like selling the company or raising more debt) cannot be made without their consent.</p>
</section>

<section id="exit">
<h2>Liquidation Preference</h2>
<p>Determines who gets paid first during an exit. A <strong>1x Non-participating</strong> preference is the founder-friendly market standard.</p>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Never sign a term sheet without a lawyer or a professional consultant reviewing the "small print" on governance and exit clauses.</p>
</div>
</section>
        `,
    },
    'trademarking': {
        title: 'Trademarking Your Brand',
        sections: [
            { id: 'why', title: 'Why Trademark?', type: 'main' },
            { id: 'classes', title: 'TM Classes', type: 'main' },
            { id: 'process', title: 'The TM Process', type: 'main' },
        ],
        content: `
<section id="why">
<h2>Protecting Your Identity</h2>
<p>A trademark protects your brand name, logo, or slogan from being copied by competitors. In India, you can use the ™ symbol as soon as you file.</p>
</section>

<section id="classes">
<h2>Picking the Right Class</h2>
<p>Goods and services are categorized into 45 classes. For example, Class 9 is for software/apps, and Class 35 is for business services.</p>
</section>

<section id="process">
<h2>The Registration Journey</h2>
<div class="checklist">
<label><input type="checkbox" /> <strong>Search:</strong> Ensure the name isn't already taken.</label>
<label><input type="checkbox" /> <strong>Application:</strong> File with the Trademark Registry.</label>
<label><input type="checkbox" /> <strong>Examination:</strong> Govt review for objections.</label>
<label><input type="checkbox" /> <strong>Journal Publication:</strong> 4-month window for public opposition.</label>
<label><input type="checkbox" /> <strong>Registration:</strong> Issuance of certificate (valid for 10 years).</label>
</div>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Domain names do not equal Trademarks. Just because you have the .com doesn't mean you own the brand legally.</p>
</div>
</section>
        `,
    },
    'patents-copyrights': {
        title: 'Patents & Copyrights',
        sections: [
            { id: 'copyright', title: 'Copyright', type: 'main' },
            { id: 'patent', title: 'Patents', type: 'main' },
            { id: 'software', title: 'Software Protection', type: 'main' },
        ],
        content: `
<section id="copyright">
<h2>Copyright</h2>
<p>Protects original works of authorship like marketing brochures, website content, and source code. Protection is automatic but registration helps in legal disputes.</p>
</section>

<section id="patent">
<h2>Patents</h2>
<p>Protects inventions that are new, non-obvious, and useful. Patenting is expensive and take years, but it provides a massive competitive moat.</p>
</section>

<section id="software">
<h2>Can you Patent Software in India?</h2>
<p>In India, software <em>per se</em> is not patentable. However, software that produces a "technical effect" or is tied to hardware can often be patented.</p>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Startups get up to 80% rebate on patent filing fees if they are Startup India recognized!</p>
</div>
</section>
        `,
    },
    'salary-ctc': {
        title: 'Structuring Salary (CTC)',
        sections: [
            { id: 'components', title: 'CTC Components', type: 'main' },
            { id: 'tax', title: 'Tax Optimization', type: 'main' },
            { id: 'tips', title: 'Hiring Tips', type: 'tip' },
        ],
        content: `
<section id="components">
<h2>Cost to Company (CTC) Breakdown</h2>
<ul>
<li><strong>Basic Salary:</strong> Usually 40-50% of CTC.</li>
<li><strong>HRA:</strong> 40-50% of Basic.</li>
<li><strong>Special Allowance:</strong> The balancing figure.</li>
<li><strong>Retirals:</strong> Employer's PF and Gratuity.</li>
</ul>
</section>

<section id="tax">
<h2>Structuring for Tax Efficiency</h2>
<p>Help your employees take home more by including tax-free components like:</p>
<div class="checklist">
<label><input type="checkbox" /> Standard Deduction (₹50k).</label>
<label><input type="checkbox" /> Professional Tax (varies by state).</label>
<label><input type="checkbox" /> LTA (Leave Travel Allowance).</label>
</div>
</section>

<section id="tips">
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Don't just offer a high CTC. Explain the "In-hand" vs "CTC" to candidates to manage expectations.</p>
</div>
<div class="tip-box">
<span class="tip-icon">🔧</span>
<p>Plan your budget with our <a href="/tools">Employee Cost Calculator</a>.</p>
</div>
</section>
        `,
    },
    'esops': {
        title: 'ESOPs: The Golden Handcuff',
        sections: [
            { id: 'basics', title: 'ESOP Basics', type: 'main' },
            { id: 'terms', title: 'Grant, Vest & Exercise', type: 'main' },
            { id: 'design', title: 'Designing a Pool', type: 'main' },
        ],
        content: `
<section id="basics">
<h2>What are ESOPs?</h2>
<p>Employee Stock Option Plans allow employees to buy company shares at a pre-set price, usually much lower than the market value, after a certain period.</p>
</section>

<section id="terms">
<h2>Key Terms</h2>
<p><strong>Grant:</strong> Offering the options to an employee.<br/>
<strong>Vesting:</strong> The period an employee must wait before they can "own" the options.<br/>
<strong>Exercise:</strong> When the employee actually buys the shares.</p>
<div class="formula">Standard: 4-Year Vesting with a 1-Year Cliff</div>
</section>

<section id="design">
<h2>The ESOP Pool</h2>
<p>Most startups set aside 10-15% of their total equity for an ESOP pool to attract top talent.</p>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>ESOPs are powerful motivators. They turn employees into owners who care about the long-term valuation of your company.</p>
</div>
</section>
        `,
    },
    'consultant-employee': {
        title: 'Consultant vs Employee',
        sections: [
            { id: 'diff', title: 'Key Differences', type: 'main' },
            { id: 'legal', title: 'Legal Risks', type: 'main' },
            { id: 'decision', title: 'When to Hire Which?', type: 'main' },
        ],
        content: `
<section id="diff">
<h2>Employment vs. Retainership</h2>
<table>
<tr><th>Feature</th><th>Employee</th><th>Consultant</th></tr>
<tr><td>Compliance</td><td>PF, ESI, Gratuity</td><td>None (only TDS)</td></tr>
<tr><td>Control</td><td>High (work hours, etc)</td><td>Low (deliverables based)</td></tr>
<tr><td>Tax (TDS)</td><td>Salary Slabs</td><td>10% (Section 194J)</td></tr>
</table>
</section>

<section id="legal">
<h2>The "Deemed Employee" Risk</h2>
<p>If a consultant works exclusively for you, uses your laptop, and follows your work hours, labor courts may treat them as an employee, making you liable for back-dated PF/ESI.</p>
</section>

<section id="decision">
<h2>Decision Matrix</h2>
<div class="recommendation-box">
<p><strong>Hire as Employee:</strong> For core functions (Product, Sales) where you need full-time commitment and control.</p>
</div>
<div class="recommendation-box alt">
<p><strong>Hire as Consultant:</strong> For specialized projects (Legal, Design, Research) or temporary needs.</p>
</div>
</section>
        `,
    },
    'b2b-sales': {
        title: 'B2B Sales in India',
        sections: [
            { id: 'process', title: 'The B2B Funnel', type: 'main' },
            { id: 'stakeholders', title: 'Managing Stakeholders', type: 'main' },
            { id: 'negotiation', title: 'Negotiation Tips', type: 'tip' },
        ],
        content: `
<section id="process">
<h2>The Long Game</h2>
<p>B2B sales in India are relationship-driven and often involve a long sales cycle (3-9 months).</p>
<div class="formula">B2B Sales = Trust + ROI + Persistence</div>
</section>

<section id="stakeholders">
<h2>Who are you selling to?</h2>
<ul>
<li><strong>The Champion:</strong> Your user who loves the product.</li>
<li><strong>The Economic Buyer:</strong> The decision-maker (CEO/CFO).</li>
<li><strong>The Gatekeeper:</strong> Procurement or IT teams.</li>
</ul>
</section>

<section id="negotiation">
<h2>Negotiation Tactics</h2>
<div class="checklist">
<label><input type="checkbox" /> Focus on 'Value' over 'Price'.</label>
<label><input type="checkbox" /> Offer tiered pricing (Basic vs Pro).</label>
<label><input type="checkbox" /> Use case studies from similar Indian firms as social proof.</label>
</div>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>In India, "No" often means "Not right now" or "I need more conviction." Don't give up too early.</p>
</div>
</section>
        `,
    },
    'whatsapp-marketing': {
        title: 'WhatsApp Marketing',
        sections: [
            { id: 'why', title: 'Why WhatsApp?', type: 'main' },
            { id: 'tools', title: 'Business API vs App', type: 'main' },
            { id: 'etiquette', title: 'Campaign Etiquette', type: 'tip' },
        ],
        content: `
<section id="why">
<h2>The Power of the Green Bubble</h2>
<p>In India, WhatsApp has a 95%+ open rate, compared to ~20% for email. It's where your customers already are.</p>
</section>

<section id="tools">
<h2>API vs. Business App</h2>
<table>
<tr><th>Feature</th><th>Business App</th><th>Business API (WATI/Interakt)</th></tr>
<tr><td>Scale</td><td>Manual / Broadcast lists</td><td>Automated / Bulk messages</td></tr>
<li>Green Tick</td><td>No</td><td>Official verification possible</td></tr>
<li>Automation</td><td>Basic Greeting</td><td>Full Chatbots / Integrations</td></tr>
</table>
</section>

<section id="etiquette">
<h2>Don't be a Spammer</h2>
<div class="tip-box">
<span class="tip-icon">⚠️</span>
<p>If users report your messages as spam, Meta will ban your number. Always include an "Unsubscribe" or "Opt-out" button.</p>
</div>
</section>
        `,
    },
    'influencer-marketing': {
        title: 'Influencer Marketing on a Budget',
        sections: [
            { id: 'micro', title: 'The Micro Advantage', type: 'main' },
            { id: 'brief', title: 'Creating a Brief', type: 'main' },
            { id: 'metrics', title: 'Measuring ROI', type: 'main' },
        ],
        content: `
<section id="micro">
<h2>The Micro-Influencer Advantage</h2>
<p>Micro-influencers (10k-50k followers) often have higher engagement rates and are much more affordable than "Celebs."</p>
</section>

<section id="brief">
<h2>What to include in your Brief</h2>
<div class="checklist">
<label><input type="checkbox" /> <strong>The Hook:</strong> First 3 seconds of the video.</label>
<label><input type="checkbox" /> <strong>Key Message:</strong> One thing they MUST say.</label>
<label><input type="checkbox" /> <strong>Call to Action (CTA):</strong> Link in bio / Coupon code.</label>
</div>
</section>

<section id="metrics">
<h2>ROI Tracking</h2>
<p>Use custom UTM links or unique discount codes for each influencer to track exactly who is driving sales.</p>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>Barter deals (Product for Post) still work great with hungry micro-influencers.</p>
</div>
</section>
        `,
    },
    'strike-off': {
        title: 'Strike Off (FTE)',
        sections: [
            { id: 'what', title: 'Closing Gracefully', type: 'main' },
            { id: 'process', title: 'The FTE Process', type: 'main' },
            { id: 'consequences', title: 'Post-Closure', type: 'main' },
        ],
        content: `
<section id="what">
<h2>Fast Track Exit (FTE)</h2>
<p>Strike off is a way to close a non-functional company without going through a long and expensive liquidation process.</p>
</section>

<section id="process">
<h2>Step-by-Step Closure</h2>
<div class="checklist">
<label><input type="checkbox" /> Ensure company has NIL assets and liabilities.</label>
<label><input type="checkbox" /> Company must be non-operational for at least 2 years.</label>
<label><input type="checkbox" /> File Form STK-2 with a professional's certification.</label>
<label><input type="checkbox" /> Closing all bank accounts and GST registrations first.</label>
</div>
</section>

<section id="consequences">
<h2>Directors Liability</h2>
<p>Closing a company doesn't excuse directors from prior fraud or massive defaults. However, it does stop the clock on ongoing ROC compliance costs.</p>
<div class="tip-box">
<span class="tip-icon">💡</span>
<p>A "dormant" company is often more expensive than just closing it and starting fresh when you're ready again.</p>
</div>
</section>
        `,
    },
};
