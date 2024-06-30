import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SubService`.
 */
export type SubServiceProps = SliceComponentProps<Content.SubServiceSlice>;

/**
 * Component for "SubService" Slices.
 */
const SubService = ({ slice }: SubServiceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sub_service (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SubService;
