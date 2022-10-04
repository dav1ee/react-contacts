export const getFormattedPhoneNumber = (number: string) => {
  let format = '+X (XXX) XXX-XX-XX';

  for (let i = 0; i < number.length; i++) {
    format = format.replace('X', number[i]);
  }

  return format;
};
