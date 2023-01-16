export const apiFetch = async (url: string, options: any = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `${User.slug} API-Key ${YOUR_API_KEY}`,
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const res = await fetch(url, mergedOptions);
  if (res.ok) {
    return res.json();
  }
  throw new Error(
    `Error fetching page data: ${res.statusText} (${res.status})}`
  );
};
