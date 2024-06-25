import './styles.css';

export const PageFallback = () => {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center bg-background'>
      <div id="triangle" className="relative w-64 h-64">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          version="1.1"
          viewBox="0 0 2000 2000"
          className="w-full h-full"
        >
          <polygon
            className="cls-1 fill-current text-purple-600 dark:text-purple-400"
            points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"
          ></polygon>
          <polygon
            className="cls-3 fill-current text-purple-400 dark:text-purple-300"
            points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"
          ></polygon>
          <g id="Layer_2" data-name="Layer 2">
            <polygon
              className="cls-2 fill-current text-purple-500 dark:text-purple-200"
              points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"
            ></polygon>
          </g>
        </svg>
      </div>
    </div>
  );
};
