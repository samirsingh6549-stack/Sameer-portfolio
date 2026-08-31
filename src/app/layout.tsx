import type { Metadata } from 'next';
import { Outfit, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit' 
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk' 
});
const jetBrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains-mono' 
});

export const metadata: Metadata = {
  title: 'Portfolio | Sameer Kumar Singh',
  description: 'A scrollytelling digital experience by a Creative Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans antialiased text-foreground bg-background transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
