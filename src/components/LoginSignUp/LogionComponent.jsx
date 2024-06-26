import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginComponent({
  email,
  password,
  handleValueChanges,
  showAndHidePasswordHandler,
  showPassword,
}) {
  return (
    <div className="px-4 sm:px-0">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          نام کاربری یا ایمیل
        </label>
        <div className="mt-2">
          <input
            value={email}
            onChange={handleValueChanges}
            id="email"
            name="email"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            رمز عبور
          </label>
        </div>
        <div className="mt-3 relative">
          {!showPassword ? (
            <EyeSlashIcon
              className="w-5 h-5 absolute left-2 top-2.5 cursor-pointer"
              onClick={showAndHidePasswordHandler}
            />
          ) : (
            <EyeIcon
              className="w-5 h-5 absolute left-2 top-2.5 cursor-pointer"
              onClick={showAndHidePasswordHandler}
            />
          )}
          <input
            value={password}
            onChange={handleValueChanges}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-10 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
}
