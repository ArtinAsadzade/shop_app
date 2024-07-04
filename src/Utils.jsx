import CryptoJS from "crypto-js";

export const encrypted = (data, key) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), import.meta.env.VITE_SECRET_KEY).toString();
  localStorage.setItem(key, encryptedData);
};

export const decrypted = (key) => {
  const encryptedData = localStorage.getItem(key);
  if (encryptedData) {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, import.meta.env.VITE_SECRET_KEY);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      localStorage.clear();
      location.reload();
      return [];
    }
  } else return [];
};

export const checkUserNameExists = (userName) => {
  const decryptedData = decrypted("usersData");
  return decryptedData.some((user) => userName === user.userName);
};

export const checkUserEmailExists = (email) => {
  const decryptedData = decrypted("usersData");
  return decryptedData.some((user) => email === user.email);
};

export const validateSignUp = (values) => {
  const { userName, email, password, passwordRepeat } = values;

  if (password !== passwordRepeat) {
    return "رمزهای عبور با هم مطابقت ندارند.";
  }

  if (checkUserNameExists(userName)) {
    return "نام کاربری از قبل موجود است.";
  }

  if (checkUserEmailExists(email)) {
    return "ایمیل از قبل موجود است.";
  }

  return true;
};

export const userLogin = (userName, userPassword) => {
  const decryptedData = decrypted("usersData");

  return decryptedData ? (
    decryptedData.find((user) => userPassword === user.password && (user.email === userName || user.userName === userName))
  ) : (
    <></>
  );
};

export const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  if (originalPrice <= 0) {
    return "قیمت اصلی باید بزرگتر از صفر باشد";
  }
  if (discountedPrice < 0) {
    return "قیمت بعد از تخفیف نمی‌تواند منفی باشد";
  }

  let discount = originalPrice - discountedPrice;
  let discountPercentage = (discount / originalPrice) * 100;
  return Math.round(discountPercentage);
};

export const lastOfferProductHandler = () => {
  const decryptedData = decrypted("productsData");

  if (!decryptedData || decryptedData.length === 0) {
    return "";
  }

  let bestOfferProduct = null;
  let highestDiscountPercentage = 0;

  for (const product of decryptedData) {
    const discountPercentage = calculateDiscountPercentage(product.price, product.offerPrice);
    if (typeof discountPercentage === "number" && discountPercentage > highestDiscountPercentage) {
      highestDiscountPercentage = discountPercentage;
      bestOfferProduct = product;
    }
  }

  return bestOfferProduct || "هیچ محصولی با تخفیف یافت نشد";
};

export const extractBrands = (products) => {
  const brandSet = new Set(); // یک Set برای نگه‌داری برندها
  for (const product of products) {
    brandSet.add(product.brand);
  }
  // تبدیل Set به آرایه
  const uniqueBrands = Array.from(brandSet);
  return uniqueBrands;
};
