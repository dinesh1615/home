import React, { useEffect, useState, useRef } from 'react';
import './App.css'
import { FaTasks, FaProjectDiagram, FaIndustry, FaChartLine, FaGlobe, FaUserTie, FaDigitalTachograph, FaCloud, FaDatabase, FaServer } from 'react-icons/fa';
import one from './one.mp4';
import two from './two.mp4';


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resolvedIssues, setResolvedIssues] = useState(0);
  const [finishedProjects, setFinishedProjects] = useState(0);
  const [industrySolutions, setIndustrySolutions] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward
  const servicesContainerRef = useRef(null);

 


  const steps = [
    { step: '01', icon: 'flaticon-meeting', title: 'First Appointment', subtitle: 'First Step' },
    { step: '02', icon: 'flaticon-paper', title: 'Know Client Needs', subtitle: 'Second Step' },
    { step: '03', icon: 'flaticon-analysis', title: 'Market Research', subtitle: 'Third Step' },
    { step: '04', icon: 'flaticon-submit', title: 'Submit Reports', subtitle: 'Fourth Step' },
  ];


  const services2 = [
    { title: 'Manufacturing', image: '/images/service/18.jpg',  backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Wholesale & Distribution', image: '/images/service/19.jpg', backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Retail', image: '/images/service/20.jpg', backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Professional Services', image: '/images/service/21.jpg',backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Healthcare and Life Sciences', image: '/images/service/22.jpg', backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Food and Beverages', image: '/images/service/23.jpg',backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Real Estate Construction', image: '/images/service/24.jpg', backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Automotive', image: '/images/service/11.jpg', backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Chemicals', image: '/images/service/12.jpg', backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Agriculture', image: '/images/service/13.jpg', backgroundImage: "/icon-19.png", link: 'service-details-2#' },
    { title: 'Engineering Construction', image: '/images/service/14.jpg', backgroundImage: "/icon-19.png", link: 'service-details-3#' },
    { title: 'Non-Profit Organizations', image: '/images/service/15.jpg', backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Energy and Utilities', image: '/images/service/16.jpg', backgroundImage: "/icon-19.png", link: '#' },
    { title: 'Textiles', image: '/images/service/17.jpg', backgroundImage: "/icon-19.png", link: '#' },
  ];
  

  const images = [
    {
      src: '/banner-1.jpg',
      title: 'Showing You the Way of Success',
      tagline: 'Guiding your business to success through innovative solutions.',
    },
    {
      src: '/banner-2.jpg',
      title: 'Business and Individual Consulting',
      tagline: 'Tailored consulting services for businesses and individuals.',
    },
    {
      src: '/banner-3.jpg',
      title: 'Ideas for Your Better Growth',
      tagline: 'Innovative ideas to foster your business growth.',
    },
  ];

  useEffect(() => {
    // Add animation to title when currentIndex changes
    const titles = document.querySelectorAll('.carousel-item h2');
    titles.forEach(title => {
      title.classList.remove('animate-fade-in');
      void title.offsetWidth; // Trigger reflow
      title.classList.add('animate-fade-in');
    });
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  

  useEffect(() => {
    const intervalResolved = setInterval(() => {
      if (resolvedIssues < 150) {
        setResolvedIssues((prevCount) => prevCount + 1);
      }
    }, 20);

    const intervalProjects = setInterval(() => {
      if (finishedProjects < 400) {
        setFinishedProjects((prevCount) => prevCount + 1);
      }
    }, 10);

    const intervalSolutions = setInterval(() => {
      if (industrySolutions < 30) {
        setIndustrySolutions((prevCount) => prevCount + 1);
      }
    }, 30);
    

    return () => {
      clearInterval(intervalResolved);
      clearInterval(intervalProjects);
      clearInterval(intervalSolutions);
    };
  }, [resolvedIssues, finishedProjects, industrySolutions]);

 const services = [
  {
    number: '1',
    title: 'Enterprise Resource Planning',
    description: "ERP software integrates all of a company's core business processes.",
    icon: <FaChartLine className="text-blue-600 text-4xl" />,
    color: 'blue-600',
  },
  {
    number: '2',
    title: 'Web Technologies',
    description: "Tools and techniques used to design, develop, and maintain websites.",
    icon: <FaGlobe className="text-green-600 text-4xl" />,
    color: 'green-600',
  },
  {
    number: '3',
    title: 'Recruitment Process Outsourcing',
    description: "Strategic business decision to entrust recruitment activities.",
    icon: <FaUserTie className="text-red-600 text-4xl" />,
    color: 'red-600',
  },
  {
    number: '4',
    title: 'Digital Marketing',
    description: "Use of the internet, mobile devices, social media, and other digital channels.",
    icon: <FaDigitalTachograph className="text-purple-600 text-4xl" />,
    color: 'purple-600',
  },
  {
    number: '5',
    title: 'Domain Registration',
    description: "Process of claiming a unique name for your website on the internet.",
    icon: <FaGlobe className="text-yellow-600 text-4xl" />,
    color: 'yellow-600',
  },
  {
    number: '6',
    title: 'SAP Support',
    description: "Support options for customers based on their specific needs.",
    icon: <FaCloud className="text-blue-600 text-4xl" />,
    color: 'blue-600',
  },
  {
    number: '7',
    title: 'SAP Rollout & Migration',
    description: "Key distinction between an SAP rollout and an SAP migration.",
    icon: <FaServer className="text-orange-600 text-4xl" />,
    color: 'orange-600',
  },
  {
    number: '8',
    title: 'SAP Cloud & Hosting',
    description: "Running SAP software on the cloud.",
    icon: <FaCloud className="text-gray-600 text-4xl" />,
    color: 'gray-600',
  },
  {
    number: '9',
    title: 'SAP Maintenance & Licenses',
    description: "Ensuring ongoing functionality and legal compliance of SAP software.",
    icon: <FaDatabase className="text-brown-600 text-4xl" />,
    color: 'brown-600',
  },
];

  const reasons = [
    { title: 'Artificial Intelligence (AI)', description: "Machine Learning (ML), Natural Language Processing (NLP)." ,p: "A tool"},
    { title: 'Data Analytics', description: "Data Collection, Data Transformation, Data Analysis.",p: "a" },
    { title: 'Internet of Things (IoT)', description: "Connected Devices, Data Communication, Applications.",p: "A tool" },
    { title: 'Mobile Applications', description: "Native Apps, Web Apps, Hybrid Apps.",p: "A tool" },
    { title: 'SEO, SEM, SMO, SMM', description: "Goal, Techniques, Benefits,Integration,Collaboration." ,p: "A tool"},
    { title: 'Staffing & Recruitment', description: "Focus, Process, Employer Branding & Development." ,p: "A tool"},
  ];

  useEffect(() => {

    
    
    const servicesContainer = servicesContainerRef.current;

    const scrollInterval = setInterval(() => {
      if (servicesContainer) {
        const maxScrollLeft = servicesContainer.scrollWidth - servicesContainer.clientWidth;
        
        if (scrollDirection === 1 && servicesContainer.scrollLeft >= maxScrollLeft) {
          setScrollDirection(-1);
        } else if (scrollDirection === -1 && servicesContainer.scrollLeft <= 0) {
          setScrollDirection(1);
        }

        servicesContainer.scrollBy({
          left: scrollDirection * 200,
          behavior: 'smooth',
        });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [scrollDirection]);

  const [showAll, setShowAll] = useState(false);

  // Function to toggle showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
    // Scroll to the top of the section when "Load More" is clicked
    if (window) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine which services to display based on showAll state
  const servicesToShow = showAll ? services2 : services2.slice(0, 4);
 

 

  return (
    <div className="container mx-auto px-4">
 <div className="container mx-auto px-4">
  <div className="carousel-container relative w-full max-w-screen-xl mx-auto overflow-hidden shadow-lg mb-8">
    <div className="carousel flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {images.map((image, index) => (
        <div key={index} className="carousel-item min-w-full relative">
          <img
            src={image.src}
            alt="RSBlooming Banner"
            className={`w-full h-auto object-cover ${currentIndex === index ? 'zoom-in' : 'zoom-out'}`}
          />
          <div className="carousel-content absolute top-1/4 left-8 text-white p-4 bg-opacity-50 rounded">
            <h2 className="text-5xl font-bold bg-opacity-70 p-2 rounded animate-fade-in">{image.title}</h2>
            <p className="text-2xl mt-2 text-gray-700 bg-opacity-70 p-2 rounded">{image.tagline}</p>
            
            <div className="text-left my-8">
  <a 
    href="#services" 
    className="inline-block py-2 px-6 bg-orange-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:text-black transition-colors duration-700 "
  >
    Services & Plan
  </a>
</div>


          </div>
        </div>
      ))}
    </div>
  </div>
</div>





      <div className="flex items-center mb-8">
        <div className="circle-container relative w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-full shadow-lg mr-8">
          <img src="/about-1.jpg" alt="RSBlooming Team" className="w-full h-full object-cover" />
          <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div className="years text-5xl md:text-6xl font-bold">20</div>
            <div className="experience text-lg md:text-xl">Years Experience</div>
          </div>
        </div>
        <div className="flex-1">
          

        <div className="flex items-center justify-center w-full">
      <div className="flex-1 border-b border-black mx-4"></div>
      <h1 className="text-4xl font-bold font-cinzel">20 Years Experience</h1>
      <div className="flex-1 border-b border-black mx-4"></div>
    </div>


          <p className="mt-4">Handling tough SAP Work tasks. Giving Futures to your Business not Just, Let's Grow Together Giving wings to financial dreams.</p>
          <div className="flex items-center justify-center w-full">
          <h2 id="about" className="text-4xl font-semi-bold mt-8 font-cinzel">About Us</h2>
          <div className="flex-1 border-b border-black mx-4 mt-8"></div>
          </div>
          <h3 className="text-2xl font-semibold mt-8">Experts in Providing SAP Implementation Solutions.</h3>
          
          
          <ul className="mt-4 space-y-4">
  <li className="flex items-center text-2xl text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out transform hover:scale-105">
    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
    SAP Business One
  </li>
  <li className="flex items-center text-2xl text-gray-700 hover:text-blue-500 transition duration-200 ease-in-out transform hover:scale-105">
    <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
    SAP Business One On HANA
  </li>
</ul>



          <p className="mt-4">RSBlooming, a leading SAP Business Partner, empowers small and mid-sized businesses worldwide. Our headquarters are in Hyderabad, India, but we serve clients globally. We specialize in innovative IT solutions that optimize your operations and drive sustainable growth...</p>
          
          <a
      href="#more-about-us"
      className="inline-block mt-4 py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg relative overflow-hidden transition duration-900 ease-in-out transform hover:scale-105 focus:scale-105 focus:outline-none"
    >
      <span className="absolute left-0 top-0 w-full h-full bg-blue-600 opacity-0 transition duration-300 ease-in-out transform hover:opacity-100"></span>
      <span className="relative z-10">More About Us</span>
    </a>

        </div>
      </div>

      <section className="my-8">
        <div className="text-center">
          
          <div className="flex items-center justify-center w-full">
      <div className="flex-1 border-b border-black mx-4"></div>
      <h2 className="text-4xl font-bold font-cinzel">Numbers speak for themselves</h2>
      <div className="flex-1 border-b border-black mx-4"></div>
    </div>
          <p className="mt-4">Here's What We Achieved So Far</p>
        </div>
        <div className="mt-2 flex items-center justify-center space-x-6">
          <div className="message-bubble text-center bg-blue-200 p-4 rounded-lg">
            <FaTasks className="text-4xl text-blue-600" />
            <p className="text-4xl font-bold">{resolvedIssues}</p>
            <p>Daily Issues Resolved</p>
          </div>
          <div className="message-bubble text-center bg-green-200 p-4 rounded-lg">
            <FaProjectDiagram className="text-4xl text-green-600" />
            <p className="text-4xl font-bold">{finishedProjects}</p>
            <p>Finished Projects</p>
          </div>
          <div className="message-bubble text-center bg-yellow-200 p-4 rounded-lg">
            <FaIndustry className="text-4xl text-yellow-600" />
            <p className="text-4xl font-bold">{industrySolutions}</p>
            <p>Industry Solutions</p>
          </div>
        </div>
      </section>

  <section className="my-8 text-center">
 

  <div className="flex items-center justify-center w-full">
      <div className="flex-1 border-b border-black mx-4"></div>
      <h2 className="text-3xl font-semibold font-cinzel mx-4">Our Services</h2>
      <div className="flex-1 border-b border-black mx-4"></div>
    </div>

  <div ref={servicesContainerRef} className="mt-6 flex overflow-x-auto space-x-4 p-4">
    {services.map((service, index) => (
      <div key={index} className={`service-card flex-shrink-0 w-80 bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-${service.color}`}>
        <div className="relative">
          <div className={`message-bubble absolute top-0 left-0 m-4 p-2 bg-${service.color} rounded-full flex items-center justify-center`}>
            <div className="number text-lg font-bold text-white mr-2">{service.number}</div>
            <div className="icon p-2 bg-white rounded-full">
              {service.icon}
            </div>
          </div>
        </div>
        <div className="content p-4 mt-16">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="mt-2">{service.description}</p>
          <div className="explore-more mt-4 flex items-center justify-between">
            <span className="text-blue-500 font-semibold">Explore More</span>
            <div className="animation-arrow w-4 h-4 bg-blue-500 transform rotate-45"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



<section id="growth" className="py-16 bg-blue-200">
  <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap">
    
    {/* Left Column - Our Growth */}
    <div className="w-full md:w-2/3 mb-8 md:mb-0 md:mr-4 relative  ">
  <div className="bg-white rounded-lg shadow-md p-8 text-center">
  
    <div className="flex items-center justify-center w-full">
      <div className="flex-1 border-b border-black mx-4 mb-4"></div>
      <h2 className="text-4xl font-bold font-cinzel mx-4 mb-4">Our Growth</h2>
      <div className="flex-1 border-b border-black mx-4 mb-4"></div>
    </div>

    <p className="text-xl text-gray-600">Thinking Beyond Ordinary Strategies</p>
    <p className="mt-4 text-lg text-gray-700">
      Analyze current trends in the SAP & ERP and IT solutions market to identify new growth opportunities.
    </p>
    <div className="mt-8">
   


    <a
      href="#growth"
      className="inline-block bg-orange-500 text-lg font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 focus:scale-105 focus:outline-none transition duration-500 ease-in-out relative overflow-hidden hover:bg-blue-500"
    >
     
      Know More
    </a>
 


    </div>
  </div>
  
  {/* Animated GIFs */}
  <div className="absolute bottom--0.5 right-0 left-0 flex justify-center pt-4">
      <div className="w-1/3 mr-10">
        <video className="max-w-full h-auto "  autoPlay loop muted>
          <source src={one} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-1/3 ml-10">
        <video className="max-w-full h-auto"  autoPlay loop muted>
          <source src={two} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
</div>

    
    {/* Right Column - Mission and Vision */}
    <div className="w-full md:w-1/3 md:ml-0">
      <div className="flex flex-col space-y-4">
        
        {/* Mission Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="flex-grow">
            

            <div className="flex items-center justify-center w-full">
      <div className="flex-1 border-b border-black mx-4"></div>
      <h3 className="text-xl font-bold font-cinzel mx-4">Mission</h3>
      <div className="flex-1 border-b border-black mx-4"></div>
    </div>
            <p className="text-gray-700 mb-4">
              To revolutionize business management through SAP Business One solutions delivering tailored implementations.
            </p>
            <a href="#mission" className="text-blue-500 font-semibold hover:underline">Read More</a>
          </div>
          <div className="ml-4">
            <img src="/18.jpg" alt="Our Mission" className="w-32 h-32 object-cover rounded-lg" />
          </div>
        </div>
        
        {/* Vision Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="flex-grow">
            
            <div className="flex items-center justify-center w-full">
      <div className="flex-1 border-b border-black mx-4"></div>
      <h3 className="text-xl font-bold font-cinzel mx-4">Vision</h3>
      <div className="flex-1 border-b border-black mx-4"></div>
    </div>

            <p className="text-gray-700 mb-4">
              To be the catalyst for business innovation and growth recognized globally for our unwavering dedication to client satisfaction.
            </p>
            <a href="#vision" className="text-blue-500 font-semibold hover:underline">Read More</a>
          </div>
          <div className="ml-4">
            <img src="/20.jpg" alt="Our Vision" className="w-32 h-32 object-cover rounded-lg" />
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
</section>








    




<div className="flex items-center justify-center w-full">
      <div className="flex-1 border-b border-black mx-4"></div>
      <h2 id="why-choose-us" className="text-4xl font-semibold text-center mt-12 mb-10 mx-4 font-cinzel">Why Choose Us?</h2>
     <div className="flex-1 border-b border-black mx-4"></div>

     
    </div>
    <div  className="flex items-center justify-center w-full">
   <div className="flex-1 border-b border-black mx-4"></div>
          <h4 className="text-3xl font-semibold text-center mb-4 font-cinzel">Digital Transformation with Services</h4>
      <div className="flex-1 border-b border-black mx-4"></div>
    </div>

<section className="relative py-16">
  {/* Background Text */}
  <div className="absolute inset-0 flex justify-center items-center z-0" style={{ top: '90%' }}>
    <div className="flex flex-col items-center">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-800 opacity-20 transform rotate-0 shadow-2xl mt-2" style={{ fontFamily: 'Shadowend' }}>
        WHY CHOOSE US
      </h1>
    </div>
  </div>

  {/* Foreground Content */}
  <div className="relative container mx-auto px-4 grid grid-cols-6 gap-6 items-center z-10">
    {/* Left Corner Grid - 2 Columns */}
    <div className="col-span-2 flex flex-col justify-end md:justify-center lg:justify-start">
      <div className="grid grid-cols-1 gap-4">
        {reasons.slice(0, 3).map((reason, index) => (
          <div key={index} className="why-choose-us-card p-2 md:p-3 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden mb-10">
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
              <p className="text-xs md:text-2xl bg-black px-4 text-center ">{reason.description}</p>
            </div>
            <h3 className="text-base md:text-lg font-bold">{reason.title}</h3>
            <p className="text-xs md:text-sm">{reason.p}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Center Image */}
    <div className="col-span-2 flex justify-center relative">
      <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
        <img src="/chooseus-1.jpg" alt="RSBlooming Team" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Right Corner Grid - 2 Columns */}
    <div className="col-span-2 flex flex-col justify-start md:justify-center lg:justify-end ">
      <div className="grid grid-cols-1 gap-4">
        {reasons.slice(3).map((reason, index) => (
          <div key={index} className="why-choose-us-card p-2 md:p-3 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden mb-10">
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
              <p className="text-xs md:text-2xl px-4 text-center bg-black">{reason.description}</p>
            </div>
            <h3 className="text-base md:text-lg font-bold">{reason.title}</h3>
            <p className="text-xs md:text-sm">{reason.p}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>







<section className="py-16">
      <div className="container mx-auto overflow-hidden">
        <div className="text-center mb-8">
          <span className="text-lg text-gray-600">WE WORK FOR</span>
          <h2 className="text-4xl font-bold">Industries We Served</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {servicesToShow.map((service, index) => (
            <div
              key={index}
              className="service-block-two bg-pink-100 p-6 rounded-lg shadow-md hover:bg-white hover:shadow-xl transition-shadow duration-300 flex-none w-full md:w-64 lg:w-64 mx-2 mb-4"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="inner-box bg-white bg-opacity-75 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  <a href={service.link !== '#' ? service.link : undefined}>{service.title}</a>
                </h3>
                <div className="image-container mb-4 overflow-hidden">
                  <figure className="image-box transform transition-transform duration-300 ease-in-out">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:w-full hover:h-40 hover:rounded-lg"
                    />
                  </figure>
                </div>
                <div className="link-box">
                  <a href={service.link !== '#' ? service.link : undefined} className="text-blue-500">
                    <i className="flaticon-right-arrow-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowAll}
              className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>





<section className="working-style-two py-16 bg-gray-100">
  <div className="container mx-auto">
    <div className="text-center mb-8">
      <span className="text-lg text-gray-600">How we works</span>
      <h2 className="text-4xl font-bold">We Plan for your Growth</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <div key={index} className="working-block-two bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="inner-box text-center">
            <div className="upper-box mb-4">
              <span className="count-text text-2xl font-bold text-blue-500">{step.step}</span>
              <div className="icon-box text-4xl text-blue-500">
                <i className={step.icon}></i>
              </div>
              <h6 className="text-lg font-semibold text-gray-700">{step.subtitle}</h6>
            </div>
            <div className="lower-box">
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <button className="text-blue-500 underline">
                <span>Explore More</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="py-16 bg-gray-100">
  <div className="container mx-auto">
    <div className="text-center mb-8">

      
    <div  className="flex items-center justify-center w-full">
   <div className="flex-1 border-b border-yellow-900 mx-4"></div>
   <h2 className="text-4xl font-bold font-cinzel">Office Locations</h2>
      <div className="flex-1 border-b border-yellow-900 mx-4"></div>
    </div>

      <p className="text-lg text-gray-600">
        Over 10 Employees working in more than 8 States in India and 20 Employees working in American Branch.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Indian Branch Office Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4"> Hyderabad Branch Office</h3>
        <p className="mb-4">
          #3-88/3/A , Sree Krishna Arcade , Nizampet, Hyderabad | 500090 TG , INDIA Tel: +91-4035759443 | +91-8179382764
Email: info@amxsol.com
        </p>
        <div className="flex justify-center items-center mb-4">
          <div className="w-full h-60 bg-gray-300 rounded-lg">
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.9736487764285!2d78.38050387429524!3d17.508771299298687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939b139586ad%3A0x1007a73d33b60bf!2sSree%20Krishna%20Arcade!5e0!3m2!1sen!2sin!4v1719405379952!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* American Corporate Office Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">American Corporate Office</h3>
        <p className="mb-4">
          AMXSOL LLC, 1000 Northbrook Drive, Suite 100, Trevose, PA 19053 USA 
          Tel: +1 (215) 268-6168
          Email: info@amxsol.com    
        </p>
        <div className="flex justify-center items-center mb-4">
          <div className="w-full h-60 bg-gray-300 rounded-lg">
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.119646930394!2d-74.96941568461326!3d40.1394449793931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c147ff874f5d17%3A0x2bdf05a91e4a69a8!2s1000%20Northbrook%20Dr%20%23100%2C%20Trevose%2C%20PA%2019053%2C%20USA!5e0!3m2!1sen!2sin!4v1719405412398!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      

    

  
    </div>
  );
};

export default Home;
