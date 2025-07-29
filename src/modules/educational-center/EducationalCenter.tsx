import { WithEducationalCenter } from "./components/with-educational-center/WithEducationalCenter";
import { WithoutEducationalCenter } from "./components/without-educational-center/WithoutEducationalCenter";

const EducationalCenter = () => {
  const hasEducationalCenter = false;

  return hasEducationalCenter ? <WithEducationalCenter /> : <WithoutEducationalCenter />;
};

export default EducationalCenter;
