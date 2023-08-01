import Image from "next/image";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi"
import { FaWindowClose } from "react-icons/fa";
import { useTranslation} from "react-i18next";
import Marquee from "react-fast-marquee";


const marqueeComp = [
  { image1: "/digitalIndia_img.png", link: "https://digitalindia.gov.in/" },
  { image2: "/G20_img.png", link: "https://www.g20.org/en/" },
  { image3: "/gal_img11.png", link: "https://www.mahapolice.gov.in/" },
  { image4: "/mahadbt_img.png", link: "https://mahadbt.maharashtra.gov.in/login/login" },
  { image5: "/startupIndia_img.png", link: "https://www.startupindia.gov.in/" },
];
const images = [
  { path: "/gallery/farariPathak_img.jpg", prop: "w-[32.91%] h-[35.92%] md:h-[53.88%] top-12 md:top-0 left-0", title: "दि. ०९/०५/२०२३ पासून मा. पोलीस आयुक्त सो. व पोलीस सहआयुक्त  यांनी पाहिजे व फरारी आरोपीचे पथक स्थापन केले होते. सदर पथकाने नवी मुंबई पोलीस आयुक्तालयातील पाहिजे २९ व फरारी १० असे एकूण ३९ आरोपी यांचा शोध लावला." },
  { path: "/gallery/foundMissingPerson_img.jpg", prop: "w-[28.66%] h-[40.24%] md:h-[60.36%] top-12 md:top-0 md:left-[37%]", title: "मनुष्य मिसिंग नामे मार्गेश तानाजी शिंदे वय 43 वर्षे याबाबत वाशी पोलीस ठाण्यामध्ये सन 2014 मध्ये तक्रार दाखल झालेली होती. तपास तांत्रिक पद्धतीने सोशल मीडियावरून सातत्याने करून पोलिसांच्या अथक प्रयत्नांना 9 वर्षांनी सदर इसमास शोधून काढण्यास नवी मुंबई पोलिसांना यश मिळाले." },
  { path: "/gallery/maharashtraDay.jpg", prop: "w-[30.57%] h-[27.7%] md:h-[41.56%] top-12 md:top-0 right-0", title: "महाराष्ट्रदिन निमित्त पोलीस मुख्यालय कळंबोली, नवी मुंबई येथे ध्वजारोहण करण्यात आले. यावेळी पोलीस खात्यात धुरंदर कामगिरी बजावणाऱ्या सन्मानमूर्तींना  सन्मान देऊन त्यांचा सत्कार करण्यात आला." },
  { path: "/gallery/missingbag.jpg", prop: "w-[32.91%] h-[28.05%] md:h-[42.08%] bottom-12 md:bottom-0 left-0", title: "अवघ्या दोन तासात गहाळ झालेली बॅग शोधून काढून सुरेखा यांना सुपूर्द केली. दोन तासांपूर्वी तणावात असणा-या सुरेखा यांच्या चेह-यावर हास्याची लकेर उमटली" },
  { path: "/gallery/retirement_img.jpg", prop: "w-[28.66%] h-[22.96%] md:h-[34.44%] bottom-12 md:bottom-0 left-[37%]", title: "नवी मुंबई पोलीस आयुक्तालय येथे ३७ पोलीस अधिकारी व अंमलदार यांचा सेवानिवृत्ती सोहळा पार पडला. माननीय पोलीस आयुक्त सो. यांच्या हस्ते तुळशीचे रोप देऊन पुढील वाटचाल सुख-समृद्धी व आरोग्यदायी व्हावी यासाठी शुभेच्छा देण्यात आल्या" },
  { path: "/gallery/wareHelmet.jpg", prop: "w-[30.57%] h-[35.92%] md:h-[53.88%] bottom-12 md:bottom-0 right-0", title: "आपणही आपल्या कुटुंबाचे आयर्नमॅन आहात.  त्यामुळे दुचाकीवर हेल्मेट वापरा, संकट काळात सुरक्षित राहा." },
  { path: "/gallery/workersDay.jpg", prop: "w-[32.91%] h-[35.92%] md:h-[53.88%] top-12 md:top-0 left-0", title: "कामगार दिनाच्या सर्व कामगार बंधु- भगिनी यांना हार्दिक शुभेच्छा..!" },
  { path: "/gallery/yoga_img.jpg", prop: "w-[28.66%] h-[40.24%] md:h-[60.36%] top-12 md:top-0 left-[37%]", title: "नवी मुंबई पोलीस मुख्यालय कळंबोली येथे आंतरराष्ट्रीय 'योग दिन' निमित्ताने पोलीस उपायुक्त मुख्यालय यांच्या उपस्थितीत आंतरराष्ट्रीय योग दिवस साजरा करण्यात आला.   " },
  { path: "/gallery/arrestedMurder.jpg", prop: "w-[30.57%] h-[27.7%] md:h-[41.56%] top-12 md:top-0 right-0", title: "नेरूळ मध्ये बिल्डरची हत्या करणा-या ४ आरोपींना बिहार मधून तात्काळ अटक." },
  { path: "/gallery/ChhShivajiMaharaj.jpg", prop: "w-[32.91%] h-[28.05%] md:h-[42.08%] bottom-12 md:bottom-0 left-0", title: "छत्रपती शिवाजी महाराज यांच्या जयंतीनिमित्त विनम्र अभिवादन! #Shivjayanti2023#शिवजयंती" },
  { path: "/gallery/inaugurationCeremony.jpg", prop: "w-[28.66%] h-[22.96%] md:h-[34.44%] bottom-12 md:bottom-0 left-[37%]", title: "महिला पोलीस अंमलदारांना उद्घाटनाचा मान कोपरखैरणे इथल्या वाहतूक कार्यालयाच्या नुतनीकरणाच्या उद्घाटनाचा मान " },
  { path: "/gallery/shrutiUPSC.jpg", prop: "w-[30.57%] h-[35.92%] md:h-[53.88%] bottom-12 md:bottom-0 right-0", title: "नवी मुंबई पोलीस दलातील वरिष्ठ पोलीस निरीक्षक सुभाष कोकाटे  यांची  कन्या श्रुती सुभाष कोकाटे यांनी केंद्रीय लोकसेवा आयोग (UPSC) परीक्षेत यश संपादन केल्याबद्दल  मा. पोलीस  आयुक्त श्री मिलिंद भारबे  सो.  यांनी त्यांचा सत्कार करून पुढील वाटचालीस शुभेच्छा दिल्या." },
  // {path: "/gal_img1.png"},
  // {path: "/gal_img2.png"},
  // {path:"/gal_img3.png"},
  // {path: "/gal_img4.png"},
];

