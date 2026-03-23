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
      <header className="border-border bg-card/50 sticky top-0 z-40 border-b backdrop-blur-sm">
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
              My Fall 2025 with TextNow
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl text-pretty">
              Working at TextNow has been nothing short of incredible. This report covers
              my 4-month co-op term as a Software Developer, where I led 20+ projects,
              built 200+ n8n workflows, and delivered automation solutions that
              transformed how teams work.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Fall 2025</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Remote / Waterloo, Ontario</span>
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
              Before TextNow, I understood programming but had limited experience with
              automation and workflow orchestration. This co-op term completely changed
              how I think about connecting systems and automating processes. Building 200+
              n8n workflows and seeing how our automation solutions eliminated hundreds of
              hours of manual work—that's when it clicked for me. We weren't just writing
              code; we were building the infrastructure that makes entire teams more
              efficient and productive.
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
                  <CardTitle className="text-xl">TextNow</CardTitle>
                  <CardDescription className="text-base">
                    A telecommunications company providing free phone service and
                    messaging to millions of users worldwide through innovative technology
                    solutions
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-accent/10 border-accent/20">
                  Telecommunications
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="text-foreground font-medium">Organization Overview</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>
                      • Telecommunications company serving millions of users globally
                    </li>
                    <li>
                      • Focus on automation, workflow orchestration, and data pipeline
                      development
                    </li>
                    <li>• Commitment to technology-driven operational efficiency</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-foreground font-medium">
                    Computing Science Relevance
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    TextNow's tech environment is exactly what you'd expect from a modern
                    tech company - workflow automation, data pipeline development, API
                    integrations, and building scalable automation solutions. It's the
                    perfect place to use what you learn in computer science classes on
                    real problems that affect thousands of users and streamline
                    operations.
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
                    <h4 className="text-sm font-medium">
                      Master Workflow Automation & APIs
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Build complex n8n workflows, integrate with 20+ external APIs, and
                      document automation processes
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "Building my first complex n8n workflow with multiple API integrations
                    was challenging, but once I understood the flow patterns, I could
                    automate entire processes. Integrating with 20+ external APIs taught
                    me how to handle different authentication methods and error handling.
                    Next, I want to explore more advanced workflow orchestration
                    patterns."
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
                <CardTitle className="text-lg">Software Developer Co-op</CardTitle>
                <CardDescription>
                  Automation & Integration Team • Fall 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-gray max-w-none">
                  <p className="leading-relaxed">
                    During my co-op term at TextNow, I led 20+ projects and built 200+ n8n
                    workflows that automated critical business processes, integrated with
                    20+ external APIs, and delivered significant cost savings while
                    improving operational efficiency across multiple teams.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-foreground mb-2 font-medium">What I Built</h4>
                    <div className="space-y-3">
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">Customer Support Copilot</h5>
                        <p className="text-muted-foreground text-sm">
                          Partnered with our Customer Care team to develop and deploy our
                          Customer Support Copilot leveraging n8n + pgvector —{" "}
                          <strong>
                            Delivering more than $15,000 in annual cost savings
                          </strong>{" "}
                          by automating support workflows and improving response times.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          Automation Infrastructure & Workflows
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Built <strong>200+ n8n workflows</strong> automating processes
                          across multiple departments, integrating with 20+ external APIs
                          including Salesforce, Slack, Jira, and various data services.
                          These workflows eliminated hundreds of hours of manual work and
                          improved data consistency across systems.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          Auto Documentation Systems
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Developed automated documentation systems that generate and
                          maintain technical documentation, reducing manual documentation
                          overhead and ensuring documentation stays up-to-date with code
                          changes.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          Snowflake Data Pipelines & Flows
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Designed and implemented Snowflake data pipelines and flows,
                          enabling real-time data synchronization and analytics. These
                          pipelines processed thousands of records and provided critical
                          business intelligence to stakeholders.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          MCP Servers & TestRail Automation
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Built MCP (Model Context Protocol) servers for enhanced AI
                          integration and automated TestRail workflows, streamlining the
                          testing process and improving test coverage tracking.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">
                          Project Leadership & Technical Stack
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Led <strong>20+ projects</strong> from conception to deployment,
                          working with technologies including n8n, Python, PostgreSQL, and
                          integrating with 20+ external APIs. Each project focused on
                          solving real business problems and improving team productivity.
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
                    Working at TextNow taught me that automation and workflow
                    orchestration are fundamental to modern software development. When
                    you're building systems that connect 20+ different APIs and process
                    thousands of records, there's no room for brittle integrations. I
                    learned how to build robust, scalable workflows that can handle
                    failures gracefully and recover automatically.
                  </p>
                  <p className="leading-relaxed">
                    The biggest thing I learned was how to think in terms of workflows and
                    data flows. Building 200+ n8n workflows taught me to see the bigger
                    picture - how different systems connect, where data bottlenecks occur,
                    and how to design automation that makes entire teams more productive.
                    Now I'm comfortable designing complex integrations and automation
                    solutions from scratch.
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
                    This job completely changed how I think about system integration and
                    automation. When we learned about APIs and databases in school, it
                    felt pretty abstract. Now when I'm designing a workflow that connects
                    multiple systems or optimizing a data pipeline, I actually understand
                    why those concepts matter and how they work together in practice.
                  </p>
                  <p className="leading-relaxed">
                    Working in automation and integration got me really interested in how
                    modern companies connect their systems and automate their operations.
                    Building workflows that process thousands of records and integrate
                    with 20+ external APIs has prepared me for the kind of complex,
                    integration-heavy projects I want to work on after graduation. I'm
                    particularly excited about the intersection of AI and automation,
                    especially after building the Customer Support Copilot with pgvector.
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
                  I would like to express my deepest gratitude to the entire TextNow
                  automation and integration team for their mentorship, collaboration, and
                  trust in my abilities. The opportunity to lead 20+ projects and build
                  200+ workflows while taking on increasingly complex automation
                  challenges has been instrumental in my professional development.
                </p>
                <p className="leading-relaxed">
                  Special thanks to my supervisors and everyone we teamed up with for
                  their patience and support with each project. I'm also grateful to the
                  University of Guelph Co-op program for facilitating this exceptional
                  opportunity that has shaped both my technical skills and professional
                  trajectory.
                </p>
                <p className="leading-relaxed">
                  Thank you to the entire TextNow team for your support and guidance
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
              <p className="text-muted-foreground mt-1 text-xs">Submitted January 2026</p>
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
