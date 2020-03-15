export async function fetchHouseProgress(): Promise<number> {
  const progress = await new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(25);
    }, 2000);
  });

  return progress;
}
