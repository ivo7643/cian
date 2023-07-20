const adminAparmentList = document.querySelector('.adminAparmentList');
const addForm = document.querySelector('.addForm')
const updForm = document.querySelector('.updForm');

if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, categoryId, price, description, map } = e.target;
    console.log(e.target, '1111111111111');
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
      console.log(data, '==================');
      adminAparmentList.insertAdjacentHTML('beforeend', data);
    } catch (error) {
      console.log(error.message);
    }
  });
}

if (updForm) {
  updForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, categoryId, price, description, map
    } = e.target;
    const { id } = e.target.dataset;
    // const  id  = e.target.dataset.id;
    const res = await fetch(`/api/apartmets/${id}`, {
      method: 'PUT',
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
    if (data.productUpd[0] > 0) {
      window.location.href = '/apartmets';
    }
  });
}
