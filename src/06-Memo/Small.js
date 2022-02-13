import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me voli a ejecutar");
  return <small>{value}</small>;
});
