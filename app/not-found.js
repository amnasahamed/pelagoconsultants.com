import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px'
        }}>
            <div style={{ maxWidth: '520px' }}>
                <span className="badge badge-blue">404</span>
                <h1 style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                    margin: '20px 0 16px', 
                    color: 'var(--navy)',
                    fontWeight: 800,
                    letterSpacing: '-0.045em',
                    lineHeight: 1.1 
                }}>
                    Page Not Found
                </h1>
                <p style={{ 
                    fontSize: 'var(--text-base)', 
                    color: 'var(--gray-500)', 
                    marginBottom: '40px',
                    lineHeight: 1.7 
                }}>
                    The page you are looking for might have been moved, deleted, or never existed in the first place.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" className="btn btn-primary btn-lg">
                        Back to Home
                    </Link>
                    <Link href="/services" className="btn btn-secondary btn-lg">
                        Explore Services
                    </Link>
                </div>
            </div>
        </div>
    );
}
