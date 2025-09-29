import React from 'react';

// Dynamic Helmet component
const SEOHead = ({ title, description, ogTitle, ogDescription, children }) => {
  const [Helmet, setHelmet] = React.useState(null);

  React.useEffect(() => {
    import('react-helmet-async').then(({ Helmet: HelmetComponent }) => {
      setHelmet(() => HelmetComponent);
    });
  }, []);

  // For SSR, we'll handle this differently
  if (typeof window === 'undefined') {
    // Server-side: use a placeholder that will be replaced
    return (
      <>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.title = '${title || 'My SSR App'}';
            const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
            metaDesc.name = 'description';
            metaDesc.content = '${description || ''}';
            if (!document.querySelector('meta[name="description"]')) {
              document.head.appendChild(metaDesc);
            }
          `
        }} />
        {children}
      </>
    );
  }

  // Client-side: use actual Helmet when loaded
  if (!Helmet) return children;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {children}
    </Helmet>
  );
};

export default SEOHead;