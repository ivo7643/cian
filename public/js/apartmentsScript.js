const adminAparmentList = document.querySelector('.adminAparmentList');
const addForm = document.querySelector('.addForm')
const updForm = document.querySelector('.updForm');

if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, categoryId, price, description, map, } = e.target;
    try {
      const res = await fetch('/api/apartments/addProduct', {
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
      adminAparmentList.insertAdjacentHTML('beforeend', data.html);
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
    const res = await fetch(`/api/apartments/${id}`, {
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
    console.log(data);
    if (data.apartmentUpd[0] > 0) {
      window.location.href = '/adminApartments';
    } else {
      
    }
  });
}

if (adminAparmentList) {
  adminAparmentList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('deleteApartment')) {
      const apartmentOne = e.target.closest('.apartmentOne');
      const res = await fetch(`/api/apartments/${apartmentOne.dataset.id}/delete`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.delApartment) {
        apartmentOne.remove();
      }
    }
  });
}