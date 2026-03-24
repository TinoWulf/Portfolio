export function initScrollReveal(root: ParentNode = document): () => void {
  const revealElements = Array.from(
    root.querySelectorAll<HTMLElement>('[data-scroll-reveal]')
  );

  if (revealElements.length === 0) {
    return () => undefined;
  }

  for (const element of revealElements) {
    element.classList.add('scroll-reveal');
  }

  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    for (const element of revealElements) {
      element.classList.add('is-visible');
    }

    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      }
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -12% 0px',
    }
  );

  for (const element of revealElements) {
    observer.observe(element);
  }

  return () => observer.disconnect();
}