const Gallery = () => {

  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setSelectedImage(null);
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setSelectedImage(null);
  };

  const handlePrevClick1 = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick1 = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  const displayedImages = images.slice(startIndex, endIndex);

  return (
    <>
      <div className="">
        <div className="text-center " id="gallery">
          <h1 className="mt-12 mb-8 text-3xl font-bold text-black" title={t('photo_gallery')}>
            {t('photo_gallery')}
          </h1>
        </div>
        <div className="h-screen ">
          <div className="mt-5 w-full h-[40%] md:h-[70%] flex justify-center">
            <div className="relative w-[70%] md:h-[95%]  rounded-lg flex  justify-center">
              {displayedImages.map((src, index) => (
                <div onClick={() => handleImageClick(index + startIndex)} key={src} className={`absolute ${src.prop} `}>
                  <Image
                    src={src.path}
                    alt={`Image ${index + 1}`}
                    // layout="responsive"
                    height="200"
                    width="200"
                    className="object-cover w-full h-full rounded-lg"
                     />
                    <div className="hidden top-0 left-0 md:flex items-center justify-center w-full h-full transition-all duration-500 rounded-lg bg-black md:absolute bg-opacity-95 md:opacity-0 hover:opacity-100">
                    <div className="z-20 transform  ">
                      <div title={src.title} className="px-1 flex justify-center items-center text-center text-white ">
                        {src.title}
                      </div>
                    </div>
                  </div>
                </div>
                
              ))}
              {selectedImage !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="absolute inset-0 w-full h-full bottom-20 bg-gray-900 bg-opacity-75"></div>
                  <div className="relative flex justify-center items-center w-[60%] h-[90%]">
                    <img
                      src={images[selectedImage].path}
                      alt={`Image ${selectedImage + 1}`}
                      layout="responsive"
                      className="h-[35%] md:h-[80%]  w-[90%]"

                    />
                    <button
                      className="absolute h-[50%] text-white top-1/4 bottom-0 -left-10 w-0"
                      onClick={handlePrevClick1}
                    ><BiSolidLeftArrow size={50}/></button>
                    <button
                      className="absolute h-[50%] top-1/4 bottom-0 text-white right-0 w-0 "
                      onClick={handleNextClick1}
                    ><BiSolidRightArrow size={50}/></button>
                    <button
                      className="absolute top-20 md:top-0 right-0 p-2 mt-4 mr-4 text-white "
                      onClick={() => setSelectedImage(null)}
                    >
                      <FaWindowClose size={50}/>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
          <div className="flex justify-center z-50">
            <button
              className="px-4 py-2 text-white  bg-slate-400 w-[65px] h-[56px]"
              onClick={handlePrevClick}
            >
              <FaArrowLeftLong size={35} />
            </button>
            <button
              className=" py-2 text-white bg-[#15233E] w-[113px] h-[56px]"
              onClick={handleNextClick}
            >
              <div className="flex justify-center"><FaArrowRightLong size={40} /></div>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center w-full h-[800px] mt-32">
          <div className="relative w-[70%] h-[55%] rounded-lg flex items-center justify-center">
            {images.map((image, i) => (
            <div className={`absolute  rounded-lg ${image.prop} `}>
              <img className="object-cover w-full h-full" src={image.path} alt={`Image ${i + 1}`}/>
            </div>     
            ))}     
          </div>
      </div> */}
      <div className="mt-0">
        <div className="w-full">
          <img className="w-full  " src={'/flamingo.png'} />
        </div>
        <div className="bg-[#DDD] bg-opacity-80">
          <Marquee>
            {marqueeComp.map((images, index) => (
              <div key={index} className="flex items-center justify-center p-0 mx-10">
                <a href={images.link} target="_blank">
                  <img className="p-2" src={Object.values(images)[0]} />
                </a>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Gallery;
