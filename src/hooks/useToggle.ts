import { useCallback, useState } from "preact/hooks";

type hookFn = (val: boolean) => [boolean, (force: boolean) => void]

const useToggle: hookFn = (initVal) => {
  const [val, setVal] = useState(initVal);

  const toggleFn = useCallback((force?: boolean) => {
    if(typeof force === 'boolean') {
      setVal(force);
    } else {
      setVal(!val);
    }
  }, [])

  return [val, toggleFn];
};

export default useToggle;