const Image = ({ image }) => {
  return (
    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
      <img src={image} className="rounded-circle" alt="login" width={200} />
    </div>
  );
};

export default Image;