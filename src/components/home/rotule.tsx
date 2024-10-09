import { TransformValueInReal } from "@/utils/transform-value-in-real";

type Props = {
    label ?: string;
    value?: string;
}
export const Rotule = ({ label, value } : Props) => {
   return <div>
    {label &&
       <label>{label}</label>
    }
    {value &&
      <label>{TransformValueInReal(parseFloat(value))}</label>
    }
   </div>
}                