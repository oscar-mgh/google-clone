import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Google',
	description:
		"Search the world's information, including webpages, images, videos and more.",
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} relative min-h-screen`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
