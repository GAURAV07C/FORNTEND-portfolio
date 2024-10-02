import Head from "next/head";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
export default function Home() {

  const [activeIndex , setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);

  }

  const handleMouseOut = () => {
    setActiveIndex(0);
  }



  // services data
  const Services = [
    {
      title: "Web Development",
      description: "I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need."
    },
    {
      title: "Web Development",
      description: "I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need."
    },


  ];




  return (
    <>
      <Head>
        <title>GAURAV07C - Personal Portfolio</title>
        <meta name="description" content="-GAURAV07C - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* hero section */}
      <section className="hero">
          <div className="intro_text">
            <svg viewBox="0 0 1320 300">
              <text x='50%' y='50%' text-anchor='middle' className="animate-stroke" >HI

              </text>

            </svg>
          </div>
          <div className="container">
            <div className="flex w-100">
              <div className="heroinfoleft">
                <span className="hero_sb_title">
                  I am gaurav
                </span>
                <h1 className="hero_title">Web Developer</h1>
                <div className="hero_img_box heroimgbox">
                  <img src="/img/me.jpg" alt="coder" />
                </div>
                <div className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam ratione molestias aut quo minus vero aperiam accusamus delectus architecto vel placeat fugit recusandae!
                </div>
                <div className="hero_btn_box">
                  <Link href="/" download={'/img/resume.pdf'} className='download_cv'>Download Cv <BiDownload /> </Link>
                  <div className="hero_social">
                  <li><a href="/"><FaTwitter/></a></li>
                  <li><a href="/"><LiaBasketballBallSolid/></a></li>
                  <li><a href="/"><GrLinkedinOption/></a></li>
                  <li><a href="/"><FaGithub/></a></li>
                </div>
                </div>

              </div>
              {/* right */}
              <div className="heroimageright">
                <div className="hero_img_box">
                  <img src="/img/me/png" alt="pic" />
                </div>
              </div>
            </div>
            <div className="funfect_item">
              <h3>20+</h3>
              <h4>Projects <br /> Completed </h4>
            </div>
          </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="services_titles">
            <h2>My Quality Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perspiciatis dicta qui possimus, delectus quo accusantium similique corrupti! Soluta, ipsa!</p>
          </div>
          <div className="services_menu">
  {Services.map((service, index) => {
    return (
      <div key={index} className={`services_item ${activeIndex === index ? 'sactive' : "" }`}
      onMouseOver={() => handleHover(index)}
       onMouseOut={handleMouseOut}
      >
        <div className="left_s_box">
          <span>0{index + 1}</span>
          <h3>{service.title}</h3>
        </div>
        <div className="right_s_box">
          <p>{service.description}</p>
        </div>
        <GoArrowUpRight />
      </div>
    );
  })}
</div>

        </div>

      </section>

      {/* Projects */}
      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2>My Projects</h2>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolorum aliquam expedita ea deserunt quae numquam, eaque vero debitis modi. </p>
          </div>
          <div className="project_buttons ">
            <button>All</button>
            <button>Project</button>
          </div>
          <div className="projects_cards">
            <Link href='/' className="procard">
              <div className="proimgbox">
              <img src="/img/noimage.png" alt="image" />
              </div>
              <div className="procontentbox">
                <h2>Your project name</h2>
                <GoArrowUpRight />
              </div>
            </Link>
          </div>
        </div>

      </section>

      {/* Experience study */}
      <section className="exstudy">

      </section>

      {/* My Skills */}
      <section className="myskills">

      </section>

      {/* Recent Blogs */}
      <section className="recentblogs">

      </section>

    </>
  );
}
