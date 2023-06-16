export const calculateNotes = (
  amount: number,
  notes: { five: number; ten: number; twenty: number }
) => {
  const { five, ten, twenty } = notes;
  let remaining = amount;

  const twentyNotes = Math.min(Math.floor(remaining / 20), twenty);
  remaining -= twentyNotes * 20;

  const tenNotes = Math.min(Math.floor(remaining / 10), ten);
  remaining -= tenNotes * 10;

  const fiveNotes = Math.min(Math.floor(remaining / 5), five);
  remaining -= fiveNotes * 5;

  return {
    remaining,
    newNotes: {
      twenty: twenty - twentyNotes,
      ten: ten - tenNotes,
      five: five - fiveNotes,
    },
    distributedNotes: {
      twenty: twentyNotes,
      ten: tenNotes,
      five: fiveNotes,
    },
  };
};
