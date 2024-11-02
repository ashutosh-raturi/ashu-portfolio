export const isMobileDevice = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width<768;
}
