import { FunctionComponent } from "react";
import { PhotoData } from "./ListPhotos";

interface PhotoProps {
  data: PhotoData 
  setAmplifiedPhoto: (data: PhotoData) => void;
}

const Photo: FunctionComponent<PhotoProps> = ({ data, setAmplifiedPhoto }) => {
  return (
    <div className="photo" onClick={() => setAmplifiedPhoto(data)}>
      <img src={data.urls.small} alt={data.alt_description} />
    </div>
  );
};

export default Photo;
