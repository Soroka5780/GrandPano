import { useState, useEffect } from 'react';

type Translations = Record<string, any>;

export function useTranslations(language: string) {
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    async function loadTranslations() {
      try {
        const [commonRes, heroRes, sliderRes] = await Promise.all([
          fetch(`/locales/${language}/common.json`),
          fetch(`/locales/${language}/hero.json`),
          fetch(`/locales/${language}/slider.json`)
        ]);

        if (!commonRes.ok || !heroRes.ok || !sliderRes.ok) {
          throw new Error('Niektorý z prekladových súborov sa nenačítal.');
        }

        const common = await commonRes.json();
        const hero = await heroRes.json();
        const slider = await sliderRes.json();

        // Spojí všetky texty do jedného objektu
        setTranslations({
          ...common,
          ...hero,
          ...slider
        });
      } catch (err) {
        console.error('Chyba pri načítaní prekladov:', err);
        setTranslations({});
      }
    }

    loadTranslations();
  }, [language]);

  return translations;
}
