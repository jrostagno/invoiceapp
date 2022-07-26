//GET CALCULATIONS
export const getCalculation = (userId) => {
  try {
    const data = fetch(`/api/calculation/${userId}`, { method: "GET" }).then(
      (res) => res.json()
    );
    return data;
  } catch (error) {
    throw error;
  }
};
