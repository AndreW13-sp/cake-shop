/* eslint-disable react/prop-types */
import ReactSelect from "react-select";

import { useController } from "react-hook-form";
import { cn } from "../../utils";

// eslint-disable-next-line react/prop-types
function Select({ options, styles, label, ...controllerProps }) {
	const {
		field: { onChange },
		formState: { errors },
	} = useController(controllerProps);

	return (
		<div className={cn("tw-w-full", styles?.mainContainer)}>
			<div className="tw-flex tw-flex-col">
				<label
					className={`tw-block tw-text-sm tw-font-medium tw-mb-3 ${
						errors?.category ? "tw-text-rose-500" : "tw-text-white"
					}`}
				>
					{label}
				</label>
				<ReactSelect
					onChange={(newValue) => onChange(newValue?.value)}
					options={options}
					classNames={{
						container: () =>
							cn(
								"tw-w-full tw-border-2 tw-border-slate-600 tw-bg-gray-800/40 tw-rounded-lg tw-overflow-hidden",
								styles?.container
							),
						control: () => cn("tw-bg-transparent", styles?.control),
						valueContainer: () => cn("tw-py-2", styles?.valueContainer),
						input: () => cn("", styles?.input),
						menu: () => cn("", styles?.menu),
						menuList: () => cn("", styles?.menuList),
						option: () => cn("", styles?.option),
					}}
				/>
			</div>
		</div>
	);
}

export default Select;
