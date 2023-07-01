export const homeObjOne = {
    id: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Illustration for publication',
    headline: 'Services',
    description: 'Graphical abstracts, paper figures, resusable icons for presentations, posters...',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/svg1.svg').default, // .default was important here, doesn't load image without 
    alt: 'svg1',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'portfolio',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Gallery of past work',
    headline: 'Portfolio',
    description: 'Lots of amazing portfolio work to oggle at and be convinced to hire me!',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: require('../../images/svg2.svg').default, // .default was important here, doesn't load image without 
    alt: 'svg2',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'ink vivo Design',
    headline: 'About',
    description: 'The illustrator blah blah blah',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/svg3.svg').default, // .default was important here, doesn't load image without 
    alt: 'svg3',
    dark: true,
    primary: true,
    darkText: false
}