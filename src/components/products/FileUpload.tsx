import { Input } from "../../components/ui/input";
import { CloudUpload } from "lucide-react";

const FileUpload = ({
  register,
  fieldName,
}: {
  register: any;
  fieldName: string;
}) => (
  <div className="flex-1">
    <label
      htmlFor={fieldName}
      className="flex flex-col items-center justify-center p-2 mt-1 text-center border-2 border-dashed border-[rgb(204,207,211)] rounded-lg cursor-pointer transition duration-300 hover:border-[#85858a]"
    >
      <CloudUpload size={24} />
      <span className="mt-1 mb-1 font-medium text-xs">
        Выберите файл или перетащите его сюда
      </span>
      <span className="text-sm text-[10px] text-[#6E7076]">
        JPEG или PNG до 5 MB
      </span>
    </label>
    <Input
      type="file"
      {...register(fieldName)}
      id={fieldName}
      accept="image/jpeg,image/png"
      className="absolute w-full opacity-0 cursor-pointer"
    />
  </div>
);

export default FileUpload;
