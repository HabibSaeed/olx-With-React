import "./App.css";
import Allcategories from "./components/allcategories";
import Categories from "./components/categories";
import Navbar from "./components/navbar";
import Sell from "./components/sellitbuyit"
import Products from "./components/products";
import chicken from "./assets/chicken.png";
import camera from "./assets/camera.png";
import truck from "./assets/truck.png";
import clothes from "./assets/blueClothes.png";
import paint from "./assets/paint.png";
import chair from "./assets/chair.png";
import car from "./assets/car.png";
import job from "./assets/jobs.png";
import key from "./assets/key.png";
import property from "./assets/property.png";
import books from "./assets/books.png";
import logoblocks from "./assets/logoblocks.png";
import bike from "./assets/bike.png";
import product2 from "./assets/product2.png";
import product3 from "./assets/products3.png";
import product4 from "./assets/product3.png";
import OlxMarketing from "./components/olx-marketing";
import Footer from "./components/footer";




function App() {
  const pubgValue = "Some Value";

  return (
    <>
      <section>
        <Navbar />
      </section>

      <section>
        {" "}
        <Categories />
      </section>

      <Sell />


      <div className="container mt-5">
        <h2>All categories</h2>
      </div>

      <section className="container d-flex justify-content-center p-0">
        <div className="subcontainer_allcategories ">
          <div className="mycls">
            <Allcategories imageSrc={chicken} name="Animals" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={camera} name="Electronics" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={clothes} name="Fashion & Beauty" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={paint} name="Services" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={car} name="Vehicles" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={truck} name="Business , Industrial" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={chair} name="Furniture & Home" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={job} name="Jobs" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={key} name="Property For Rent" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={property} name="Property For Sale" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={books} name="Books , Hobbies" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={logoblocks} name="Kids" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={bike} name="Bikes" />
          </div>
        </div>
      </section>


      <div className="container mt-5">
        <h2>Products Section</h2>
      </div>

      <section className="container mt-3">
        <div className="productssection ">

          <div>
            {" "}
            <Products name="https://images.olx.com.pk/thumbnails/388019583-800x600.webp"
              title="Rs 1,250,000"
              about="R1 in new shape 2023"
              description="Abdullah Colony, Gujranwala" />
          </div>

          <div>
            {" "}
            <Products name="https://images.olx.com.pk/thumbnails/368269970-800x600.webp"
              title="Rs 4,500,000"
              about="YAMAHA YZF R6 600cc"
              description="Others, Islamabad" />
          </div>

          <div>
            {" "}
            <Products name="https://images.olx.com.pk/thumbnails/387279655-800x600.webp"
              title="Rs 4,350,000"
              about="Toyota Aqua 2016 Model 2018"
              description="Gulshan-e-Iqbal Town, Karachi" />
          </div>

          <div>
            {" "}
            <Products name="https://images.olx.com.pk/thumbnails/387939055-800x600.webp"
              title="Rs 3,150,000"
              about="Suzuki wagon R VXL 2021"
              description="Sarai Alamgir, Punjab" />
          </div>

          <div>
            {" "}
            <Products name="https://images.olx.com.pk/thumbnails/383084281-800x600.webp"
              title="Rs 39,000"
              about="Cool Offer 43 inch Samsung Smart 4k"
              description="Thokar Niaz Baig, Lahore" />
          </div>

          <div>
            {" "}
            <Products name="https://www.publicissapient.com/content/dam/ps-rebrand/insights/2023/ret-insights-chatgpt/Hero-2880.jpg"
              title="Rs 98,499"
              about="Iphone 11 pro max (64Gb)(256Gb)(512Gb)"
              description="Mochipura Morr, Lahore" />
          </div>

          <div>
            {" "}
            <Products name="https://images.olx.com.pk/thumbnails/388832027-800x600.webp"
              title="Rs 91,500"
              about="Unleash Possibilities with the Vivo V23e"
              description="Muslim Nagar Housing Scheme, Lahore" />
          </div>

          <div>
            {" "}
            <Products name="https://images.olx.com.pk/thumbnails/370521490-800x600.webp"
              title="Rs 50,000"
              about="55 INCH SMART UHD LED TV NEW SALE OFFER"
              description="Gulistan-e-Jauhar, Karachi" />
          </div>

        </div>
      </section>

      <div className="container mt-5">
        <h2>Lands and Plots</h2>
      </div>

      <section className="container mt-3">
        <div className="productssection ">

          <div>
            {" "}
            <Products
              name="https://images.olx.com.pk/thumbnails/385146808-800x600.webp"
              title="Rs : 11,0000"
              about="10 Marla Residential Plot Available For sale In Park View City - Overs"
              description="Park View City, Islamabad"
              days="1 Days Ago" />

          </div>

          <div>
            {" "}
            <Products
              name="https://images.olx.com.pk/thumbnails/385148364-800x600.webp"
              title="Rs : 500000"
              about="1 Acre Agriculture Land Is Available For Sale In Mouza Shatangi"
              description="Allama Iqbal Town, Rahimyar Khan"
              days="4 Days Ago" />
          </div>

          <div>
            {" "}
            <Products
              name="https://images.olx.com.pk/thumbnails/387857884-800x600.webp"
              title="Rs : 21,0000"
              about="17 Marla Residential Plot For Sale at Shahid Park Main Street Ryk"
              description="Mouza Shatangi, Gwadar"
              days="1 Week Ago" />
          </div>

          <div>
            {" "}
            <Products
              name="https://images.olx.com.pk/thumbnails/381688015-240x180.webp"
              title="Rs : 8,0000"
              about="1 kanal possession plot in Sec C Phase 4"
              description="DHA Phase 4 - Sector C, Islamabad"
              days="6 Days Ago" />
          </div>



        </div>
      </section>

      <section className="mt-5">
        <OlxMarketing />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;