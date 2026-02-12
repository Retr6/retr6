const Home = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen p-10 lg:p-14">
      <div className="space-y-10 animate-fade-in">
        <p className="text-sm-header text-muted-foreground uppercase tracking-widest">
          selected work
        </p>

        <div className="space-y-8">
          {[
            { title: "fintech trading app", category: "product design · mobile", year: "2024" },
            { title: "saas dashboard", category: "ui/ux · web app", year: "2024" },
            { title: "brand identity — nova", category: "branding · identity", year: "2023" },
            { title: "e-commerce platform", category: "design · development", year: "2023" },
          ].map((project, i) => (
            <a
              key={i}
              href="/work"
              className="group block border-b border-border pb-6 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-main-header-sm lowercase text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>
                <span className="text-body text-muted-foreground">{project.year}</span>
              </div>
              <p className="text-body text-muted-foreground mt-1">{project.category}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
