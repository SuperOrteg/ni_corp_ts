import styled from "styled-components";
import { ReactComponent as Playlist } from "../../assets/images/playlist.svg";
import { ReactComponent as SpotifyLogo } from "../../assets/images/spotify.svg";

export const Rotate = styled(Playlist)`
  filter: drop-shadow(
    0px 0px var(--shadow-blur) ${(props) => props.theme.colors.primary}
  );
`;

export const Spotify = styled(SpotifyLogo)`
  position: absolute;
  top: 45%;
  left: 51%;
  transform: translate(-50%, -50%);
`;

export const FooterSpotify = styled.div`
  position: relative;
  & path {
    fill: ${(props) => props.theme.colors.primary};
  }
`;
