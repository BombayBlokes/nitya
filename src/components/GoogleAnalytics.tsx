"use client";

import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1YHCKHDMTN"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1YHCKHDMTN');
        `}
      </Script>
<script
     type="text/javascript"
     src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
     id="aisensy-wa-widget"
     widget-id="aaaxwy"
>
</script>
      

    </>
  );
};

export default GoogleAnalytics; 