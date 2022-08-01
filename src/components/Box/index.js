import { BoxStyle, FruitStyle, UserStyle } from "./style";

const Box = ({ id, fruit, user, image }) => {
  function HandleImage() {

    const images = {
      1: <FruitStyle src="duende.png" />,
      2: <FruitStyle src="carnificina.png" />,
      3: <FruitStyle src="venon.png" />,
    };

    return images[image];
  }

  return (
    <BoxStyle id={id} fruit={fruit} user={user}>
      {user && <UserStyle src="aranha.png" />}
      {fruit && HandleImage()}
    </BoxStyle>
  );
};

export default Box;
