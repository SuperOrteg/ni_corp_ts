import { WavesStyled } from "./Waves.styled";
import "./Waves.css";
import { useTheme } from "styled-components";

const Waves = () => {
  const theme = useTheme();

  return (
    <WavesStyled viewBox="0 24 150 28">
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="2"
          fill={theme.colors.lightSecondary}
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill={theme.colors.lighterSecondary}
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="1"
          fill={theme.colors.secondary}
        />
      </g>
    </WavesStyled>
  );
};

export default Waves;
