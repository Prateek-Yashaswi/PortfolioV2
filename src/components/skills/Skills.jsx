import { Icon } from "@iconify/react";
import { Link, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { isMobile } from "react-device-detect";
import "../skills/Skills.css";

// for testing
//rdd.isMobile = false;

function RenderAppropriateComponent() {
  if (isMobile) {
    return (
      <div id="accordion">
        <Heading text="Technologies"></Heading>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Programming Languages</Accordion.Header>
            <Accordion.Body>
              My preferred programming languages Are C++, Python And Java. Along
              With These Two Languages I Also Know Basics Of C And Dart.
              <hr></hr>
              <h4>Rating</h4>
              <Rating name="read-only" value={4} readOnly />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>HTML, CSS</Accordion.Header>
            <Accordion.Body>
              I have worked with HTML and designed websites using CSS. Actually
              these were the first few things I came to know when I was learning
              Web Development.
              <hr></hr>
              <h4>Rating</h4>
              <Rating name="read-only" value={4} readOnly />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Javascript</Accordion.Header>
            <Accordion.Body>
              I have acquired a certificate in vanilla Javascript and along with
              that, I am aware with the javascript libraries like Reactjs too.
              <hr></hr>
              <h4>Rating</h4>
              <Rating name="read-only" value={4} readOnly />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Flutter</Accordion.Header>
            <Accordion.Body>
              Flutter is an open-source UI SDK created by Google written in Dart
              programming language. I have made many Mobile Applications with
              Flutter.
              <hr></hr>
              <h4>Rating</h4>
              <Rating name="read-only" value={5} readOnly />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>ReactJS</Accordion.Header>
            <Accordion.Body>
              When I started Web Development, after going through HTML, CSS and
              Javascript I studied ReactJS and MongoDB too.
              <hr></hr>
              <h4>Rating</h4>
              <Rating name="read-only" value={4} readOnly />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Spring Boot</Accordion.Header>
            <Accordion.Body>
              During my Internship at Danske IT, I was an Associate Software
              Developer and I came across API development with Spring Boot.
              <hr></hr>
              <h4>Rating</h4>
              <Rating name="read-only" value={4} readOnly />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Devops</Accordion.Header>
            <Accordion.Body>
              Git, Terraform, Kubernetes, Docker, Drone by Harness, Openshift
              <hr></hr>
              <h4>Rating</h4>
              <Rating name="read-only" value={4} readOnly />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }

  function Heading(props) {
    const { text } = props;
    return (
      <Typography variant="h4" align="center" gutterBottom>
        {text}
      </Typography>
    );
  }

  function Item(props) {
    const { icon, text } = props;
    const dataMapper = new Map([
      [
        "java",
        "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      ],
      [
        "python",
        "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
      ],
      [
        "cpp",
        "C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup and first released in 1985 as an extension of the C programming language.",
      ],
      [
        "html",
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
      ],
      [
        "css",
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
      ],
      [
        "javascript",
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      ],
      [
        "flutter",
        "I had a keen interest in application develoment and flutter was new in the market. I've used flutter to build an application that was awarded 2nd place in an All India Hackathon.",
      ],
      [
        "mysql",
        "MySQL is an open-source relational database management system.",
      ],
      [
        "react",
        "Found out this framework while learning Javascript as React provides complete features to create high-quality interfaces for apps and is a better choice to build complex web applications.",
      ],
      [
        "spring boot",
        "Spring makes programming Java quicker, easier, and safer for everybody. Spring’s focus on speed, simplicity, and productivity.",
      ],
      [
        "docker",
        "Docker is an important technology when it comes to containerize and ship applications in an efficient way.",
      ],
      [
        "drone.io",
        "Drone is a self-service Continuous Integration platform for busy development teams.",
      ],
      [
        "openshift",
        "Red Hat OpenShift is a unified platform to build, modernize, and deploy applications at scale.",
      ],
      [
        "terraform",
        "Terraform is an open-source infrastructure-as-code software tool created by HashiCorp.",
      ],
      [
        "git",
        "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
      ],
      [
        "video editing",
        "This Is One Of My Favourite Hobbies. I Have Worked With Clients And Earned Money During My Second Year In The College.",
      ],
      [
        "intellij idea",
        "IntelliJ IDEA is an integrated development environment written in Java for developing computer software written in Java, Kotlin, Groovy, and other JVM-based languages.",
      ],
      [
        "vsc",
        "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS.",
      ],
      [
        "google colab",
        "Colab notebooks allow you to combine executable code and rich text in a single document, along with images, HTML, LaTeX and more.",
      ],
      [
        "anaconda",
        "Anaconda is a distribution of the Python and R programming languages for scientific computing, that aims to simplify package management and deployment.",
      ],
      [
        "android studio",
        "Android Studio is the official integrated development environment for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development.",
      ],
    ]);

    const urlMapper = new Map([
      ["java", "https://www.oracle.com/in/java/"],
      ["python", "https://www.python.org/"],
      ["cpp", "https://cplusplus.com/"],
      ["html", "https://html.com/"],
      ["css", "https://www.css3.com/"],
      ["javascript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
      ["flutter", "https://flutter.dev/"],
      ["mysql", "https://www.mysql.com/"],
      ["react", "https://reactjs.org/"],
      ["spring boot", "https://spring.io/"],
      ["docker", "https://docs.docker.com/"],
      ["drone.io", "https://www.drone.io/"],
      [
        "openshift",
        "https://www.redhat.com/en/technologies/cloud-computing/openshift",
      ],
      ["terraform", "https://www.terraform.io/"],
      ["git", "https://git-scm.com/"],
      [
        "video editing",
        "https://www.adobe.com/in/products/premiere.html?gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsJp45zvJXC3DLv3F5BY_nGPXga1vUpTrAcNjFA924GqOLUKJ8cVcEaAm7CEALw_wcB&sdid=STLMM87Z&mv=search&ef_id=Cj0KCQiAorKfBhC0ARIsAHDzslsJp45zvJXC3DLv3F5BY_nGPXga1vUpTrAcNjFA924GqOLUKJ8cVcEaAm7CEALw_wcB:G:s&s_kwcid=AL!3085!3!473191824144!e!!g!!adobe%20premier!221167988!17525565548",
      ],
      ["intellij idea", "https://www.jetbrains.com/idea/"],
      ["vsc", "https://code.visualstudio.com/"],
      ["google colab", "https://colab.research.google.com/"],
      ["anaconda", "https://www.anaconda.com/"],
      ["android studio", "https://developer.android.com/"],
    ]);

    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">{text}</Popover.Header>
        <Popover.Body>
          {dataMapper.get(text.toLowerCase())} <hr></hr>{" "}
          <Link
            underline="none"
            component="button"
            variant="body2"
            onClick={() => {
              window.open(urlMapper.get(text.toLowerCase()));
            }}
          >
            Know more about {text}
          </Link>
        </Popover.Body>
      </Popover>
    );

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    return (
      <div className="items">
        <OverlayTrigger
          trigger="click"
          placement="auto"
          overlay={popover}
          rootClose
        >
          <Tooltip
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            title="Click Me"
          >
            <div className="logos">
              <Icon icon={icon} className="logo-img" />
              <hr></hr>
              <Typography align="center" variant="h6" gutterBottom>
                {text}
              </Typography>
            </div>
          </Tooltip>
        </OverlayTrigger>
      </div>
    );
  }

  return (
    <div id="skills-icons">
      <Heading text="Technologies"></Heading>
      <div className="rows">
        <Item icon="logos:java" text="Java" />
        <Item icon="logos:python" text="Python" />
        <Item icon="vscode-icons:file-type-cpp3" text="CPP" />
        <Item icon="vscode-icons:file-type-html" text="HTML" />
        <Item icon="vscode-icons:file-type-css" text="CSS" />
        <Item icon="logos:javascript" text="Javascript" />
        <Item icon="logos:react" text="React" />
        <Item icon="logos:mysql" text="MySQL" />
      </div>
      <div className="rows">
        <Item icon="simple-icons:springboot" text="Spring Boot" />
        <Item icon="vscode-icons:file-type-flutter" text="Flutter" />
        <Item icon="skill-icons:docker" text="Docker" />
        <Item icon="logos:drone-icon" text="Drone.io" />
        <Item icon="logos:openshift" text="Openshift" />
        <Item icon="vscode-icons:file-type-terraform" text="Terraform" />
        <Item icon="mdi:git" text="Git" />
        <Item icon="material-symbols:slow-motion-video" text="Video Editing" />
      </div>
      <Heading text="Familier IDEs"></Heading>
      <div className="rows">
        <Item icon="logos:intellij-idea" text="Intellij Idea" />
        <Item icon="vscode-icons:file-type-vscode" text="VSC" />
        <Item icon="simple-icons:googlecolab" text="Google Colab" />
        <Item icon="simple-icons:anaconda" text="Anaconda" />
        <Item icon="mdi:android-studio" text="Android Studio" />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="content-div">
      <RenderAppropriateComponent></RenderAppropriateComponent>;
    </div>
  );
}

export default Skills;
