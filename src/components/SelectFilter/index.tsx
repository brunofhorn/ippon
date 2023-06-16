import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

import { useState } from "react";

import { ISelectFilter } from "@/interfaces/form";

export default function SelectFilter({ id, value, label, placeholder, items = [] }: ISelectFilter) {
    const [query, setQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItem =
        query === ""
            ? items
            : items.filter(item => {
                  return item.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <Combobox as="div" value={selectedItem} onChange={setSelectedItem}>
            {label && <Combobox.Label className="block text-sm font-medium text-gray-700">{label}</Combobox.Label>}
            <div className="relative mt-1">
                <Combobox.Input
                    id={id}
                    name={id}
                    value={value}
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    onChange={event => setQuery(event.target.value)}
                    displayValue={(person: any) => person?.name}
                    placeholder={placeholder ?? ""}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                {filteredItem.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredItem.map(item => (
                            <Combobox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                    twMerge(
                                        "relative cursor-default select-none py-2 pl-8 pr-4",
                                        active ? "bg-primary text-white" : "text-gray-900",
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <span className={twMerge("block truncate", selected && "font-semibold")}>
                                            {item.name}
                                        </span>

                                        {selected && (
                                            <span
                                                className={twMerge(
                                                    "absolute inset-y-0 left-0 flex items-center pl-1.5",
                                                    active ? "text-white" : "text-primary",
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox>
    );
}
