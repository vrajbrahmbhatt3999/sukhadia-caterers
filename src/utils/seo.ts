import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function useSeo({ title, description, canonicalPath }: SeoProps) {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Sukhadia Caterers`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${title} | Sukhadia Caterers`);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Canonical link
    if (canonicalPath) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `${window.location.origin}${canonicalPath}`);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, canonicalPath]);
}
