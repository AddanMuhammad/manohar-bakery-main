import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "manohar Bakery - Fresh Baked Goods",
  description:
    "Fresh baked goods made with love and traditional recipes. We bring you the finest breads, pastries, and desserts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uddlttg67m");
            `,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S7NCPD5PRW"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S7NCPD5PRW');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1173309768027378');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1173309768027378&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {/* TikTok Pixel Code Start */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                ttq.load('D67S5CJC77UB00O71M9G');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />
        {/* TikTok Pixel Code End */}
        {/* Elfsight Popup */}
        <script src="https://elfsightcdn.com/platform.js" async />
        {/* End Elfsight Popup */}
      </head>
      <body className={`font-sans`}>
        <div className="bg-primary sticky top-0 z-50">
          <div className="bg-secondary/30 text-secondary py-2 md:text-lg text-sm overflow-hidden whitespace-nowrap">
            <div className="flex md:animate-scroll animate-mobileScroll">
              <div className="flex-shrink-0 flex items-center">
                <p className="inline-block px-8 whitespace-nowrap">
                  We Also Sell Ice Cream Cakes ( Available Only in Mango &
                  Triple Chocolate Flavors )
                </p>
                <p className="inline-block px-8 whitespace-nowrap">
                  We Have Proudly served 32,845 Happy Customers
                </p>
                <p className="inline-block px-8 whitespace-nowrap">
                  Yes! WE ONLY BAKE VEG & EGGLESS FOOD ITEMS
                </p>
                <p className="inline-block px-8 whitespace-nowrap">
                  Contact Us:{" "}
                  <a
                    href="tel:+16045910699"
                    className="underline hover:text-secondary"
                  >
                    +1 (604) 591-0699
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {children}
        <div
          className="elfsight-app-5c359461-8723-4eb4-b666-4e65559f86d5"
          data-elfsight-app-lazy
        ></div>
      </body>
    </html>
  );
}
