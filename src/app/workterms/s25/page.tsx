import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Row } from "@/components/ui/row";
import { Separator } from "@/components/ui/separator";
import { Calendar, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function WorkTermReport() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="border-border bg-card/50 sticky top-0 z-50 border-b backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-foreground text-xl font-semibold">Work Term Report</h1>
              <p className="text-muted-foreground text-sm">
                University of Guelph • Bachelor of Computing Co-op
              </p>
            </div>
            <nav className="hidden items-center space-x-6 md:flex">
              <a
                href="#introduction"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Introduction
              </a>
              <a
                href="#employer"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Employer
              </a>
              <a
                href="#goals"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Goals
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Experience
              </a>
              <a
                href="#reflections"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Reflections
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-16 px-6 py-12">
        {/* Hero Section */}
        <section className="space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-extrabold text-balance md:text-5xl">
              My Summer 2025 with YNCU
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl text-pretty">
              Working at YNCU has been nothing short of incredible. This report covers my
              4-month co-op term as a Full Stack Developer, where I got to make real
              contributions while learning under great leadership and alongside incredible
              teammates.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Summer 2025</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Kitchener, Ontario</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <Separator className="bg-accent h-0.5 w-16" />
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg leading-relaxed">
              Before YNCU, I loved programming but had no real understanding of how
              software impacts people's daily lives. This co-op term completely changed
              how I think about technology and my career. Working alongside loan officers
              and seeing how our systems eliminated thousands of hours of manual
              work—that's when it clicked for me. We weren't just writing code; we were
              making people's jobs easier and their experiences better.
            </p>
          </div>
        </section>

        {/* Employer Information */}
        <section id="employer" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">About the Employer</h2>
            <Separator className="bg-accent h-0.5 w-16" />
          </div>
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl">
                    Your Neighbourhood Credit Union (YNCU)
                  </CardTitle>
                  <CardDescription className="text-base">
                    A community-focused credit union serving members across Ontario with
                    innovative financial services and technology solutions
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-accent/10 border-accent/20">
                  Financial Services
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="text-foreground font-medium">Organization Overview</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>
                      • Member-owned financial cooperative serving Ontario communities
                    </li>
                    <li>
                      • Focus on innovative digital banking solutions and member
                      experience
                    </li>
                    <li>• Commitment to technology-driven operational efficiency</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-foreground font-medium">
                    Computing Science Relevance
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    YNCU's tech environment is exactly what you'd expect from a modern
                    financial institution - full-stack development, connecting different
                    systems together, working with databases, and building secure
                    applications. It's the perfect place to use what you learn in computer
                    science classes on real problems that affect thousands of people.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Goals */}
        <section id="goals" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Learning Goals & Outcomes</h2>
            <Separator className="bg-accent h-0.5 w-16" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Row className="justify-between">
                    <span>Professional & Ethical Behaviour - Leadership</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Achieved
                    </Badge>
                  </Row>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium">
                      Help Team Members Become More Involved
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Lead projects/features each sprint, pair for code reviews, and offer
                      support after stand-ups
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "Taking the lead on features felt uncomfortable at first, but after
                    pairing with the team to review and refactor code, I realized I enjoy
                    explaining my decisions and design choices. Next time, I'll try to
                    sketch an outline of the feature in advance so I'm even more
                    prepared."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Row className="justify-between">
                    <span>Communicating - Oral Communication</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Achieved
                    </Badge>
                  </Row>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium">
                      Be More Confident Explaining Technical Ideas
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Practice explaining projects out loud and give tech talks to team
                      developers
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "Recording my demo was ego-crushing at first; however, hearing my own
                    voice helped a lot. I noticed I say 'um' a lot when I'm not sure of
                    the next step. After practicing a few times, I could explain our code
                    structure without pausing."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Row className="justify-between">
                    <span>Critical & Creative Thinking - Problem Solving</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Achieved
                    </Badge>
                  </Row>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium">
                      Tackle Tricky Bugs with Multiple Solutions
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      List three possible causes before coding and practice with LeetCode
                      problems
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "I tried brainstorming three solutions before coding a recent
                    pagination bug. It felt slower at first, but I avoided a dead-end fix
                    I would've wasted time on. Solving LeetCode problems helped me
                    structure my thoughts. Next, I want to challenge myself with dynamic
                    programming."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Row className="justify-between">
                    <span>Literacy - Technological Literacy</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Achieved
                    </Badge>
                  </Row>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium">Improve Docker & Azure Skills</h4>
                    <p className="text-muted-foreground text-sm">
                      Pair with DevOps team for deployments and document processes in
                      README
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "Pushing to Azure took a couple of tries, but once I got it right, I
                    was able to pull the image and test without installing any Node
                    dependencies. Writing the README cemented my understanding. Next, I
                    want to optimize Docker images further."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Row className="justify-between">
                    <span>Professional & Ethical Behaviour - Teamwork</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Achieved
                    </Badge>
                  </Row>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium">
                      Build Stronger Collaboration Habits
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Leave constructive code review comments, practice active listening,
                      and offer help to teammates
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "Leaving thoughtful comments in code reviews forced me to slow down
                    and really read the code, not just skim. Next, I want to focus on
                    recognizing when I should step back and let someone else lead, not
                    just jump in to 'help' right away."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Job Description */}
        <section id="experience" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <Separator className="bg-accent h-0.5 w-16" />
          </div>
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Full Stack Developer Co-op</CardTitle>
                <CardDescription>Technology Team • Summer 2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-gray max-w-none">
                  <p className="leading-relaxed">
                    During my co-op term at YNCU, I worked on multiple critical projects
                    that saved the credit union over half a million dollars while making
                    banking services more accessible for thousands of members, and
                    significantly improving the work flows of hundreds of employees.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-foreground mb-2 font-medium">What I Built</h4>
                    <div className="space-y-3">
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          Commercial Loan Origination System (CLOS)
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Led our Commercial Loan Origination System (CLOS): Drove design,
                          development, data modelling, DevOps, security, and UAT;
                          Integrated Fiserv DNA for real-time banking data —{" "}
                          <strong>Saved $500,000 at launch and $80,000 annually.</strong>
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          Account Opening System & ID Verification
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Partnered with our CRM team to ideate & deploy our Account
                          Opening System (AOS) with Salesforce, enabling{" "}
                          <strong>1,000+ new online-originated memberships.</strong>{" "}
                          Designed, developed, and deployed our ID verification system in
                          less than 2 months with Salesforce — processing{" "}
                          <strong>20,000+ IDs and eliminating 10,000+ hours</strong> of
                          manual, in-branch verifications.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          YNCU Tools Platform Refactoring
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Led the refactoring and redesign of the entire YNCU Tools
                          platform (20,000+ LOC), leveraging React Hook Form, Zod,
                          TanStack, etc. —{" "}
                          <strong>
                            10x performance, 5x codebase reduction, and dozens of
                            accessibility improvements.
                          </strong>
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          Multiple Project Leadership
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Led three key projects: Mortgage Campaign generating{" "}
                          <strong>100+ leads and $30,000+ revenue;</strong> Applicant
                          Dashboard processing <strong>1,000+ applications;</strong>
                          and Workspace Dashboard delivering a combined{" "}
                          <strong>$22,000 annual cost savings.</strong>
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          Go Application Development
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Led development of smaller applications with Go, reducing
                          resource usage and improving performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reflections */}
        <section id="reflections" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Reflections & Conclusions</h2>
            <Separator className="bg-accent h-0.5 w-16" />
          </div>
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">What I Learned</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="leading-relaxed">
                    Working at a credit union taught me that banking software needs to be
                    rock solid. When you're handling people's money and personal
                    information, there's no room for mistakes. I learned how to build
                    systems that are secure and can handle thousands of users without
                    breaking.
                  </p>
                  <p className="leading-relaxed">
                    The biggest thing I learned was how to take on big, messy problems and
                    break them down. Like when I had to fix that 20,000-line codebase - it
                    seemed impossible at first, but I just tackled it piece by piece. Now
                    I'm comfortable jumping into any project, no matter how complicated it
                    looks.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">What's Next</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="leading-relaxed">
                    This job completely changed how I think about my computer science
                    classes. When we learned about algorithms and databases in school, it
                    felt pretty abstract. Now when I'm optimizing a slow query or
                    designing a new system, I actually understand why those concepts
                    matter.
                  </p>
                  <p className="leading-relaxed">
                    Working in banking tech got me really interested in fintech and how
                    technology is changing how people manage their money. Building systems
                    that handle thousands of loan applications and process sensitive
                    financial data has prepared me for the kind of complex, high-stakes
                    projects I want to work on after graduation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Acknowledgments */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Acknowledgments</h2>
            <Separator className="bg-accent h-0.5 w-16" />
          </div>
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="prose prose-gray max-w-none space-y-4">
                <p className="leading-relaxed">
                  I would like to express my deepest gratitude to the entire YNCU
                  technology team for their mentorship, collaboration, and trust in my
                  abilities. The opportunity to progress from intern to full-time
                  developer while taking on increasingly complex projects has been
                  instrumental in my professional development.
                </p>
                <p className="leading-relaxed">
                  Special thanks to my supervisors and everyone we teamed up with for
                  their patience and support with each project. I'm also grateful to the
                  University of Guelph Co-op program for facilitating this exceptional
                  opportunity that has shaped both my technical skills and professional
                  trajectory.
                </p>
                <p className="leading-relaxed">
                  Thank you Matt, Jeremy, Alex, and Rabo for your support and guidance
                  throughout this co-op term.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-border bg-card/50 mt-16 border-t">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                Work Term Report • University of Guelph • Bachelor of Computing Co-op
              </p>
              <p className="text-muted-foreground mt-1 text-xs">Submitted August 2025</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="size-8 p-0" asChild>
                <a href="mailto:tsimps01@uoguelph.ca">
                  <Mail className="size-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="size-8 p-0" asChild>
                <a href="https://www.linkedin.com/in/tristansimpsonn/">
                  <Linkedin className="size-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="size-8 p-0" asChild>
                <a href="https://github.com/realTristan">
                  <Github className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
