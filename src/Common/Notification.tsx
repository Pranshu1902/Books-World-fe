import { Transition } from "@headlessui/react";

export default function Notification(props: {
  message: string;
  type: string;
  closeCB: () => void;
}) {
  let iconClass = "";
  props.type === "success"
    ? (iconClass = "fa fa-check-circle")
    : (iconClass = "fa fa-remove");

  return (
    <Transition.Root show={true}>
      <Transition.Child
        className={
          props.type === "success"
            ? "bg-green-300 text-green-800 text-xl p-4 rounded-lg flex gap-2 justify-center items-center pr-12"
            : "bg-red-300 text-red-800 text-xl p-4 rounded-lg flex gap-2 justify-center items-center pr-12"
        }
      >
        <div>
          <i
            onClick={() => props.closeCB()}
            className="fa fa-remove hover:text-red-600 absolute right-2 top-1 text-sm"
          ></i>
        </div>
        <i className={iconClass}></i>
        {props.message}
      </Transition.Child>
    </Transition.Root>
  );
}
