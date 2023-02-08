import { Spotify, FooterSpotify, Rotate } from "./Logo.styled";

const Logo = () => {
  return (
    <FooterSpotify>
      <Spotify id="spotify" />
      <Rotate id="rotate" />
    </FooterSpotify>
  );
};

export default Logo;
