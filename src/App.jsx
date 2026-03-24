import { useMemo, useState } from "react";

const services = [
  {
    title: "Bookkeeping",
    description: "Organized financial records and monthly tracking for growing businesses."
  },
  {
    title: "Business Plans",
    description: "Investor-ready and growth-focused business plans tailored to local markets."
  },
  {
    title: "Website Development",
    description: "Modern, fast websites that build trust and help your business get discovered."
  },
  {
    title: "Social Media Marketing",
    description: "Platform strategy, content planning, and campaign support to reach customers."
  },
  {
    title: "Market Research",
    description: "Data-backed insights to validate ideas, understand customers, and de-risk decisions."
  }
];

const steps = [
  "Business submits request",
  "Talent Bridge assigns student",
  "Work is completed",
  "Supervisor reviews",
  "Final delivery"
];

function Button({ children, href, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-soft",
    secondary:
      "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-gray-300 shadow-soft"
  };
  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

function Card({ title, description, className = "" }) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-soft ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function Input({ label, id, ...props }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">{label}</span>
      <input
        id={id}
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-100"
        {...props}
      />
    </label>
  );
}

function Select({ label, id, children, ...props }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">{label}</span>
      <select
        id={id}
        className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-100"
        {...props}
      >
        {children}
      </select>
    </label>
  );
}

function Textarea({ label, id, ...props }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">{label}</span>
      <textarea
        id={id}
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-100"
        {...props}
      />
    </label>
  );
}

