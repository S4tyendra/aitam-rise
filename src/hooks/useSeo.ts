import { useEffect } from 'react';

const useSeo = (title: string, description: string) => {
  useEffect(() => {
    if (document.title !== title) {
      document.title = title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [title, description]);
};

export default useSeo;