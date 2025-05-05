import { useState } from "react";
function Image({
  url,
  text,
  width,
  height,
  className,
}: {
  url: string;
  text: string;
  width?: string;
  height?: string;
  className?: string;
}) {
  return <img src={url} width={"100%"} height={height} alt={text} />;
}

export default Image;
