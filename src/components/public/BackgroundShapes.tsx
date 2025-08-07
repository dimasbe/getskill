import shape01 from '../../assets/shape/breadcrumb_shape01.svg.png';
import shape02 from '../../assets/shape/breadcrumb_shape02.svg.png';
import shape03 from '../../assets/shape/breadcrumb_shape03.svg.png';
import shape04 from '../../assets/shape/breadcrumb_shape04.svg.png';
import shape05 from '../../assets/shape/breadcrumb_shape05.svg.png';

const BackgroundShapes = () => {
    return (
        <>
            <img
                src={shape01}
                alt="Shape 1"
                className="absolute top-15 left-20 w-14 h-auto animate-up-down"
            />
            <img
                src={shape02}
                alt="Shape 2"
                className="absolute top-10 right-120 w-13 h-auto"
            />
            <img
                src={shape03}
                alt="Shape 3"
                className="absolute top-20 right-70 w-11 h-auto"
            />
            <img
                src={shape04}
                alt="Shape 4"
                className="absolute top-5 right-30 w-9 h-auto"
            />
            <img
                src={shape05}
                alt="Shape 5"
                className="absolute top-1 right-1 w-100 h-auto"
            />
        </>
    );
};

export default BackgroundShapes;
