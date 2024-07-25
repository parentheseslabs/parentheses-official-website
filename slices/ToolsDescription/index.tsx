import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ToolsDescription`.
 */
export type ToolsDescriptionProps =
  SliceComponentProps<Content.ToolsDescriptionSlice>;

/**
 * Component for "ToolsDescription" Slices.
 */
const ToolsDescription = ({ slice }: ToolsDescriptionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for tools_description (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ToolsDescription;
