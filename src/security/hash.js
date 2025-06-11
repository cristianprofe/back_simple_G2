import bcrypt from "bcrypt";

//hashear una contraseña
export const hashPassword = async (plainPassword) => {
  const saltRounds = 10;
  return await bcrypt.hash(plainPassword, saltRounds);
};

//verificar
export const verifyPassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
