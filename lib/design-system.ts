/**
 * ZFP Design System
 * Designový systém pro osobní weby realitních makléřů ZFP Reality
 * 
 * Založeno na: ZFP WebDesign Manual 2025
 */

// ========================================
// BARVY
// ========================================

export const colors = {
  // Primární brandová barva
  brand: {
    orange: '#CF5400',        // Hlavní oranžová (Pantone 7578 C) - CTA, odkazy, tlačítka
    orangeHover: '#E07E3C',   // Hover efekt pro CTA a ikony
  },
  
  // Textové barvy
  text: {
    dark: '#333333',          // Tmavě šedá - nadpisy, odstavce
    gray: '#666666',          // Střední šedá - doplňkový text
    light: '#999999',         // Světlá šedá - meta informace
  },
  
  // Pozadí
  background: {
    white: '#FFFFFF',         // Bílá - hlavní pozadí
    light: '#F7F7F7',         // Světlá šedá - sekce, oddělovací plochy
  },
  
  // Statusové barvy
  status: {
    success: '#10B981',       // Zelená - úspěch, pronajato
    error: '#EF4444',         // Červená - chyba
    warning: '#F59E0B',       // Oranžová - varování
    info: '#3B82F6',          // Modrá - info (používat opatrně)
  }
} as const;

// ========================================
// TYPOGRAFIE
// ========================================

export const typography = {
  // Font families
  fonts: {
    heading: '"Bree", "Verdana", sans-serif',     // Nadpisy H1-H2
    subheading: '"Bree", "Verdana", sans-serif',  // Podnadpisy H3-H4
    body: '"Verdana Pro", "Verdana", sans-serif', // Běžný text
    cta: '"Bree", "Verdana", sans-serif',         // CTA tlačítka
  },
  
  // Font sizes (Tailwind compatible)
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  
  // Font weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  }
} as const;

// ========================================
// SPACING
// ========================================

export const spacing = {
  // Container padding
  container: {
    mobile: '1rem',     // 16px
    tablet: '2rem',     // 32px
    desktop: '4rem',    // 64px
  },
  
  // Section spacing
  section: {
    mobile: '3rem',     // 48px
    tablet: '4rem',     // 64px
    desktop: '5rem',    // 80px
  },
  
  // Component spacing
  component: {
    xs: '0.5rem',       // 8px
    sm: '1rem',         // 16px
    md: '1.5rem',       // 24px
    lg: '2rem',         // 32px
    xl: '3rem',         // 48px
  }
} as const;

// ========================================
// BREAKPOINTS
// ========================================

export const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
} as const;

// ========================================
// KOMPONENTY
// ========================================

export const components = {
  // Tlačítka
  button: {
    primary: {
      background: colors.brand.orange,
      color: colors.background.white,
      hover: {
        background: colors.brand.orangeHover,
      },
      padding: {
        mobile: '0.75rem 1.5rem',  // py-3 px-6
        desktop: '1rem 2rem',       // py-4 px-8
      },
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.bold,
      borderRadius: '0.5rem',       // rounded-lg
    },
    
    secondary: {
      background: colors.background.white,
      color: colors.brand.orange,
      border: `2px solid ${colors.brand.orange}`,
      hover: {
        background: colors.brand.orange,
        color: colors.background.white,
      },
      padding: {
        mobile: '0.75rem 1.5rem',
        desktop: '1rem 2rem',
      },
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.bold,
      borderRadius: '0.5rem',
    },
  },
  
  // Input fieldy
  input: {
    background: colors.background.white,
    border: `1px solid #DDDDDD`,
    borderFocus: `2px solid ${colors.brand.orange}`,
    padding: '0.75rem 1rem',
    fontSize: typography.sizes.base,
    borderRadius: '0.5rem',
  },
  
  // Karty
  card: {
    background: colors.background.white,
    border: '1px solid #EEEEEE',
    borderRadius: '1rem',            // rounded-xl
    padding: '1.5rem',               // p-6
    shadow: '0 1px 3px rgba(0,0,0,0.1)',
    shadowHover: '0 4px 12px rgba(0,0,0,0.15)',
  },
  
  // Badge/Štítky
  badge: {
    sold: {
      background: colors.status.error,
      color: colors.background.white,
      padding: '0.25rem 0.75rem',
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.bold,
      borderRadius: '0.25rem',
    },
    rented: {
      background: colors.status.success,
      color: colors.background.white,
      padding: '0.25rem 0.75rem',
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.bold,
      borderRadius: '0.25rem',
    },
  }
} as const;

