function Card(props) {
  return (
    <>
        <div className="max-w-sm bg-white border border-blue-800 rounded-lg shadow text-center p-1 hover:bg-blue-800 hover:text-white">
            <div className="flex justify-center items-center h-72">
                <img 
                    src={ props.src } 
                    alt={ props.alt } 
                    className="max-h-full max-w-full object-cover" 
                />
            </div>
            <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight">
                    { props.title }
                </h3>
                <p className="mb-3">
                    { props.description }
                </p>
            </div>
        </div>
    </>
  );
}

export default Card;
