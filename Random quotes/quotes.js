const quotes = [
  {
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
  },
  {
    author: "Isaac Newton",
    quote:
      "If I have seen further it is by standing on the shoulders of Giants.",
  },
  { author: "Yoda", quote: "Do, or do not. There is no try." },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: "Winston Churchill",
    quote: "To improve is to change; to be perfect is to change often.",
  },
  {
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    author: "Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    author: "Steve Jobs",
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    author: "Maya Angelou",
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    author: "Abraham Lincoln",
    quote: "The best way to predict your future is to create it.",
  },
  {
    author: "Helen Keller",
    quote:
      "The only thing worse than being blind is having sight but no vision.",
  },
  {
    author: "Martin Luther King Jr.",
    quote:
      "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "John Lennon",
    quote: "Life is what happens when you're busy making other plans.",
  },
  {
    author: "Leonardo da Vinci",
    quote: "Simplicity is the ultimate sophistication.",
  },
  {
    author: "Mother Teresa",
    quote:
      "Not all of us can do great things. But we can do small things with great love.",
  },
  {
    author: "Henry Ford",
    quote: "Whether you think you can or you think you can't, you're right.",
  },
  {
    author: "J.K. Rowling",
    quote:
      "It is our choices that show what we truly are, far more than our abilities.",
  },
  {
    author: "Stephen Hawking",
    quote:
      "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist.",
  },
  {
    author: "Jane Austen",
    quote: "There is no charm equal to tenderness of heart.",
  },
  {
    author: "Albert Schweitzer",
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  },
  {
    author: "Thomas Edison",
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
  },
  {
    author: "William Shakespeare",
    quote: "To be, or not to be, that is the question.",
  },
  {
    author: "Friedrich Nietzsche",
    quote: "He who has a why to live can bear almost any how.",
  },
  {
    author: "Aristotle",
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  },
  { author: "J.R.R. Tolkien", quote: "Not all those who wander are lost." },
  {
    author: "Leonardo da Vinci",
    quote: "The greatest deception men suffer is from their own opinions.",
  },
  {
    author: "Charles Dickens",
    quote: "It was the best of times, it was the worst of times.",
  },
  {
    author: "Lao Tzu",
    quote: "A journey of a thousand miles begins with a single step.",
  },
  {
    author: "Pablo Picasso",
    quote:
      "Every child is an artist. The problem is how to remain an artist once he grows up.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
  },
  {
    author: "Rumi",
    quote: "The wound is the place where the Light enters you.",
  },
  { author: "Jimi Hendrix", quote: "Knowledge speaks, but wisdom listens." },
  {
    author: "Buddha",
    quote: "The mind is everything. What you think you become.",
  },
  {
    author: "Victor Hugo",
    quote: "Even the darkest night will end and the sun will rise.",
  },
  {
    author: "Herman Melville",
    quote: "It is better to fail in originality than to succeed in imitation.",
  },
  {
    author: "Henry David Thoreau",
    quote:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
  },
  {
    author: "George Bernard Shaw",
    quote:
      "Life isn’t about finding yourself. Life is about creating yourself.",
  },
  {
    author: "John F. Kennedy",
    quote:
      "Ask not what your country can do for you—ask what you can do for your country.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
  },
  {
    author: "Walt Disney",
    quote:
      "All our dreams can come true if we have the courage to pursue them.",
  },
  {
    author: "Franklin D. Roosevelt",
    quote: "The only thing we have to fear is fear itself.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
  },
  {
    author: "Margaret Mead",
    quote:
      "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
  },
  {
    author: "Mahatma Gandhi",
    quote:
      "The best way to find yourself is to lose yourself in the service of others.",
  },
  {
    author: "Helen Keller",
    quote: "Alone we can do so little; together we can do so much.",
  },
  { author: "C.S. Lewis", quote: "You can make anything by writing." },
  {
    author: "J.K. Rowling",
    quote: "You have to be a bit of a dreamer to be a writer.",
  },
];

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 51);
  document.querySelector(".author h6").innerHTML = quotes[randomNumber].author;
  document.querySelector(".quote p").innerHTML = quotes[randomNumber].quote;
});
