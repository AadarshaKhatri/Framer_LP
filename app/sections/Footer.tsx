import { FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


export function Footer(){

  const FooterTitles = [
    {
      title : "Products",
      subTitles:[
        "Features",
        "Integrations",
        "Updates",
        "FAQ",
        "Pricing",
      ]
    },
    {
      title:"Company",
      subTitles:[
        "About",
        "Blog",
        "Careers",
        "Manifesto",
        "Press",
        "Contact"
      ]
    },{
      title:"Resources",
      subTitles : [
        "Examples",
        "Community",
        'Guides',
        "Docs",
      ]
    },
    {
      title : "Legal",
      subTitles:[
        "Privacy",
        "Terms",
        "Security"
      ] 
    }
  ]
  return(
    <section className="py-20 bg-black">
      <div className=" md:mx-20 px-6">
        <div className="flex flex-col  md:flex-row md:justify-between gap-10">

          <div className="flex flex-col space-y-3 py-3">
            <p className="text-lg text-white/50 md:w-96 md:pb-40">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</p>
            <div className="flex flex-row justify-start items-center gap-5">
              <FaInstagram size ={24} className="text-white"/>
              <FaTwitter size = {24} className="text-white"/>
              <FaLinkedin size = {24} className="text-white"/>
              <FaYoutube size = {24} className="text-white"/>
              <FaTiktok size = {24} className="text-white"/>


            </div>

          </div>


          <div className="flex flex-col md:flex-row gap-x-12">

            {
              FooterTitles.map((currentElement,index)=>(
                <div key = {index} className="flex flex-col py-5 gap-y-3">
                  <h3 className="font-bold">{currentElement.title}</h3>
                  {
                    currentElement?.subTitles?.map((title : string,cindex :number)=>(
                      <div key = {cindex}>
                        <ul>
                          <li className="text-lg text-white/50">{title}</li>
                        </ul>

                      </div>
                    ))
                  }

                </div>
              ))
            }
 
       

          </div>

          
         

           
        </div>
     
      </div>
    </section>
  )
}