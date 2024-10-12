const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  return password.length >= 8;
};

export { validateEmail, validatePassword }
