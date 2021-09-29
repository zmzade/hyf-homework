const fetching = (searchQuery) => {
  return fetch(`https://api.github.com/search/users?q=${searchQuery}`).then(
    (response) => response.json()
  );
};
export { fetching };
