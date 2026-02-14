import shotsWebm from "@/assets/shots.webm";

const Home = () => {
  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden">
      <video
        src={shotsWebm}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default Home;
