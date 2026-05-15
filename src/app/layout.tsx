import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Khirsapat.bd | রাজশাহীর সেরা প্রিমিয়াম খিরসাপাত আম (হিমসাগর)",
  description: "রাজশাহীর বাগান থেকে সরাসরি বাছাই করা প্রিমিয়াম খিরসাপাত (হিমসাগর) আম। ১০০% বিশুদ্ধ এবং কেমিক্যালমুক্ত প্রাকৃতিক স্বাদের নিশ্চয়তা। এখনই অর্ডার করুন।",
  metadataBase: new URL('https://khirsapat.bd'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo_icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/logo_icon.png",
  },
  keywords: ["Khirsapat Mango", "খিরসাপাত আম", "রাজশাহীর আম", "হিমসাগর আম", "Premium Mango Bangladesh", "himsagor mango price", "khrishapat mango price", "himsagor amer dam", "khirshapat amer dam"],
  openGraph: {
    title: "খিরসাপাত আম - রাজশাহীর সেরা প্রিমিয়াম খিরসাপাত আম",
    description: "রাজশাহীর বাগান থেকে সরাসরি সেরা মানের খিরসাপাত আম (হিমসাগর)। ১০০% বিশুদ্ধতা এবং স্বাদের নিশ্চয়তা।",
    url: 'https://khirsapat.bd',
    siteName: 'Khirsapat.bd',
    images: [
      {
        url: "/khirsapat-mango.png",
        width: 1200,
        height: 630,
        alt: "Premium Khirsapat Mango",
      }
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khirsapat.bd | রাজশাহীর প্রিমিয়াম খিরসাপাত আম',
    description: 'রাজশাহীর বাগান থেকে সরাসরি বাছাই করা প্রিমিয়াম খিরসাপাত আম।',
    images: ['/khirsapat-mango.png'],
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} ${playfair.variable} antialiased selection:bg-primary selection:text-secondary texture-overlay`}>
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-20 blur-[120px] animate-pulse" style={{ background: 'var(--primary-glow)' }} />
          <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full opacity-10 blur-[120px]" style={{ background: 'var(--secondary-glow)' }} />
          <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full opacity-15 blur-[120px]" style={{ background: 'var(--primary-glow)' }} />
        </div>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNP9GQGF"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WNP9GQGF');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QLVKE67D42"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QLVKE67D42');
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '704231567958924');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=704231567958924&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Microsoft Clarity Code */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wo9khlse2x");
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Khirsapat.bd",
                "alternateName": ["রাজশাহীর আম", "Khirsapat Mango"],
                "url": "https://khirsapat.bd",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://khirsapat.bd/blog?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Khirsapat.bd",
                "url": "https://khirsapat.bd",
                "logo": "https://khirsapat.bd/logo.png",
                "sameAs": [
                  "https://www.facebook.com/RajshahirAam",
                  "https://rajshahiram.com.bd"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+8801707979767",
                  "contactType": "customer service",
                  "areaServed": "BD",
                  "availableLanguage": "Bengali"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "hasPart": [
                  {
                    "@type": "WebPage",
                    "name": "Home",
                    "url": "https://khirsapat.bd/"
                  },
                  {
                    "@type": "WebPage",
                    "name": "Blog",
                    "url": "https://khirsapat.bd/blog"
                  },
                  {
                    "@type": "WebPage",
                    "name": "About Us",
                    "url": "https://khirsapat.bd/about"
                  },
                  {
                    "@type": "WebPage",
                    "name": "Buy Now",
                    "url": "https://rajshahiram.com.bd/ProductDetails/m102"
                  }
                ]
              }
            ])
          }}
        />
        {children}
      </body>
    </html>
  );
}
