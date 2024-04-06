import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-card');
  };

  useEffect(() => {
    const shapes = document.querySelectorAll('.shape');
    const stars = document.querySelectorAll('.star');
    
    // Randomly position shapes and stars on the screen
    shapes.forEach(shape => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      shape.style.left = `${x}px`;
      shape.style.top = `${y}px`;
      shape.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
      shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
      shape.style.transform = `rotate(${Math.random() * 360}deg)`;
    });

    stars.forEach(star => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    });

    // Move shapes and stars randomly
    setInterval(() => {
      shapes.forEach(shape => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        shape.style.left = `${x}px`;
        shape.style.top = `${y}px`;
        shape.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        shape.style.transform = `rotate(${Math.random() * 360}deg)`;
      });

      stars.forEach(star => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
      });
    }, 3000); // Change shape and star positions every 5 seconds
  }, []);

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-600 opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900 to-red-600 opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-blue-500 opacity-50"></div> */}
          <div className="absolute inset-0 bg-gradient-to-l from-pink-700 to-purple-600 opacity-75"></div>
        </div>
      </div>

      {/* Stars */}
      {[...Array(10)].map((_, index) => (
        <svg
          key={index}
          className="star absolute w-8 h-8 opacity-50 animate-star"
          style={{
            left: `${Math.random() * window.innerWidth}px`,
            top: `${Math.random() * window.innerHeight}px`,
            color: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 1.5l1.65 5.358h5.339l-4.315 3.318 1.649 5.358-4.314-3.318-4.316 3.318 1.649-5.358-4.314-3.318h5.339z" clipRule="evenodd" />
        </svg>
      ))}

      {/* Additional Shapes */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="shape absolute w-6 h-6 opacity-75 transition-transform duration-300"
          style={{
            left: `${Math.random() * window.innerWidth}px`,
            top: `${Math.random() * window.innerHeight}px`,
            backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        ></div>
      ))}

      {/* Content */}
      <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-3xl sm:text-3xl font-bold mb-4">Welcome to Retrofiles</h1>
        <p className="text-lg mb-8 sm:mb-4">Your Personal Memory Lane!</p>
        <p className="text-lg sm:text-sm sm:w-2/3 mb-4">Join our community today and start preserving your memories.</p>
        <p className="text-lg md:text-xl sm:text-base sm:mb-4 mb-8">Let's make every moment unforgettable!</p>
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;
