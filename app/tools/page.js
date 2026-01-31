'use client';

import { useState } from 'react';
import styles from './tools.module.css';

export default function ToolsPage() {
    const [activeCalculator, setActiveCalculator] = useState(null);

    // SVG Icons
    const icons = {
        calculator: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="8" y2="10" /><line x1="12" y1="10" x2="12" y2="10" /><line x1="16" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="8" y2="14" /><line x1="12" y1="14" x2="12" y2="14" /><line x1="16" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="8" y2="18" /><line x1="12" y1="18" x2="12" y2="18" /><line x1="16" y1="18" x2="16" y2="18" /></svg>,
        arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>,
        close: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
    };

    const tools = [
        {
            id: 'gst',
            title: 'GST Calculator',
            description: 'Calculates GST amount and total invoice value.',
            whyUse: 'Avoid calculation errors in invoices.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        },
        {
            id: 'burn-rate',
            title: 'Burn Rate Estimator',
            description: 'Tracks your monthly cash outflow.',
            whyUse: 'Understanding burn rate is key to survival.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v10l4 4" /><circle cx="12" cy="14" r="8" /></svg>,
        },
        {
            id: 'runway',
            title: 'Runway Calculator',
            description: 'Estimates how long your cash will last.',
            whyUse: 'Helps you plan when to raise funds.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
        },
        {
            id: 'incorporation',
            title: 'Incorporation Cost',
            description: 'Estimates cost to register a company.',
            whyUse: 'Budget accurately for starting up.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18" /><path d="M9 8h1" /><path d="M9 12h1" /><path d="M9 16h1" /><path d="M14 8h1" /><path d="M14 12h1" /><path d="M14 16h1" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /></svg>,
        },
        {
            id: 'tds',
            title: 'TDS Calculator',
            description: 'Calculates TDS to be deducted.',
            whyUse: 'Ensure compliance with tax laws.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
        },
        {
            id: 'employee-cost',
            title: 'Employee Cost',
            description: 'Estimates CTC vs In-hand salary.',
            whyUse: 'Know the true cost of hiring.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>,
        },
        {
            id: 'breakeven',
            title: 'Break-Even Point',
            description: 'Calculates sales needed to cover costs.',
            whyUse: 'Set sales targets effectively.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
        },
        {
            id: 'roi',
            title: 'ROI Calculator',
            description: 'Calculates percentage return on investment.',
            whyUse: 'Evaluate profitability of decisions.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
        },
        {
            id: 'equity',
            title: 'Equity Dilution',
            description: 'Estimates ownership stake after funding.',
            whyUse: 'Protect your ownership during fundraising.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a7 7 0 0 1 7 7" /><path d="M12 2v10l7-7" /></svg>,
        },
    ];

    // Calculator Components
    const GSTCalculator = () => {
        const [amount, setAmount] = useState('');
        const [rate, setRate] = useState('18');
        const [inclusive, setInclusive] = useState(false);

        const gstRate = parseFloat(rate) / 100;
        const baseAmount = parseFloat(amount) || 0;

        let gstAmount, totalAmount, originalAmount;
        if (inclusive) {
            originalAmount = baseAmount / (1 + gstRate);
            gstAmount = baseAmount - originalAmount;
            totalAmount = baseAmount;
        } else {
            originalAmount = baseAmount;
            gstAmount = baseAmount * gstRate;
            totalAmount = baseAmount + gstAmount;
        }

        return (
            <div className={styles.calculatorContent}>
                <div className={styles.inputGroup}>
                    <label>Amount (₹)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
                </div>
                <div className={styles.inputGroup}>
                    <label>GST Rate (%)</label>
                    <select value={rate} onChange={(e) => setRate(e.target.value)}>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                    </select>
                </div>
                <div className={styles.checkboxGroup}>
                    <label>
                        <input type="checkbox" checked={inclusive} onChange={(e) => setInclusive(e.target.checked)} />
                        Amount includes GST
                    </label>
                </div>
                {amount && (
                    <div className={styles.results}>
                        <div className={styles.resultRow}><span>Base Amount:</span><span>₹{originalAmount.toFixed(2)}</span></div>
                        <div className={styles.resultRow}><span>CGST ({parseFloat(rate) / 2}%):</span><span>₹{(gstAmount / 2).toFixed(2)}</span></div>
                        <div className={styles.resultRow}><span>SGST ({parseFloat(rate) / 2}%):</span><span>₹{(gstAmount / 2).toFixed(2)}</span></div>
                        <div className={`${styles.resultRow} ${styles.resultTotal}`}><span>Total Amount:</span><span>₹{totalAmount.toFixed(2)}</span></div>
                    </div>
                )}
            </div>
        );
    };

    const BurnRateCalculator = () => {
        const [salaries, setSalaries] = useState('');
        const [rent, setRent] = useState('');
        const [marketing, setMarketing] = useState('');
        const [other, setOther] = useState('');

        const total = (parseFloat(salaries) || 0) + (parseFloat(rent) || 0) + (parseFloat(marketing) || 0) + (parseFloat(other) || 0);

        return (
            <div className={styles.calculatorContent}>
                <div className={styles.inputGroup}>
                    <label>Monthly Salaries (₹)</label>
                    <input type="number" value={salaries} onChange={(e) => setSalaries(e.target.value)} placeholder="0" />
                </div>
                <div className={styles.inputGroup}>
                    <label>Rent & Utilities (₹)</label>
                    <input type="number" value={rent} onChange={(e) => setRent(e.target.value)} placeholder="0" />
                </div>
                <div className={styles.inputGroup}>
                    <label>Marketing & Sales (₹)</label>
                    <input type="number" value={marketing} onChange={(e) => setMarketing(e.target.value)} placeholder="0" />
                </div>
                <div className={styles.inputGroup}>
                    <label>Other Expenses (₹)</label>
                    <input type="number" value={other} onChange={(e) => setOther(e.target.value)} placeholder="0" />
                </div>
                <div className={styles.results}>
                    <div className={`${styles.resultRow} ${styles.resultTotal}`}><span>Monthly Burn Rate:</span><span>₹{total.toLocaleString()}</span></div>
                    <div className={styles.resultRow}><span>Daily Burn:</span><span>₹{(total / 30).toFixed(0)}</span></div>
                </div>
            </div>
        );
    };

    const RunwayCalculator = () => {
        const [cash, setCash] = useState('');
        const [burnRate, setBurnRate] = useState('');

        const months = burnRate ? Math.floor((parseFloat(cash) || 0) / parseFloat(burnRate)) : 0;

        return (
            <div className={styles.calculatorContent}>
                <div className={styles.inputGroup}>
                    <label>Current Cash Balance (₹)</label>
                    <input type="number" value={cash} onChange={(e) => setCash(e.target.value)} placeholder="Enter cash balance" />
                </div>
                <div className={styles.inputGroup}>
                    <label>Monthly Burn Rate (₹)</label>
                    <input type="number" value={burnRate} onChange={(e) => setBurnRate(e.target.value)} placeholder="Enter monthly expenses" />
                </div>
                {cash && burnRate && (
                    <div className={styles.results}>
                        <div className={`${styles.resultRow} ${styles.resultTotal}`}><span>Runway:</span><span>{months} Months</span></div>
                        <div className={styles.resultRow}><span>Cash Out Date:</span><span>{new Date(Date.now() + months * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span></div>
                    </div>
                )}
            </div>
        );
    };

    const IncorporationCalculator = () => {
        const [type, setType] = useState('pvt-ltd');
        const [directors, setDirectors] = useState('2');

        const costs = {
            'pvt-ltd': { govt: 7000, professional: 8000, dsc: 1500, name: 'Private Limited' },
            'llp': { govt: 3000, professional: 6000, dsc: 1500, name: 'LLP' },
            'opc': { govt: 5000, professional: 7000, dsc: 1500, name: 'One Person Company' },
            'partnership': { govt: 1000, professional: 4000, dsc: 0, name: 'Partnership Firm' },
        };

        const selected = costs[type];
        const dscCost = selected.dsc * parseInt(directors);
        const total = selected.govt + selected.professional + dscCost;

        return (
            <div className={styles.calculatorContent}>
                <div className={styles.inputGroup}>
                    <label>Company Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="pvt-ltd">Private Limited Company</option>
                        <option value="llp">Limited Liability Partnership (LLP)</option>
                        <option value="opc">One Person Company (OPC)</option>
                        <option value="partnership">Partnership Firm</option>
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label>Number of Directors/Partners</label>
                    <select value={directors} onChange={(e) => setDirectors(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className={styles.results}>
                    <div className={styles.resultRow}><span>Government Fees:</span><span>₹{selected.govt.toLocaleString()}</span></div>
                    <div className={styles.resultRow}><span>Professional Fee (Est.):</span><span>₹{selected.professional.toLocaleString()}</span></div>
                    <div className={styles.resultRow}><span>DSC Cost ({directors} × ₹{selected.dsc}):</span><span>₹{dscCost.toLocaleString()}</span></div>
                    <div className={`${styles.resultRow} ${styles.resultTotal}`}><span>Total Estimated Cost:</span><span>₹{total.toLocaleString()}</span></div>
                </div>
            </div>
        );
    };

    const TDSCalculator = () => {
        const [amount, setAmount] = useState('');
        const [section, setSection] = useState('194C');

        const rates = {
            '194A': { rate: 10, name: 'Interest (194A)' },
            '194C': { rate: 1, name: 'Contractor - Individual (194C)' },
            '194C-Company': { rate: 2, name: 'Contractor - Company (194C)' },
            '194H': { rate: 5, name: 'Commission (194H)' },
            '194I': { rate: 10, name: 'Rent (194I)' },
            '194J': { rate: 10, name: 'Professional Fees (194J)' },
        };

        const selected = rates[section];
        const tds = ((parseFloat(amount) || 0) * selected.rate) / 100;

        return (
            <div className={styles.calculatorContent}>
                <div className={styles.inputGroup}>
                    <label>Payment Amount (₹)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
                </div>
                <div className={styles.inputGroup}>
                    <label>TDS Section</label>
                    <select value={section} onChange={(e) => setSection(e.target.value)}>
                        {Object.entries(rates).map(([key, val]) => (
                            <option key={key} value={key}>{val.name} - {val.rate}%</option>
                        ))}
                    </select>
                </div>
                {amount && (
                    <div className={styles.results}>
                        <div className={styles.resultRow}><span>Payment Amount:</span><span>₹{parseFloat(amount).toLocaleString()}</span></div>
                        <div className={styles.resultRow}><span>TDS Rate:</span><span>{selected.rate}%</span></div>
                        <div className={`${styles.resultRow} ${styles.resultTotal}`}><span>TDS to Deduct:</span><span>₹{tds.toFixed(2)}</span></div>
                        <div className={styles.resultRow}><span>Net Payable:</span><span>₹{(parseFloat(amount) - tds).toFixed(2)}</span></div>
                    </div>
                )}
            </div>
        );
    };

    const EmployeeCostCalculator = () => {
        const [ctc, setCtc] = useState('');

        const annualCtc = parseFloat(ctc) || 0;
        const basic = annualCtc * 0.4;
        const hra = basic * 0.5;
        const pf = Math.min(basic * 0.12, 21600);
        const gratuity = basic * 0.0481;
        const inHand = annualCtc - pf - gratuity - (annualCtc * 0.05);

        return (
            <div className={styles.calculatorContent}>
                <div className={styles.inputGroup}>
                    <label>Annual CTC (₹)</label>
                    <input type="number" value={ctc} onChange={(e) => setCtc(e.target.value)} placeholder="Enter annual CTC" />
                </div>
                {ctc && (
                    <div className={styles.results}>
                        <div className={styles.resultRow}><span>Basic Salary (40%):</span><span>₹{basic.toLocaleString()}/year</span></div>
                        <div className={styles.resultRow}><span>HRA (50% of Basic):</span><span>₹{hra.toLocaleString()}/year</span></div>
                        <div className={styles.resultRow}><span>Employer PF (12%):</span><span>₹{pf.toLocaleString()}/year</span></div>
                        <div className={styles.resultRow}><span>Gratuity:</span><span>₹{gratuity.toFixed(0)}/year</span></div>
                        <div className={`${styles.resultRow} ${styles.resultTotal}`}><span>Est. In-Hand (Monthly):</span><span>₹{(inHand / 12).toFixed(0)}</span></div>
                    </div>
                )}
            </div>
        );
    };

    const BreakEvenCalculator = () => {
        const [fixedCosts, setFixedCosts] = useState('');
        const [unitPrice, setUnitPrice] = useState('');
        const [unitCost, setUnitCost] = useState('');

        const fc = parseFloat(fixedCosts) || 0;
        const price = parseFloat(unitPrice) || 0;
        const cost = parseFloat(unitCost) || 0;
        const units = price > cost ? Math.ceil(fc / (price - cost)) : 0;
        const revenue = units * price;

        return (
            <div className={styles.calculatorContent}>
                <div className={styles.inputGroup}>
                    <label>Fixed Costs/Month (₹)</label>
                    <input type="number" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} placeholder="Rent, salaries, etc." />
                </div>
                <div className={styles.inputGroup}>
                    <label>Selling Price per Unit (₹)</label>
                    <input type="number" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} placeholder="Price you charge" />
                </div>
                <div className={styles.inputGroup}>
                    <label>Variable Cost per Unit (₹)</label>
                    <input type="number" value={unitCost} onChange={(e) => setUnitCost(e.target.value)} placeholder="Cost per unit" />
                </div>
                {fixedCosts && unitPrice && unitCost && price > cost && (
                    <div className={styles.results}>
                        <div className={styles.resultRow}><span>Contribution Margin:</span><span>₹{(price - cost).toFixed(2)}/unit</span></div>
                        <div className={`${styles.resultRow} ${styles.resultTotal}`}><span>Break-Even Units:</span><span>{units.toLocaleString()} units</span></div>
                        <div className={styles.resultRow}><span>Break-Even Revenue:</span><span>₹{revenue.toLocaleString()}</span></div>
                    </div>
                )}
            </div>
        );
    };

    const ROICalculator = () => {
        const [investment, setInvestment] = useState('');
        const [returns, setReturns] = useState('');

        const inv = parseFloat(investment) || 0;
        const ret = parseFloat(returns) || 0;
        const profit = ret - inv;
        const roi = inv > 0 ? ((profit / inv) * 100) : 0;

        return (
            <div className={styles.calculatorContent}>
                <div className={styles.inputGroup}>
                    <label>Investment Amount (₹)</label>
                    <input type="number" value={investment} onChange={(e) => setInvestment(e.target.value)} placeholder="Initial investment" />
                </div>
                <div className={styles.inputGroup}>
                    <label>Final Value / Returns (₹)</label>
                    <input type="number" value={returns} onChange={(e) => setReturns(e.target.value)} placeholder="Value after investment" />
                </div>
                {investment && returns && (
                    <div className={styles.results}>
                        <div className={styles.resultRow}><span>Net Profit/Loss:</span><span className={profit >= 0 ? styles.positive : styles.negative}>₹{profit.toLocaleString()}</span></div>
                        <div className={`${styles.resultRow} ${styles.resultTotal}`}><span>ROI:</span><span className={roi >= 0 ? styles.positive : styles.negative}>{roi.toFixed(2)}%</span></div>
                    </div>
                )}
            </div>
        );
    };

    const EquityDilutionCalculator = () => {
        const [preValuation, setPreValuation] = useState('');
        const [investment, setInvestment] = useState('');
        const [existingShares, setExistingShares] = useState('100');

        const pre = parseFloat(preValuation) || 0;
        const inv = parseFloat(investment) || 0;
        const postValuation = pre + inv;
        const newShares = pre > 0 ? (inv / pre) * parseFloat(existingShares) : 0;
        const totalShares = parseFloat(existingShares) + newShares;
        const founderOwnership = (parseFloat(existingShares) / totalShares) * 100;
        const investorOwnership = (newShares / totalShares) * 100;

        return (
            <div className={styles.calculatorContent}>
                <div className={styles.inputGroup}>
                    <label>Pre-Money Valuation (₹)</label>
                    <input type="number" value={preValuation} onChange={(e) => setPreValuation(e.target.value)} placeholder="Valuation before investment" />
                </div>
                <div className={styles.inputGroup}>
                    <label>Investment Amount (₹)</label>
                    <input type="number" value={investment} onChange={(e) => setInvestment(e.target.value)} placeholder="Amount being invested" />
                </div>
                <div className={styles.inputGroup}>
                    <label>Your Current Ownership (%)</label>
                    <input type="number" value={existingShares} onChange={(e) => setExistingShares(e.target.value)} placeholder="100" />
                </div>
                {preValuation && investment && (
                    <div className={styles.results}>
                        <div className={styles.resultRow}><span>Post-Money Valuation:</span><span>₹{postValuation.toLocaleString()}</span></div>
                        <div className={`${styles.resultRow} ${styles.resultTotal}`}><span>Your New Ownership:</span><span>{founderOwnership.toFixed(2)}%</span></div>
                        <div className={styles.resultRow}><span>Investor Ownership:</span><span>{investorOwnership.toFixed(2)}%</span></div>
                        <div className={styles.resultRow}><span>Dilution:</span><span>{(parseFloat(existingShares) - founderOwnership).toFixed(2)}%</span></div>
                    </div>
                )}
            </div>
        );
    };

    const calculatorComponents = {
        'gst': GSTCalculator,
        'burn-rate': BurnRateCalculator,
        'runway': RunwayCalculator,
        'incorporation': IncorporationCalculator,
        'tds': TDSCalculator,
        'employee-cost': EmployeeCostCalculator,
        'breakeven': BreakEvenCalculator,
        'roi': ROICalculator,
        'equity': EquityDilutionCalculator,
    };

    const ActiveCalculator = activeCalculator ? calculatorComponents[activeCalculator] : null;
    const activeTool = tools.find(t => t.id === activeCalculator);

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge-blue">Free Business Tools</span>
                        <h1>Founder's Toolkit</h1>
                        <p>Essential calculators to help you plan, track, and grow your business with data-driven confidence. All tools are free and built specifically for Indian startups.</p>

                        <div className={styles.statsRow}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>9</span>
                                <span className={styles.statLabel}>Free Tools</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>10K+</span>
                                <span className={styles.statLabel}>Calculations</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statLabel}>Free Forever</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className={`section ${styles.toolsSection}`}>
                <div className="container">
                    <div className={styles.toolsGrid}>
                        {tools.map((tool) => (
                            <div key={tool.id} className={styles.toolCard}>
                                <div className={styles.toolIcon}>{tool.icon}</div>
                                <h3>{tool.title}</h3>
                                <p>{tool.description}</p>
                                <div className={styles.whyUse}>
                                    <strong>Why use it?</strong> {tool.whyUse}
                                </div>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setActiveCalculator(tool.id)}
                                >
                                    Launch Calculator {icons.arrow}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calculator Modal */}
            {activeCalculator && (
                <div className={styles.modalOverlay} onClick={() => setActiveCalculator(null)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2>{activeTool?.title}</h2>
                            <button className={styles.closeBtn} onClick={() => setActiveCalculator(null)}>
                                {icons.close}
                            </button>
                        </div>
                        {ActiveCalculator && <ActiveCalculator />}
                    </div>
                </div>
            )}
        </>
    );
}
