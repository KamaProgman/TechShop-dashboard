type CreatedAtType = {
  createdAt: string;
};

export function getDataForLastMonth<T extends CreatedAtType>(data: T[]): T[] {
  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);

  return data.filter((item) => {
    const orderDate = new Date(item.createdAt);
    return orderDate >= oneMonthAgo && orderDate <= now;
  });
}
