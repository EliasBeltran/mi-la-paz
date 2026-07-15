import type { Metadata } from 'next';
import './globals.css';
import './admin.css';
import './modules.css';
import './documentation.css';
export const metadata: Metadata = { title: 'Mi La Paz', description: 'Ecosistema digital ciudadano — prototipo conceptual' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html> }
