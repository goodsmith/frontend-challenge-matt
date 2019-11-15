const styles = {}

const colors = {
  'color-dark-blue': 'hsl(209, 23%, 22%)',
  'color-very-dark-blue-1': 'hsl(207, 26%, 17%)',
  'color-very-dark-blue-2': 'hsl(207, 26%, 17%)',
  'dark-gray': 'hsl(0, 0%, 52%)',
  'very-light-gray': 'hsl(0, 0%, 98%)',
  white: 'hsl(0, 0%, 100%)',
}

const fonts = {
  rootSize: '16px',
  responsiveRootSize: '14px',
  small: '0.8125rem',
  big: '1.25rem',
  light: '400',
  bold: '600',
  bolder: '800',
}

const sizes = {
  desktop: '1440px',
  mobile: '375px',
}

// Typography
styles['font-default'] = "'Nunito Sans', sans-serif"
styles['font-root'] = fonts.rootSize
styles['font-root-responsive'] = fonts.responsiveRootSize
styles['font-detail-page'] = fonts.rootSize
styles['font-home-page'] = fonts.small
styles['font-header'] = fonts.big
styles['font-light'] = fonts.light
styles['font-bold'] = fonts.bold
styles['font-bolder'] = fonts.bolder

// Colors
styles['dark-mode-elements'] = colors['color-dark-blue']
styles['dark-mode-background'] = colors['color-very-dark-blue-1']
styles['light-mode-text'] = colors['color-very-dark-blue-2']
styles['light-mode-input'] = colors['dark-gray']
styles['light-mode-background'] = colors['very-light-gray']
styles['dark-mode-text'] = colors.white
styles['light-mode-elements'] = colors.white

// Box shadows
styles['box-shadow-default'] = ' 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
styles['box-shadow-hover'] = '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'

// Transitions
styles['transition-default'] =
  'background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'

// Sizes
styles['screen-mobile'] = sizes.mobile
styles['screen-desktop'] = sizes.desktop

module.exports = styles
