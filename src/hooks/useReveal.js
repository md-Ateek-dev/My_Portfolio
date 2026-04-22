import { useEffect, useRef } from 'react';

/**
 * useReveal – attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport it adds the `visible` class.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/**
 * useRevealChildren – reveals each direct child with a stagger delay.
 */
export function useRevealChildren(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children);
    const delay = options.stagger ?? 120;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, i * delay);
          });
          observer.unobserve(container);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [options.stagger, options.threshold, options.rootMargin]);

  return ref;
}
