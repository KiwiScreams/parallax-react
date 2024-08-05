import "./Faq.css"
const FAQ = () => {
    const faqData = 
    [
            {
                title: "Terrifying Atmosphere:",
                description: "Step into a world shrouded in darkness and mystery, where every corner holds unseen dangers and chilling surprises."
              },
              {
                title: "Immersive Gameplay:",
                description: "Engage in gameplay designed to keep you on the edge of your seat. Solve intricate puzzles, uncover the truth behind eerie mysteries, and navigate through spine-tingling environments."
              },
              {
                title: "Thrilling Storyline:",
                description: "Delve into a gripping narrative that unfolds with every twist and turn. Uncover the secrets buried within the game's narrative and confront the horrors that lurk in the shadows."
              },
              {
                title: "Feedback Matters:",
                description: "Your feedback is invaluable to us! Help shape the final experience by sharing your thoughts on gameplay mechanics, storyline progression, atmosphere, and overall immersion."
              }
    ]
    return ( 
        <>
        <div className="faq-container">
            <h2>What to Expect:</h2>
            <div className="faq-content flex">
        {faqData.map((faq, index) => (
          <div key={index} className="faq">
            <h3>{faq.title}</h3>
            <p>{faq.description}</p>
          </div>
        ))}
      </div>
        </div>
        </>
     );
}
 
export default FAQ;