const Benefits = ({ benefit }) => {
  const { img, title } = benefit;
  return (
    <div className="flex">
      <img className="sm:size-6 benefit-img" src={img} alt="" />
      <h4 className="ml-3 sm:text-base capitalize benefit-title">{title}</h4>
    </div>
  );
};

export default Benefits;
