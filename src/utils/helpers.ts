export const uuid = Date.now().toString();

export const getDefaultValues = (): MissingInfoFormVals => {
  return {email: '', password: ''};
};
