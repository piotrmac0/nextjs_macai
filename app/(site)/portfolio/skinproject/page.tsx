import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";

const SingleBlogPage = async () => {
  return (
    <>
      <title>{`Blog Details - Solid`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                  Project Details
                </h4>
                <ul>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Link:</p>
                    <a href="https://www.skinprojectclinic.pl/" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 hover:text-primary">skinprojectclinic.pl</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Skin Project</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Beauty & Aesthetic Medicine</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Project Technologies:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">WordPress</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  Website for Aesthetic Medicine Clinic
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src={"/images/portfolio/skin.jpg"}
                      alt="Skin Project Clinic Website"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                  <p>
                    The project we created for Skin Project Clinic is their website based on the WordPress platform. Leveraging our experience in designing and developing websites, we provided them with a professional site that not only represents their brand but also facilitates interaction with clients and ensures easy content management.
                  </p>
                  <p>
                    Our agency utilized the capabilities of WordPress to create a responsive and aesthetically pleasing website that not only showcases the clinic's services and products but also integrates with other tools such as social media, providing full support for marketing activities.
                  </p>
                </div>
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
