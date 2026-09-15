import { useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    // observe the element and all children with animation classes
    const animatedElements = element.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .scale-in'
    );

    animatedElements.forEach((el) => observer.observe(el));

    // also observe the element itself if it has an animation class
    if (
      element.classList.contains('fade-in') ||
      element.classList.contains('fade-in-left') ||
      element.classList.contains('fade-in-right') ||
      element.classList.contains('scale-in')
    ) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollAnimation;
