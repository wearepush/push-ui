import { css } from '@emotion/core';
import { mapValues } from 'lodash/fp';

const fonts = [
  {
    name: 'Overpass',
    localName: 'Overpass Light',
    weight: '300',
    style: 'normal'
  },
  {
    name: 'Overpass',
    localName: 'Overpass Regular',
    weight: '400',
    style: 'normal'
  },
  {
    name: 'Overpass',
    localName: 'Overpass Bold',
    weight: '700',
    style: 'normal'
  }
];

const fontStack = {
  default: 'Overpass, Helvetica, Arial, sans-serif',
  sans: 'Overpass, Helvetica, Arial, sans-serif',
  serif: 'Overpass, Helvetica, Arial, sans-serif',
  mono: 'Courier New, mono-space'
};

const fontWeight = {
  light: '300',
  regular: '400',
  bold: '700'
};

const typography = {
  headings: {
    kilo: {
      fontSize: '17px',
      lineHeight: '24px'
    },
    mega: {
      fontSize: '19px',
      lineHeight: '24px'
    },
    giga: {
      fontSize: '22px',
      lineHeight: '28px'
    },
    tera: {
      fontSize: '24px',
      lineHeight: '32px'
    },
    peta: {
      fontSize: '28px',
      lineHeight: '36px'
    },
    exa: {
      fontSize: '36px',
      lineHeight: '44px'
    },
    zetta: {
      fontSize: '42px',
      lineHeight: '56px'
    }
  },
  subHeadings: {
    kilo: {
      fontSize: '12px',
      lineHeight: '20px'
    },
    mega: {
      fontSize: '14px',
      lineHeight: '18px'
    }
  },
  text: {
    kilo: {
      fontSize: '14px',
      lineHeight: '24px'
    },
    mega: {
      fontSize: '16px',
      lineHeight: '32px'
    },
    giga: {
      fontSize: '21px',
      lineHeight: '42px'
    }
  }
};

const iconSizes = {
  byte: '12px',
  kilo: '16px',
  mega: '24px',
  giga: '36px'
};

const borderRadius = {
  kilo: '1px',
  mega: '4px',
  giga: '6px'
};

const misc = {
  primary: '#0C66FF',
  warning: '#F03D3D',
  alert: '#FFAD0D',
  success: '#0BB07B',
  default: '#E1E4E8',
  disabled: '#F1F2F4',
};

const breakpoints = {
  untilKilo: '(max-width: 479px)',
  kilo: 480,
  kiloToMega: '(min-width: 480px) and (max-width: 767px)',
  mega: 768,
  untilMega: '(max-width: 767px)',
  megaToGiga: '(min-width: 768px) and (max-width: 959px)',
  giga: 960,
  gigaToTera: '(min-width: 960px) and (max-width: 1279px)',
  tera: 1280,
  afterTera: '(min-width: 1280px)'
};

export function createColors() {
  return {
    white: '#ffffff',
    black: '#000000',
    ...misc
  };
}

export function createAnimations(reducedMotion = false) {
  return {
    micro: '160ms cubic-bezier(0, 0, 0.2, 1)',
    standard: '320ms cubic-bezier(0, 0, 0.2, 1)',
    motion: reducedMotion ? '0s' : '320ms cubic-bezier(0, 0, 0.2, 1)'
  };
}

export function createSpacings(base = 4) {
  return {
    bit: `${base * 1}px`,
    byte: `${base * 2}px`,
    kilo: `${base * 3}px`,
    mega: `${base * 4}px`,
    giga: `${base * 6}px`,
    tera: `${base * 8}px`,
    peta: `${base * 10}px`,
    exa: `${base * 12}px`,
    zetta: `${base * 14}px`
  };
}

export function createGrid(base = 4) {
  return {
    default: {
      priority: 0,
      breakpoint: 'default',
      cols: 12,
      maxWidth: '1080px',
      gutter: createSpacings(base).peta
    },
    untilKilo: {
      priority: 1,
      breakpoint: 'untilKilo',
      cols: 12,
      maxWidth: `400px`,
      gutter: createSpacings(base).peta
    },
    kilo: {
      priority: 2,
      breakpoint: 'kilo',
      cols: 12,
      maxWidth: '700px',
      gutter: createSpacings(base).peta
    },
    mega: {
      priority: 3,
      breakpoint: 'mega',
      cols: 12,
      maxWidth: '1000px',
      gutter: createSpacings(base).exa
    },
    giga: {
      priority: 4,
      breakpoint: 'giga',
      cols: 12,
      maxWidth: '1000px',
      gutter: createSpacings(base).exa
    },
    afterTera: {
      priority: 5,
      breakpoint: 'tera',
      cols: 12,
      maxWidth: '1200px',
      gutter: createSpacings(base).exa
    }
  };
}

export const createMediaQueries = mapValues(mediaExpression => {
  const { prefix = '', suffix = '' } =
    typeof mediaExpression === 'string'
      ? {}
      : { prefix: '(min-width: ', suffix: 'px)' };
  const enhancedExpression = prefix + mediaExpression + suffix;
  return (...args) => css`
    @media ${enhancedExpression} {
      ${css(...args)};
    }
  `;
});

function standard({ baseSpacing, reducedMotion } = {}) {
  return {
    reducedMotion,
    fonts,
    fontStack,
    fontWeight,
    typography,
    iconSizes,
    borderRadius,
    breakpoints,
    colors: createColors(),
    animations: createAnimations(reducedMotion),
    spacings: createSpacings(baseSpacing),
    grid: createGrid(baseSpacing),
    mq: createMediaQueries(breakpoints)
  };
}

export default { standard };
