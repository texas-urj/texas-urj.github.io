//sleep-deprivation

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
      <h2>Long Term Effects of Sleep Deprivation</h2>
      {/* Adds a paragraph of text. Add a separate <p></p> for each paragraph */}
      <p>Sleep deprivation is extremely common in college students as we struggle to make deadlines and juggle classes. However, sleep should be made a higher priority when considering the long term effects of sleep deprivation. </p>
      <p>During a sleep cycle, the body goes through the four stages. The first stage is characterized as a period where the body begins to relax but is not fully asleep. The second stage occurs when <a href="https://www.sleepfoundation.org/stages-of-sleep" className="underline text-black">heart rate decreases, muscles relax, and brain activity slows</a> down. These stages funnel into the third stage, also known as deep sleep. In this stage, body recovery occurs, <a href="https://www.sleepfoundation.org/stages-of-sleep" className="underline text-black">improving the immune system</a>. Lastly, in the final stage of sleep, REM sleep, sleepers experience vivid dreams, which is essential for memory processing and learning. When getting limited amounts of sleep, not enough time is spent in the latter sleep stages, leading to possible further issues. </p>
      <p>Sleep is directly linked to memory. During sleep, the <a href="https://www.webmd.com/sleep-disorders/sleep-deprivation-effects-on-memory" className="underline text-black">hippocampus transfers the day’s events to the neocortex for memory storage</a>. Though seven hours of sleep daily may not be achievable for the typical college student, this goal should be reached as often as possible to allow the brain to conduct its memory storage and prevent future memory issues. According to a study by the <a href="https://agsjournals.onlinelibrary.wiley.com/doi/abs/10.1111/jgs.12790" className="underline text-black">Journal of American Geriatrics Society</a>, participants characterized as under-sleepers had weakened cognitive ability equivalent to two additional years of age compared to participants who obtained at least seven hours of sleep per night. Overall, participants who slept less than average tended to experience cognitive decline faster in life. </p>
      <p>Outside of brain function, a lack of sleep can also cause a weakened immune system. During sleep, muscle activity is relaxed, making energy available to develop the immune system. Therefore, the immune system restores itself during sleep, developing components such as cytokines, which are essential for immune inflammatory responses and <a href="https://www.sleepfoundation.org/physical-health/how-sleep-affects-immunity" className="underline text-black">strengthen adaptive immunity</a>. Additionally, increased sleep <a href="https://www.sleepfoundation.org/physical-health/how-sleep-affects-immunity" className="underline text-black">improves the effect of vaccines.</a> </p>
      <p>On the more severe side of the spectrum, sleep deprivation has been linked to an increased risk of heart disease. A study by <a href="https://www.nih.gov/news-events/nih-research-matters/how-disrupted-sleep-may-lead-heart-disease" className="underline text-black">Harvard Medical School</a> showed that mice that experienced disrupted sleep cycles developed larger arterial plaque deposits compared to mice who received the normal amount of sleep. Plaque deposits are the most common cause of heart disease, indicating that preventative measures such as increasing hours of sleep are essential for long term health. </p>
      <p>Aside from impacting your internal health, a lack of sleep can also lead to mood changes. According to <a href="http://healthysleep.med.harvard.edu/need-sleep/whats-in-it-for-you/mood" className="underline text-black">Harvard University</a>, participants in a study who were restricted to 4.5 hours of sleep were reported to be more stressed, angry, and mentally exhausted. Though students normally stay up later to be more prepared for exams, this practice is actually hurting their chances of feeling more relaxed for important events in the coming day.</p>
      <p>Taking into account the memory and mood impact compounded with the importance of sleep for the immune system, students should prioritize sleep most days of the week despite how important that exam or paper might seem. In fact, getting a good night's sleep will be beneficial to students by increasing memory potential and reducing stress. So when thinking of staying up into the late hours of the night, a good night's sleep may be the better alternative to prepare for the day ahead.</p>
    </>
  );
};

//this code exports the page we build above so that we can see it on the website
export default Article;