const adminAparmentList = document.querySelector('.adminAparmentList');
const addForm = document.querySelector('.addForm')

addForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { name, categoryId, price, description, map } = e.target;
  try {
    const res = await fetch('/api/apartments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        categoryId: categoryId.value,
        price: price.value,
        description: description.value,
        map: map.value,
      }),
    });
    const data = await res.json();
    console.log(data);
    adminAparmentList.insertAdjacentHTML('beforeend', data);
  } catch (error) {
    console.log(error.message);
  }
});
