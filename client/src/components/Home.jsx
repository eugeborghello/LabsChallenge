import { Link } from "react-router-dom";


const Slides = () => {
  const slides = [
    {
      img:
        "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-98611f6c-f603-4788-85c1-fce1c63b59c9.jpg",
      alt:"Vuelta a clases"
      
    },
    {
      img:
        "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-b0fa15cb-2555-4d64-8467-d05e32d06733.jpg",
      alt:"Informática",
      
    },
    {
      img:
        "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-7e0f25a5-df8d-4bc2-9215-0aa331f1d097.jpg", 
      alt:"Ofertas",
      
    },
    
    {
      img:
        "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-ba87a94d-25b3-43a0-974d-260b174792f3.jpg", 
      alt:"Productos Exclusivos",
      
    },
    {
      img:
        "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-9649a9dc-56c6-4335-a6fa-96637afbfa3c.jpg",
      alt:"Mercado Pago Point",
      
    },
    
  ];

  return (
    <div>
      <div >
        {slides.map((slide, index) => (
          <div key={index}>
            <Link to='/search'>
            <img
                src={slide.img}
                alt={slide.description}
                
                style={{ cursor: `pointer`, marginTop: `1rem`, width: "100%"}}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides;

