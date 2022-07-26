//GET USER CATEGORY
export const getUserCategory = (userId) => {
  try {
    const data = fetch(`/api/category/${userId}`, { method: "GET" }).then(
      (res) => res.json()
    );

    return data;
  } catch (error) {
    throw error;
  }
};

//EDIT USER CATEGORY
export const editCategoryAmount = async (newAmount, userId) => {
  try {
    const res = await fetch(`/api/category-amount/${userId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newAmount),
    });
  } catch (error) {
    throw error;
  }
};

//POST USER CATEGORY
export const postCategoryAmount = async (amount) => {
  try {
    const data = await fetch("/api/category-amount", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(amount),
    }).then((res) => res.json());
    return data;
  } catch (error) {
    throw error;
  }
};
