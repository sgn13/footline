export const checkPermission = ({ permission, permissions }) => {
  const result =
    !permission ||
    (permissions.length && Array.isArray(permission)
      ? permissions.some((v) => permission.includes(v))
      : permissions.includes(permission));

  return result;
};