export default function App() {
  const initialServiceForm = useMemo(
    () => ({
      fullName: "",
      businessName: "",
      phoneNumber: "",
      serviceNeeded: "Bookkeeping",
      budget: "P1,500-P5,000",
      description: ""
    }),
    []
  );

  const initialStudentForm = useMemo(
    () => ({
      name: "",
      field: "",
      skills: "",
      availability: ""
    }),
    []
  );

  const [serviceForm, setServiceForm] = useState(initialServiceForm);
  const [studentForm, setStudentForm] = useState(initialStudentForm);
  const [serviceSuccess, setServiceSuccess] = useState(false);
  const [studentSuccess, setStudentSuccess] = useState(false);

  const handleServiceSubmit = (event) => {
    event.preventDefault();
    console.log("Service Request Submitted:", serviceForm);
    setServiceSuccess(true);
    setServiceForm(initialServiceForm);
    window.setTimeout(() => setServiceSuccess(false), 3000);
  };

  const handleStudentSubmit = (event) => {
    event.preventDefault();
    console.log("Student Sign-Up Submitted:", studentForm);
    setStudentSuccess(true);
    setStudentForm(initialStudentForm);
    window.setTimeout(() => setStudentSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="sticky top-0 z-30 border-b border-gray-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-sm font-bold tracking-tight sm:text-base">
            Talent Bridge Botswana
          </a>
          <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
            <a href="#about" className="transition hover:text-gray-900">
              About
            </a>
            <a href="#services" className="transition hover:text-gray-900">
              Services
            </a>
            <a href="#how-it-works" className="transition hover:text-gray-900">
              How It Works
            </a>
            <a href="#request-service" className="transition hover:text-gray-900">
              Request Service
            </a>
          </nav>
          <Button href="#student-signup" className="hidden md:inline-flex">
            Join as a Student
          </Button>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
          <div className="self-center">
            <p className="inline-block rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-700">
              Student-Led Professional Services
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Connecting Students to Real Work & Businesses to Affordable Talent
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Talent Bridge Botswana links university students with paid practical projects while helping
              SMMEs access trusted, affordable business services supervised for quality outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#request-service">Request a Service</Button>
              <Button href="#student-signup" variant="secondary">
                Join as a Student
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card
              title="For SMMEs"
              description="Get practical services at startup-friendly pricing while maintaining quality standards."
            />
            <Card
              title="For Students"
              description="Build a work portfolio, gain paid experience, and graduate job-ready."
              className="sm:translate-y-6"
            />
            <Card
              title="Faculty Supervision"
              description="Projects are reviewed and guided for better reliability and professional output."
              className="sm:col-span-2"
            />
          </div>
        </section>

        <section id="about" className="border-y border-gray-200 bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div className="rounded-2xl bg-gray-900 p-8 text-white shadow-soft">
              <h2 className="text-2xl font-semibold">The Problem</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-200">
                <li>Graduates often leave university without practical experience.</li>
                <li>SMMEs frequently cannot afford professional service providers.</li>
                <li>This creates a gap between talent and business growth in Botswana.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-gray-900">Our Solution</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Talent Bridge Botswana creates a win-win system: businesses access affordable support while
                students gain paid, supervised work experience. The model improves employability and supports
                enterprise growth at the same time.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Practical support services designed for growing SMMEs with budgets in mind.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-50">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft">
                  <div className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                    Step {index + 1}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold">For Businesses</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>Affordable services, often 60-70% cheaper than traditional providers.</li>
              <li>Quality assurance through faculty and mentor supervision.</li>
              <li>Flexible project-based support for growing local enterprises.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold">For Students</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>Real work experience on meaningful business projects.</li>
              <li>Paid opportunities that reward effort and outcomes.</li>
              <li>Portfolio and skill development that improve employability.</li>
            </ul>
          </div>
        </section>

        <section id="request-service" className="border-y border-gray-200 bg-white">
          <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-3xl font-bold tracking-tight">Request a Service</h2>
            <p className="mt-3 text-gray-600">
              Tell us what your business needs and we will match you with the right student team.
            </p>
            <form onSubmit={handleServiceSubmit} className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-soft">
              <Input
                label="Full Name"
                id="fullName"
                name="fullName"
                required
                value={serviceForm.fullName}
                onChange={(e) => setServiceForm((prev) => ({ ...prev, fullName: e.target.value }))}
              />
              <Input
                label="Business Name"
                id="businessName"
                name="businessName"
                required
                value={serviceForm.businessName}
                onChange={(e) => setServiceForm((prev) => ({ ...prev, businessName: e.target.value }))}
              />
              <Input
                label="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={serviceForm.phoneNumber}
                onChange={(e) => setServiceForm((prev) => ({ ...prev, phoneNumber: e.target.value }))}
              />
              <Select
                label="Service Needed"
                id="serviceNeeded"
                name="serviceNeeded"
                value={serviceForm.serviceNeeded}
                onChange={(e) => setServiceForm((prev) => ({ ...prev, serviceNeeded: e.target.value }))}
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </Select>
              <Select
                label="Budget"
                id="budget"
                name="budget"
                value={serviceForm.budget}
                onChange={(e) => setServiceForm((prev) => ({ ...prev, budget: e.target.value }))}
              >
                <option value="P1,500-P5,000">P1,500-P5,000</option>
                <option value="P5,000-P10,000">P5,000-P10,000</option>
                <option value="P10,000+">P10,000+</option>
              </Select>
              <Textarea
                label="Description"
                id="description"
                name="description"
                rows={4}
                required
                value={serviceForm.description}
                onChange={(e) => setServiceForm((prev) => ({ ...prev, description: e.target.value }))}
              />
              <div className="pt-1">
                <Button type="submit">Submit Request</Button>
              </div>
              {serviceSuccess ? (
                <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  Success! Your service request has been submitted.
                </p>
              ) : null}
            </form>
          </div>
        </section>

        <section id="student-signup" className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight">Student Sign-Up</h2>
          <p className="mt-3 text-gray-600">
            Join Talent Bridge Botswana and start gaining practical paid experience.
          </p>
          <form onSubmit={handleStudentSubmit} className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
            <Input
              label="Name"
              id="studentName"
              name="studentName"
              required
              value={studentForm.name}
              onChange={(e) => setStudentForm((prev) => ({ ...prev, name: e.target.value }))}
            />
            <Input
              label="Course/Field"
              id="field"
              name="field"
              required
              value={studentForm.field}
              onChange={(e) => setStudentForm((prev) => ({ ...prev, field: e.target.value }))}
            />
            <Input
              label="Skills"
              id="skills"
              name="skills"
              required
              value={studentForm.skills}
              onChange={(e) => setStudentForm((prev) => ({ ...prev, skills: e.target.value }))}
            />
            <Input
              label="Availability"
              id="availability"
              name="availability"
              placeholder="e.g. Weekdays after 3PM"
              required
              value={studentForm.availability}
              onChange={(e) => setStudentForm((prev) => ({ ...prev, availability: e.target.value }))}
            />
            <div className="pt-1">
              <Button type="submit">Join as Student</Button>
            </div>
            {studentSuccess ? (
              <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                Success! Your sign-up has been submitted.
              </p>
            ) : null}
          </form>
        </section>
      </main>

      <a
        href="#"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-gray-800"
      >
        WhatsApp Chat
      </a>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-gray-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Email: hello@talentbridgebw.com | Phone: +267 XX XXX XXX</p>
          <p>WhatsApp: +267 XX XXX XXX</p>
          <p>&copy; {new Date().getFullYear()} Talent Bridge Botswana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
