'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function LanguageSwitcher() {
  const params = useParams();
  const lng = params.lng as string;

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href="/pt"
        className={cn(
          'font-medium transition-colors hover:text-primary',
          lng === 'pt' ? 'text-primary font-bold' : 'text-muted-foreground'
        )}
      >
        PT
      </Link>
      <span className="text-muted-foreground">/</span>
      <Link
        href="/en"
        className={cn(
          'font-medium transition-colors hover:text-primary',
          lng === 'en' ? 'text-primary font-bold' : 'text-muted-foreground'
        )}
      >
        EN
      </Link>
    </div>
  );
}