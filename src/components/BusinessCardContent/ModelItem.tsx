import Link from "next/link";
import styled from "styled-components";
type ModelItemProps = {
  image: string;
  id: string;
};
const ModelItem: React.FC<ModelItemProps> = ({ image, id }) => {
  return (
    <ModelItemContainer>
      <Link href={`/business-card/edit/${id}`}>
        <ModelItemImage src={image} alt="" />
      </Link>
    </ModelItemContainer>
  );
};
export default ModelItem;
const ModelItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const ModelItemContainer = styled.div`
  visibility: visible;
  animation-delay: 0.2s;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  margin: 15px 0;
  transition: all 0.3s ease-in-out;
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
  &:hover {
    background: transparent;
    box-shadow: 0px 10px 50px 0px rgb(84 110 122 / 35%);
  }
`;
