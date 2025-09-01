import { useState } from "react";

// Collection of quotes
const quotes = [
  { text: "The unexamined life is not worth living.", author: "Socrates" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Man is condemned to be free.", author: "Jean-Paul Sartre" },
  { text: "God is dead. God remains dead. And we have killed him.", author: "Friedrich Nietzsche" },
  { text: "One cannot step twice in the same river.", author: "Heraclitus" },
  { text: "I think, therefore I am.", author: "René Descartes" },
  { text: "When someone is soft with the world...it doesn't mean they haven't seen harshness. It means they choose not to repeat it.", author: "Saadi Shirazi" },
  { text: "The desires of this world are like seawater; the more you drink, the thirstier you become.", author: "Ibn Arabi" },
  { text: "The power of thoughts can cause you either illness or recovery.", author: "Ibn Sina" },
  { text: "If love is the most precious thing, then the most difficult trials must come with it.", author: "Yunus Emre" },
  { text: "Between what is said and not meant, and what is meant and not said, most of love is lost.", author: "Khalil Gibran" },
  { text: "If you want to improve, be content to be thought foolish and stupid.", author: "Epictetus" },
  { text: "All cruelty springs from weakness", author: "Seneca" },
  { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { text: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca" },
  { text: "It is not that I am mad, it is only that my head is different from yours.", author: "Diogenes" },
  { text: "Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old", author: "Franz Kafka" },
  { text: "You are a little soul carrying around a corpse", author: "Epictetus" },
  { text: "The only people we can think of as normal are those we don't yet know very well.", author: "Alain de Botton" },
  { text: "To love oneself is the beginning of a lifelong romance.", author: "Oscar Wilde" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "We are more curious about the meaning of dreams than about things we see when awake.", author: "Diogenes" },
  { text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
  { text: "We often lose our tempers not with those who are actually to blame; just with those who love us enough to forgive us our foul moods.", author: "Alain de Botton" },
  { text: "I have the true feeling of myself only when I am unbearably unhappy", author: "Franz Kafka" },
  { text: "By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired.", author: "Franz Kafka" },
  { text: "You are the knife I turn inside myself; that is love. That, my dear, is love.", author: "Franz Kafka" },
  { text: "After all, we are nothing more or less than we choose to reveal.", author: "Sylvia Plath" },
  { text: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style", author: "Maya Angelou" },
  { text: "What we do is more important than what we say or what we say we believe.", author: "Bell Hooks" },
  { text: "Justice is indivisible. You can't decide who gets civil rights and who doesn't.", author: "Angela Davis" },
  { text: "Hope and fear cannot occupy the same space. Invite one to stay.", author: "Maya Angelou" },
  { text: "The rage of the oppressed is never the same as the rage of the privileged.", author: "Bell Hooks" },
  { text: "A man who has no fear will never know love.", author: "Bulleh Shah" },
  { text: "The wound is the place where the Light enters you.", author: "Rumi" },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [fade, setFade] = useState(false);

  const generateQuote = () => {
    setFade(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setFade(false);
    }, 300);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "'Merriweather', serif",
        backgroundColor: "#000",
        color: "#fff",
        padding: "2vw",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Glowing gradient behind the quote */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, #f8b500 0%, #ff4e50 50%, #000 100%)",
          filter: "blur(150px)",
          zIndex: 0,
        }}
      ></div>

      <h1
        style={{
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          marginBottom: "4vh",
          zIndex: 1,
          position: "relative",
        }}
      >
        📜 Philosophy Quote Generator
      </h1>

      <div
        style={{
          backgroundColor: "#111",
          padding: "4vw",
          borderRadius: "2vw",
          boxShadow: "0 2vw 4vw rgba(248, 181, 0, 0.5)",
          width: "90%",
          maxWidth: "900px",
          transition: "opacity 0.3s ease-in-out",
          opacity: fade ? 0 : 1,
          zIndex: 1,
          position: "relative",
        }}
      >
        <blockquote
          style={{
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            lineHeight: "1.8",
            margin: 0,
          }}
        >
          “{quote.text}”
          <footer
            style={{
              marginTop: "2vh",
              fontStyle: "italic",
              fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
            }}
          >
            — {quote.author}
          </footer>
        </blockquote>
      </div>

      <button
        onClick={generateQuote}
        style={{
          marginTop: "4vh",
          padding: "1vh 2vw",
          fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          cursor: "pointer",
          border: "none",
          borderRadius: "1vw",
          backgroundColor: "#f8b500",
          color: "#000",
          fontWeight: "bold",
          transition: "0.3s",
          zIndex: 1,
          position: "relative",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f4a300")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#f8b500")}
      >
        New Quote
      </button>
    </div>
  );
}

export default App;
