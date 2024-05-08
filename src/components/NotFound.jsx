import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
export default function NotFound() {
  return (
    <div className="w-full flex items-center">
      <h1>محصول مورد نظر شما یافت نشد</h1>
      <ExclamationCircleIcon className="w-6 text-yellow-400" />
    </div>
  );
}
