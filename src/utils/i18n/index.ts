import { en } from './en';
import { es } from './es';

export * from './en';
export * from './es';

export const languages = {
    en,
    es,
};

export const supportedLanguages = ['en', 'es'];
export type SupportedLanguages = keyof typeof languages;
export type Ids = keyof typeof en;
