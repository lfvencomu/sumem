import React, { useRef, useEffect } from "react";

export default function MyLandbot({ url }) {
 
  const containerRef = useRef(null);

  useEffect(() => {
    const _landbot = new Landbot.Container({
      container: containerRef.current,
      configUrl: url
    });

    return () => _landbot.destroy();
  }, [url, containerRef]);

  return <div className="MyLandbot" ref={containerRef} />;
}
