import { useEffect, useState } from "react";
import type { MenuItem } from "../libs/definitions";

interface UseActiveSectionOptions {
  rootMargin?: string;
  threshold?: number;
}

export const useActiveSection = (
  menuItems: MenuItem[],
  options: UseActiveSectionOptions = {}
): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const { rootMargin = '-20% 0px -80% 0px', threshold = 0.1 } = options;

  useEffect(() => {
    const sectionIds = menuItems
      .map(item => item.href.startsWith('#') ? item.href.slice(1) : item.href)
      .filter(Boolean);

    if (sectionIds.length === 0) return;

    const sectionElements = sectionIds
      .map(id => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) return;

    const observerOptions = {
      rootMargin,
      threshold
    };

    const observer = new IntersectionObserver((entries) => {
      const intersectingSections = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => entry.target.id);

      if (intersectingSections.length > 0) {
        const firstIntersecting = sectionIds.find(id => 
          intersectingSections.includes(id)
        );
        setActiveSection(firstIntersecting || null);
      } else {
        const viewportCenter = window.innerHeight / 2;
        let closestSection = null;
        let closestDistance = Infinity;

        sectionElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = element.id;
          }
        });

        setActiveSection(closestSection);
      }
    }, observerOptions);

    sectionElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [menuItems, rootMargin, threshold]);

  return activeSection;
};
