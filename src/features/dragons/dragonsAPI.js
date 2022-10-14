export function createDragon(
  data = {
    name: `dragon + ${Math.floor(Math.random() * 100)}`,
    age: Math.floor(Math.random() * 100),
  }
) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: data }), 500)
  );
}