// ========================================
// IKONY
// ========================================

export const icons = {
  size: {
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48,
  },
  color: {
    primary: colors.brand.orange,
    secondary: colors.text.gray,
  }
} as const;

// ========================================
// ANIMACE
// ========================================

export const animations = {
  transition: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },
  
  hover: {
    scale: 'scale(1.02)',
    lift: 'translateY(-2px)',
  }
} as const;

// ========================================
// PRAVIDLA A OMEZENÍ
// ========================================

export const rules = {
  // ZAKÁZÁNO podle ZFP manuálu
  forbidden: {
    colors: ['blue', 'purple', 'violet'],  // Mimo doplňkové grafiky
    note: 'Používání modrých a fialových odstínů je zakázáno mimo doplňkové grafiky'
  },
  
  // Povinné elementy
  required: {
    logo: 'Logo ZFP GROUP v hlavičce (max 60px) a patičce (pravý roh)',
    text: 'Text "Součást ZFP GROUP" musí být viditelný',
    favicon: '/favi.ico (povinná ikona)',
    cta: 'Všechna CTA tlačítka kapitálkami (uppercase)',
  }
} as const;

// ========================================
// EXPORT PRO TAILWIND CONFIG
// ========================================

export const tailwindColors = {
  'brand-orange': colors.brand.orange,
  'brand-orange-hover': colors.brand.orangeHover,
  'text-dark': colors.text.dark,
  'text-gray': colors.text.gray,
  'text-light': colors.text.light,
  'bg-light': colors.background.light,
} as const;

export const tailwindFontFamily = {
  'heading': typography.fonts.heading.split(',').map(f => f.trim()),
  'body': typography.fonts.body.split(',').map(f => f.trim()),
} as const;

// ========================================
// HELPER FUNKCE
// ========================================

/**
 * Získá CSS pro primární CTA tlačítko
 */
export const getPrimaryCTAStyles = () => ({
  backgroundColor: components.button.primary.background,
  color: components.button.primary.color,
  padding: components.button.primary.padding.desktop,
  fontSize: components.button.primary.fontSize,
  fontWeight: components.button.primary.fontWeight,
  borderRadius: components.button.primary.borderRadius,
  textTransform: 'uppercase' as const,
  transition: animations.transition.normal,
  
  '&:hover': {
    backgroundColor: components.button.primary.hover.background,
  }
});

/**
 * Získá CSS pro sekundární CTA tlačítko
 */
export const getSecondaryCTAStyles = () => ({
  backgroundColor: components.button.secondary.background,
  color: components.button.secondary.color,
  border: components.button.secondary.border,
  padding: components.button.secondary.padding.desktop,
  fontSize: components.button.secondary.fontSize,
  fontWeight: components.button.secondary.fontWeight,
  borderRadius: components.button.secondary.borderRadius,
  textTransform: 'uppercase' as const,
  transition: animations.transition.normal,
  
  '&:hover': {
    backgroundColor: components.button.secondary.hover.background,
    color: components.button.secondary.hover.color,
  }
});

/**
 * Validuje zda barva není zakázaná
 */
export const validateColor = (color: string): boolean => {
  const forbidden = rules.forbidden.colors;
  return !forbidden.some(fc => color.toLowerCase().includes(fc));
};

// Default export
export default {
  colors,
  typography,
  spacing,
  breakpoints,
  components,
  icons,
  animations,
  rules,
  tailwindColors,
  tailwindFontFamily,
};
