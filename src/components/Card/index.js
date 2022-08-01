import { CardStyle } from './style'

const Card = ({ children }) => {
  return (
    <CardStyle>
      {children}
    </CardStyle>
  )
};

export default Card;
