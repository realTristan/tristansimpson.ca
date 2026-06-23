import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Column } from "@/components/ui/column";
import { Separator } from "@/components/ui/separator";
import { Calendar, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function WorkTermReport() {
  return (
    <div className="bg-background min-h-screen">
      <header className="border-border bg-card/50 sticky top-0 z-40 border-b backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
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

      <main className="mx-auto max-w-6xl space-y-16 px-6 py-12">
        {/* Hero Section */}
        <section className="space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-extrabold text-balance md:text-5xl">
              My Summer 2026 with TextNow
            </h1>
            <p className="text-muted-foreground mx-auto max-w-4xl text-xl text-pretty">
              I'm back at TextNow for my second co-op term. Last fall I was mostly
              building n8n workflows; this time I'm building full-stack dashboards.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Summer 2026</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Waterloo, Ontario</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="text-xs">
              Ruby on Rails
            </Badge>
            <Badge variant="outline" className="text-xs">
              React
            </Badge>
            <Badge variant="outline" className="text-xs">
              SQL
            </Badge>
            <Badge variant="outline" className="text-xs">
              Snowflake
            </Badge>
            <Badge variant="outline" className="text-xs">
              Python
            </Badge>
            <Badge variant="outline" className="text-xs">
              n8n
            </Badge>
            <Badge variant="outline" className="text-xs">
              JavaScript
            </Badge>
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
              My Fall 2025 term was all about workflow automation and n8n. When I came
              back for Summer 2026, the focus shifted to internal dashboards and analytics
              tools that teams use every day. I've been working across Ruby on Rails,
              React, Snowflake, Python, and n8n, and it's been a lot faster than last
              term. Shipping eight systems in the first month taught me that writing the
              code is usually the easy part. The hard part is figuring out what people
              actually need and getting something useful in front of them quickly.
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
                      • Building internal dashboards, analytics tools, and AI integrations
                    </li>
                    <li>
                      • Self-hosted infrastructure for tools the business depends on
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-foreground font-medium">
                    Computing Science Relevance
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    TextNow's internal tooling covers a lot of what you learn in comp sci:
                    SQL and relational databases, Rails APIs, React frontends, Snowflake
                    for data, and integrations with a bunch of third-party services. It's
                    a good place to take classroom concepts and apply them to stuff that
                    actually affects how teams work day to day.
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
                  <Column className="gap-2">
                    <span>Professional & Ethical Behaviour - Leadership</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Completed
                    </Badge>
                  </Column>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium">
                      Own End-to-End Project Delivery
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Lead dashboard projects from requirements gathering through
                      deployment, coordinating with stakeholders across HR, Legal, and
                      Engineering
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "Coming back for a second term, I felt a lot more comfortable owning
                    things right away. The AI Analytics Dashboard was a lot to juggle at
                    once: Snowflake pipelines, Rails APIs, React charts. Breaking it into
                    smaller milestones and demoing early helped a ton."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Column className="gap-2">
                    <span>Communicating - Oral Communication</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Completed
                    </Badge>
                  </Column>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium">
                      Present Technical Work to Non-Technical Stakeholders
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Demo dashboards to HR, Legal, and leadership teams; translate data
                      insights into actionable business language
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "Demoing the HR Analytics Dashboard to our People team made me realize
                    I was explaining SQL when I should've been talking about turnover and
                    hiring trends. The demos that went well weren't the flashiest ones.
                    They were the ones where someone said they could use it tomorrow."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Column className="gap-2">
                    <span>Critical & Creative Thinking - Problem Solving</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Completed
                    </Badge>
                  </Column>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium">
                      Design Scalable Data Architectures
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Architect multi-source data pipelines, handle API rate limits, and
                      design schemas that support evolving dashboard requirements
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "The AI Analytics Dashboard pulls from dozens of APIs (Claude, OpenAI,
                    Cursor, etc.) and they all work differently. Different auth, rate
                    limits, response formats. I learned pretty quickly that normalizing
                    everything in Snowflake upfront saves you from patching messes in
                    React later."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Column className="gap-2">
                    <span>Literacy - Technological Literacy</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Completed
                    </Badge>
                  </Column>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium">
                      Master Full-Stack Dashboard Development
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Build production Rails + React applications, integrate with
                      Snowflake and external APIs, and deploy on internal infrastructure
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "The Metrics Dashboard Builder is basically a Wix-style site builder
                    running on our own infra. It forced me to figure out component
                    architecture, drag-and-drop state, and rendering in ways I never dealt
                    with in school. Easily the hardest frontend I've shipped so far."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Column className="gap-2">
                    <span>Professional & Ethical Behaviour - Teamwork</span>
                    <Badge variant="outline" className="bg-accent/10 border-accent/20">
                      Completed
                    </Badge>
                  </Column>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium">
                      Collaborate Across Departments
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Work closely with HR, Legal, Customer Care, and Engineering teams to
                      gather requirements and iterate on dashboard features
                    </p>
                  </div>
                  <blockquote className="border-accent text-muted-foreground border-l-2 pl-3 text-xs italic">
                    "The DPIA Dashboard meant sitting with Legal and mapping their whole
                    privacy impact assessment process into software. I learned that you
                    can't really guess what people need from a ticket. You have to talk to
                    the people doing the work."
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
                  Internal Tools & Analytics • Summer 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-gray max-w-none">
                  <p className="leading-relaxed">
                    This is my second co-op at TextNow. I'm leading full-stack dashboard
                    work across the company, mostly with Ruby on Rails, React, SQL,
                    Snowflake, Python, n8n, and JavaScript. About a month in, I've shipped
                    eight production systems for HR, Legal, Customer Care, and
                    Engineering.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-foreground mb-2 font-medium">What I Built</h4>
                    <div className="space-y-3">
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">AI Analytics Dashboard</h5>
                        <p className="text-muted-foreground text-sm">
                          The biggest project so far. Built a dashboard for pulling,
                          cleaning, and visualizing AI usage across the company.
                          Integrated with Snowflake, Rails, and React, and connected to
                          dozens of APIs (Claude, OpenAI, Cursor, and others).
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">Metrics Dashboard Builder</h5>
                        <p className="text-muted-foreground text-sm">
                          Built a Wix-style website builder so teams can create their own
                          metrics dashboards without writing code. Runs entirely on
                          TextNow infrastructure.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">HR Analytics Dashboard</h5>
                        <p className="text-muted-foreground text-sm">
                          Gave HR a place to see turnover, terminations, hires, new
                          co-ops, promotions, and other workforce metrics in one spot.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">Paid Time Off Dashboard</h5>
                        <p className="text-muted-foreground text-sm">
                          Full Dayforce integration showing upcoming PTO by org, user, and
                          team. Also flags work that might not get done because someone's
                          going on leave, so managers can plan around it.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">Full DPIA Dashboard</h5>
                        <p className="text-muted-foreground text-sm">
                          Built the full Data Protection Impact Assessment workflow and
                          dashboard so Legal can run the whole DPIA process in one place,
                          from intake through review and approval.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">Care Copilot</h5>
                        <p className="text-muted-foreground text-sm">
                          Hooked up Confluence vector search and an AI agent inside
                          Zendesk so Customer Care agents can pull up relevant docs while
                          they're talking to customers.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">Recognition Dashboard</h5>
                        <p className="text-muted-foreground text-sm">
                          Built charts and metrics so teams can see how they're
                          recognizing each other's work.
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <h5 className="text-sm font-medium">Unit Testing Agent</h5>
                        <p className="text-muted-foreground text-sm">
                          Built an agent that generates unit tests automatically when
                          someone opens a new GitHub pull request.
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
                    Coming back for a second term made a big difference. I already knew
                    the team and the tooling, so I could hit the ground running. Shipping
                    eight dashboards in a month also showed me what happens when you move
                    fast without thinking about architecture first. The AI Analytics
                    Dashboard especially forced me to get serious about normalizing data,
                    caching, and making complex analytics actually readable.
                  </p>
                  <p className="leading-relaxed">
                    The main shift from Fall 2025 is going from n8n automation to
                    full-stack product work. The Metrics Dashboard Builder (basically a
                    no-code site builder on our own infra) was the hardest frontend I've
                    done. I'm a lot more comfortable now owning something from the
                    database schema all the way to the deployed UI, and I have a much
                    better sense of how Rails, React, Snowflake, and n8n fit together in
                    production.
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
                    School teaches databases and web frameworks separately. Here I'm
                    wiring Snowflake into Rails into React charts, while also plugging
                    into a bunch of external APIs. You don't get that kind of end-to-end
                    experience from assignments.
                  </p>
                  <p className="leading-relaxed">
                    The AI Analytics Dashboard got me interested in how companies actually
                    track and manage AI tool usage. That's going to matter more and more,
                    and building it from scratch was a good learning experience. I'm
                    looking forward to shipping more through the rest of the term and
                    bringing what I've learned back to my last couple years at Guelph.
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
                  Thanks to everyone at TextNow for having me back and letting me run with
                  some pretty big projects. Shipping eight systems in the first month, and
                  building the AI Analytics Dashboard from scratch, has been a huge part
                  of my growth this term.
                </p>
                <p className="leading-relaxed">
                  Also want to thank the HR, Legal, and Customer Care teams for working
                  with me on the dashboards they use. And thanks to the University of
                  Guelph co-op program for setting this up.
                </p>
                <p className="leading-relaxed">
                  Thank you to the entire TextNow team for your support this term.
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
              <p className="text-muted-foreground mt-1 text-xs">Summer 2026</p>
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
