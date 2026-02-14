const About = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen p-10 lg:p-14">
      <div className="space-y-10 w-full animate-fade-in">
        <p className="text-sm-header text-muted-foreground uppercase tracking-widest">about</p>

        <h2 className="text-main-header lowercase text-foreground">
          designing with purpose, building with precision.
        </h2>

        <div className="space-y-5 text-body text-muted-foreground">
          <p>
            i'm a product designer and developer who thrives at the intersection of aesthetics and functionality. with over 5 years of experience, i've helped startups and established brands craft digital products that resonate with their audiences.
          </p>
          <p>
            my approach combines strategic thinking with meticulous execution — every pixel, every interaction, every line of code serves a purpose. i believe great design is invisible; it simply works.
          </p>
          <p>
            when i'm not designing, you'll find me exploring new technologies, contributing to open-source projects, or sketching ideas in my notebook.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-4">
          {[
            { label: "projects", value: "50+" },
            { label: "years", value: "5+" },
            { label: "clients", value: "30+" },
            { label: "awards", value: "12" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-main-header-sm text-foreground font-semibold">{stat.value}</p>
              <p className="text-body text-muted-foreground lowercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
