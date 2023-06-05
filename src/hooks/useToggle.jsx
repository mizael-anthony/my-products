import React from "react";

export function useToggle(initial = true){
    const [countVisible, setCountVisible] = React.useState(initial)

    const toggle = () => {
        setCountVisible(v => !v)
    }

    return [countVisible, toggle]

}
