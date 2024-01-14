//think-smaller

//the below commands import styles that tell the computer how to read the code
import React from 'react';
import Navigation from '../components/Navigation';

//the code within the return() builds a page
const Article = () => {
  return (
    <>
      {/* Adds the Navbar to the top of the page */}
      <Navigation></Navigation> 
      {/* Adds the title to the top of the page */}
      <h2>Let's Think Smaller</h2>
      {/* Adds a paragraph of text. Add a separate <p></p> for each paragraph */}
      <p>Whether it's climate change, cancer treatment, or simply a wrinkle-free shirt, scientists and engineers just need to think bigger. Well, maybe not; maybe they need to think smaller. Nanotechnology is the manipulation of elements and compounds on the nano-scale (less than 100 nanometers). When these elements are reduced to such a small scale, their properties can change to a great extent. Scientists and engineers can then utilize these novel properties to try to alleviate some of the issues facing our world.</p>
      <p>Electrochemists are currently researching the relationship between nanotechnology and battery performance. When the different components of a battery are coated in a nano-shell, it increases the surface area interactions between the battery and the free flow of electrons. This results in a great increase in battery power and rechargeability. This technology is currently being explored with more sustainable batteries such as those made from magnesium and sodium. If these batteries can replace lithium-ion batteries in the marketplace, the extremely negative effects that accompany the extensive mining process of lithium can be bypassed. The future of electrics could be a lot greener with the help of nanotechnology.</p>
      <p>Moreover, nanotechnology is currently being used in the fight against cancer. MD Anderson is partnering with Rice University to research gold nanoparticles as a possible treatment for cancer. Gold in its nano-state is currently being used to target cancer tissue and absorb light, resulting in photothermal properties. This is called photothermal cancer therapy, which applies light to the cancer tissue to create heat and kill the cancer cells.</p>
      <p>Nano-state particles can even be used to get the wrinkles out of your wardrobe. The use of nano fabrics in the creation of clothing products can greatly improve the quality of clothing while preserving its standard weight and thickness. Nano-whiskers, a specific nanoparticle design, have displayed promise in creating fabrics that are water and stain-resistant. Furthermore, nano fabrics have been developed to create clothing that can be antimicrobial, ultraviolet resistant, and flame retardant. All the while, no extra weight is added to the clothing. Nanotechnology might not only save our planet and our loved ones, but it might also save our fashion choices. The world around us has presented many unique issues that scientists have attempted to solve for decades. Many scientific breakthroughs have improved our quality of life by protecting our planet, advancing healthcare, and much more and there is still a long way to go. But instead of thinking big, scientists have begun to think small.</p>
      <br></br>
      <h2>Sources</h2>
      <p><a href="https://www.nano.gov/nanotech-101/what/definition" className="underline text-black">https://www.nano.gov/nanotech-101/what/definition</a></p>
      <p><a href="https://teachers.yale.edu/curriculum/viewer/initiative_10.05.06_u#:~:text=As%20the%20sizes%20of%20various,same%20substances%20in%20bulk%20form" className="underline text-black">https://teachers.yale.edu/curriculum/viewer/initiative_10.05.06_u#:~:text=As%20the%20sizes%20of%20various,same%20substances%20in%20bulk%20form</a></p>
      <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8659073/" className="underline text-black">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8659073/</a></p>
      <p><a href="https://www.understandingnano.com/batteries.html#:~:text=Increasing%20the%20shelf%20life%20of,life%20of%20the%20battery%20dramatically" className="underline text-black">https://www.understandingnano.com/batteries.html#:~:text=Increasing%20the%20shelf%20life%20of,life%20of%20the%20battery%20dramatically</a></p>
      <p><a href="https://www.pnnl.gov/available-technologies/nanomaterials-sodium-ion-batteries" className="underline text-black">https://www.pnnl.gov/available-technologies/nanomaterials-sodium-ion-batteries</a></p>
      <p><a href="https://www.mdanderson.org/cancerwise/could-gold-nanoparticles-help-treat-cancer.h00-159540534.html" className="underline text-black">https://www.mdanderson.org/cancerwise/could-gold-nanoparticles-help-treat-cancer.h00-159540534.html</a></p>
      <p><a href="https://www.frontiersin.org/articles/10.3389/fchem.2019.00167/full#:~:text=It%20has%20been%20shown%20that,treatments%20and%20medical%20imaging%20applications" className="underline text-black">https://www.frontiersin.org/articles/10.3389/fchem.2019.00167/full#:~:text=It%20has%20been%20shown%20that,treatments%20and%20medical%20imaging%20applications</a></p>
      <p><a href="https://www.sciencedirect.com/science/article/abs/pii/S1877117321001435" className="underline text-black">https://www.sciencedirect.com/science/article/abs/pii/S1877117321001435</a></p>
      <p><a href="https://www.sciencedirect.com/science/article/pii/S2090123222000194" className="underline text-black">https://www.sciencedirect.com/science/article/pii/S2090123222000194</a></p>
      <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8746792/" className="underline text-black">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8746792/</a></p>

    </>
  );
};

//this code exports the page we build above so that we can see it on the website
export default Article;