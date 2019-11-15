export const setTheme = value => localStorage.setItem('theme', value)

export const getTheme = () => localStorage.getItem('theme') || 'dark'
