document.addEventListener("DOMContentLoaded", () => {
  const categories = ["分類1", "分類2", "分類3"];
  const categoryGrid = document.querySelector(".category-grid");

  categories.forEach(category => {
    const categoryItem = document.createElement("div");
    categoryItem.className = "category-item";
    categoryItem.textContent = category;
    categoryGrid.appendChild(categoryItem);
  });
});
