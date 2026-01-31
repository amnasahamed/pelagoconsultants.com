import Link from 'next/link';
import styles from './page.module.css';

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
            <div style={{ maxWidth: '600px' }}>
                <span className="badge badge-blue">404</span>
                <h1 style={{ fontSize: '4rem', margin: '20px 0', color: 'var(--navy)' }}>Page Not Found</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', marginBottom: '40px' }}>
                    The page you are looking for might have been moved, deleted, or never existed in the first place.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Link href="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                    <Link href="/blog" className="btn btn-outline">
                        Read our Blog
                    </Link>
                </div>
            </div>
        </div>
    );
}
