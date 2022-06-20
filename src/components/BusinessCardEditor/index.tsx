import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";

type Props = {
  id: string;
};

const BusinessCardEditor: React.FC<Props> = ({ id }) => {
  if (id === "1") return <Template1 />;
  if (id === "2") return <Template2 />;
  return <div>{id}</div>;
};

export default BusinessCardEditor;
