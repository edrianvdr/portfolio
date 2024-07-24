function Heading2(props) {
  return (
    <>
      <h2 
        className="mt-8 mb-4 font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4 pl-6 pr-10 transform -skew-x-12 bg-blue-800 inline-block relative"
        id={props.h2}
      >
        {props.h2}
      </h2>
    </>
  );
}

export default Heading2;
