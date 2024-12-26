export const getBandsType = (items) => {
    return items.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.type === value.type
      ))
    );
  };

 export const getBandsByType = (items, type) => {
    return items.filter(item => item.type === type);
  };