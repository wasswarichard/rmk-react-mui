export const getInterpolatedPath = (
  routePath: string,
  params: Record<string, string>
): string => {
  const regex = /:(\w+)/g;
  const extractedParameters = [];
  let match;
  do {
    match = regex.exec(routePath);
    match && extractedParameters.push(match[1]);
  } while (match);
  extractedParameters
    .filter((key) => !key.match(/^\d+$/g))
    .forEach((key) => {
      if (!params[key]) {
        throw new Error(`Param ${key} not found`);
      }
      routePath = routePath.replace(`:${key}`, encodeURIComponent(params[key]));
    });
  return routePath;
};

export const addSearchParams = (
  routePath: string,
  params: Record<string, string>
): string => {
  const keys = Object.keys(params);
  if (keys.length === 0) return routePath;
  return (
    routePath +
    '?' +
    keys
      .reduce((accumulator, key) => {
        let value: string | string[] = params[key];
        Array.isArray(value) && (value = value.join(','));
        accumulator.push(`${key}=${encodeURIComponent(value)}`);
        return accumulator;
      }, [] as string[])
      .join('&')
  );
};
