import { useState } from "react";
function Image({
  url,
  text,
  width,
  height,
}: {
  url: string;
  text: string;
  width?: string;
  height?: string;
}) {
  return <img src={url} width={"100%"} height={height} alt={text} />;
}

export default Image;
