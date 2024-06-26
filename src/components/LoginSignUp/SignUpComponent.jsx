import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function SignUpComponent({
  firstName,
  lastName,
  userName,
  email,
  password,
  passwordRepeat,
  handleValueChanges,
  showAndHidePasswordHandler,
  showPassword,
}) {
  return (
    <div className="px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            نام
          </label>
          <div className="mt-2">
            <input
              value={firstName}
              onChange={handleValueChanges}
              id="firstName"
              name="firstName"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            نام خانوادگی
          </label>
          <div className="mt-2">
            <input
              value={lastName}
              onChange={handleValueChanges}
              id="lastName"
              name="lastName"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="userName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          نام کاربری
        </label>
        <div className="mt-2">
          <input
            value={userName}
            onChange={handleValueChanges}
            id="userName"
            name="userName"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ایمیل
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
        <div className="mt-2 relative">
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
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-10 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 border-none"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <label
            htmlFor="passwordRepeat"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            تکرار رمز عبور
          </label>
        </div>
        <div className="mt-2 relative">
          <input
            value={passwordRepeat}
            onChange={handleValueChanges}
            id="passwordRepeat"
            name="passwordRepeat"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-10 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 border-none"
          />
        </div>
      </div>
    </div>
  );
}
