import { useEffect } from 'react';
const useSlide = (direction, ref, changedValue) => {
    useEffect(() => {
        ref.current.classList.remove(`slide-${direction}`);
        void ref.current.offsetWidth;
        ref.current.classList.add(`slide-${direction}`);

    }, [direction, ref, changedValue]);

};

export default useSlide;