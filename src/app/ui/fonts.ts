import localFont from "next/font/local";

export const iniriaSerif = localFont({
    src: [
        // Thin (100)
        { path: './fonts/iniria-serif/InriaSerif-Regular.woff2', weight: '100', style: 'normal' },
        { path: './fonts/iniria-serif/InriaSerif-Italic.woff2', weight: '100', style: 'italic' },
        // Light (300)
        { path: './fonts/iniria-serif/InriaSerif-Light.woff2', weight: '300', style: 'normal' },
        { path: './fonts/iniria-serif/InriaSerif-LightItalic.woff2', weight: '300', style: 'italic' },
        // Regular (400)
        { path: './fonts/iniria-serif/InriaSerif-Regular.woff2', weight: '400', style: 'normal' },
        // Bold (700)
        { path: './fonts/iniria-serif/InriaSerif-Bold.woff2', weight: '700', style: 'normal' },
        { path: './fonts/iniria-serif/InriaSerif-BoldItalic.woff2', weight: '700', style: 'italic' },        
    ],
    variable: '--font-iniria-serif',
    display: 'swap',
});

export const meowScript = localFont({
    src: [
        { path: './fonts/meow-script/MeowScript-Regular.woff2', weight: '400', style: 'normal' },
    ],
    variable: '--font-meow-script',
    display: 'swap',
});

export const hortensia = localFont({
    src: [
        { path: './fonts/hortencia/Hortensia.woff', weight: '400', style: 'normal' },
    ],
    variable: '--font-hortensia',
    display: 'swap',
});
