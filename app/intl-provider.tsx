// app/intl-provider.tsx (client component)
'use client';
import { NextIntlClientProvider } from 'next-intl';

interface Props {
    locale: string;
    messages: Record<string, string>;
    children: React.ReactNode;
}

export function IntlProvider({ locale, messages, children }: Props) {
    if (!locale) throw new Error('Locale is required for NextIntlClientProvider');

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}





