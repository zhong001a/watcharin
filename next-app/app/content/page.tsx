
async function getProduct() {
    const response = await fetch('http://localhost:3010/product/allproduct')
    console.log(response.data )
    return "data"
}

const page = async() => {
  const data = getProduct();
  
  return (
    <div>{}</div>
  )
}

export default page