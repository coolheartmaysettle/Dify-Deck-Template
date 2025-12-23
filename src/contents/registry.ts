import { SlideData } from '../engine/types';
import { SLIDES as templateGuide } from './template-guide';
import { SLIDES as allStylesEn } from './all-styles-en';
import { SLIDES as allStylesZh } from './all-styles-zh';
import { SLIDES as saasVsEnterprise } from './saas-vs-enterprise';

export interface DeckConfig {
  id: string;
  title: string;
  slides: SlideData[];
}

export const decks: Record<string, DeckConfig> = {
  'template': {
    id: 'template',
    title: 'Template Guide (English)',
    slides: templateGuide
  },
  'all-styles-en': {
    id: 'all-styles-en',
    title: 'English Gallery: All Slide Styles',
    slides: allStylesEn
  },
  'all-styles-zh': {
    id: 'all-styles-zh',
    title: 'Chinese Gallery: All Slide Styles (中文演示)',
    slides: allStylesZh
  },
  'saas-vs-enterprise': {
    id: 'saas-vs-enterprise',
    title: 'Dify SaaS版 vs 企业版选择指南',
    slides: saasVsEnterprise
  }
};

export const getDeck = (id: string): DeckConfig | undefined => {
  return decks[id];
};
