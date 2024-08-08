import { FunctionComponent, memo } from "react";
import { PhotoData } from "./ListPhotos";

interface AmplifiedPhotoProps {
  photo: PhotoData | null;
  setPhotoAmplified: (value: null) => void;
}

const AmplifiedPhoto: FunctionComponent<AmplifiedPhotoProps> = ({ photo, setPhotoAmplified }) => {
  return (
    <div onClick={() => setPhotoAmplified(null)} className="photo-amplified-backdrop">
      <div className="photo-amplified-container">
        <img src={photo?.urls.regular} alt={photo?.alt_description} />
      </div>
    </div>
  );
};

export default memo(AmplifiedPhoto);
