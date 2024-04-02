import * as React from "react";

import { useViewContext, ViewContext } from "../context/ViewContext";
import { CollectionView } from "../utils/types";

interface RadioProps {
  label: string;
  value: CollectionView;
  view: CollectionView;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ViewRadioButton: React.FC<RadioProps> = ({
  label,
  value,
  view,
  onChange,
}) => (
  <label>
    <input
      type="radio"
      value={value}
      checked={value === view}
      onChange={onChange}
    />
    {label}
  </label>
);

const descriptions: Record<CollectionView, string> = {
  [CollectionView.Mitchell]:
    "Track all the decors which the Pikmin Bloom game tracks, plus roadside stickers.",
  };

export const TopToolbar: React.FC = () => {
  const { view, setView } = useViewContext();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setView(event.target.value as CollectionView);

  return (
    <>
      {/* <div>
        View:
        
        <ViewRadioButton
          label="Mitchell"
          view={view}
          value={CollectionView.Mitchell}
          onChange={onChange}
        />
        
      </div> */}
      <p>{descriptions[view]}</p>
    </>
  );
};
