import { DeleteIcon, EditIcon, UnpublishIcon } from "../../Icons/Icons";

function DotModal({ onEdit, onUnpublish, onDelete }) {
  return (
    <div className="h-31.75 w-44 bg-white">
      {/* Edit */}
      <button
        onClick={onEdit}
        className="ml-4.25 mt-3.25 flex flex-row text-[14px] gap-2 text-[#4C5568]"
      >
        <EditIcon />
        Edit
      </button>

      {/* Unpublish */}
      <button
        onClick={onUnpublish}
        className="mt-4 ml-4.25 flex flex-row gap-2 text-[14px] text-[#4C5568]"
      >
        <UnpublishIcon />
        Unpublish
      </button>

      {/* Delete */}
      <button
        onClick={onDelete}
        className="mt-4 ml-4.25 flex flex-row gap-2 text-[14px] text-[#232B3D]"
      >
        <DeleteIcon />
        Delete
      </button>
    </div>
  );
}

export default DotModal;
