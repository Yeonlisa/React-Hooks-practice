export const useClick = (onClick) => {
    const element = useRef();
  
    useEffect(() => {
      if (element.current && typeof onClick === "function") {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        if (element.current && typeof onClick === "function") {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };