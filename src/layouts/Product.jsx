
const Product = ({data, title, body}) => {
  const {imageUrl, altTag, description} = data;

  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      <div className="flex">
        <img 
          src={imageUrl} 
          alt={altTag}
          className="w-full object-contain max-h-full"
          draggable={false}
          loading='lazy'
        />
        <p>{body}</p>
      </div>
      <div>
        {description}
      </div>
    </div>
  );
}

export default Product;