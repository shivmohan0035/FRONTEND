import reactlogo from './assets/pngtree.png';

function Profile() {
  return (
    <div className="card text-bg-dark">
      <img style={{ width: "100%", height: "400px" }} src={reactlogo} className="card-img" alt="..." />

      <div className="card-img-overlay">
        <h5 className="card-title">Er. SHIVMOHAN CHAURASIA</h5>

        <p className="card-text">
          Computer Science and Engineering - AIML | Full Stack Developer | React JS | Node JS | Express JS | MongoDB | MERN Stack
        </p>

        <p className="card-text">
          <small>Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}

export default Profile;