'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const [language, setLanguage] = useState('pt');

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => setLanguage('pt')}
        className={cn(
          'font-medium transition-colors hover:text-primary',
          language === 'pt'
            ? 'text-primary font-bold'
            : 'text-muted-foreground'
        )}
        aria-pressed={language === 'pt'}
      >
        PT
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'font-medium transition-colors hover:text-primary',
          language === 'en'
            ? 'text-primary font-bold'
            : 'text-muted-foreground'
        )}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
