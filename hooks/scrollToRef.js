const scrollToRef = (ref) => {
    /* ref.scrollIntoView(true) */
    const clientheight = ref.clientHeight
    const newscroll = ref.offsetTop - 250
    window.scrollTo({
        left: 0,
        top: newscroll,
        behavior: 'smooth'
    })
}
export default scrollToRef;