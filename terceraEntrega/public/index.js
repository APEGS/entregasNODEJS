const createProduct = document.getElementById('create-product');

createProduct.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formData = new FormData(createProduct);
    try {
        fetch('/api/products',{
            method:'POST',
            body:formData
        })
    } catch (error) {
        console.log(error);
    }
});

document.addEventListener('click',async (e) => {
    if(e.target && e.target.classList.contains("btn-delete")){
        const [,id] = e.target.id.split('-')
        try {
            await fetch(`/api/products/${id}`,{
                method:'DELETE'
            })
        } catch (error) {
            console.log(error)
        }

    }
});