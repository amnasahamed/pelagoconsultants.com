
import ClientWall from '../components/ClientWall';

export const metadata = {
    title: 'Our Clients | Pelago Consultants',
    description: 'See the list of 100+ innovative companies that trust Pelago Consultants for their business compliance and growth.',
};

export default function ClientsPage() {
    return (
        <main>
            {/* Reusing ClientWall but as a full page feature */}
            <div style={{ paddingTop: '2rem' }}>
                <ClientWall initialCount={48} showSearch={true} showTabs={true} />
            </div>
        </main>
    );
}
