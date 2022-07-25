import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { linkType } from "../type/DataTypes";
import { Link } from "raviger";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown(props: { filters: linkType[] }) {
  const [filter, setFilter] = useState(props.filters);

  return (
    <Menu as="div" className="relative w-3/4 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-green-300 shadow-lg px-6 py-2 bg-green-800 text-sm font-bold text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-300">
          {filter.filter((field: linkType) => field.active)[0].title}&nbsp;
          <i className="fa fa-sort-down"></i>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-green-700 ring-1 ring-white ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {filter.map((filterElement: linkType, index) => (
              <Menu.Item key={index}>
                <Link
                  href={filterElement.link}
                  className={classNames(
                    filterElement.active
                      ? "bg-green-700 hover:bg-green-600 text-white w-full flex justify-start font-bold"
                      : "bg-green-700 hover:bg-green-600 text-green-300 w-full flex justify-start hover:text-white hover:font-bold",
                    "flex px-4 py-2 text-sm gap-1 items-center"
                  )}
                  onClick={() => {
                    let newFilter: linkType[] = [];
                    filter.forEach((element: linkType) => {
                      if (element.title === filterElement.title) {
                        newFilter.push({
                          title: element.title,
                          active: true,
                          link: element.link,
                          icon: element.icon,
                        });
                      } else {
                        newFilter.push({
                          title: element.title,
                          active: false,
                          link: element.link,
                          icon: element.icon,
                        });
                      }
                    });
                    setFilter(newFilter);
                  }}
                >
                  <i className={filterElement.icon}></i> {filterElement.title}
                </Link>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
