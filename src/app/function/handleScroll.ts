import { Dispatch, SetStateAction } from "react"


export interface scroll {
    id: string,
    setVisible: Dispatch<SetStateAction<boolean>>,
    visible: boolean
}

const handleScroll = (props: scroll) => {
    if (!props.visible) {
        const element = document.getElementById(props.id)
        const rect: DOMRect | undefined = element?.getBoundingClientRect()

        if (rect) {
            if (rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
                props.setVisible(true)
            }
        }
    }
}

export default  handleScroll