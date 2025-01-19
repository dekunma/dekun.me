"use client"

import { useEffect } from 'react';

const CommentSection = () => {
    useEffect(() => {
        // Check if the script is already loaded to avoid re-adding it
        if (document.querySelector('script[src="https://giscus.app/client.js"]')) return;

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.async = true;
        script.setAttribute('data-repo', 'dekunma/dekun.me-giscus');
        script.setAttribute('data-repo-id', 'R_kgDONshiZA');
        script.setAttribute('data-category', 'Announcements');
        script.setAttribute('data-category-id', 'DIC_kwDONshiZM4CmKMx');
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '1');
        script.setAttribute('data-input-position', 'top');
        script.setAttribute('data-theme', 'preferred_color_scheme');
        script.setAttribute('data-lang', 'en');
        script.setAttribute('crossorigin', 'anonymous');
        script.setAttribute('data-theme', 'light'); // Force light mode
        const container = document.getElementById('giscus-container');
        if (container) {
            container.appendChild(script);
        }
    }, []);

    return <div className='notion-page'>
        <div id="giscus-container" className='mb-10 mt-4' />
    </div>
};

export default CommentSection;