export default function outsideClick(element, events, callback) {
    const html = document.documentElement
    const outside = 'data-outside'

    if (!element.hasAttribute(outside)) {

        events.forEach(userEvent => {
            setTimeout(() => {
                html.addEventListener(userEvent, handleOutsidClick)
            }, 0)
        })

        element.setAttribute(outside, '')
    }

    function handleOutsidClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside)

            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsidClick)
            })


            callback()
        }

    }
}