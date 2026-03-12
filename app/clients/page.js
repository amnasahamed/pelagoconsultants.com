
import ClientWall from '../components/ClientWall';

export const metadata = {
    title: 'Our Clients | Pelago Consultants',
    description: 'See the list of 100+ innovative companies that trust Pelago Consultants for their business compliance and growth.',
};

export default function ClientsPage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: 'var(--gray-50)' }}>
            {/* Premium Hero Section */}
            <section className="bg-gradient-hero" style={{ 
                padding: 'var(--space-24) 0 calc(var(--space-24) + 60px)', 
                position: 'relative', 
                overflow: 'hidden' 
            }}>
                {/* Decorative background elements for premium feel */}
                <div style={{ 
                    position: 'absolute', top: '-20%', left: '-10%', 
                    width: '50%', height: '100%', 
                    background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', 
                    borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' 
                }}></div>
                <div style={{ 
                    position: 'absolute', bottom: '-20%', right: '-10%', 
                    width: '50%', height: '100%', 
                    background: 'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)', 
                    borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' 
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div className="badge animate-fade-in-up" style={{ 
                        backgroundColor: 'rgba(255,255,255,0.1)', 
                        color: 'var(--white)', 
                        border: '1px solid rgba(255,255,255,0.2)', 
                        marginBottom: 'var(--space-6)',
                        padding: 'var(--space-2) var(--space-6)',
                        WebkitBackdropFilter: 'blur(10px)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        Our Success Partners
                    </div>
                    
                    <h1 className="animate-fade-in-up delay-100" style={{ 
                        color: 'var(--white)', 
                        marginBottom: 'var(--space-6)', 
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                        fontWeight: '800', 
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2'
                    }}>
                        Trusted by <span style={{ color: 'var(--accent-teal-light)' }}>Industry Leaders</span>
                    </h1>
                    
                    <p className="animate-fade-in-up delay-200" style={{ 
                        color: 'rgba(255,255,255,0.85)', 
                        fontSize: 'var(--text-xl)', 
                        maxWidth: '700px', 
                        margin: '0 auto', 
                        lineHeight: '1.6' 
                    }}>
                        From ambitious startups to established enterprises, discover the 100+ innovative companies that rely on Pelago Consultants for compliance, strategy, and sustainable growth.
                    </p>
                </div>
                
                {/* Elegant bottom wave curve */}
                <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '60px' }}>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,152.47,115.22,219.8,91.42,253.53,79.4,288.75,69.58,321.39,56.44Z" style={{ fill: 'var(--gray-50)' }}></path>
                    </svg>
                </div>
            </section>

            {/* Clients Wall Section - Premium Styling Context */}
            <div style={{ 
                position: 'relative', 
                zIndex: 2, 
                marginTop: '-40px' 
            }}>
                <div className="container" style={{ marginBottom: 'var(--space-10)' }}>
                    <div style={{ 
                        backgroundColor: 'var(--white)',
                        borderRadius: 'var(--radius-2xl)',
                        padding: 'var(--space-8)',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid rgba(0,0,0,0.03)'
                    }}>
                        <ClientWall initialCount={48} showSearch={true} showTabs={true} hideHeader={true} />
                    </div>
                </div>
            </div>
            
            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: 'var(--white)', borderTop: '1px solid var(--gray-100)' }}>
                <div className="container text-center">
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>Join Our Network of Success</h2>
                    <p style={{ fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto var(--space-8)', color: 'var(--gray-600)' }}>
                        Partner with Pelago Consultants today and let us handle your compliance and incorporation needs while you focus on growth.
                    </p>
                    <a href="/contact" className="btn btn-primary btn-lg animate-pulse-glow">
                        Get Started Today
                    </a>
                </div>
            </section>
        </main>
    );
}
