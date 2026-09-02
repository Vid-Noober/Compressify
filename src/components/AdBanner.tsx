'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    bannerRef.current.innerHTML = '';

    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      atOptions = {
        'key' : '0df645ba71647204b228a6d54d9cb7b8',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;

    const invokeScript = document.createElement('script');
    invokeScript.src = 'https://vibrategrin.com/0df645ba71647204b228a6d54d9cb7b8/invoke.js';
    invokeScript.async = true;

    bannerRef.current.appendChild(configScript);
    bannerRef.current.appendChild(invokeScript);
  }, []);

  return <div ref={bannerRef} style={{ width: 320, height: 50 }} />;
}