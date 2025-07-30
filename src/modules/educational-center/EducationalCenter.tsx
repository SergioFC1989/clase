import { WithEducationalCenter } from "./components/with-educational-center/WithEducationalCenter";
import { WithoutEducationalCenter } from "./components/without-educational-center/WithoutEducationalCenter";
import { useEducationalCenter } from "./hooks/useEducationalCenter";

const EducationalCenter = () => {
  const { data, handleDeleteEducationalCenter } = useEducationalCenter();

  return Array.isArray(data) && !data.length ?
      <WithoutEducationalCenter />
    : <WithEducationalCenter data={data} onDeleteEducationalCenter={handleDeleteEducationalCenter} />;
};

export default EducationalCenter;
