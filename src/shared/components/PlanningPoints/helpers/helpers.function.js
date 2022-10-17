export const configuredStartDate = startDate => new Date(startDate).getDate();

export const configuredEndDate = endDate => {
  const date = new Date(endDate);
  const day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month.toString().length === 1) {
    month = '0' + month;
  }

  return `${day}.${month}.${year}`;
};
