export const getBandsType = (items) => {
    return items.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.type === value.type
      ))
    );
  };