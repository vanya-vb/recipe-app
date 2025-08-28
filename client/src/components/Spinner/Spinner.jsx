import { MoonLoader } from "react-spinners";

export default function Spinner() {
  return (
    <MoonLoader
      size={50}
      color="#A5B263"
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
